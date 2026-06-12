import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../pages/Order/CartContext";
import cartEmpty from "../../src/assets/cart.svg";
import cartFull from "../../src/assets/carth.svg";
import logo from "../../src/assets/medleml.svg";
import { useLocation } from "react-router-dom";


export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart();
  const hasItems = cart.length > 0;
  const [scrolled, setScrolled] = useState(false);
const location = useLocation();

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
  <nav
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-500
    ${
      location.pathname === "/" && !scrolled
        ? "bg-transparent"
        : "bg-cream/90 backdrop-blur-md shadow-sm"
    }
  `}
>   
      {/* TOP BAR */}
      <div className="flex relative flex-1 items-center justify-between p-4 container mx-auto">
      {/*Logo */}
       <div className="flex items-center shrink-0">
  <a
    href="/"
    className="flex items-center scale-200 origin-center"
  >
    <img
      className="h-11 w-auto"
      src={logo}
      alt="Medlem Logo"
    />
  </a>
</div>

        {/* MOBILE BUTTON */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-brown hover:bg-white/10 transition active:scale-90"
          >
            <span className="sr-only">Open main menu</span>

            {/* ANIMATED ICON WRAPPER */}
            <div className="relative w-6 h-6">

              {/* X ICON */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`absolute inset-0 size-6 transition-all duration-300 ease-in-out
                  ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"}
                `}
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* HAMBURGER ICON */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`absolute inset-0 size-6 transition-all duration-300 ease-in-out
                  ${mobileOpen ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
                `}
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>
          </button>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden sm:flex items-center space-x-2">
          {["/", "/onama", "/iskustva", "/poručite"].map((path, i) => {
            const labels = ["Početna", "O nama", "Iskustva", "Poručite"];
            return (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-base font-bree transition ${
                    isActive
                      ? "bg-honey text-brown"
                      : location.pathname === "/" && !scrolled
                      ? "text-cream hover:bg-white/10 hover:text-honey"
                      : "text-brown hover:bg-honey hover:text-brown"
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>

        {/* CART */}
        <div className="items-center hidden sm:flex">
          <div className="relative ml-3">
            <NavLink to="/poručeno" className="cursor-pointer relative">

              <img
                src={hasItems ? cartFull : cartEmpty}
                alt="Cart"
                className={`size-9 transition duration-300 ${
                  hasItems ? "scale-105 drop-shadow-md" : "opacity-80"
                }`}
              />

              {hasItems && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.reduce(
                    (sum: number, item: any) => sum + item.quantity,
                    0
                  )}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (SMOOTH ANIMATION) */}
      <div
        className={`sm:hidden px-2 pt-2 pb-3 space-y-1 overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-md ${
          mobileOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        {["/", "/onama", "/iskustva", "/poručite"].map((path, i) => {
          const labels = ["Početna", "Ko smo mi?", "Iskustva", "Poručite"];
          return (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base font-bree transition ${
                  isActive
                    ? "bg-honey text-brown"
                    : location.pathname === "/" && !scrolled
                    ? "text-cream hover:bg-white/10 hover:text-honey"
                    : "text-brown hover:bg-honey hover:text-brown"
                }`
              }
            >
              {labels[i]}
            </NavLink>
          );
        })}

        <NavLink
          to="/poručeno"
          onClick={() => setMobileOpen(false)}
          className="block mt-2 ml-2"
        >
          <img
            src={hasItems ? cartFull : cartEmpty}
            alt="Cart"
            className={`size-11 transition ${
              hasItems ? "scale-105" : "opacity-80"
            }`}
          />
        </NavLink>
      </div>
    </nav>
  );
}