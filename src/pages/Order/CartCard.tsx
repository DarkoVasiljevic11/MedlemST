import { useState } from "react";
import { useCart } from "./CartContext";
interface ProductCardProps {
  id: number | string;
  image: string;
  title: string;
  category: string;
  description: string;
  price:number;
  onAddToCart?: (item: {id:number | string; title: string; category: string; quantity: number;price:number }) => void;
}

export default function ProductCard({
  id,
  image,
  title,
  category,
  description,
  price
}: ProductCardProps) {
  const [quantity, setQuantity] = useState("1");
  const [showModal, setShowModal] = useState(false);
const increase = () => {
  setQuantity((prev) => String(Math.min(Number(prev) + 1, 99)));
};
 const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

  // allow empty while typing
  if (value === "") {
    setQuantity("");
    return;
  }

  const num = Number(value);

  if (!isNaN(num) && num >= 1 && num <= 99) {
    setQuantity(value);
  }
  };

  const decrease = () => {
      if (Number(quantity) > 1) {
    setQuantity((prev) => String(Number(prev) - 1));
  }
  };
const { addToCart } = useCart();
  const handleAddToCart = () => {
  addToCart({
    id,
    title,
    category,
    quantity:Number(quantity),
    price
  });

  setQuantity("1");
};
const formatPrice = (price:number) => `${price} RSD`;
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="h-64 overflow-hidden bg-gray-100">
        <img
          src={image ?? "../../src/assets/proizvodimed/medkolekcija"}
          alt={title ?? "Med"}
          className="cursor-pointer h-full w-full object-cover transition duration-300 hover:scale-105"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <p className="mb-1 text-sm font-medium text-dhoney overflow-hidden ">
          {category ?? "Med"}
        </p>

        <h2 className="text-2 font-bold text-brownt line-clamp-2">
          {title ?? "Med"}
        </h2>

        <p className="mt-2 text-sm text-brownt line-clamp-3">
          {description ?? "Med"}
        </p>

        <p className="mt-2 text-sm font-bold text-brownt line-clamp-3">
          {formatPrice(price)}
        </p>

        {/* Bottom controls */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  
  {/* Quantity Selector */}
  <div className="flex items-center justify-between rounded-lg border border-gray-300 w-full sm:w-auto">
    <button
      onClick={decrease}
      className="px-4 py-2 text-xl font-bold text-brownt transition hover:bg-gray-100 cursor-pointer"
    >
      -
    </button>

      <input
        type="number"
         min="1"
         max="99"
  value={quantity}
  onChange={handleInput}
  onBlur={() => {
    if (quantity === "" || Number(quantity) < 1) {
      setQuantity("1");
    }
  }}
        className="
          w-16
          h-10
          text-center
          rounded-lg
          outline-none
          focus:ring-2
          focus:ring-dhoney
          [appearance:textfield]
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none
        "
      />

    <button
      onClick={increase}
      className="px-4 py-2 text-xl font-bold text-brownt transition hover:bg-gray-100 cursor-pointer"
    >
      +
    </button>
  </div>

  {/* Add to Cart Button */}
  <button
    onClick={handleAddToCart}
    className="w-full sm:w-auto rounded-lg  bg-dhoney px-5 py-3 font-semibold text-brownt transition hover:bg-yellow-600 cursor-pointer"
  >
    Dodajte u korpu
  </button>
    {/* Modal Picture */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full"
          >
            <button
              onClick={() => setShowModal(false)}
              className="cursor-pointer absolute -top-3 -right-3 bg-ghoney rounded-full w-10 h-10 shadow-lg text-black text-xl"
            >
              <img src="../../src/assets/closex.svg"></img>
            </button>

            <img
              src={image}
              alt={title}
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
</div>
</div>
    </div>
  );
}