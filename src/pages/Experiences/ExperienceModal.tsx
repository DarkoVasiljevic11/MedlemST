interface ExperienceModalProps {
  open: boolean;
  onClose: () => void;
  experience: {
    name: string;
    product: string;
    rating: number;
    title: string;
    text: string;
    date: string;
  } | null;
}

export default function ExperienceModal({
  open,
  onClose,
  experience,
}: ExperienceModalProps) {
  if (!open || !experience) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/70
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
          w-full
          max-w-3xl
          max-h-[90vh]
          overflow-y-auto
          bg-[#FFF8EF]
          rounded-3xl
          p-6
          md:p-8
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex justify-between items-start gap-4 mb-6">
          <div>
            <h2
              className="
                 text-2xl
    md:text-3xl
    font-bold
    text-brown
    break-all
    max-w-full
              "
            >
              {experience.title}
            </h2>

            <p
              className="
                text-brown/60
                text-sm
                mt-2
              "
            >
              {experience.date}
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              text-brown
              text-3xl
              leading-none
              cursor-pointer
              hover:opacity-70
            "
          >
            ×
          </button>
        </div>

        {/* Rating */}
        <div
          className="
            flex
            gap-1
            text-honey
            text-2xl
            mb-6
          "
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>
              {star <= experience.rating
                ? "★"
                : "☆"}
            </span>
          ))}
        </div>

        {/* Product */}
        <div className="mb-6">
          <span
            className="
              inline-flex
              items-center
              px-3
              py-1.5
              rounded-full
              bg-honey/10
              text-honey
              font-medium
              font-bree
            "
          >
            {experience.product}
          </span>
        </div>

        {/* Full Text */}
        <div
          className="
            text-brown
            text-base
            md:text-lg
            leading-relaxed
            whitespace-pre-wrap
            break-words
          "
        >
          {experience.text}
        </div>

        {/* Footer */}
        <div
          className="
            mt-8
            pt-6
            border-t
            border-honey/20
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              w-14
              h-14
              rounded-full
              bg-honey
              text-brown
              font-bold
              text-xl
              flex
              items-center
              justify-center
              font-bree
            "
          >
            {experience.name
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <p
              className="
                font-bold
                text-brown
                font-bree
              "
            >
              {experience.name}
            </p>

            <p
              className="
                text-sm
                text-brown
                font-bree
              "
            >
              Verifikovano iskustvo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}