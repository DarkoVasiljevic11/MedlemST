export default function ErrorModal({
  show,
  message,
  onClose,
}: {
  show: boolean;
  message: string;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-cream rounded-2xl shadow-xl p-6 w-full max-w-sm text-center"
      >
        <h2 className="text-xl font-bold text-red-600 mb-3">
          Greška
        </h2>

        <p className="text-brown mb-6">
          {message}
        </p>

        <button
          onClick={onClose}
          className="bg-honey hover:bg-red-600 hover:text-cream text-brown px-4 py-2 rounded-lg cursor-pointer"
        >
          OK
        </button>
      </div>
    </div>
  );
}