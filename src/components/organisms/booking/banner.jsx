function Article({ ...props }) {
  return (
    <article
      className="
        absolute inset-0 z-10
        flex flex-col justify-center
        px-8 sm:px-12 lg:px-20
        max-w-2xl
        pt-24 md:pt-0
      "
      {...props}
    >
      {/* Eyebrow */}
      <span
        className="
          inline-block mb-6 w-fit
          font-serif text-[11px] tracking-[0.25em] uppercase
          text-[#c8895a] border-b border-[#c8895a55] pb-1
        "
      >
        Shilicolate · Distinción
      </span>

      {/* Título */}
      <h1
        className="
          font-serif font-bold leading-tight tracking-tight
          text-[clamp(2.2rem,4.5vw,3.5rem)]
          text-[#f5e8d5] m-0
        "
      >
        Nuestros{" "}
        <em className="italic font-normal text-[#c8895a]">
          reconocimientos
        </em>
      </h1>

      {/* Divisor */}
      <div className="w-12 h-px bg-[#c8895a] opacity-60 my-6" />

      {/* Descripción */}
      <p
        className="
          font-serif font-light text-[1rem] text-[#c4a98a]
          leading-[1.75] max-w-md m-0
        "
      >
        Reconocimientos que respaldan nuestra calidad, esfuerzo
        y compromiso con cada cliente.
      </p>
    </article>
  )
}

function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0d08]">

      {/* Imagen de fondo */}
      <div
        className="
          absolute inset-0
          bg-[url('/IMG-REC.jpg')] bg-right bg-cover bg-no-repeat
          [filter:sepia(25%)_brightness(0.45)]
          transition-all duration-300
        "
        data-aos="zoom-in"
        data-aos-duration="1500"
      />

      {/* Degradado direccional */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[rgba(26,13,8,0.95)]
          via-[rgba(26,13,8,0.4)]
          to-transparent
        "
      />

      {/* Línea vertical decorativa */}
      <div
        className="
          absolute left-6 sm:left-10
          top-[30%] bottom-[30%]
          w-px bg-[#c8895a] opacity-20
        "
      />

      {/* Letra decorativa de fondo */}
      <span
        aria-hidden="true"
        className="
          absolute bottom-6 right-8
          font-serif italic text-[8rem] leading-none
          text-[#c8895a] opacity-[0.04]
          select-none pointer-events-none z-10
        "
      >
        R
      </span>

      {/* Contenido */}
      <Article
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      />

    </section>
  )
}

export { Banner }