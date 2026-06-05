interface Props {
  onOpen: () => void;
}

export default function ExperienceHero({ onOpen }: Props) {
  return (
    <section className="relative overflow-hidden py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-honey uppercase tracking-widest font-bree font-semibold mb-4">
          Iskustva Kupaca
        </p>

        <h1 className="text-5xl md:text-6xl font-bree text-brown font-bold mb-6">
          Vaše mišljenje nam znači
        </h1>

        <p className="max-w-2xl mx-auto text-brown font-bree text-lg">
          Pročitajte iskustva naših kupaca i podelite svoje utiske o
          proizvodima.
        </p>

        <button
          onClick={onOpen}
          className="
            mt-10
            bg-honey
            text-brown
            px-8
            py-4
            rounded-2xl
            font-bold
            shadow-lg
            hover:scale-105
            transition
            cursor-pointer
            font-bree
          "
        >
          Podelite iskustvo
        </button>
      </div>
    </section>
  );
}