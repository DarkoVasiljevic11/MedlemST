import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SubmitExperienceModal({
  open,
  onClose,
}: Props) {
  const [website, setWebsite] =
  useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [productType, setProductType] =
    useState("Bagremov Med");
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  if (!open) return null;

  const handleSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/experiences",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            productType,
            rating,
            title,
            content,
            website
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Greška prilikom slanja."
        );
      }

      setSuccess(true);

      setName("");
      setProductType("Bagremov Med");
      setRating(5);
      setTitle("");
      setContent("");

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error(error);
      alert(
        "Došlo je do greške prilikom slanja."
      );
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-2xl
          bg-cream
          rounded-3xl
          p-6
          md:p-8
          shadow-2xl
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            text-center
            text-brown
            mb-8
            font-bree
          "
        >
          Podelite iskustvo
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Ime"
            required
            className="
              w-full
              p-4
              rounded-xl
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-honey
            "
          />

          <select
            value={productType}
            onChange={(e) =>
              setProductType(
                e.target.value
              )
            }
            className="
              w-full
              p-4
              rounded-xl
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-honey
            "
          >
            <option>Bagremov Med</option>
            <option>Livadski Med</option>
            <option>Propolis kapi/sprej</option>
            <option>Med i matični mleč</option>
            <option>Med i jagoda</option>
            <option>Med i malina</option>
            <option>Bronhi Med</option>
            <option>Imuno Med</option>
            <option>Med i limun</option>
            <option>Med i kakao</option>
            <option>Med i seme koprive</option>
            <option>Med i borovnica</option>
          </select>
<input
  type="text"
  name="website"
  value={website}
  onChange={(e) =>
    setWebsite(e.target.value)
  }
  className="hidden"
/>
         
          {/* Rating */}
<div
  className="
    bg-white
    border
    border-gray-300
    rounded-xl
    p-5
  "
>
  <p
    className="
      text-brown
      font-semibold
      mb-4
      text-center
      font-bree
    "
  >
    Ocenite vaše iskustvo
  </p>

  <div
    className="
      flex
      justify-center
      gap-2
    "
  >
    {[1, 2, 3, 4, 5].map((star) => {
      const active =
        star <= (hoverRating || rating);

      return (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() =>
            setHoverRating(star)
          }
          onMouseLeave={() =>
            setHoverRating(0)
          }
          className="
            cursor-pointer
            transition
            duration-200
            hover:scale-110
            active:scale-95
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={
              active
                ? "#D9A441"
                : "none"
            }
            stroke="#D9A441"
            strokeWidth="1.8"
            className="
              w-9
              h-9
              md:w-10
              md:h-10
              drop-shadow-sm
            "
          >
            <path d="M12 2.5l2.9 5.88 6.49.95-4.69 4.57 1.11 6.46L12 17.3l-5.81 3.06 1.11-6.46L2.61 9.33l6.49-.95L12 2.5z" />
          </svg>
        </button>
      );
    })}
  </div>

  <p
    className="
      text-center
      text-sm
      text-brown
      mt-4
      font-medium
    "
  >
    {rating === 1 &&
      "1/5 - Nije zadovoljilo očekivanja"}

    {rating === 2 &&
      "2/5 - Moglo bi biti bolje"}

    {rating === 3 &&
      "3/5 - Dobro iskustvo"}

    {rating === 4 &&
      "4/5 - Veoma zadovoljni"}

    {rating === 5 &&
      "5/5 - Izuzetno zadovoljni"}
  </p>
</div>

          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Naslov iskustva"
            required
            className="
              w-full
              p-4
              rounded-xl
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-honey
            "
          />

          <textarea
            rows={6}
            value={content}
            onChange={(e) =>
              setContent(
                e.target.value
              )
            }
            placeholder="Vaše iskustvo..."
            required
            className="
              w-full
              p-4
              rounded-xl
              border
              border-gray-300
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-honey
            "
          />

          {success && (
            <div
              className="
                bg-green-100
                text-green-700
                rounded-xl
                p-4
                text-center
                font-medium
              "
            >
              Iskustvo je uspešno poslato i
              čeka odobrenje.
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-honey
              text-brown
              py-4
              rounded-xl
              font-bold
              font-bree
              transition
              hover:scale-[1.02]
              disabled:opacity-50
              cursor-pointer
            "
          >
            {loading
              ? "Slanje..."
              : "Pošalji iskustvo"}
          </button>
        </form>
      </div>
    </div>
  );
}