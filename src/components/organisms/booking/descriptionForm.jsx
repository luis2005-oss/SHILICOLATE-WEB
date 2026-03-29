import { FaWhatsapp, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { Paragraph } from "../../atoms/paragraph"
import { Link } from '../../atoms/links'

function Description() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <Paragraph
        text={'Nos comunicamos contigo si necesitamos más información....'}
        weight="bold"
      />

      <div className="flex flex-col items-start gap-3">
        <Paragraph
          text={'¿Por dónde nos comunicamos?'}
          size="small"
        />

        <div className="flex gap-6 items-center justify-start">

          {/* WhatsApp */}
          <Link
            href="https://wa.me/51932983227"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-transform duration-300 hover:-translate-y-1"
          >
            <FaWhatsapp className="text-[20px] sm:text-[25px] md:text-[30px]" />
          </Link>

          {/* Facebook */}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:-translate-y-1"
          >
            <FaFacebook className="text-[20px] sm:text-[25px] md:text-[30px]" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 transition-transform duration-300 hover:-translate-y-1"
          >
            <FaInstagram className="text-[20px] sm:text-[25px] md:text-[30px]" />
          </Link>

          {/* Teléfono (NO usa target) */}
          <Link
            href="tel:+51932983227"
            className="text-gray-700 hover:text-gray-800 transition-transform duration-300 hover:-translate-y-1"
          >
            <FaPhone className="text-[20px] sm:text-[25px] md:text-[30px]" />
          </Link>

        </div>
      </div>
    </div>
  )
}

export { Description }
