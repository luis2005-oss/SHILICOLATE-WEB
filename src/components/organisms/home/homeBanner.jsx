import { BannerButtons } from "../../molecules/home/bannerButtons";

const GOLD = "#d4af37";

const GOLD_GRADIENT =
  "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)";

const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)";

function HomeBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0d08]">
      {/* Imagen principal */}
      <img
        src="/REVIEW-4.webp"
        alt="Shilicolate"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-center
          sm:object-right
          transition-all duration-300
        "
        style={{
          filter: "sepia(25%) brightness(0.45)",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(27,15,8,0.98), rgba(26,13,8,0.7), transparent)",
        }}
      />

      {/* Línea vertical */}
      <div
        className="
          absolute left-6 sm:left-10
          top-[30%] bottom-[30%]
          w-px opacity-25
        "
        style={{
          background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`,
        }}
      />

      {/* Partículas */}
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
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: GOLD,
              opacity: p.opacity ?? 0.35,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <article
        className="
          absolute inset-0 z-10
          flex flex-col justify-center
          px-8 sm:px-12 lg:px-20
          max-w-2xl
          pt-24 md:pt-0
        "
      >
        <h1
          className="
            font-serif font-bold leading-none tracking-tight
            text-[clamp(2.2rem,8vw,5.5rem)]
            text-[#f5e8d5]
            m-0 mt-7.5
          "
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
          className="w-40 sm:w-56 md:w-72 lg:w-103 h-px my-6 opacity-80"
          style={{ background: GOLD_LINE }}
        />

        <p
          className="
            font-serif font-light
            text-[1.08rem]
            leading-[1.75]
            text-[#c4a98a]
            max-w-md mb-10
          "
        >
          Celendín, tierra reconocida internacionalmente por el Sombrero de Paja
          Toquilla y por su Chocolate. En ese escenario nace Shilicolate, una
          marca que rescata la Calidad del Chocolate de nuestra Zona, transformado
          artesanalmente para ofrecer El verdadero Sabor del Chocolate shilico.
          Contamos con una variedad de productos por descubrir ✦✦✦
        </p>

        <BannerButtons />
      </article>
    </section>
  );
}

export { HomeBanner };
