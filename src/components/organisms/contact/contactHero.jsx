function ContactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0d08] flex items-center justify-center">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          src="/FONDO-CONTACT.jpg"
          alt="Fondo Contacto"
          className="w-full h-full object-cover object-center [filter:sepia(25%)_brightness(0.38)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,13,8,0.7)] via-[rgba(26,13,8,0.45)] to-[rgba(26,13,8,0.75)]" />
      </div>

      {/* Líneas verticales decorativas */}
      <div className="absolute left-10 top-[20%] bottom-[25%] w-px bg-[#c8895a] opacity-15 z-10" />
      <div className="absolute right-10 top-[20%] bottom-[25%] w-px bg-[#c8895a] opacity-15 z-10" />  

      {/* Contenido centrado */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl pb-16 gap-0">

        <h1
          className="
            font-serif font-bold leading-none tracking-tight
            text-[clamp(3.5rem,9vw,6.5rem)]
            text-[#f5e8d5] m-0
          "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Contác
          <em className="italic font-normal text-[#c8895a]">tanos</em>
        </h1>

        <div
          className="w-10 h-px bg-[#c8895a] opacity-65 my-6"
          data-aos="fade"
          data-aos-duration="600"
          data-aos-delay="600"
        />

        <p
          className="
            font-serif font-light text-[1.25rem] text-[#c4a98a]
            leading-[1.8] max-w-lg m-0
          "
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
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-14 md:h-20"
        >
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#1a0d08" />
        </svg>
      </div>

    </section>
  )
}

export { ContactHero }