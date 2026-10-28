"use client";

import {useState} from "react";
import Logo from "@/app/components/Logo.jsx";
import {FiSearch, FiMenu, FiX, FiShoppingCart} from "react-icons/fi";
import {RxPerson} from "react-icons/rx";

const menuItems = [
  {label: "Produkter", href: "#produkter"},
  {label: "Anmeldelser", href: "#anmeldelser"},
  {label: "Videoer", href: "#videoer"},
  {label: "Om Mig", href: "#om-mig"},
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="full-bleed bg-[#f2f0e9] p-4 text-white">
      <div className="flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden text-gray-900 lg:block" aria-label="Hovedmenu">
          <ul className="flex items-center justify-center gap-8">
            {menuItems.map(({label, href}) => (
              <li key={href}>
                <a className="hover-underline" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 text-[#601728]">
          <FiSearch />
          <RxPerson />
          <FiShoppingCart />
          <button
            type="button"
            className="lg:hidden"
            aria-label="Åbn menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 h-full w-full cursor-default"
          aria-label="Luk menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobilmenu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-[#f2f0e9] p-6 text-[#601728] shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="mb-8 ml-auto block"
          aria-label="Luk menu"
          onClick={() => setMenuOpen(false)}
        >
          <FiX size={24} />
        </button>
        <ul className="flex flex-col gap-6 text-lg">
          {menuItems.map(({label, href}) => (
            <li key={href}>
              <a
                className="hover-underline"
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
