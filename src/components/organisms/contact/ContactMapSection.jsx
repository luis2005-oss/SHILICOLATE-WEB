function ContactMapSection() {
  return (
    <section className="bg-[#fdf6ee] py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Cabecera */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <span
            className="
              inline-block mb-4
              font-serif text-[11px] tracking-[0.25em] uppercase
              text-[#c8895a] border-b border-[#c8895a55] pb-1
            "
          >
            Encuéntranos
          </span>
          <h2 className="font-serif font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a0d08] leading-tight m-0">
            Nuestra <em className="italic font-normal text-[#c8895a]">ubicación</em>
          </h2>
        </div>

        {/* Mapa */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
        >
          {/* Contenedor del mapa */}
          <div
            className="
              group relative w-full h-[450px]
              rounded-t-[10px] overflow-hidden
              border border-[#e8d8c4] border-b-0
              transition-all duration-500
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.667209129342!2d-78.143618!3d-6.8706073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3cdc4f7357899%3A0xf6f379f8c0c8b2e8!2sShilicolate!5e0!3m2!1ses-419!2spe!4v1772557804244!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Shilicolate - AV. Amazonas 513, Celendín"
              className="
                block w-full h-full
                [filter:sepia(15%)_contrast(1.05)]
                group-hover:[filter:sepia(0%)_contrast(1.05)]
                transition-[filter] duration-400
              "
            />

            {/* Badge dirección */}
            <div
              className="
                absolute bottom-5 left-5
                flex items-center gap-2
                bg-[#1a0d08] border border-[#c8895a55]
                px-4 py-1.5 rounded-[2px]
              "
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="1200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8895a] flex-shrink-0" />
              <span className="font-serif font-light text-[0.82rem] tracking-wide text-[#c8895a]">
                Av. Amazonas 513 — Celendín
              </span>
            </div>
          </div>

          {/* Fila de info debajo del mapa */}
          <div className="flex border border-[#e8d8c4] rounded-b-[10px] overflow-hidden">
            {[
              { label: "Dirección",  value: "Av. Amazonas 513, Celendín" },
              { label: "Teléfono",   value: "+51 932 983 227" },
              { label: "Correo",     value: "shilicolateoficial@gmail.com" },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className={`
                  flex-1 bg-[#1a0d08] px-5 py-4
                  flex flex-col gap-0.5
                  ${i < arr.length - 1 ? "border-r border-[#c8895a22]" : ""}
                `}
              >
                <span className="font-serif text-[10px] tracking-[0.2em] uppercase text-[#c8895a] opacity-70">
                  {item.label}
                </span>
                <span className="font-serif font-light text-[0.88rem] text-[#f5e8d5]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export { ContactMapSection }