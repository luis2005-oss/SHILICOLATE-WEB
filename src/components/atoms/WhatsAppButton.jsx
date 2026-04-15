import { FaWhatsapp } from "react-icons/fa"

function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/51932983227?text=Hola%20Shilicolate%2C%20quisiera%20solicitar%20su%20catalogo"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 flex items-center justify-center animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  )
}

export { WhatsAppButton }