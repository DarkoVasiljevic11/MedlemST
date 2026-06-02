export default function ExperienceFilters() {
  return (
    <div className="mb-12">
      <input
        placeholder="Pretraži iskustva..."
        className="
          w-full
          rounded-2xl
          border
          border-honey/30
          bg-white
          p-4
          mb-6
          outline-none
        "
      />

      <div className="flex gap-3 overflow-x-auto pb-2">
        {[
          "Sve",
          "Med",
          "Med sa ukusom",
          "Lekoviti med",
        ].map((item) => (
          <button
            key={item}
            className="
              px-5
              py-2
              rounded-full
              bg-honey
              text-brown
              whitespace-nowrap
              cursor-pointer
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}