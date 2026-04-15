import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaTiktok, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock 
} from "react-icons/fa";

const socials = [
  { 
    href: "https://web.facebook.com/profile.php?id=100032893851394", 
    label: "Facebook",  
    Icon: FaFacebook 
  },
  { 
    href: "https://wa.me/51932983227?text=Hola%20Shilicolate%2C%20quisiera%20solicitar%20su%20catalogo", 
    label: "WhatsApp", 
    Icon: FaWhatsapp 
  },
  { 
    href: "https://www.instagram.com/shilicolate_oficial", 
    label: "Instagram", 
    Icon: FaInstagram 
  },
  { 
    href: "https://www.tiktok.com/@shilicolate_oficial", 
    label: "TikTok", 
    Icon: FaTiktok 
  },
];

const navLinks = [
  { text: "Inicio", href: "/" },
  { text: "Productos", href: "/letter" },
  { text: "Nosotros", href: "/aboutus" },
  { text: "Reconocimientos", href: "/bookings" },
  { text: "Contacto", href: "/contact" },
];

const productLinks = [
  "Chocolate en chapa",
  "Chocolate en caja",
  "Shilibombones",
  "Shilicotejas",
  "Chocolate comestible",
];

const contactItems = [
  { Icon: FaMapMarkerAlt, text: "Av. Amazonas 513, Celendín" },
  { Icon: FaPhone, text: "+51 932 983 227" },
  { Icon: FaEnvelope, text: "shilicolateoficial@gmail.com" },
  { Icon: FaClock, text: "Lun–Sáb: 8:00 am – 8:00 pm" },
];

function FooterCol({ title, children }) {
  return (
    <div className="flex flex-col">
      <p className="font-serif text-[10px] tracking-[0.22em] uppercase text-[#c8895a] opacity-80 mb-5">
        {title}
      </p>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#120804] border-t border-[#c8895a22] font-serif">
      <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-0">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-12">

          {/* Marca */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 no-underline w-fit">
              <img src="/LOGO.png" alt="Shilicolate" className="w-9 h-9 object-contain" />
              <span className="font-serif font-bold text-[1.3rem] text-[#f5e8d5]">
                Shili<em className="italic font-normal text-[#c8895a] not-italic">colate</em>
              </span>
            </Link>

            <p className="font-light text-[0.88rem] text-[#7a5c45] leading-[1.7] max-w-[240px]">
              Chocolatería artesanal nacida en Celendín. Cada pieza elaborada con cacao selecto y amor por nuestra cultura.
            </p>

            <div className="flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] border border-[#c8895a33] flex items-center justify-center text-[#c4a98a] hover:bg-[#c8895a] hover:text-[#1a0d08] transition"
                >
                  {Icon && <Icon size={14} />}
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <FooterCol title="Navegación">
            {navLinks.map(({ text, href }) => (
              <Link 
                key={href} 
                to={href} 
                className="text-[#c4a98a] py-1.5 block hover:text-[#f5e8d5]"
              >
                {text}
              </Link>
            ))}
          </FooterCol>

          {/* Productos */}
          <FooterCol title="Productos">
            {productLinks.map((name) => (
              <Link 
                key={name} 
                to="/letter" 
                className="text-[#c4a98a] py-1.5 block hover:text-[#f5e8d5]"
              >
                {name}
              </Link>
            ))}
          </FooterCol>

          {/* Contacto */}
          <FooterCol title="Contacto">
            {contactItems.map((item) => {
              const Icon = item.Icon;
              return (
                <div key={item.text} className="flex items-start gap-2 py-1.5">
                  {Icon && <Icon size={12} className="text-[#c8895a] mt-1" />}
                  <span className="text-[0.82rem] text-[#c4a98a]">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </FooterCol>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#c8895a22]" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between py-5 text-[0.72rem] text-[#7a5c45]">
          <span>© 2025 Shilicolate. Todos los derechos reservados.</span>
          <span>
            Hecho en{" "}
            <a href="#" className="text-[#c8895a] hover:text-[#f5e8d5]">
              Celendín, Perú
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}

export { Footer };