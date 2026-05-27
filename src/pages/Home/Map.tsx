export default function MapSection() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-20 mb-20">
      
      {/* 🧊 Glass overlay card */}
      <div className="hidden md:block absolute flex items-center justify-center z-10">
      <div className="backdrop-blur-xl bg-ghoney border border-white/10 rounded-xl px-4 py-3  shadow-lg">
      <h3 className="font-bree text-brownt ">Nalazimo se ovde</h3>
      <p className="text-xs text-brownt font-semibold">Gornja Tresnjica, Srbija</p>
      </div>
      </div>
 
      {/* 🌍 Map (iframe — no API key needed) */}
      <div className="hidden md:block  rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dhoney">
        <iframe
          title="location-map"
          className="w-full h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?ll=44.120355,19.485698&z=18&t=m&output=embed"
        />
      </div>

      {/* 📱 Mobile fallback */}
      <div className="md:hidden mt-4 bg-dhoney text-white p-4 rounded-xl border border-white/10">
        <h3 className="font-semibold font-bree">Posetite nas</h3>
        <p className="text-sm text-gray-300 font-bree">Gornja Tresnjica, Srbija</p>

        <a
          href="https://www.google.com/maps?q=44.120355,19.485698"
          target="_blank"
          className="inline-block mt-2 text-sm text-blue-400 hover:underline font-bree"
        >
          Pronadjite nas na Google mapama →
        </a>
      </div>

    </div>
  );
}