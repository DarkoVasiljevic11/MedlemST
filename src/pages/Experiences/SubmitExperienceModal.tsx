interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SubmitExperienceModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-2xl
          bg-cream
          rounded-3xl
          p-8
        "
      >
        <h2 className="text-3xl font-bold text-center text-brown mb-8">
          Podelite iskustvo
        </h2>

        <form className="space-y-5">
          <input
            placeholder="Ime"
            className="w-full p-4 rounded-xl border"
          />

          <select className="w-full p-4 rounded-xl border">
            <option>Bagremov Med</option>
            <option>Livadski Med</option>
            <option>Propolis</option>
            <option>Matični Mleč i Med</option>
             <option>Med i jagoda</option>
              <option>Med i malina</option>
               <option>Bronhi Med</option>
                <option>Imuno Med</option>
          </select>

          <input
            placeholder="Naslov"
            className="w-full p-4 rounded-xl border"
          />

          <textarea
            rows={6}
            placeholder="Vaše iskustvo..."
            className="w-full p-4 rounded-xl border resize-none"
          />

          <button
            type="submit"
            className="
              w-full
              bg-honey
              text-brown
              py-4
              rounded-xl
              font-bold
              cursor-pointer
            "
          >
            Pošalji iskustvo
          </button>
        </form>
      </div>
    </div>
  );
}