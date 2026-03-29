import { useState, useEffect, useRef } from "react"
import { MdClose } from "react-icons/md"
import { createPortal } from "react-dom"

function RecognitionCard({ image, title, description, num }) {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") setIsOpen(false) }
    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const modalContent = isOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[95vw] max-h-[95vh] flex flex-col items-center justify-center outline-none gap-5"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Botón cerrar */}
        <button
          className="
            absolute top-4 right-4 z-10
            w-10 h-10 rounded-full
            bg-[rgba(26,13,8,0.8)] border border-[#c8895a55]
            flex items-center justify-center
            text-[#c8895a] hover:bg-[#c8895a] hover:text-[#1a0d08]
            transition-colors duration-200
          "
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar"
        >
          <MdClose className="w-5 h-5" />
        </button>

        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[78vh] object-contain rounded-lg"
        />

        {/* Pie del modal */}
        <div className="text-center">
          <p className="font-serif italic text-[0.7rem] tracking-[0.2em] text-[#c8895a] mb-1">
            — {num}
          </p>
          <h3 className="font-serif font-bold text-[1.1rem] text-[#f5e8d5] mb-1">
            {title}
          </h3>
          <p className="font-serif font-light text-[0.85rem] text-[#c4a98a] max-w-sm mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      {/* Tarjeta */}
      <div
        className="group relative overflow-hidden rounded-lg bg-[#2a1810] min-h-[280px] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Imagen */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            absolute inset-0 w-full h-full object-cover block
            transition-[transform,filter] duration-500
            [filter:sepia(20%)_brightness(0.6)]
            group-hover:[filter:sepia(10%)_brightness(0.45)]
            group-hover:scale-[1.05]
          "
        />

        {/* Medallón estrella */}
        <div
          className="
            absolute top-4 right-4
            w-9 h-9 rounded-full
            bg-[rgba(26,13,8,0.7)] border border-[#c8895a55]
            flex items-center justify-center
          "
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#c8895a]">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>

        {/* Hint "ver imagen" — aparece en hover */}
        <div
          className="
            absolute top-4 left-4
            font-serif text-[0.65rem] tracking-[0.18em] uppercase
            text-[#c8895a] bg-[rgba(26,13,8,0.65)]
            px-2.5 py-1 rounded-[2px]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          Ver imagen
        </div>

        {/* Contenido inferior */}
        <div
          className="
            absolute inset-0 flex flex-col justify-end p-7
            bg-gradient-to-t from-[rgba(26,13,8,0.92)] via-[rgba(26,13,8,0.3)] to-transparent
          "
        >
          <span className="font-serif italic text-[0.7rem] tracking-[0.15em] text-[#c8895a] mb-1.5 opacity-85">
            — {num}
          </span>
          <h3 className="font-serif font-bold text-[1.15rem] text-[#f5e8d5] leading-tight mb-2">
            {title}
          </h3>
          <p
            className="
              font-serif font-light text-[0.85rem] text-[#c4a98a] leading-relaxed
              max-w-sm m-0
              opacity-0 translate-y-1.5
              transition-[opacity,transform] duration-300
              group-hover:opacity-100 group-hover:translate-y-0
            "
          >
            {description}
          </p>
        </div>

        {/* Línea ámbar */}
        <div
          className="
            absolute bottom-0 left-0 right-0 h-[2px]
            bg-[#c8895a] scale-x-0 origin-left
            transition-transform duration-[350ms]
            group-hover:scale-x-100
          "
        />
      </div>

      {/* Modal con portal — igual que el original */}
      {modalContent && createPortal(modalContent, document.body)}
    </>
  )
}

function Schedules() {
  const recognitions = [
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 1',
      description: 'Distinción otorgada por promover la identidad y tradición chocolatera local.',
    },
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 2',
      description: 'Premio a la calidad y sabor artesanal en eventos regionales.',
    },
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 3',
      description: 'Reconocidos por nuestros clientes como un referente en chocolate shilico.',
    },
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 4',
      description: 'Reconocidos por nuestros clientes como un referente en chocolate shilico.',
    },
  ]

  return (
    <section className="bg-[#1a0d08] py-20 px-4">

      {/* Cabecera */}
      <div
        className="text-center mb-14"
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
          Logros que nos enorgullecen
        </span>
        <h2 className="font-serif font-bold text-[clamp(2rem,4vw,3rem)] text-[#f5e8d5] leading-tight m-0">
          Nuestros{" "}
          <em className="italic font-normal text-[#c8895a]">reconocimientos</em>
        </h2>
        <p className="font-serif font-light text-[1rem] text-[#c4a98a] max-w-md mx-auto mt-4 leading-[1.7]">
          Distinciones que reflejan nuestra pasión, dedicación y amor por el chocolate.
        </p>
      </div>

      {/* Grilla */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >
        {recognitions.map((item, index) => (
          <RecognitionCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            num={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>

    </section>
  )
}

export { Schedules }