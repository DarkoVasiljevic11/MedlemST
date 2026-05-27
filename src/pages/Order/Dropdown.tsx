import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

type DropdownProps = {
  buttonText: string;
};

export default function Dropdown({ buttonText }: DropdownProps) {
  return (
      <Menu as="div" className="relative inline-block text-left mb-40">
      {({ open }) => (
        <>
          <MenuButton
            className={`
              inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold
              transition-all duration-200
               text-brownt hover:bg-white/20 ml-10 mt-10 bg-ghoney

              ${open ? "scale-105 bg-white/20" : "scale-100"}
            `}
          >
            {buttonText}

            <svg
              className={`size-5 text-brownt bg-ghoney rounded-md transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </MenuButton>

          <MenuItems className="absolute mt-2 w-56 rounded-md bg-dhoney shadow-lg ml-10">
          <div className="py-1"> 
            <MenuItem>
              <Link to="/order/all" className="block px-4 py-2 text-brownt hover:bg-white/10 cursor-pointer">
                Sve
              </Link>
            </MenuItem>
            </div>
            <div className="py-1">
            <MenuItem>
              <Link to="/order/lekoviti" className="block px-4 py-2  text-brownt hover:bg-white/10 cursor-pointer">
                Lekoviti med
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/order/medsaukusom" className="block px-4 py-2  text-brownt hover:bg-white/10 cursor-pointer">
                Med sa ukusom
              </Link>
            </MenuItem>
            </div>
          </MenuItems>
        </>
      )}
    </Menu>
  );
}