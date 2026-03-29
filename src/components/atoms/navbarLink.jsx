import { Link, useLocation } from "react-router-dom";

function NavbarLink({ href, text, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`
        text-[14px] tracking-widest uppercase
        block px-4 py-2.5 md:px-0 md:py-0
        ${isActive ? "text-white" : "text-[#CCA047]"}
        hover:text-white
        font-medium
        font-serif
        no-underline
        transition-colors duration-200
        rounded-lg md:rounded-none
        ${isActive ? "bg-white/10 md:bg-transparent" : "hover:bg-white/5 md:hover:bg-transparent"}
        ${isActive ? "md:border-b-2 md:border-white" : ""}
      `}
    >
      {text}
    </Link>
  );
}

export { NavbarLink };
