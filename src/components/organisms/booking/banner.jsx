const GOLD = "#d4af37";
const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)";
const GOLD_GRAD = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)";

function Article({ ...props }) {
  return (
    <article
      className="
        absolute inset-0 z-10
        flex flex-col justify-center
        px-8 sm:px-12 lg:px-20
        max-w-2xl
        pt-24 md:pt-0
        ml-15
      "
      {...props}
    >
      {/* Eyebrow dorado */}

      {/* Título */}
      <h1 className="font-serif font-bold leading-tight tracking-tight text-[clamp(2.2rem,4.5vw,4rem)] text-[#f5e8d5] m-0">
        Nuestros{" "}
        <em
          className="italic font-normal"
          style={{
            background: GOLD_GRAD,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Reconocimientos
        </em>
      </h1>

      {/* Línea */}
      <div
        className="w-12 h-px my-6 opacity-75"
        style={{ background: GOLD_LINE }}
      />

      {/* Texto */}
      <p className="font-serif font-light text-[1.3rem] text-[#c4a98a] leading-[1.75] max-w-md m-0 ml-2.5">
        Que respaldan nuestra calidad, esfuerzo
        y compromiso con cada uno de Nuestros Clientes.
      </p>
    </article>
  );
}

function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0d08]">

      {/* Imagen optimizada */}
      <img
        src="/IMG-REC.webp"
        alt="Reconocimientos Shilicolate"
        width="1920"
        height="1080"
        fetchPriority="high"
        decoding="async"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-right
          transition-all duration-300
        "
        style={{
          filter: "sepia(25%) brightness(0.45)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,13,8,0.95)] via-[rgba(26,13,8,0.4)] to-transparent" />

      {/* Línea vertical */}
      <div
        className="absolute left-6 sm:left-10 top-[30%] bottom-[30%] w-px opacity-25"
        style={{
          background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`,
        }}
      />

      {/* Partículas */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[
          { top: "20%", left: "55%", size: 3 },
          { top: "65%", left: "70%", size: 3 },
          { top: "45%", left: "80%", size: 5, opacity: 0.15 },
          { top: "30%", left: "88%", size: 2 },
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
              opacity: p.opacity ?? 0.3,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <Article
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      />
    </section>
  );
}

export { Banner };