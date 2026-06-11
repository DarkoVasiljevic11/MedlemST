import Instagram from "./Ig";
import Youtube from "./Yt";
import Facebook from "./Fb";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const linkClass =
    "text-cream/80 hover:text-honey transition-colors duration-300 text-body font-bree";

  return (
    <footer className="bg-brown">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + Description */}
          <div>
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src="../src/assets/medleml.svg"
                className="h-20"
                alt="Medlem Logo"
              />
              <span className="font-bree text-2xl text-cream">
                Medlem
              </span>
            </NavLink>

            <p className="mt-4 max-w-sm text-cream/80 text-body font-bree leading-relaxed">
              Sladak spoj prirode!
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-4 text-heading font-bree text-cream">
              Korisni linkovi
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink to="/privacy-policy" className={linkClass}>
                  Politika privatnosti
                </NavLink>
              </li>

              <li>
                <NavLink to="/cookie-policy" className={linkClass}>
                  Politika kolačića
                </NavLink>
              </li>

              <li>
                <NavLink to="/dostava-i-placanje" className={linkClass}>
                  Dostava i plaćanje
                </NavLink>
              </li>

              
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 text-heading font-bree text-cream">
              Pratite nas
            </h3>

            <p className="mb-4 text-cream/80 text-body font-bree">
              Budite u toku sa novostima, akcijama i zanimljivostima iz
              sveta pčelarstva.
            </p>

            <div className="flex items-center gap-4">
              <Instagram />
              <Youtube />
              <Facebook />
            </div>
          </div>
        </div>

        <hr className="my-8 border-honey/40" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <span className="font-bree text-sm text-cream/70">
            © 2026 Medlem. Sva prava zadržana.
          </span>

          <div className="flex gap-6">
            <NavLink to="/politika-privatnosti" className={linkClass}>
              Privatnost
            </NavLink>

            <NavLink to="/politika-kolačića" className={linkClass}>
              Kolačići
            </NavLink>

            <NavLink to="/dostava-i-placanje" className={linkClass}>
              Dostava
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}