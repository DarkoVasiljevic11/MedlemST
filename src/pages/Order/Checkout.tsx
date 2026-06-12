import { useCart } from "./CartContext";
import { useState } from "react";
import { sendOrderEmail } from "./emailService";
import { NavLink } from "react-router-dom";
import ErrorModal from "../../components/errorModal";
import kamion from "..//..//assets/ksunset.png"
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet-async";
function ConfirmModal({
  show,
  onConfirm,
  onClose,
}: {
  show: boolean;
  onConfirm: () => void;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <>
   
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-cream rounded-2xl p-6 w-full max-w-sm shadow-xl text-center"
      >
        <h2 className="text-xl font-bold text-brown mb-4">
          Potvrda
        </h2>

        <p className="mb-6 text-brown">
          Da li ste sigurni da želite da ispraznite korpu?
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-honey text-cream cursor-pointer"
          >
            Otkaži
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-honey hover:bg-red-600 hover:text-cream text-brown cursor-pointer"
          >
            Isprazni
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
export default function Checkout() {
  const MAX_NOTE_LENGTH = 300;
  const { cart, clearCart,removeFromCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // customer form state
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    city:"",
    phone: "",
    email: "",
    napom: "",
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
Veličina/tip: ${item.size}
Cena po proizvodu: ${formatPrice(item.price)}
Ukupno: ${formatPrice(totalPrice)}

----------------------`
      )
      .join("\n");
  };
const [showError, setShowError] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [showClearConfirm, setShowClearConfirm] = useState(false);
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    const cleaned = phone.replace(/[^\d+]/g, "");
    return /^(\+381|0)[0-9]{8,10}$/.test(cleaned);
  };

  const isValidName = (name: string) => {
    return /^[A-Za-zČĆŽŠĐčćžšđ\s]{2,50}$/.test(name.trim());
  };

  const isValidAddress = (address: string) => {
    return address.trim().length >= 5;
  };
  const isValidCity = (city: string) => {
    return city.trim().length >= 2;
  };
  const handleConfirm = async () => {
    // simple validation
    if (
      !customer.name ||
      !customer.address ||
      !customer.city ||
      !customer.phone ||
      !customer.email 
      
    ) {
       setErrorMessage("Molimo popunite sva obavezna polja.");
    setShowError(true);
      return;
    } 

  if (!isValidName(customer.name)) {
    setErrorMessage("Unesite ispravno ime i prezime.");
    setShowError(true);
    return;
  }

  if (!isValidEmail(customer.email)) {
    setErrorMessage("Unesite ispravnu email adresu.");
    setShowError(true);
    return;
  }

  if (!isValidPhone(customer.phone)) {
    setErrorMessage("Unesite ispravan broj telefona.");
    setShowError(true);
    return;
  }

  if (!isValidAddress(customer.address)) {
    setErrorMessage("Unesite ispravnu adresu.");
    setShowError(true);
    return;
  }
   if (!isValidCity(customer.city)) {
    setErrorMessage("Unesite grad.");
    setShowError(true);
    return;
  }
  if (customer.napom.length > MAX_NOTE_LENGTH) {
  setErrorMessage(
    `Napomena ne može sadržati više od ${MAX_NOTE_LENGTH} karaktera.`
  );
  setShowError(true);
  return;
}

    setLoading(true);

    const message = formatCartMessage(cart);

    try {
      await sendOrderEmail({
        customer_name: customer.name,
        customer_address: customer.address,
        customer_city: customer.city,
        customer_phone: customer.phone,
        customer_email: customer.email,
        customer_napom:customer.napom,
        message,
      });

      clearCart();

      setCustomer({
        name: "",
        address: "",
        city:"",
        phone: "",
        email: "",
        napom: "",
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
      <>
      <Helmet>
  <title>Medlem - Hvala Vam na porudzbini</title>
 </Helmet>
      <Nav />
      <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4 py-16 mt-30">

  <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row ">

    {/* IMAGE SIDE */}
    <div className="w-full md:w-1/2 h-64 md:h-auto">
      <img
        src={kamion} 
        alt="Pcelarski kamion i zalazak sunca"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT SIDE */}
    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">

      {/* BACK LINK */}
      <NavLink
        to="/poručite"
        className="inline-block mb-6 text-sm text-honey hover:text-brown font-bree transition font-medium"
      >
        ← Nazad na poručivanje
      </NavLink>

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bree text-brown leading-tight">
        🍯 Porudžbina potvrđena
      </h1>

      {/* TEXT */}
      <p className="mt-4 text-brown text-base font-bree md:text-lg leading-relaxed">
        Vaša porudžbina je uspešno prosleđena.  
        Hvala vam na poverenju — pripremamo vaš prirodni med sa pažnjom i ljubavlju.
      </p>

      {/* STATUS CARD */}
      <div className="mt-8 bg-cream border border-honey rounded-2xl p-4 text-sm text-brown">
        🚚 Očekujte kontakt u narednih 24–48h
      </div>

      {/* BUTTON STYLE LINK */}
      <NavLink
        to="/poručite"
        className="mt-6 inline-block bg-honey hover:scale-105 transition text-brown px-6 py-3 rounded-xl font-semibold shadow-md font-bree"
      >
        Nastavi kupovinu
      </NavLink>

    </div>
  </div>
</div>
   </>
    );
    
  }

  return (<>
  <Helmet>
  <title>Medlem - Potvrdite vašu porudzbinu</title>
  <meta
    name="description"
    content="Pogledajte našu ponudu prirodnog bagremovog, livadskog i šumskog meda. Proizvedeno u Srbiji."
  />

  <meta
    name="robots"
    content="index,follow"
  />

  <link
    rel="canonical"
    href="https://medlem.rs/poručeno"
  />

  <meta
    property="og:title"
    content="Medlem - Potvrdite vašu porudzbinu"
  />

  <meta
    property="og:description"
    content="Ponuda prirodnog domaćeg meda."
  />

  <meta
    property="og:image"
    content="https://medlem.rs/og-products.webp"
  />
 </Helmet>
     <Nav />
    <ErrorModal
  show={showError}
  message={errorMessage}
  onClose={() => setShowError(false)}
/>
<ConfirmModal
  show={showClearConfirm}
  onClose={() => setShowClearConfirm(false)}
  onConfirm={() => {
    clearCart();
    setShowClearConfirm(false);
  }}
/>
    <div className="mt-30 mb-20 max-w-2xl mx-auto ">
      <h1 className="text-2xl text-brown font-bold font-bree mb-6 text-center">
        Potvrdite porudzbinu
      </h1>
      <p className="py-4">Polja označena sa * su obavezna, molimo Vas da unesete odgovarajuće podatke.</p>
      {/* CUSTOMER FORM */}
      <div className="space-y-4 mb-8 ">
        <input
          type="text"
          name="name"
          placeholder="Ime i Prezime *"
          value={customer.name}
          onChange={handleChange}
          className="w-full border text-brownt rounded-lg p-3"
        />

        <input
          type="text"
          name="address"
          placeholder="Adresa *"
          value={customer.address}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
         <input
          type="text"
          name="city"
          placeholder="Grad *"
          value={customer.city}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />


        <input
          type="tel"
          name="phone"
          placeholder="Kontakt telefon *"
          value={customer.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email adresa *"
          value={customer.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
        <div>
       <textarea
  name="napom"
  placeholder="Dodatna napomena (opciono)"
   value={customer.napom}
  onChange={(e) => {
    const value = e.target.value.slice(0, MAX_NOTE_LENGTH);

    setCustomer({
      ...customer,
      napom: value,
    });
  }}
  rows={4}
  className="w-full border rounded-lg p-3 resize-none"
/>
<div className="mt-1 text-right text-sm text-gray-500">
  Preostalo: {MAX_NOTE_LENGTH - customer.napom.length}
</div>
</div>
      </div>

      {/* ORDER SUMMARY */}
      <h2 className="text-xl text-brownt font-semibold font-bree mb-3">
        Vasa porudzbina
      </h2>

      {cart.map((item: any) => (
        <div
          key={`${item.id}-${item.size}`}
          className="flex justify-between border-b py-2"
        >
          {/* LEFT SIDE (IMAGE + INFO) */}
    <div className="flex items-center gap-4">

      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-lg border"
      />

      {/* TEXT */}
      <div>
        <p className="font-semibold text-brownt">
          {item.title} × {item.quantity}
        </p>

        <p className="text-sm text-ghoney">
          {item.size}
        </p>

        <p className="text-sm font-bree text-brownt">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </div>
           <button
      onClick={() => removeFromCart(item.id, item.size)}
      className="cursor-pointer bg-honey hover:bg-red-600 hover:text-cream text-cream px-3 py-1 rounded-md text-sm font-bree"
    >
      Ukloni
    </button>
   
        </div>
   
      ))}

      <div className="mt-6 space-y-2 font-bold font-bree">
          <div>Ukupno proizvoda: {totalItems}</div>
         <div>Ukupna cena: {formatPrice(totalPrice)}</div>
         <button
  onClick={() => setShowClearConfirm(true)}
  className="w-full sm:w-auto rounded-lg bg-honey px-5 py-3 font-semibold text-cream transition hover:bg-red-600 hover:text-cream cursor-pointer mt-4"
>
  Isprazni korpu
</button>
 <button
        onClick={handleConfirm}
        disabled={loading || cart.length === 0}
        className="cursor-pointer mt-6 w-full bg-honey text-brown font-bree px-6 py-3 rounded-lg disabled:opacity-60 mt-4"
      >
        {loading ? "Obradjivanje..." : "Potvrdi porudzbinu"}
      </button>
    </div>
<div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10  text-brown">
  <h2 className="text-3xl font-bree text-center mb-8">
    Dostava i Plaćanje
  </h2>
</div>

     
  {/* Dostava */}
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-3 text-honey">
      Dostava
    </h3>

    <ul className="space-y-3 list-disc pl-5 leading-7 text-brown">
     
      <li>
        Dostava se vrši na teritoriji Republike Srbije.
      </li>
      <li>
        Dostava je besplatna na teritoriji Ljubovije, Beograda i Novog Sada.
      </li>
    </ul>
  </section>


  {/* Plaćanje */}
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-3 text-honey">
      Načini plaćanja
    </h3>

    <ul className="space-y-3 list-disc pl-5 leading-7 text-brown">
      <li>
        Plaćanje pouzećem prilikom preuzimanja pošiljke.
      </li>

      <li>
        Uplata na tekući račun.
      </li>
    </ul>
  </section>

  {/* Kontakt */}
  <section>
    <h3 className="text-xl font-semibold mb-3 text-honey">
      Kontakt
    </h3>

    <p className="leading-7 text-brown">
      Za sva pitanja u vezi dostave ili plaćanja možete nas kontaktirati
      putem telefona ili email adrese navedenih na sajtu.
    </p>
  </section>

</div>
     
    </>
  );
}