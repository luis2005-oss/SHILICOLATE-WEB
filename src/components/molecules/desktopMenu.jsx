import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./logo";
import { FaChevronDown } from "react-icons/fa";

const menuLeft = [
  { text: "Nosotros", href: "/aboutus" },
];

const menuRight = [
  { text: "Reconocimientos", href: "/bookings" },
  { text: "Contacto", href: "/contact" },
];

const productosSubmenu = [
  { text: "Chocolate al 100%", href: "/productos/chocolates-100" },
  { text: "Comestibles", href: "/productos/comestibles" },
];

function NavbarLink({ href, text, onClick }) {
  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) => `
        relative font-serif text-[0.78rem] tracking-[0.14em] uppercase
        leading-none no-underline transition-all duration-300
        after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
        after:h-px after:w-full after:bg-[#c8895a]
        after:origin-left after:transition-transform after:duration-300
        ${
          isActive
            ? "text-[#f5e8d5] after:scale-x-100"
            : "text-[#c4a98a] hover:text-[#f5e8d5] after:scale-x-0 hover:after:scale-x-100"
        }
      `}
    >
      {text}
    </NavLink>
  );
}

function ProductosDropdown({ onLinkClick, mobile = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const close = (e) => {
      if (!e.target.closest("#productos-dropdown")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  if (mobile) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-serif text-[0.78rem] tracking-[0.14em] uppercase text-[#c4a98a] hover:text-[#f5e8d5] transition"
        >
          Productos
          <FaChevronDown
            size={11}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-3 flex flex-col gap-3">
            {productosSubmenu.map((item) => (
              <NavbarLink
                key={item.href}
                href={item.href}
                text={item.text}
                onClick={() => {
                  setOpen(false);
                  onLinkClick?.();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <li className="relative list-none" id="productos-dropdown">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 relative top-[1px] font-serif text-[0.78rem] tracking-[0.14em] uppercase leading-none text-[#c4a98a] hover:text-[#f5e8d5] transition-all duration-300"
      >
        Productos
        <FaChevronDown
          size={11}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-5 min-w-[240px]
        bg-[#1a0d08] border border-[#c8895a22] rounded-xl shadow-2xl
        overflow-hidden origin-top transition-all duration-300 z-50
        ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {productosSubmenu.map((item, index) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={() => {
              setOpen(false);
              onLinkClick?.();
            }}
            className={({ isActive }) => `
              block px-6 py-3 text-center font-serif text-[0.82rem]
              tracking-[0.08em] uppercase no-underline transition-all duration-200
              ${
                index !== productosSubmenu.length - 1
                  ? "border-b border-[#c8895a18]"
                  : ""
              }
              ${
                isActive
                  ? "bg-[#c8895a] text-white"
                  : "text-[#c4a98a] hover:bg-[#c8895a] hover:text-white"
              }
            `}
          >
            {item.text}
          </NavLink>
        ))}
      </div>
    </li>
  );
}

function NavbarMenu({ onLinkClick }) {
  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-7xl mx-auto px-6">
        
        {/* Left */}
        <ul className="flex items-center gap-8 justify-end list-none p-0 m-0">
          {menuLeft.map((item) => (
            <li key={item.href}>
              <NavbarLink
                href={item.href}
                text={item.text}
                onClick={onLinkClick}
              />
            </li>
          ))}

          <ProductosDropdown onLinkClick={onLinkClick} />
        </ul>

        {/* Logo */}
        <div className="flex justify-center px-8">
          <Logo />
        </div>

        {/* Right */}
        <ul className="flex items-center gap-8 justify-start list-none p-0 m-0">
          {menuRight.map((item) => (
            <li key={item.href}>
              <NavbarLink
                href={item.href}
                text={item.text}
                onClick={onLinkClick}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-5">
        {menuLeft.map((item) => (
          <NavbarLink
            key={item.href}
            href={item.href}
            text={item.text}
            onClick={onLinkClick}
          />
        ))}

        <ProductosDropdown mobile onLinkClick={onLinkClick} />

        {menuRight.map((item) => (
          <NavbarLink
            key={item.href}
            href={item.href}
            text={item.text}
            onClick={onLinkClick}
          />
        ))}
      </div>
    </>
  );
}

export { NavbarMenu };