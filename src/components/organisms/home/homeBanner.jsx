import { BannerButtons } from "../../molecules/home/bannerButtons"

/* Color tokens dorados */
const GOLD = "#d4af37"
const GOLD_GRADIENT = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"
const GOLD_LINE     = "linear-gradient(to right, #d4af37, #c8895a)"

function HomeBanner() {
  return (
    <section className="relative w-full min-h-[520px] lg:h-screen bg-[#1a0d08] flex overflow-hidden">

      {/* Partículas doradas decorativas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[
          { top: "15%", left: "62%", size: 3 },
          { top: "70%", left: "76%", size: 3 },
          { top: "40%", left: "86%", size: 5, opacity: 0.2 },
          { top: "25%", left: "92%", size: 3 },
          { top: "55%", left: "58%", size: 2 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#d4af37]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size, opacity: p.opacity ?? 0.35 }}
          />
        ))}
      </div>

      {/* ── Columna izquierda ── */}
      <article className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 relative z-10">

        {/* Título con gradiente dorado en la cursiva */}
        <h1
          className="font-serif font-bold leading-none tracking-tight text-[clamp(3.5rem,6vw,5.5rem)] text-[#f5e8d5] m-0"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          Shili
          <em
            className="italic font-normal"
            style={{
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            colate
          </em>
        </h1>

        {/* Línea degradada dorado → ámbar */}
        <div
          className="w-14 h-px my-6 opacity-80"
          style={{ background: GOLD_LINE }}
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="300"
        />

        {/* Descripción */}
        <p
          className="font-serif font-light text-[1.05rem] leading-[1.75] text-[#c4a98a] max-w-md mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          Una experiencia llena de sabor y calidez. Shilibonbones, chocotejas,
          chocolate en chapa y chocolates en caja — elaborados para despertar
          tus sentidos y regalarte un momento especial.
        </p>

        {/* Botones */}
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600">
          <BannerButtons />
        </div>
      </article>

      {/* ── Columna derecha: imagen ── */}
      <div className="hidden md:block flex-[0_0_55%] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 sepia-[30%]"
          style={{ backgroundImage: "url('/HOME_LOGO.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d08] via-[#1a0d0855] to-transparent" />
      </div>

    </section>
  )
}

export { HomeBanner }