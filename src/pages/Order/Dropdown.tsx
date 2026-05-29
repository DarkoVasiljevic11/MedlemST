import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavItem = {
  name: string;
  path: string;
};

type DropdownProps = {
  buttonText?: string;
};

const navItems: NavItem[] = [
  {
    name: "Sve",
    path: "/order/all",
  },
  {
    name: "Lekoviti med",
    path: "/order/lekoviti",
  },
  {
    name:"Med",
    path:"/order/med"
  },
  {
    name: "Med sa ukusom",
    path: "/order/medsaukusom",
  },
];

export default function Dropdown({ buttonText = "Proizvodi" }: DropdownProps) {
  const location = useLocation();

  return (
    <div className="w-full  bg-cream mb-40 ">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-3 px-6 py-4">
        <span className="text-brown font-semibold text-sm tracking-wide uppercase mr-2">
          {buttonText}
        </span>

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative rounded-full px-5 py-2.5 text-sm font-medium
                transition-all duration-300 ease-out
                border border-transparent
                hover:scale-[1.03]
                hover:shadow-md
                ${
                  isActive
                    ? "bg-honey text-brown shadow-lg"
                    : "bg-cream text-brown hover:honey"
                }
              `}
            >
              {item.name}

              {isActive && (
                <span className="absolute inset-x-3 -bottom-1 h-[3px] rounded-full bg-brownt/80" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 py-4">
        <Menu as="div" className="relative w-full">
          {({ open }) => (
            <>
              <MenuButton
                className={`
                  flex w-full items-center justify-between
                  rounded-2xl border border-white/40
                  bg-ghoney px-4 py-3
                  text-sm font-semibold text-brownt
                  shadow-md backdrop-blur-sm
                  transition-all duration-200
                  hover:shadow-lg
                  ${open ? "scale-[1.01]" : ""}
                `}
              >
                <span>{buttonText}</span>

                {open ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </MenuButton>

              <MenuItems
                className="
                  absolute left-0 right-0 z-50 mt-3
                  overflow-hidden rounded-2xl
                  bg-dhoney/95 backdrop-blur-xl
                  shadow-2xl ring-1 ring-black/5
                "
              >
                <div className="p-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <MenuItem key={item.path}>
                        <Link
                          to={item.path}
                          className={`
                            flex items-center rounded-xl px-4 py-3
                            text-sm font-medium transition-all duration-200
                            ${
                              isActive
                                ? "bg-ghoney text-brownt shadow-sm"
                                : "text-brownt hover:bg-white/20"
                            }
                          `}
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    );
                  })}
                </div>
              </MenuItems>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}