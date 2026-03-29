import { NavLink } from "react-router-dom"
import { Logo } from "./logo"

const menu1 = [
  { text: "Productos",     href: "/letter"   },
  { text: "Nosotros",      href: "/aboutus"  },
]

const menu2 = [
  { text: "Reconocimientos", href: "/bookings" },
  { text: "Contacto",        href: "/contact"  },
]

function NavbarLink({ href, text, onClick }) {
  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) => `
        relative font-serif text-[0.78rem] tracking-[0.14em] uppercase
        transition-colors duration-200 no-underline
        after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:right-0
        after:h-px after:bg-[#c8895a] after:transition-transform after:duration-250
        after:origin-left
        ${isActive
          ? "text-[#f5e8d5] after:scale-x-100"
          : "text-[#c4a98a] hover:text-[#f5e8d5] after:scale-x-0 hover:after:scale-x-100"
        }
      `}
    >
      {text}
    </NavLink>
  )
}

function NavbarMenu({ onLinkClick }) {
  return (
    <>
      {/* Desktop */}
      <ul className="hidden md:flex items-center justify-between w-full max-w-6xl mx-auto gap-5">

        {/* IZQUIERDA */}
        <div className="flex gap-8">
          {menu1.map((item) => (
            <li key={item.href}>
              <NavbarLink href={item.href} text={item.text} onClick={onLinkClick} />
            </li>
          ))}
        </div>

        {/* LOGO */}
        <div className="flex items-start shrink-0">
          <Logo className="mx-auto mt-10" />
        </div>

        {/* DERECHA */}
        <div className="flex gap-8">
          {menu2.map((item) => (
            <li key={item.href}>
              <NavbarLink href={item.href} text={item.text} onClick={onLinkClick} />
            </li>
          ))}
        </div>

      </ul>

      {/* Móvil */}
      <div className="md:hidden flex flex-col gap-4">
        {[...menu1, ...menu2].map((item) => (
          <NavbarLink key={item.href} href={item.href} text={item.text} onClick={onLinkClick} />
        ))}
      </div>
    </>
  )
}

export { NavbarMenu }