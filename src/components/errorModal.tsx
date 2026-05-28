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
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center"
      >
        <h2 className="text-xl font-bold text-red-600 mb-3">
          Greška
        </h2>

        <p className="text-gray-700 mb-6">
          {message}
        </p>

        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
}