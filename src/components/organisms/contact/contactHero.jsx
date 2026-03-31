const GOLD      = "#d4af37"
const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)"
const GOLD_GRAD = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"

function ContactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0d08] flex items-center justify-center">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0" data-aos="zoom-in" data-aos-duration="1500">
        <img
          src="/FONDO-CONTACT.jpg"
          alt="Fondo Contacto"
          className="w-full h-full object-cover object-center"
          style={{ filter: "sepia(25%) brightness(0.38)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,13,8,0.7)] via-[rgba(26,13,8,0.45)] to-[rgba(26,13,8,0.75)]" />
      </div>

      {/* Líneas verticales con degradado dorado */}
      <div
        className="absolute left-10 top-[20%] bottom-[25%] w-px z-10 opacity-20"
        style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }}
      />
      <div
        className="absolute right-10 top-[20%] bottom-[25%] w-px z-10 opacity-20"
        style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }}
      />

      {/* Partículas doradas */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[
          { top: "18%", left: "12%", size: 3 },
          { top: "72%", left: "88%", size: 3 },
          { top: "35%", left: "92%", size: 2, opacity: 0.2 },
          { top: "60%", left: "8%",  size: 2 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size, background: GOLD, opacity: p.opacity ?? 0.3 }}
          />
        ))}
      </div>

      {/* Letra decorativa */}
      <span
        aria-hidden="true"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 font-serif italic text-[16rem] leading-none select-none pointer-events-none z-10 whitespace-nowrap"
        style={{ color: GOLD, opacity: 0.025 }}
      >
        C
      </span>

      {/* Contenido centrado */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl pb-16">

        {/* Título con gradiente dorado */}
        <h1
          className="font-serif font-bold leading-none tracking-tight text-[clamp(3.5rem,9vw,6.5rem)] text-[#f5e8d5] m-0"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Contác
          <em
            className="italic font-normal"
            style={{
              background: GOLD_GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            tanos
          </em>
        </h1>

        {/* Línea con diamante central */}
        <div
          className="flex items-center gap-3 my-6"
          style={{ width: "120px" }}
          data-aos="fade"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <div className="flex-1 h-px opacity-70" style={{ background: GOLD_LINE }} />
          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: GOLD, transform: "rotate(45deg)" }} />
          <div className="flex-1 h-px opacity-70" style={{ background: `linear-gradient(to left, ${GOLD}, #c8895a)` }} />
        </div>

        <p
          className="font-serif font-light text-[1.05rem] text-[#c4a98a] leading-[1.8] max-w-lg m-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          ¿Tienes alguna pregunta o sugerencia? Estamos aquí para escucharte
          y hacer de tu experiencia algo inolvidable.
        </p>
      </div>

      {/* Curva decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-30 leading-[0]">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#1a0d08" />
        </svg>
      </div>

    </section>
  )
}

export { ContactHero }