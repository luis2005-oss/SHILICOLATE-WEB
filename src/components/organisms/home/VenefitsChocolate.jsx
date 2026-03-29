import { GiChocolateBar   } from "react-icons/gi"
import { FaHeartCirclePlus } from "react-icons/fa6"
import { FaSmileBeam, FaBolt, FaLeaf, FaStar } from "react-icons/fa"

const benefits = [
  {
    num: "01",
    icon: <FaHeartCirclePlus />,
    title: "Más placer",
    text: "Despierta los sentidos y convierte cualquier momento en una experiencia deliciosa.",
  },
  {
    num: "02",
    icon: <FaSmileBeam />,
    title: "Mejor estado de ánimo",
    text: "El cacao estimula hormonas que reducen el estrés y aumentan la felicidad.",
  },
  {
    num: "03",
    icon: <FaBolt />,
    title: "Energía natural",
    text: "Aporta vitalidad para disfrutar el día con mejor actitud y bienestar.",
  },
  {
    num: "04",
    icon: <FaLeaf />,
    title: "Antioxidantes naturales",
    text: "El cacao protege las células y contribuye al bienestar integral.",
  },
  {
    num: "05",
    icon: <GiChocolateBar />,
    title: "Detalles que enamoran",
    text: "Shilibonbones, chocotejas y chocolates en caja — cada uno un regalo perfecto.",
  },
  {
    num: "06",
    icon: <FaStar />,
    title: "Momentos únicos",
    text: "El chocolate une personas, acompaña conversaciones y crea recuerdos inolvidables.",
  },
]

function BenefitCard({ num, icon, title, text }) {
  return (
    <div
      className="
        relative bg-[#fdf6ee] hover:bg-[#fff9f3]
        p-8 flex flex-col gap-3
        transition-colors duration-200
      "
    >
      {/* Número decorativo */}
      <span
        aria-hidden="true"
        className="
          absolute top-5 right-5
          font-serif italic text-[1.75rem] leading-none
          text-[#c8895a] opacity-[0.1] select-none
        "
      >
        {num}
      </span>

      {/* Icono */}
      <div
        className="
          w-10 h-10 rounded-lg bg-[#1a0d08]
          flex items-center justify-center
          text-[#c8895a] text-[18px] flex-shrink-0
        "
      >
        {icon}
      </div>

      {/* Texto */}
      <p className="font-serif font-bold text-[1rem] text-[#1a0d08] leading-snug m-0">
        {title}
      </p>
      <p className="font-serif font-light text-[0.88rem] text-[#7a5c45] leading-[1.65] m-0">
        {text}
      </p>
    </div>
  )
}

function VenefitsChocolate() {
  return (
    <section className="bg-[#fdf6ee] py-20 px-4">

      {/* Cabecera */}
      <div
        className="text-center mb-16"
        data-aos="fade-down"
        data-aos-duration="900"
      >
        <h2 className="font-serif font-bold text-[clamp(2rem,4vw,3rem)] text-[#1a0d08] leading-tight m-0">
          El chocolate{" "}
          <em className="italic font-normal text-[#c8895a]">que transforma</em>
          <br />
          tu día
        </h2>
      </div>

      {/* Grilla de beneficios */}
      <div
        className="
          grid grid-cols-2 md:grid-cols-3
          max-w-4xl mx-auto
          border border-[#e8d8c4] rounded-xl overflow-hidden
          gap-px bg-[#e8d8c4]
        "
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >
        {benefits.map((b) => (
          <BenefitCard key={b.num} {...b} />
        ))}
      </div>

      {/* Imagen + cita */}
      <div
        className="
          flex flex-col sm:flex-row items-center justify-center
          gap-8 max-w-4xl mx-auto mt-10 px-4
        "
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <img
          src="/VENEFITIONS.png"
          alt="Producto Shilicolate"
          className="
            w-32 sm:w-36
            drop-shadow-[0_8px_20px_rgba(26,13,8,0.18)]
            hover:scale-105 hover:-translate-y-1
            transition-transform duration-400
          "
        />
        <blockquote
          className="
            font-serif italic text-[clamp(1.1rem,2vw,1.35rem)]
            text-[#1a0d08] leading-relaxed m-0
            border-l-2 border-[#c8895a] pl-5
            sm:border-l-2 sm:border-t-0
          "
        >
          "Cada pieza de Shilicolate está pensada<br />
          para regalarte un momento especial."
        </blockquote>
      </div>

    </section>
  )
}

export { VenefitsChocolate }