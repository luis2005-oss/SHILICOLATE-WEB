  import { useState } from "react";
  import { CgMenu, CgClose   } from "react-icons/cg";
  import { NavbarMenu } from "../molecules/desktopMenu";
  import { LocationNavbar } from "../molecules/locationNavbar";
  import { CarNavbar } from "../molecules/login";
  import { MobileMenu } from "../molecules/modileMenu";

  function Navbar({ setModalIsOpen, setCartShopOpen, setRegisterIsOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };

    return (
      <nav className="fixed top-0 w-full bg-[#462114] border-b border-[#CCA047] z-100">
        <div className="flex items-center justify-between px-6 md:px-5 h-16 md:h-20">
          
          {/* Logo Mobile - Solo visible en mobile (izquierda) */}
          <a href="/" className="md:hidden flex items-center gap-2">
            <img 
              src="/LOGO.png" 
              alt="Logo Brown Coffee" 
              className="w-10 h-10 object-contain" 
            />
            <span className="text-[#FFBB00] font-bold text-center text-sm whitespace-nowrap">
              SHILICOLATE
            </span>
          </a>
          <div className="hidden md:block">
            <LocationNavbar />
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <NavbarMenu onLinkClick={closeMenu} />
          </div>

          <div className="hidden md:block">
            <CarNavbar 
              setModalIsOpen={setModalIsOpen} 
              setCartShopOpen={setCartShopOpen}
              setRegisterIsOpen= {setRegisterIsOpen}
            />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-[#FFBB00] p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <CgClose size={28} /> : <CgMenu size={28} />}
          </button>
        </div>
        
        <MobileMenu 
          setModalIsOpen={setModalIsOpen}
          setRegisterIsOpen= {setRegisterIsOpen}
          isOpen={isOpen}
          closeMenu={closeMenu}
          setCartShopOpen={setCartShopOpen}
          />
      </nav>
    );
  }

  export { Navbar };