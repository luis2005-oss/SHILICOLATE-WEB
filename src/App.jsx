import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "./components/pages/homePage"
import { LetterPage } from "./components/pages/letterPage"
import { AbouUsPage } from "./components/pages/aboutUsPage"
import { AcknorPage } from "./components/pages/acknorPage"
import { ContactPage } from "./components/pages/contactPage"
import { Navbar } from "./components/organisms/navbar"
import { useEffect, useState } from "react"
import { ModalLogin } from "./components/organisms/modals/modalLogin"
import { CartShop } from "./components/organisms/modals/modalCartShop"
import { ScrollToTop } from "./components/utils/scrollToTop" //scroll animate
// Tendencies sections
import { Footer } from "./components/organisms/footer"
import { WhatsAppButton } from "./components/atoms/WhatsAppButton"
// AOS - Animate On Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CartProvider } from "./context/CartContext"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cartShopOpen, setCartShopOpen] = useState(false)
  const [registerIsOpen, setRegisterIsOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
      once: false, // Si true, la animación solo ocurre una vez
      mirror: true, // Si true, anima al hacer scroll hacia arriba también
      offset: 100, // Offset desde el punto de activación (en px)
      easing: 'ease-in-out', // Tipo de easing
    })
  }, [])

  const pages = [
    {
      path: '/',
      element: <HomePage/>,
    },
    {
      path: '/letter',
      element: <LetterPage/> // Única página para toda la carta
    },
    // Redirecciones para compatibilidad
    {
      path: '/LetterPageCookie',
      element: <Navigate to="/letter" replace />
    },
    {
      path: '/LetterPageCake',
      element: <Navigate to="/letter" replace />
    },
    {
      path: '/aboutus',
      element: <AbouUsPage/>
    },
    {
      path: '/bookings',
      element: <AcknorPage/>
    },
    {
      path: '/contact',
      element: <ContactPage/>
    },
  ]

  return (
    <CartProvider>
      <ScrollToTop /> 
      
      <Navbar 
        setModalIsOpen={setModalIsOpen}
        setRegisterIsOpen={setRegisterIsOpen}
        setCartShopOpen={setCartShopOpen} />
      
      {/* Modales (Sin cambios, respetando código de compañeros) */}
      {modalIsOpen && <ModalLogin setModalIsOpen={setModalIsOpen} setRegisterIsOpen={setRegisterIsOpen} />}
      {cartShopOpen && <CartShop setCartShopOpen={setCartShopOpen} />}
      {registerIsOpen && <ModalRegister setRegisterIsOpen={setRegisterIsOpen} />}

      <Routes>
        <Route path="/carta" element={<LetterPage />} />
        {pages.map((page, i) => (
          <Route
            key={i}
            path={page.path}
            element={page.element}
          >
            {page.children?.map((child, j) => (
              <Route
                key={j}
                path={child.path}
                index={child.index} 
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
      
      <Footer/>
      <WhatsAppButton />
    </CartProvider>
  )
}

export default App