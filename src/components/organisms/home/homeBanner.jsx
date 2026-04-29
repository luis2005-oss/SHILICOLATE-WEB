import { BannerButtons } from "../../molecules/home/bannerButtons"

const GOLD          = "#d4af37"
const GOLD_GRADIENT = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"
const GOLD_LINE     = "linear-gradient(to right, #d4af37, #c8895a)"

function HomeBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0d08]">

      {/* Imagen de fondo — ocupa todo */}
      <div
        className="absolute inset-0 bg-right bg-cover bg-no-repeat transition-all duration-300"
        style={{ backgroundImage: "url('/HOME_LOGO.png')", filter: "sepia(25%) brightness(0.45)" }}
        data-aos="zoom-in"
        data-aos-duration="1500"
      />

      {/* Degradado direccional */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(27,15,8,0.98)] via-[rgba(26,13,8,0.5)] to-transparent" />

      {/* Línea vertical dorada */}
      <div
        className="absolute left-6 sm:left-10 top-[30%] bottom-[30%] w-px opacity-25"
        style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }}
      />

      {/* Partículas doradas */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[
          { top: "15%", left: "62%", size: 3 },
          { top: "70%", left: "76%", size: 3 },
          { top: "40%", left: "86%", size: 5, opacity: 0.2 },
          { top: "25%", left: "92%", size: 3 },
          { top: "55%", left: "58%", size: 2 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size, background: GOLD, opacity: p.opacity ?? 0.35 }}
          />
        ))}
      </div>

      {/* Contenido */}
      <article
        className="absolute inset-0 z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-20 max-w-2xl pt-24 md:pt-0"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <h1
          className="font-serif font-bold leading-none tracking-tight text-[clamp(2.2rem,8vw,5.5rem)] text-[#f5e8d5] m-0 mt-7.5"
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

        <div
          className="w-14 h-px my-6 opacity-80"
          style={{ background: GOLD_LINE }}
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="300"
        />

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

        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600">
          <BannerButtons />
        </div>
      </article>

    </section>
  )
}

export { HomeBanner }