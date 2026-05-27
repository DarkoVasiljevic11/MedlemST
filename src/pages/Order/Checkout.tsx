import { useCart } from "./CartContext";
import { useState } from "react";
import { sendOrderEmail } from "./emailService";
import { NavLink } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart,removeFromCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // customer form state
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

const formatPrice = (price: number) =>
  new Intl.NumberFormat("sr-RS", {
    style: "currency",
    currency: "RSD",
  }).format(price);

  const totalPrice = cart.reduce(
  (sum: number, item: any) => sum + item.price * item.quantity,
  0
);
  const formatCartMessage = (cart: any[]) => {
    return cart
      .map(
        (item) =>
          `🛒Proizvod: ${item.title}
Kategorija: ${item.category}
Količina: ${item.quantity}
Cena po proizvodu: ${formatPrice(item.price)}
Ukupno: ${formatPrice(totalPrice)}
----------------------`
      )
      .join("\n");
  };

  const handleConfirm = async () => {
    // simple validation
    if (
      !customer.name ||
      !customer.address ||
      !customer.phone ||
      !customer.email
    ) {
      alert("Molimo Vas da unesete Vase podatake.");
      return;
    }

    setLoading(true);

    const message = formatCartMessage(cart);

    try {
      await sendOrderEmail({
        customer_name: customer.name,
        customer_address: customer.address,
        customer_phone: customer.phone,
        customer_email: customer.email,
        message,
      });

      clearCart();

      setCustomer({
        name: "",
        address: "",
        phone: "",
        email: "",
      });

      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send order.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-10 text-center mt-20 mb-20">
        <NavLink to="/order" className="block mb-10 text-sm text-black hover:bg-dhoney cursor-pointer" >
        Nazad na poručite stranicu
        </NavLink>
        <h1 className="text-2xl font-bold">
          Porudzbina potvrdjena 🎉
        </h1>
        <p>Vasa porudzbina je uspesno prosledjena.</p>
      </div>
    );
    
  }

  return (
    <div className="mt-20 mb-20 max-w-2xl mx-auto">
      <h1 className="text-2xl text-brownt font-bold font-bree mb-6 text-center">
        Potvrdite porudzbinu
      </h1>

      {/* CUSTOMER FORM */}
      <div className="space-y-4 mb-8 ">
        <input
          type="text"
          name="name"
          placeholder="Ime i Prezime"
          value={customer.name}
          onChange={handleChange}
          className="w-full border text-brownt rounded-lg p-3"
        />

        <input
          type="text"
          name="address"
          placeholder="Adresa"
          value={customer.address}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Kontakt telefon"
          value={customer.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email adresa"
          value={customer.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* ORDER SUMMARY */}
      <h2 className="text-xl text-brownt font-semibold font-bree mb-3">
        Vasa porudzbina
      </h2>

      {cart.map((item: any) => (
        <div
          key={item.id}
          className="flex justify-between border-b py-2"
        >
          <div>
      <p>{item.title} × {item.quantity}</p>
      <p className="text-sm text-brownt font-bree">
       {formatPrice(item.price * item.quantity)}
      </p>
    </div>
           <button
      onClick={() => removeFromCart(item.id)}
      className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
    >
      Ukloni
    </button>
   
        </div>
   
      ))}

      <div className="mt-6 space-y-2 font-bold font-bree">
          <div>Ukupno proizvoda: {totalItems}</div>
         <div>Ukupna cena: {formatPrice(totalPrice)}</div>
          <button
  onClick={() => {
    if (window.confirm("Da li ste sigurni da želite da ispraznite korpu?")) {
      clearCart();
    }
  }}
  className="w-full sm:w-auto rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 cursor-pointer"
>
  Isprazni korpu
</button>
      </div>

      <button
        onClick={handleConfirm}
        disabled={loading || cart.length === 0}
        className="cursor-pointer mt-6 w-full bg-dhoney text-brownt font-bree px-6 py-3 rounded-lg disabled:opacity-60"
      >
        {loading ? "Obradjivanje..." : "Potvrdi porudzbinu"}
      </button>
    </div>
  );
}