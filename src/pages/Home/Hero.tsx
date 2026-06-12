import kamionsunset from "..//..//assets/ksunset.png";
import { NavLink } from "react-router-dom";
export default function Hero() {
  return (
    
   <section className="relative min-h-screen w-full overflow-hidden">
  {/* IMAGE */}
  <img
    src={kamionsunset}
    loading="eager"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 z-10 bg-black/20" />

  {/* CONTENT */}
 <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4">
  <h1 className="text-center font-bree italic text-4xl md:text-6xl text-cream drop-shadow-lg">
    Sladak spoj prirode!
  </h1>

  <p className="mt-7 font-bree max-w-xl text-center text-lg md:text-xl text-cream">
    Prirodni med i proizvodi od meda za svaki dan.
  </p>

  <NavLink
    to="/poručite"
    className="
      mt-8
      rounded-full
      bg-honey
      px-8
      py-4
      text-lg
      font-semibold
      text-brown
      shadow-lg
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      font-bree
    "
  >
    Pogledajte proizvode
  </NavLink>
</div>
</section>
    
  );
}
