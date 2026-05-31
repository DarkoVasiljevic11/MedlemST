import { useEffect } from "react";

interface CartToastProps {
  show: boolean;
  productName: string;
  onClose: () => void;
}

export default function CartToast({
  show,
  productName,
  onClose,
}: CartToastProps) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="
        fixed
        top-24
        right-6
        z-[9999]
        animate-slide-in
      "
    >
      <div className="bg-brown text-cream rounded-2xl shadow-2xl border border-honey px-5 py-4 min-w-[280px]">
        <div className="flex items-start gap-3">
          <div className="text-honey text-xl">✓</div>

          <div>
            <h4 className="font-semibold">
              Proizvod dodat u korpu
            </h4>

            <p className="text-sm text-cream/80 mt-1">
              {productName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}