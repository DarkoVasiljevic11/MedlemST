import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import galleryItems from "./Pics";

type GalleryItem = {
  id: string | number;
  url: string;
  title: string;
  type: "image" | "video";
};

export default function GallerySection() {
  const [showGallery, setShowGallery] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<string | number | null>(null);

  // 🔥 store BOTH image + video index
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const videoRefs = useRef<Record<string | number, HTMLVideoElement | null>>({});
  const items = galleryItems as GalleryItem[];

  const handleVideoToggle = (item: GalleryItem) => {
    const video = videoRefs.current[item.id];
    if (!video) return;

    if (playingVideoId === item.id) {
      video.pause();
      setPlayingVideoId(null);
    } else {
      Object.values(videoRefs.current).forEach((v) => v?.pause());
      video.play();
      setPlayingVideoId(item.id);
    }
  };

  // 🔥 KEYBOARD CONTROLS
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") setLightboxIndex(null);

      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? items.length - 1 : (prev ?? 0) - 1
        );
      }

      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === items.length - 1 ? 0 : (prev ?? 0) + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, items.length]);

  return (
    <section className="w-full overflow-x-hidden bg-[#fff8ef] py-20 px-6 mb-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="space-y-6 max-w-3xl">
          <span className="uppercase tracking-[0.25em] text-sm font-bree text-[#a15c18] font-semibold">
            Ko smo mi?
          </span>

          <h2 className="text-4xl md:text-5xl  font-bree text-[#4a2d0f] leading-tight">
            Medlem, Sladak Spoj Prirode!
          </h2>

          <p className="text-lg text-[#5e4a35] font-bree leading-relaxed">
            Godinama proizvodimo prirodni med vrhunskog kvaliteta iz netaknute prirode.
          </p>

          <button
            onClick={() => setShowGallery((p) => !p)}
            className="bg-[#FF9505] hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
          >
            {showGallery ? "Zatvori galeriju" : "Pogledaj galeriju"}
          </button>
        </div>

        {/* GALLERY */}
        {showGallery && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-3xl shadow-lg group ${
                  index === 0 ? "sm:col-span-2 h-[320px]" : "h-[220px]"
                }`}
              >

                {/* IMAGE */}
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    onClick={() => setLightboxIndex(index)}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <video
                      ref={(el) => {
                        videoRefs.current[item.id] = el;
                      }}
                      src={item.url}
                      muted
                      loop
                      playsInline
                      onClick={() => setLightboxIndex(index)}   // 🔥 FIX: video opens lightbox
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                    />
                  </>
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                {/* VIDEO BUTTON */}
                {item.type === "video" && (
                  <button
                    onClick={() => handleVideoToggle(item)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30"
                  >
                    {playingVideoId === item.id ? (
                      <Pause className="text-white" size={18} />
                    ) : (
                      <Play className="text-white" size={18} />
                    )}
                  </button>
                )}

                {/* TITLE */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX (IMAGE + VIDEO SUPPORT) */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>

          {/* PREV */}
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={() =>
              setLightboxIndex((prev) =>
                prev === 0 ? items.length - 1 : (prev ?? 0) - 1
              )
            }
          >
            ‹
          </button>

          {/* CONTENT */}
          {items[lightboxIndex].type === "image" ? (
            <img
              src={items[lightboxIndex].url}
              alt="lightbox"
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          ) : (
            <video
              src={items[lightboxIndex].url}
              controls
              autoPlay
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          )}

          {/* NEXT */}
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={() =>
              setLightboxIndex((prev) =>
                prev === items.length - 1 ? 0 : (prev ?? 0) + 1
              )
            }
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}