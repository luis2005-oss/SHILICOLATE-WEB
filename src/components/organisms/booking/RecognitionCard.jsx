import { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

function RecognitionCard({ image, title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") setIsOpen(false); };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
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
          className="absolute top-5 right-5 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar"
        >
          <MdClose className="w-7 h-7" />
        </button>

        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* La tarjeta normal */}
      <div className="group relative bg-white rounded-xl shadow-md 'overflow-hidden' ...">
        <div className="aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => setIsOpen(true)}>
          <img src={image} alt={title} className="..." loading="lazy" />
        </div>
        <div className="p-5 text-center ...">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      {/* Modal usando portal */}
      {modalContent && createPortal(modalContent, document.body)}
    </>
  );
}

export { RecognitionCard };