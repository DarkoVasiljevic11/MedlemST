import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

interface Review {
  id: number;
  name: string;
  productType: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
}

interface ExperienceGridProps {
  search: string;
  category: string;
}

export default function ExperienceGrid({
  search,
  category,
}: ExperienceGridProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const reviewsPerPage = 9;
  const API_URL=import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_URL}/api/experiences?search=${encodeURIComponent(
            search
          )}&category=${encodeURIComponent(
            category
          )}`
        );

        if (!response.ok) {
          throw new Error(
            "Greška prilikom učitavanja iskustava."
          );
        }

        const data = await response.json();

        setReviews(data);

        // Reset to first page after filtering
        setCurrentPage(1);
      } catch (err) {
        console.error(err);

        setError(
          "Nije moguće učitati iskustva kupaca."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [search, category]);

  const totalPages = Math.ceil(
    reviews.length / reviewsPerPage
  );

  const displayedReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-brown text-lg font-medium">
          Učitavanje iskustava...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">
          {error}
        </p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-brown text-lg font-bree">
          Nema pronađenih iskustava.
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >
        {displayedReviews.map(
          (review) => (
            <ExperienceCard
              key={review.id}
              id={review.id}
              name={review.name}
              product={
                review.productType
              }
              rating={review.rating}
              text={review.content}
              date={new Date(
                review.createdAt
              ).toLocaleDateString(
                "sr-RS"
              )}
            />
          )
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            disabled={
              currentPage === 1
            }
            className="
              px-4
              py-2
              rounded-xl
              bg-white
              border
              border-honey/30
              text-brown
              disabled:opacity-40
              disabled:cursor-not-allowed
              cursor-pointer
            "
          >
            ←
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrentPage(
                    index + 1
                  )
                }
                className={`
                  px-4
                  py-2
                  rounded-xl
                  border
                  cursor-pointer
                  transition
                  ${
                    currentPage ===
                    index + 1
                      ? "bg-honey text-brown border-honey"
                      : "bg-white text-brown border-honey/30 hover:bg-honey/10"
                  }
                `}
              >
                {index + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  totalPages
                )
              )
            }
            disabled={
              currentPage ===
              totalPages
            }
            className="
              px-4
              py-2
              rounded-xl
              bg-white
              border
              border-honey/30
              text-brown
              disabled:opacity-40
              disabled:cursor-not-allowed
              cursor-pointer
            "
          >
            →
          </button>
        </div>
      )}
    </>
  );
}