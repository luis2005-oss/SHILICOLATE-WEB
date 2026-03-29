import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const prevPath = prevPathRef.current;

    // 🔹 Rutas que NO deben hacer scroll (Home + secciones)
    const isHomeSection =
      currentPath === "/" ||
      currentPath === "/coffee";

    const wasHomeSection =
      prevPath === "/" ||
      prevPath === "/coffee";

    // 👉 Solo hacer scroll si SALES del Home o ENTRAS al Home
    if (!(isHomeSection && wasHomeSection)) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    prevPathRef.current = currentPath;
  }, [location.pathname]);

  return null;
}

export { ScrollToTop };
