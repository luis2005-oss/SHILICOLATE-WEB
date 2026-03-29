import { useState } from "react"
import { CgMenu, CgClose } from "react-icons/cg"
import { NavbarMenu } from "../molecules/desktopMenu"
import { CarNavbar } from "../molecules/login"

function Navbar({ setModalIsOpen, setCartShopOpen, setRegisterIsOpen }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu  = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 w-full bg-[#1a0d08] border-b border-[#c8895a33] z-[100]">
      <div className="flex items-center justify-between px-6 md:px-8 h-[68px] max-w-[1280px] mx-auto">

        {/* ── MÓVIL: logo izquierda ── */}
        <a href="/" className="md:hidden flex items-center gap-2">
          <img src="/LOGO.png" alt="Shilicolate" className="w-9 h-9 object-contain" />
          <span className="font-serif italic text-[0.75rem] tracking-[0.18em] text-[#c8895a]">
            Shilicolate
          </span>
        </a>

        {/* ── DESKTOP: izquierda — ubicación ── */}
        <div className="hidden md:flex items-center flex-1">
          <a
            href="https://maps.app.goo.gl/DrRYNZjjMCFXWKxTA"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 opacity-75 hover:opacity-100 transition-opacity duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8895a] flex-shrink-0" />
            <small className="font-serif text-[0.72rem] tracking-[0.08em] text-[#c4a98a] whitespace-nowrap">
              Av. Amazonas 513 — Celendín
            </small>
          </a>
        </div>

        {/* ── DESKTOP: centro — menú + logo ── */}
        <div className="hidden md:flex items-center gap-2 flex-2 justify-center">
          <NavbarMenu onLinkClick={closeMenu} />
        </div>

        {/* ── DESKTOP: derecha — carrito + login ── */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <CarNavbar
            setModalIsOpen={setModalIsOpen}
            setCartShopOpen={setCartShopOpen}
            setRegisterIsOpen={setRegisterIsOpen}
          />
        </div>

        {/* ── MÓVIL: hamburguesa derecha ── */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#c8895a] p-2 hover:bg-white/5 rounded transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <CgClose size={24} /> : <CgMenu size={24} />}
        </button>
      </div>

      {/* ── MENÚ MÓVIL ── */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-[#120804] border-t border-[#c8895a22] px-6 py-5 space-y-5">

          {/* Ubicación */}
          <div className="pb-4 border-b border-[#c8895a22]">
            <a
              href="https://maps.app.goo.gl/DrRYNZjjMCFXWKxTA"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8895a] flex-shrink-0" />
              <small className="font-serif text-[0.72rem] tracking-[0.08em] text-[#c4a98a]">
                Av. Amazonas 513 — Celendín
              </small>
            </a>
          </div>

          {/* Links */}
          <div className="pb-4 border-b border-[#c8895a22]">
            <NavbarMenu onLinkClick={closeMenu} />
          </div>

          {/* Carrito + login */}
          <div className="pt-1">
            <CarNavbar
              setModalIsOpen={setModalIsOpen}
              setCartShopOpen={setCartShopOpen}
              setRegisterIsOpen={setRegisterIsOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }