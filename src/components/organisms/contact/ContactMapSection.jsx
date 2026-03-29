import { Title } from "../../atoms/titles";

function ContactMapSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FFBB00] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Título - Aparece con fade-down */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Title
            level="h2"
            text="Nuestra Ubicación"
            variant="tertiary"
            className="font-joti text-center mb-10 text-4xl md:text-5xl drop-shadow-md"
          />
        </div>

        {/* Mapa - Aparece acercándose con zoom progresivo */}
        <div 
          className="w-full h-[450px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#FFBB00]/30 relative group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,187,0,0.15)] hover:border-[#FFBB00]/60"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
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
            className="filter grayscale-[0.2] contrast-[1.1] opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
          ></iframe>

          {/* Badge de dirección - Aparece desde abajo después del zoom */}
          <div 
            className="absolute bottom-6 left-6 bg-[#06141F] text-[#FFBB00] px-6 py-2 rounded-full border border-[#FFBB00] shadow-xl font-bold text-sm tracking-wide hidden md:block"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1500"
          >
            📍 Av. Amazonas 513 - Celendín
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactMapSection };