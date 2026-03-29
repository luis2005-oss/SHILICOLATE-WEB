import { useEffect, useRef } from "react";
import { TendenciesCard } from "../../molecules/home/homeTendeciesCard";

function TendenciesProducts() {
  const trackRef = useRef(null);
  const speed = 0.4;

  const tendenciesCoffee = [
    {
      img: "/TREND-PRODUCTS1.png",
      title: "Por definir",
      description:
        "Por definir",
    },
    {
      img: "/TREND-PRODUCTS1.png",
      title: "Por definir",
      description:
        "Por definir",
    },
    {
      img: "/TREND-PRODUCTS1.png",
      title: "Por definir",
      description:
        "Por definir",
    },
    {
      img: "/TREND-PRODUCTS1.png",
      title: "Por definir",
      description:
        "Por definir",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    let x = 0;
    let animationId;

    const animate = () => {
      x -= speed;

      // cuando ya se fue todo el primer bloque
      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }

      track.style.transform = `translateX(${x}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div
        ref={trackRef}
        className="flex w-max"
        style={{ willChange: "transform" }}
      >
        {/* Original */}
        <div className="flex gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCoffee} />
        </div>

        {/* Duplicado */}
        <div className="flex gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCoffee} />
        </div>
      </div>
    </div>
  );
}

export { TendenciesProducts };
