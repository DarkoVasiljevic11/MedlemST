import kamionsunset from "..//..//assets/ksunset.png";
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO */}
      <img src={kamionsunset} loading="eager" className="absolute  inset-0 z-0 h-full w-full object-cover">
      
      
      </img>

      {/*  DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex h-full items-center justify-center px-4">
        <h1 className="text-center font-bree italic text-4xl md:text-6xl text-cream drop-shadow-lg">
          Sladak spoj prirode!
        </h1>
      </div>
    </section>
  );
}
