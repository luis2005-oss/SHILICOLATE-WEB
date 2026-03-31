import { Link } from "react-router-dom"

const GOLD_GRAD = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"

function BannerButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

      {/* Botón primario — relleno dorado */}
      <Link
        to="/letter"
        className="
          inline-flex items-center justify-center gap-2
          font-serif text-[0.82rem] tracking-[0.14em] uppercase
          text-[#1a0d08] px-7 py-3 rounded-[2px]
          border-none cursor-pointer no-underline
          transition-[opacity,transform] duration-200
          hover:opacity-90 hover:-translate-y-px
          active:scale-[0.99]
        "
        style={{ background: GOLD_GRAD }}
      >
        Ver productos
        {/* Flecha pequeña */}
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Botón secundario — contorno dorado */}
      <Link
        to="/bookings"
        className="
          inline-flex items-center justify-center gap-2
          font-serif text-[0.82rem] tracking-[0.14em] uppercase
          text-[#d4af37] px-7 py-3 rounded-[2px]
          bg-transparent cursor-pointer no-underline
          transition-[border-color,color,transform] duration-200
          hover:text-[#f0d060] hover:-translate-y-px
          active:scale-[0.99]
        "
        style={{ border: "0.5px solid #d4af3766" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "#d4af37"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "#d4af3766"}
      >
        Reconocimientos
      </Link>

    </div>
  )
}

export { BannerButtons }