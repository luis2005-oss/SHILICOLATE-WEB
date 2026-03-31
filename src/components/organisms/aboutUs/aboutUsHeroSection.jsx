const GOLD          = "#d4af37"
const GOLD_GRADIENT = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"
const GOLD_LINE     = "linear-gradient(to right, #d4af37, #c8895a)"

function InfoCard({ title, text, tags }) {
  return (
    <div
      className="bg-[rgba(26,13,8,0.6)] rounded-lg p-8 flex flex-col gap-4 relative overflow-hidden"
      style={{ border: `0.5px solid ${GOLD}33` }}
    >
      {/* Esquinas doradas */}
      <span className="absolute top-0 left-0 w-7 h-7 pointer-events-none" style={{ borderTop: `1.5px solid ${GOLD}99`, borderLeft: `1.5px solid ${GOLD}99` }} />
      <span className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none" style={{ borderBottom: `1.5px solid ${GOLD}99`, borderRight: `1.5px solid ${GOLD}99` }} />

      <span className="font-serif text-[11px] tracking-[0.22em] uppercase" style={{ color: GOLD }}>
        {title}
      </span>
      <div className="w-7 h-px" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
      <p className="font-serif font-light text-[0.92rem] text-[#c4a98a] leading-[1.75] m-0">{text}</p>
      <span
        className="inline-block w-fit font-serif text-[0.75rem] tracking-wide px-3 py-1 rounded-[1px]"
        style={{ background: `linear-gradient(135deg,${GOLD}22,#c8895a22)`, color: GOLD, border: `0.5px solid ${GOLD}44` }}
      >
        {tags}
      </span>
    </div>
  )
}

function AboutUsHeroSection() {
  const mision = `Crear productos chocolateros artesanales y sostenibles que deleiten los sentidos
y satisfagan a nuestros clientes, fomentando la innovación, la calidad y el respeto
por el medio ambiente y nuestra cultura Celendina.`

  const vision = `Ser la empresa líder en la industria chocolatera de la región, reconocida por
chocolates de alta calidad que inspiran momentos memorables y reflejan nuestro
compromiso con el bienestar de nuestra comunidad.`

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center pt-28 pb-20 px-4">
      <div className="absolute inset-0 z-0">
        <img src="../../../FONDO-NOSOTROS.jpg" alt="Fondo" className="w-full h-full object-cover object-center" style={{ filter: "sepia(30%) brightness(0.35)" }} />
        <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(26,13,8,0.04) 2px,rgba(26,13,8,0.04) 4px)" }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-4" data-aos="fade-down" data-aos-duration="900">
          <h1 className="font-serif font-bold text-center leading-tight text-[clamp(2.4rem,5vw,4rem)] text-[#f5e8d5] m-0">
            Más que chocolate,{" "}
            <em className="italic font-normal" style={{ background: GOLD_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              una experiencia
            </em>
          </h1>
          {/* Línea con diamante */}
          <div className="flex items-center gap-3 w-40">
            <div className="flex-1 h-px opacity-70" style={{ background: GOLD_LINE }} />
            <div className="w-1.5 h-1.5 flex-shrink-0 bg-[#d4af37]" style={{ transform: "rotate(45deg)" }} />
            <div className="flex-1 h-px opacity-70" style={{ background: `linear-gradient(to left, ${GOLD}, #c8895a)` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center w-full">
          <div data-aos="fade-right" data-aos-duration="900" data-aos-delay="200">
            <InfoCard title="Misión" text={mision} tags="Artesanal · Sostenible" />
          </div>

          <div className="flex flex-col items-center gap-3 order-first md:order-none" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="350">
            <div className="w-px h-8" style={{ background: `linear-gradient(to bottom, transparent, ${GOLD})` }} />
            <img
              src="/CACAO.png" alt="Granos de cacao"
              className="w-36 md:w-40 hover:scale-[1.06] hover:rotate-[-15deg] transition-transform duration-500"
              style={{ filter: "drop-shadow(0 12px 32px rgba(212,175,55,0.25))" }}
            />
            <div className="w-1.5 h-1.5 bg-[#d4af37] opacity-70" style={{ transform: "rotate(45deg)" }} />
            <div className="w-px h-8" style={{ background: `linear-gradient(to bottom, ${GOLD}, transparent)` }} />
          </div>

          <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
            <InfoCard title="Visión" text={vision} tags="Calidad · Comunidad" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutUsHeroSection }