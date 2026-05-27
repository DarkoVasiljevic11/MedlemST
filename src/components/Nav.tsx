import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../pages/Order/CartContext";
import cartEmpty from "../../src/assets/cart.svg";
import cartFull from "../../src/assets/carth.svg";
export default function Nav() {
 const [mobileOpen, setMobileOpen] = useState(false);
 const { cart } = useCart();
 const hasItems = cart.length > 0;
  return (
    <nav className="relative  bg-dhoney after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      {/* Logo + desktop nav */}
      <div className="flex relative flex-1 items-center  justify-between p-4 container mx-auto">
        {/* Logo (left) */}
        <div className="flex shrink-0 items-center">
          <a href="/">
          <img
            src="../src/assets/medleml.svg"
            alt="Logo"
            className="h-20  w-auto object-contain"
          />
          </a>
        </div>
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-dhoney hover:text-white"
          >
            <span className="sr-only">Open main menu</span>

            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-6"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links (center) */}
        <div className="hidden sm:flex items-center space-x-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
                 `rounded-md px-3 py-2 text-base font-bree transition ${
                isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
          >
            Početna
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
      `rounded-md px-3 py-2 text-base font-bree transition ${
        isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
            >
            O nama
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
      `rounded-md px-3 py-2 text-base font-bree transition ${
        isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
          >
            Iskustva
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
      `rounded-md px-3 py-2 text-base font-bree transition ${
        isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
          >
            Poručite
          </NavLink>

</div>
         
        {/* Right side — cart button */}
<div className="items-center hidden sm:flex">
  <div className="relative ml-3">

    <NavLink to="/checkout" className="cursor-pointer relative" >

      {/* CART ICON (switches completely) */}
      <img
        src={hasItems ? cartFull : cartEmpty}
        alt="Cart"
        className={`size-11 transition duration-300 ${
          hasItems ? "scale-105 drop-shadow-md" : "opacity-80"
        }`}
      />

      {/* cart count  badge  */}
      {hasItems && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cart.reduce((sum: number, item: any) => sum + item.quantity, 0)}
        </span>
      )}

    </NavLink>

  </div>
</div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
      `block rounded-md px-3 py-2 text-base font-bree transition ${
        isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
          >
            Početna
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
      `block rounded-md px-3 py-2 text-base font-bree transition ${
        isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
          >
            Ko smo mi?
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
      `block rounded-md px-3 py-2 text-base font-bree transition ${
        isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
          >
            Javite nam se!
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
      `block rounded-md px-3 py-2 text-base font-bree transition ${
        isActive
          ? "bg-ghoney text-brownt"
          : "text-brownt hover:bg-honey hover:text-brownt"
      }`
    }
          >
            Poručite
          </NavLink>
          
         <NavLink to="/checkout">
  <img
    src={hasItems ? cartFull : cartEmpty}
    alt="Cart"
    className={`size-11 transition ${
      hasItems ? "scale-105" : "opacity-80"
    }`}
  />
</NavLink>
         
        </div>
      )}
    </nav>
  );
}
