import { NavbarMenu } from "./desktopMenu"
import { LocationNavbar } from "./locationNavbar"
import { CarNavbar } from "./login"


function MobileMenu ({isOpen, closeMenu, setModalIsOpen, setCartShopOpen}) {
    return(
        <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-[#683D14] border-t border-[#FFBB00]/30 px-6 py-4 space-y-4">
          {/* Location Mobile */}
          <div className="pb-4 border-b border-[#FFBB00]/20">
            <LocationNavbar />
          </div>

          {/* Menu Items Mobile */}
          <div className="pb-4 border-b border-[#FFBB00]/20">
            <NavbarMenu onLinkClick={closeMenu} />
          </div>

          {/* Login Mobile */}
          <div className="pt-2">
            <CarNavbar 
              setModalIsOpen={setModalIsOpen}
              setCartShopOpen={setCartShopOpen}
            />
          </div>
        </div>
      </div>
    )
}

export {MobileMenu}

