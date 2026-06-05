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
  approved: boolean;
}

export default function AdminReviews() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("Sve");
  const [status, setStatus] =
  useState("Sve");

const [currentPage, setCurrentPage] =
  useState(1);

const reviewsPerPage = 9;
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchReviews();
  }, [navigate]);
  useEffect(() => {
  setCurrentPage(1);
}, [
  search,
  rating,
  status,
]);
  const API_URL=import.meta.env.VITE_API_URL;
  const fetchReviews = async () => {
    try {
      setLoading(true);
      
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/experiences/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => null);

        throw new Error(
          errorData?.error ||
            errorData?.message ||
            "Greška pri učitavanju."
        );
      }

      const data = await response.json();

      setReviews(data);
    } catch (error) {
      console.error(
        "Fetch reviews error:",
        error
      );

      localStorage.removeItem("token");
      localStorage.removeItem("admin");

      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const approveReview = async (
    id: number
  ) => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/experiences/${id}/approve`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Greška pri odobravanju."
        );
      }

      fetchReviews();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReview = async (
    id: number
  ) => {
    const confirmed =
      window.confirm(
        "Da li ste sigurni da želite da obrišete ovu recenziju?"
      );

    if (!confirmed) return;

    try {
      const token =
        localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/experiences/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Greška pri brisanju."
        );
      }

      fetchReviews();
    } catch (error) {
      console.error(error);
    }
  };

 const filteredReviews =
  reviews.filter((review) => {
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

    const matchesStatus =
      status === "Sve" ||
      (status === "Pending" &&
        !review.approved) ||
      (status === "Approved" &&
        review.approved);

    return (
      matchesSearch &&
      matchesRating &&
      matchesStatus
    );
  });

const totalPages = Math.ceil(
  filteredReviews.length /
    reviewsPerPage
);

const displayedReviews =
  filteredReviews.slice(
    (currentPage - 1) *
      reviewsPerPage,
    currentPage *
      reviewsPerPage
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
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1
              className="
                text-4xl
                font-bold
                text-brown
                mb-3
              "
            >
              Upravljanje recenzijama
            </h1>

            <p className="text-brown/70">
              Pregledajte i upravljajte
              korisničkim  iskustvima.
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem(
                "token"
              );
              localStorage.removeItem(
                "admin"
              );

              navigate(
                "/admin/login"
              );
            }}
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
            Odjava
          </button>
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
              setSearch(
                e.target.value
              )
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
              setRating(
                e.target.value
              )
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
          <select
  value={status}
  onChange={(e) =>
    setStatus(e.target.value)
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
    Sve recenzije
  </option>

  <option value="Pending">
    Na čekanju
  </option>

  <option value="Approved">
    Odobrene
  </option>
</select>
        </div>

        {/* No Reviews */}
        {filteredReviews.length ===
          0 && (
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
          {displayedReviews.map(
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
  className={`
    inline-flex
    mt-2
    px-3
    py-1
    rounded-full
    text-sm
    font-semibold
    ${
      review.approved
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
    }
  `}
>
  {review.approved
    ? "Odobrena"
    : "Na čekanju"}
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
                  {!review.approved && (
  <button
    onClick={() =>
      approveReview(review.id)
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
)}

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
        {/* Pagination */}
{totalPages > 1 && (
  <div className="flex justify-center gap-2 mt-10 flex-wrap">
    <button
      onClick={() =>
        setCurrentPage((p) =>
          Math.max(1, p - 1)
        )
      }
      disabled={currentPage === 1}
      className="
        px-4 py-2 rounded-xl border
        bg-white
        disabled:opacity-50
        cursor-pointer
      "
    >
      ←
    </button>

    {Array.from(
      { length: totalPages },
      (_, i) => (
        <button
          key={i}
          onClick={() =>
            setCurrentPage(i + 1)
          }
          className={`
            px-4 py-2 rounded-xl border
            cursor-pointer
            ${
              currentPage === i + 1
                ? "bg-honey text-brown"
                : "bg-white"
            }
          `}
        >
          {i + 1}
        </button>
      )
    )}

    <button
      onClick={() =>
        setCurrentPage((p) =>
          Math.min(
            totalPages,
            p + 1
          )
        )
      }
      disabled={
        currentPage === totalPages
      }
      className="
        px-4 py-2 rounded-xl border
        bg-white
        disabled:opacity-50
        cursor-pointer
      "
    >
      →
    </button>
  </div>
)}
      </div>
    </main>
  );
}