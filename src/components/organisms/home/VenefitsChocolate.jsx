import { useState, useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const benefits = [
  {
    num: "01",
    image: "/benefit_placer.png",
    title: "Más placer",
    text: "Despierta los sentidos y convierte cualquier momento en una experiencia deliciosa.",
  },
  {
    num: "02",
    image: "/benefit_mood.png",
    title: "Mejor estado de ánimo",
    text: "El cacao estimula hormonas que reducen el estrés y aumentan la felicidad.",
  },
  {
    num: "03",
    image: "/benefit_energy.png",
    title: "Energía natural",
    text: "Aporta vitalidad para disfrutar el día con mejor actitud y bienestar.",
  },
  {
    num: "04",
    image: "/benefit_antioxidants.png",
    title: "Antioxidantes naturales",
    text: "El cacao protege las células y contribuye al bienestar integral.",
  },
  {
    num: "05",
    image: "/benefit_details.png",
    title: "Detalles que enamoran",
    text: "Shilibonbones, chocotejas y chocolates en caja — cada uno un regalo perfecto.",
  },
  {
    num: "06",
    image: "/benefit_moments.png",
    title: "Momentos únicos",
    text: "El chocolate une personas, acompaña conversaciones y crea recuerdos inolvidables.",
  },
]

function BenefitCard({ num, image, title, text }) {
  return (
    <div className="flex flex-col h-full bg-[#fdf6ee] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 drop-shadow-md">
      {/* Imagen */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {/* Número decorativo */}
        <span 
          className="absolute top-4 right-4 font-serif italic text-5xl text-[#c8895a] opacity-20 select-none"
          aria-hidden="true"
        >
          {num}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-3 p-6 md:p-8 flex-grow">
        <h3 className="font-serif font-bold text-xl md:text-2xl text-[#1a0d08] leading-tight">
          {title}
        </h3>
        <p className="font-serif font-light text-sm md:text-base text-[#7a5c45] leading-relaxed flex-grow">
          {text}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-1 w-8 bg-[#c8895a] rounded-full"></div>
          <span className="font-serif text-sm text-[#c8895a] font-semibold">{num}</span>
        </div>
      </div>
    </div>
  )
}

function VenefitsChocolate() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayTimerRef = useRef(null)

  // Calcular cuántas tarjetas mostrar según el tamaño de pantalla
  const [visibleCards, setVisibleCards] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(2)
      } else if (window.innerWidth >= 768) {
        setVisibleCards(1.5)
      } else {
        setVisibleCards(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Autoplay
  useEffect(() => {
    if (!isAutoplay) return

    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length)
    }, 5000)

    return () => clearInterval(autoplayTimerRef.current)
  }, [isAutoplay])

  const handlePrev = () => {
    setIsAutoplay(false)
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const handleNext = () => {
    setIsAutoplay(false)
    setCurrentIndex((prev) => (prev + 1) % benefits.length)
  }

  const handleDotClick = (index) => {
    setIsAutoplay(false)
    setCurrentIndex(index)
  }

  // Calcular el índice de inicio para mostrar las tarjetas correctas
  const visibleIndices = []
  for (let i = 0; i < Math.ceil(visibleCards); i++) {
    visibleIndices.push((currentIndex + i) % benefits.length)
  }

  return (
    <>
      {/* Sección principal con carrusel */}
      <section className="bg-[#fdf6ee] py-20 md:py-28 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto overflow-visible">
          {/* Cabecera */}
          <div
            className="text-center mb-16 md:mb-20"
            data-aos="fade-down"
            data-aos-duration="900"
          >
            <h2 className="font-serif font-bold text-[clamp(2rem,5vw,3.5rem)] text-[#1a0d08] leading-tight m-0">
              El chocolate{" "}
              <span className="italic font-normal text-[#c8895a]">que transforma</span>
              <br />
              tu día
            </h2>
          </div>

          {/* Carrusel */}
          <div 
            className="relative px-2"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            {/* Contenedor de tarjetas */}
            <div className="flex gap-6 md:gap-8 overflow-hidden px-4 pb-4">
              {visibleIndices.map((index) => (
                <div
                  key={benefits[index].num}
                  className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] transition-transform duration-500 mb-2"
                >
                  <BenefitCard {...benefits[index]} />
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-[#c8895a] hover:bg-[#b8795a] text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Anterior"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-[#c8895a] hover:bg-[#b8795a] text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Siguiente"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Paginación */}
            <div className="flex justify-center gap-2 mt-12 pb-4">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-[#c8895a] w-8 h-2'
                      : 'bg-[#c8895a] opacity-40 w-2 h-2 hover:opacity-60'
                  }`}
                  aria-label={`Ir al beneficio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}

export { VenefitsChocolate }
