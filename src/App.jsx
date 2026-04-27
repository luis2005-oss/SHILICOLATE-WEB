import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { HomePage } from "./components/pages/homePage";
import { Chocolate100Page } from "./components/pages/chocolate100Page";
import { ComestiblesPage } from "./components/pages/comestiblesPage";
import { AbouUsPage } from "./components/pages/aboutUsPage";
import { AcknorPage } from "./components/pages/acknorPage";
import { ContactPage } from "./components/pages/contactPage";

import { Navbar } from "./components/organisms/navbar";
import { CartShop } from "./components/organisms/modals/modalCartShop";
import { ScrollToTop } from "./components/utils/scrollToTop";
import { Footer } from "./components/organisms/footer";
import { WhatsAppButton } from "./components/atoms/WhatsAppButton";
import { CartProvider } from "./context/CartContext";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [cartShopOpen, setCartShopOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <CartProvider>
      <ScrollToTop />

      <Navbar setCartShopOpen={setCartShopOpen} />

      {cartShopOpen && (
        <CartShop setCartShopOpen={setCartShopOpen} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chocolate100" element={<Chocolate100Page />} />
        <Route path="/comestibles" element={<ComestiblesPage />} />
        <Route path="/aboutus" element={<AbouUsPage />} />
        <Route path="/bookings" element={<AcknorPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/letter" element={<Navigate to="/chocolate100" replace />} />
        <Route path="/carta" element={<Navigate to="/chocolate100" replace />} />
        <Route path="/LetterPageCookie" element={<Navigate to="/chocolate100" replace />} />
        <Route path="/LetterPageCake" element={<Navigate to="/comestibles" replace />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </CartProvider>
  );
}

export default App;