import { useState } from "react";
import { useCart } from "./CartContext";
import CartToast from "./CartToast";

interface ProductCardProps {
  id: number | string;
  image: string;
  title: string;
  category: string;
  description: {
    des: string;
    prof: string[];
    tec: string[];
  };
  price?: number;

  variants?: {
    size: string;
    price: number;
  }[];

  onAddToCart?: (item: {
    id: number | string;
    title: string;
    category: string;
    size: string;
    image: string;
    quantity: number;
    price: number;
  }) => void;
}

export default function ProductCard({
  id,
  image,
  title,
  category,
  description,
  variants,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState("1");
  const [showModal, setShowModal] = useState(false);

  const { addToCart } = useCart();

  const safeVariants = variants ?? [];

  const [selectedVariant, setSelectedVariant] = useState(
    safeVariants[0] || null
  );

  const price = selectedVariant?.price ?? 0;

  const formatPrice = (price: number) => `${price} RSD`;

  const increase = () => {
    setQuantity((prev) => String(Math.min(Number(prev) + 1, 99)));
  };

  const decrease = () => {
    if (Number(quantity) > 1) {
      setQuantity((prev) => String(Number(prev) - 1));
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setQuantity("");
      return;
    }

    const num = Number(value);

    if (!isNaN(num) && num >= 1 && num <= 99) {
      setQuantity(value);
    }
  };
const [showToast, setShowToast] = useState(false);
  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      category,
      image,
      quantity: Number(quantity),
      price: selectedVariant?.price ?? price,
      size: selectedVariant?.size,
    });
    setShowToast(true);
    setQuantity("1");
  };
 

 
  return (
    <>
    <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-[#fff8ef] shadow-lg transition duration-300 hover:shadow-2xl">
      {/* Product Image */}
<div className="relative h-64 bg-[#f5f1ea] flex items-center justify-center p-5 overflow-hidden">

  {/* Honeycomb Background */}
  <svg
    className="absolute inset-0 w-full h-full opacity-15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="honeycomb"
        x="0"
        y="0"
        width="42"
        height="36"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M21 1
             L41 11
             L41 25
             L21 35
             L1 25
             L1 11
             Z"
          fill="none"
          stroke="#D9A441"
          strokeWidth="1.5"
        />
      </pattern>
    </defs>

    <rect
      width="100%"
      height="100%"
      fill="url(#honeycomb)"
    />
  </svg>

  {/* Product Image */}
  <img
    src={image ?? "../../src/assets/proizvodimed/medkolekcija"}
    alt={title ?? "Med"}
    className="
      relative z-10
      cursor-pointer
      max-h-full
      max-w-full
      object-contain
      transition
      duration-300
      hover:scale-105
    "
    onClick={() => setShowModal(true)}
  />
</div>

      {/* Product Info */}
      <div className="flex flex-col items-center text-center p-5">
        <p className="mb-2 text-sm font-medium font-bree tracking-wide text-honey uppercase">
          {category ?? "Med"}
        </p>

        <h2 className="text-lg font-bold text-brown font-bree mb-4 leading-snug">
          {title ?? "Med"}
        </h2>

        {/* Variants */}
        {safeVariants?.length > 0 && (
          <div className="flex bg-gray-200 p-1 rounded-full w-fit mb-5">
            {safeVariants.map((v) => (
              <button
                key={v.size}
                onClick={() => setSelectedVariant(v)}
                className={`
                  px-4
                  py-1.5
                  rounded-full
                  text-sm
                  font-medium
                  transition
                  cursor-pointer
                  ${
                    selectedVariant?.size === v.size
                      ? "bg-honey text-brown shadow-sm"
                      : "text-brown hover:bg-honey"
                  }
                `}
              >
                {v.size}
              </button>
            ))}
          </div>
        )}

        {/* Price + Quantity */}
        <div className="flex items-center justify-center gap-4 mb-5 flex-wrap">
          <p className="text-lg font-bold text-brownt">
            {selectedVariant?.price
              ? formatPrice(selectedVariant.price)
              : formatPrice(price)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center rounded-xl border border-gray-300 bg-white overflow-hidden shadow-sm">
            <button
              onClick={decrease}
              className="
                px-3
                py-2
                text-lg
                font-bold
                text-brownt
                transition
                hover:bg-gray-100
                cursor-pointer
              "
            >
              −
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
                w-12
                h-10
                text-center
                font-semibold
                outline-none
                bg-transparent
                [appearance:textfield]
                [&::-webkit-outer-spin-button]:appearance-none
                [&::-webkit-inner-spin-button]:appearance-none
              "
            />

            <button
              onClick={increase}
              className="
                px-3
                py-2
                text-lg
                font-bold
                text-brownt
                transition
                hover:bg-gray-100
                cursor-pointer
              "
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="
            rounded-xl
            bg-honey
            px-5
            py-2.5
            text-sm
            font-semibold
            font-bree
            text-brownt
            transition
            hover:bg-honey
            hover:scale-[1.02]
            shadow-md
            cursor-pointer
          "
        >
          Dodajte u korpu
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-6xl
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-2xl
              flex
              flex-col
              md:flex-row
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="
                absolute
                top-4
                right-4
                z-10
                cursor-pointer
                bg-honey
                rounded-full
                w-10
                h-10
                flex
                items-center
                justify-center
                shadow-lg
                hover:scale-105
                transition
              "
            >
              <img
                src="../../src/assets/closex.svg"
                alt="close"
                className="w-5 h-5"
              />
            </button>

            {/* Image Section */}
            <div
              className="
                w-full
                md:w-[48%]
                bg-[#5d3d1d]
                flex
                items-center
                justify-center
                p-8
                min-h-[320px]
                md:min-h-[720px]
              "
            >
              <img
                src={image}
                alt={title}
                className="
                  max-h-[90%]
                  max-w-[90%]
                  object-contain
                  drop-shadow-2xl
                  transition
                  duration-300
                "
              />
            </div>
                 {/* Modal */}
{showModal && (
  <div
    onClick={() => setShowModal(false)}
    className="
      fixed
      inset-0
      z-50
      bg-black/80
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
    "
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        relative
        w-full
        max-w-6xl
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-2xl
        flex
        flex-col
        md:flex-row
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="
          absolute
          top-4
          right-4
          z-10
          cursor-pointer
          bg-honey
          rounded-full
          w-10
          h-10
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-105
          transition
        "
      >
        <img
          src="../../src/assets/closex.svg"
          alt="close"
          className="w-5 h-5"
        />
      </button>

      {/* Image Section */}
      <div
        className="
          w-full
          md:w-[48%]
          bg-[#5d3d1d]
          flex
          items-center
          justify-center
          p-8
          min-h-[320px]
          md:min-h-[720px]
        "
      >
        <img
          src={image}
          alt={title}
          className="
            max-h-[90%]
            max-w-[90%]
            object-contain
            drop-shadow-2xl
            transition
            duration-300
          "
        />
      </div>

      {/* Text Section */}
      <div
        className="
          w-full
          md:w-[52%]
          p-8
          md:p-10
          flex
          flex-col
          overflow-y-auto
          max-h-[85vh]
          bg-dhoney
          text-brownt
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 leading-tight text-center">
          {title}
        </h2>

        <div className="space-y-8">
          {/* Opis proizvoda */}
          <div className="bg-white/30 rounded-2xl p-6">
            <h3 className="font-bold text-xl text-center mb-5">
              Opis proizvoda
            </h3>

            <div
              className="
                text-left
                md:text-justify
                text-[16px]
                leading-8
                space-y-4
              "
            >
              {description.des
                ?.split(".")
                .filter((item) => item.trim() !== "")
                .map((item, index) => (
                  <p key={index}>{item.trim()}.</p>
                ))}
            </div>
          </div>

          {/* Prednosti */}
          {description.prof?.length > 0 && (
            <div className="bg-white/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-center mb-5">
                Prednosti
              </h3>

              <div className="space-y-5">
                {description.prof.map((item, index) => {
                  const [titlePart, details] = item.split(":");

                  return (
                    <div key={index}>
                      {details ? (
                        <>
                          <p className="font-semibold text-lg mb-2">
                            {titlePart.trim()}
                          </p>

                          <ul className="pl-6 list-disc">
                            <li className="leading-7">
                              {details.trim()}
                            </li>
                          </ul>
                        </>
                      ) : (
                        <ul className="pl-6 list-disc">
                          <li className="leading-7">{item}</li>
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dodatne informacije */}
          {description.tec?.length > 0 && (
            <div className="bg-white/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl text-center mb-5">
                Dodatne informacije
              </h3>

              <div className="space-y-5">
                {description.tec.map((item, index) => {
                  const [titlePart, details] = item.split(":");

                  return (
                    <div key={index}>
                      {details ? (
                        <>
                          <p className="font-semibold text-lg mb-2">
                            {titlePart.trim()}
                          </p>

                          <ul className="pl-6 list-disc">
                            <li className="leading-7">
                              {details.trim()}
                            </li>
                          </ul>
                        </>
                      ) : (
                        <ul className="pl-6 list-disc">
                          <li className="leading-7">{item}</li>
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Price */}
          <div
            className="
              mt-4
              pt-6
              border-t
              border-brownt/20
              text-4xl
              font-bold
              text-center
            "
          >
            {price} RSD
          </div>
        </div>
      </div>
    </div>
  </div>
)}
            
          </div>
        </div>
      )}
    </div>
    <CartToast   show={showToast}
        productName={title}
        onClose={() => setShowToast(false)} />
    </>
  );
}