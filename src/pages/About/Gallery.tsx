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
  const [playingVideoId, setPlayingVideoId] = useState<
    string | number | null
  >(null);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const videoRefs = useRef<Record<string | number, HTMLVideoElement | null>>(
    {}
  );

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

  // KEYBOARD CONTROLS
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
const itemsToShow = items.slice(0, 9);
  return (
    <section className="w-full bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="space-y-4 max-w-3xl mb-10">
          <span className="uppercase tracking-[0.25em] text-sm font-bree text-honey font-semibold">
            Ko smo mi?
          </span>

          <h2 className="text-4xl md:text-5xl font-bree text-brown leading-tight">
            Medlem, Sladak Spoj Prirode!
          </h2>

          <p className="text-lg text-brownLight font-bree leading-relaxed">
            Godinama proizvodimo prirodni med vrhunskog kvaliteta iz netaknute prirode.
          </p>
        </div>

        {/* GALLERY GRID (ALWAYS VISIBLE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
          
          {
          itemsToShow.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-3xl shadow-lg group h-[240px]`}
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
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el;
                  }}
                  src={item.url}
                  muted
                  loop
                  playsInline
                  onClick={() => setLightboxIndex(index)}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* VIDEO BUTTON */}
              {item.type === "video" && (
                <button
                  onClick={() => handleVideoToggle(item)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 cursor-pointer"
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
                <p className="font-semibold text-base">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">
          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>

          {/* PREV */}
          <button
            className="absolute left-6 text-white text-4xl cursor-pointer"
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
            className="absolute right-6 text-white text-4xl cursor-pointer"
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