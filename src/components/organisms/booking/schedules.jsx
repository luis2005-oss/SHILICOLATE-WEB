import { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

const GOLD = "#d4af37";

function RecognitionModal({ image, title, isOpen, setIsOpen }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  const modalContent = isOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[95vw] max-h-[95vh] flex items-center justify-center outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            background: "rgba(26,13,8,0.8)",
            border: `0.5px solid ${GOLD}55`,
            color: GOLD,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = GOLD;
            e.currentTarget.style.color = "#1a0d08";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(26,13,8,0.8)";
            e.currentTarget.style.color = GOLD;
          }}
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar"
        >
          <MdClose className="w-5 h-5" />
        </button>

        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  ) : null;

  return modalContent && createPortal(modalContent, document.body);
}

function RecognitionRow({
  image,
  title,
  description,
  num,
  isReversed,
  onImageClick,
  label = "RECONOCIMIENTO",
}) {
  return (
    <div
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16 mb-20 md:mb-32 last:mb-0`}
      data-aos="zoom-in-up"
      data-aos-duration="1400"
      data-aos-offset="450"
      data-aos-easing="ease-out-cubic"
    >
      {/* Imagen */}
      <div className="w-full md:w-2/5">
        <div
          className="relative group cursor-pointer overflow-hidden rounded-xl inline-block w-full"
          onClick={onImageClick}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#c8895a] opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 blur-lg"></div>
          <img
            src={image}
            alt={title}
            className="relative w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg] group-hover:brightness-75 group-hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)] [filter:sepia(15%)_brightness(0.7)]"
            loading="lazy"
          />

          {/* Hint hover */}
          <div
            className="absolute top-4 left-4 font-serif text-[0.65rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: GOLD, background: "rgba(26,13,8,0.65)" }}
          >
            Ver imagen
          </div>

          {/* Medallón dorado */}
          <div
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(26,13,8,0.7)",
              border: `0.5px solid ${GOLD}66`,
            }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" style={{ fill: GOLD }}>
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div>
          <span
            className="inline-block font-serif italic text-[0.7rem] tracking-[0.15em] mb-3 opacity-85"
            style={{ color: GOLD }}
          >
            — {num}
          </span>
          <h3 className="font-serif font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[#f5e8d5] leading-tight mb-4">
            {title}
          </h3>
          <p className="font-serif font-light text-[1rem] text-[#c4a98a] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Línea decorativa */}
        <div className="flex items-center gap-3 pt-4">
          <div
            className="h-[2px] w-12 rounded-full"
            style={{
              background: "linear-gradient(to right, #d4af37, #c8895a)",
            }}
          />
          <span className="font-serif text-[0.8rem] text-[#c8895a] tracking-[0.1em]">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

function Schedules() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recognitions = [
    {
      image: "/RECOGNITION-1.jpg",
      title: "Premio Chocoandino (Colombia)",
      description:
        "Distinción otorgada por el mejor licor de cacao otorgado por IILA y FEDECACAO. Un logro que refleja nuestro compromiso con la excelencia y la calidad en cada paso del proceso de producción.",
    },
    {
      image: "/RECOGNITION-2.png",
      title: "Industrias manufactureras",
      description:
        "Premio a la calidad y sabor artesanal en eventos regionales. Reconocimiento que valida nuestras técnicas tradicionales y la dedicación de nuestro equipo en crear chocolates únicos.",
    },
    {
      image: "/RECOGNITION-3.png",
      title: "Buenas prácticas empresariales",
      description:
        "Reconocido otorgado por las buenas prácticas empresariales. Un testimonio de nuestro compromiso con la sostenibilidad, la ética y la responsabilidad social en toda nuestra operación.",
    },
    {
      image: "/RECOGNITION-4.jpeg",
      title: "Reconocimiento 4",
      description:
        "Reconocidos por categoría industrial manufactureras referente en chocolate shilico. Posicionándonos como líderes innovadores en la industria chocolatera regional.",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const selectedRecognition =
    selectedIndex !== null ? recognitions[selectedIndex] : null;

  return (
    <section className="bg-[#1a0d08] py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <div
          className="text-center mb-20 md:mb-28"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <span
            className="inline-block mb-4 font-serif text-[11px] tracking-[0.25em] uppercase pb-1"
            style={{ color: GOLD, borderBottom: `0.5px solid ${GOLD}55` }}
          >
            Logros que nos enorgullecen
          </span>
          <h2 className="font-serif font-bold text-[clamp(2rem,5vw,3.5rem)] text-[#f5e8d5] leading-tight m-0">
            Nuestros{" "}
            <em
              className="italic font-normal"
              style={{
                background: "linear-gradient(135deg,#d4af37,#c8895a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reconocimientos
            </em>
          </h2>
          <p className="font-serif font-light text-[1rem] text-[#c4a98a] max-w-md mx-auto mt-4 leading-[1.7]">
            Distinciones que reflejan nuestra pasión, dedicación y amor por el
            chocolate.
          </p>
        </div>

        {/* Lista de reconocimientos en zigzag */}
        <div className="flex flex-col">
          {recognitions.map((recognition, index) => (
            <RecognitionRow
              key={index}
              {...recognition}
              num={String(index + 1).padStart(2, "0")}
              isReversed={index % 2 !== 0}
              onImageClick={() => handleImageClick(index)}
              label={index === 3 ? "PREMIO" : "RECONOCIMIENTO"}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedRecognition && (
        <RecognitionModal
          image={selectedRecognition.image}
          title={selectedRecognition.title}
          description={selectedRecognition.description}
          num={String(selectedIndex + 1).padStart(2, "0")}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </section>
  );
}

export { Schedules };
