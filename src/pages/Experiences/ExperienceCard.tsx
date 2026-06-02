interface ExperienceCardProps {
  name: string;
  product: string;
  rating: number;
  text: string;
  date: string;
}

export default function ExperienceCard({
  name,
  product,
  rating,
  text,
  date,
}: ExperienceCardProps) {
  return (
    <article
      className="
        bg-[#FFF8EF]
        rounded-3xl
        p-6
        shadow-md
        hover:shadow-xl
        transition
        h-full
      "
    >
      <div className="mb-4 text-honey text-xl">
        {"★".repeat(rating)}
      </div>

      <p className="text-brown leading-7 mb-6">
        "{text}"
      </p>

      <div className="border-t border-honey/20 pt-4">
        <p className="font-bold text-brown">{name}</p>

        <p className="text-sm text-honey">
          {product}
        </p>

        <p className="text-xs text-brown/50 mt-2">
          {date}
        </p>
      </div>
    </article>
  );
}