interface ExperienceCardProps {
  id: number;
  name: string;
  product: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  onOpen: () => void;
}

export default function ExperienceCard({
  name,
  product,
  rating,
  title,
  text,
  date,
  onOpen,
}: ExperienceCardProps) {
  return (
    <article
      onClick={onOpen}
      className="
        bg-[#FFF8EF]
        rounded-3xl
        p-5
        md:p-6
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        h-full
        min-h-[340px]
        md:min-h-[360px]
        flex
        flex-col
        cursor-pointer
      "
    >
      {/* Rating */}
      <div
        className="
          mb-4
          text-honey
          text-xl
          md:text-2xl
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

      {/* Title */}
      <h3
        className="
          text-brown
          font-bold
          text-lg
          md:text-xl
          mb-3
          line-clamp-2
          break-words
        "
      >
        {title}
      </h3>

      {/* Review Preview */}
      <p
        className="
          text-brown
          text-sm
          md:text-base
          leading-relaxed
          italic
          flex-grow
          mb-5
          break-words
          line-clamp-5
        "
      >
        "{text}"
      </p>

      <p
        className="
          text-xs
          md:text-sm
          text-honey
          font-medium
          mb-4
        "
      >
        Kliknite za ceo utisak →
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

        <div className="min-w-0 flex-1">
          <p
            className="
              font-bold
              text-brown
              truncate
            "
          >
            {name}
          </p>

          <div className="mt-1">
            <span
              className="
                inline-flex
                items-center
                px-2.5
                py-1
                rounded-full
                bg-honey/10
                text-honey
                text-xs
                md:text-sm
                font-medium
              "
            >
              {product}
            </span>
          </div>

          <p
            className="
              text-xs
              text-brown/60
              mt-2
            "
          >
            {date}
          </p>
        </div>
      </div>
    </article>
  );
}