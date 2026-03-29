import { AboutUsMainTitle } from "../../atoms/aboutUs/aboutUsMainTitle"
import { AboutUsFloatingImage } from "../../atoms/aboutUs/aboutUsFloatingImage"
import { AboutUsInfoCard } from "../../molecules/aboutUs/aboutUsInfoCard"

function InfoCard({ title, text, tags }) {
  return (
    <div
      className="
        bg-[rgba(26,13,8,0.6)] border border-[#c8895a33]
        rounded-lg p-8 flex flex-col gap-4
      "
    >
      <span className="font-serif text-[11px] tracking-[0.22em] uppercase text-[#c8895a]">
        {title}
      </span>
      <div className="w-8 h-px bg-[#c8895a] opacity-50" />
      <p className="font-serif font-light text-[0.92rem] text-[#c4a98a] leading-[1.75]">
        {text}
      </p>
      <span
        className="
          inline-block w-fit font-serif text-[0.75rem] tracking-wide
          px-3 py-1 rounded-[2px]
          bg-[#c8895a22] text-[#c8895a] border border-[#c8895a44]
        "
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
    <section
      className="
        relative w-full min-h-screen overflow-hidden
        flex flex-col items-center justify-center
        pt-28 pb-20 px-4
      "
    >
      {/* Fondo con imagen */}
      <div className="absolute inset-0 z-0">
        <img
          src="../../../FONDO-NOSOTROS.jpg"
          alt="Fondo"
          className="w-full h-full object-cover object-center [filter:sepia(30%)_brightness(0.35)]"
        />
        {/* Scanlines decorativas */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(26,13,8,0.04) 2px,rgba(26,13,8,0.04) 4px)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-14">

        {/* Cabecera */}
        <div
          className="flex flex-col items-center gap-4"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <span
            className="
              font-serif text-[11px] tracking-[0.28em] uppercase
              text-[#c8895a] border-b border-[#c8895a55] pb-1
            "
          >
            Nuestra historia
          </span>
          <h1
            className="
              font-serif font-bold text-center leading-tight
              text-[clamp(2.4rem,5vw,4rem)] text-[#f5e8d5]
            "
          >
            Más que chocolate,{" "}
            <em className="italic font-normal text-[#c8895a]">una experiencia</em>
          </h1>
          <div className="w-12 h-px bg-[#c8895a] opacity-60" />
        </div>

        {/* Cards + imagen central */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]
            gap-6 items-center w-full
          "
        >
          <div data-aos="fade-right" data-aos-duration="900" data-aos-delay="200">
            <InfoCard title="Misión" text={mision} tags="Artesanal · Sostenible" />
          </div>

          {/* Imagen cacao */}
          <div
            className="flex items-center justify-center order-first md:order-none"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="350"
          >
            <img
              src="/CACAO.png"
              alt="Granos de cacao"
              className="
                w-36 md:w-40
                [filter:drop-shadow(0_12px_32px_rgba(200,137,90,0.25))]
                hover:scale-[1.06] hover:rotate-[-2deg]
                transition-transform duration-500
              "
            />
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
