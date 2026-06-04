interface ExperienceCardProps {
  id: number;
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
        hover:-translate-y-1
        transition-all
        duration-300
        h-full
        flex
        flex-col
      "
    >
      {/* Rating */}
      <div
        className="
          mb-4
          text-honey
          text-2xl
          flex
          gap-1
        "
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= rating ? "★" : "☆"}
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p
        className="
          text-brown
          leading-7
          flex-grow
          mb-6
          italic
        "
      >
        "{text}"
      </p>

      {/* Footer */}
      <div
        className="
          border-t
          border-honey/20
          pt-4
          flex
          items-center
          gap-4
        "
      >
        {/* Avatar */}
        <div
          className="
            w-12
            h-12
            rounded-full
            bg-honey
            text-brown
            font-bold
            text-lg
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          {name.charAt(0).toUpperCase()}
        </div>

        {/* User Info */}
        <div className="min-w-0">
          <p
            className="
              font-bold
              text-brown
              truncate
            "
          >
            {name}
          </p>

          <p
            className="
              text-sm
              text-honey
              truncate
            "
          >
            {product}
          </p>

          <p
            className="
              text-xs
              text-brown/50
              mt-1
            "
          >
            {date}
          </p>
        </div>
      </div>
    </article>
  );
}