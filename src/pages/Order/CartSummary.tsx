interface CartSummaryProps {
  itemCount: number;
  total: number;
  emptyIcon: string;
  fullIcon: string;
  onClick?: () => void;
}

export default function CartSummary({
  itemCount,
  total,
  emptyIcon,
  fullIcon,
  onClick,
}: CartSummaryProps) {
  const hasItems = itemCount > 0;

  return (
    <div className="container mx-auto px-4 mb-6">
      <button
        onClick={onClick}
        className="
          w-full
          rounded-3xl
          bg-white
          p-4
          shadow-lg
          border
          border-honey/20
          flex
          items-center
          justify-between
          transition
          hover:shadow-xl
          cursor-pointer
        "
      >
        <div className="flex items-center gap-4">
          <img
            src={
              hasItems
                ? fullIcon
                : emptyIcon
            }
            alt="Korpa"
            className="w-14 h-14"
          />

          <div className="text-left">
            <h3 className="font-bold text-brown">
              {hasItems
                ? `Korpa (${itemCount})`
                : "Korpa je prazna"}
            </h3>

            <p className="text-brown/70 text-sm">
              {hasItems
                ? `${total.toLocaleString(
                    "sr-RS"
                  )} RSD`
                : "Dodajte proizvode"}
            </p>
          </div>
        </div>

        {hasItems && (
          <span className="font-semibold text-brown">
            Pregled →
          </span>
        )}
      </button>
    </div>
  );
}