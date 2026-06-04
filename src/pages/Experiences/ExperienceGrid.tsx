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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:5000/api/experiences?search=${encodeURIComponent(
            search
          )}&category=${encodeURIComponent(category)}`
        );

        if (!response.ok) {
          throw new Error(
            "Greška prilikom učitavanja iskustava."
          );
        }

        const data = await response.json();

        setReviews(data);
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
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
    >
      {reviews.map((review) => (
        <ExperienceCard
          key={review.id}
          id={review.id}
          name={review.name}
          product={review.productType}
          rating={review.rating}
          text={review.content}
          date={new Date(
            review.createdAt
          ).toLocaleDateString("sr-RS")}
        />
      ))}
    </div>
  );
}