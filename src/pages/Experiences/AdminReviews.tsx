import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Review {
  id: number;
  name: string;
  productType: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function AdminReviews() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("Sve");

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      navigate("/admin/login");
      return;
    }

    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/experiences/pending"
      );

      if (!response.ok) {
        throw new Error("Greška pri učitavanju.");
      }

      const data = await response.json();

      setReviews(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const approveReview = async (id: number) => {
    try {
      await fetch(
        `http://localhost:5000/api/experiences/${id}/approve`,
        {
          method: "PATCH",
        }
      );

      fetchReviews();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReview = async (id: number) => {
    const confirmed = window.confirm(
      "Da li ste sigurni da želite da obrišete ovu recenziju?"
    );

    if (!confirmed) return;

    try {
      await fetch(
        `http://localhost:5000/api/experiences/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchReviews();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredReviews = reviews.filter(
    (review) => {
      const matchesSearch =
        review.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        review.content
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        review.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesRating =
        rating === "Sve" ||
        review.rating === Number(rating);

      return (
        matchesSearch &&
        matchesRating
      );
    }
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="text-brown text-xl">
          Učitavanje...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-cream py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1
            className="
              text-4xl
              font-bold
              text-brown
              mb-3
            "
          >
            Recenzije za odobrenje
          </h1>

          <p className="text-brown/70">
            Pregledajte i odobrite
            korisnička iskustva.
          </p>
        </div>

        {/* Filters */}
        <div
          className="
            bg-white
            rounded-3xl
            p-5
            shadow-sm
            mb-8
            flex
            flex-col
            md:flex-row
            gap-4
          "
        >
          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Pretraži recenzije..."
            className="
              flex-1
              border
              rounded-xl
              p-4
              outline-none
            "
          />

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
            className="
              border
              rounded-xl
              p-4
              min-w-[180px]
              outline-none
            "
          >
            <option value="Sve">
              Sve ocene
            </option>

            <option value="5">
              ★★★★★
            </option>

            <option value="4">
              ★★★★☆
            </option>

            <option value="3">
              ★★★☆☆
            </option>

            <option value="2">
              ★★☆☆☆
            </option>

            <option value="1">
              ★☆☆☆☆
            </option>
          </select>
        </div>

        {/* No Reviews */}
        {filteredReviews.length === 0 && (
          <div
            className="
              bg-white
              rounded-3xl
              p-12
              text-center
            "
          >
            <p className="text-brown">
              Nema recenzija za prikaz.
            </p>
          </div>
        )}

        {/* Reviews */}
        <div className="space-y-6">
          {filteredReviews.map(
            (review) => (
              <div
                key={review.id}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-md
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    gap-4
                    mb-4
                  "
                >
                  <div>
                    <h2
                      className="
                        text-2xl
                        font-bold
                        text-brown
                      "
                    >
                      {review.title}
                    </h2>

                    <p className="text-honey">
                      {
                        review.productType
                      }
                    </p>
                  </div>

                  <div
                    className="
                      text-honey
                      text-xl
                    "
                  >
                    {"★".repeat(
                      review.rating
                    )}
                  </div>
                </div>

                <p
                  className="
                    text-brown
                    leading-7
                    mb-6
                  "
                >
                  {review.content}
                </p>

                <div
                  className="
                    border-t
                    pt-4
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    md:items-center
                    gap-4
                  "
                >
                  <div>
                    <p className="font-bold text-brown">
                      {review.name}
                    </p>

                    <p
                      className="
                        text-sm
                        text-brown/50
                      "
                    >
                      {new Date(
                        review.createdAt
                      ).toLocaleDateString(
                        "sr-RS"
                      )}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        approveReview(
                          review.id
                        )
                      }
                      className="
                        bg-green-600
                        text-white
                        px-5
                        py-2
                        rounded-xl
                        font-semibold
                        cursor-pointer
                      "
                    >
                      Odobri
                    </button>

                    <button
                      onClick={() =>
                        deleteReview(
                          review.id
                        )
                      }
                      className="
                        bg-red-600
                        text-white
                        px-5
                        py-2
                        rounded-xl
                        font-semibold
                        cursor-pointer
                      "
                    >
                      Obriši
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}