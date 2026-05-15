import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

const GOLD = "#d4af37";
const GOLD_GRAD =
  "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)";
const TITLE_FONT = "'Montserrat', 'Helvetica Neue', Arial, sans-serif";
const BODY_FONT = "'Inter', 'Segoe UI', Roboto, sans-serif";

export function ProductCard({ product }) {
  const [flipped, setFlipped] = useState(false);
  const { addToCart } = useCart();

  const handleFrontClick = () => setFlipped(true);
  const handleBackClick = (e) => {
    e.stopPropagation();
    setFlipped(false);
  };

  return (
    <div
      style={{ perspective: "1000px", width: "100%", aspectRatio: "4/5" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRENTE ── */}
        <div
          onClick={handleFrontClick}
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
            borderRadius: "1rem",
            background: "linear-gradient(145deg, #1A0D08 5%, #5E2E11 100%)",
            border: `0.5px solid ${GOLD}22`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            padding: "1rem",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Esquina superior izquierda */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 18,
              height: 18,
              borderTop: `1px solid ${GOLD}66`,
              borderLeft: `1px solid ${GOLD}66`,
              borderRadius: "8px 0 0 0",
            }}
          />

          {/* Esquina inferior derecha */}
          <span
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 18,
              height: 18,
              borderBottom: `1px solid ${GOLD}66`,
              borderRight: `1px solid ${GOLD}66`,
              borderRadius: "0 0 8px 0",
            }}
          />

          <img
            src={product.URL}
            alt={product.name}
            style={{
              width: "18rem",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <p
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(0.85rem, 3vw, 1.3rem)",
              fontWeight: 700,
              background: GOLD_GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textAlign: "center",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {product.name}
          </p>
        </div>

        {/* ── REVERSO ── */}
        <div
          onClick={handleBackClick}
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
            transform: "rotateY(180deg)",
            borderRadius: "8px",
            background: "#fdf6ee",
            border: `3px solid #e8d8c4`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            padding: "1rem",
            textAlign: "center",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Esquina superior izquierda */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 18,
              height: 18,
              borderTop: `1px solid ${GOLD}88`,
              borderLeft: `1px solid ${GOLD}88`,
              borderRadius: "8px 0 0 0",
            }}
          />

          {/* Esquina inferior derecha */}
          <span
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 18,
              height: 18,
              borderBottom: `1px solid ${GOLD}88`,
              borderRight: `1px solid ${GOLD}88`,
              borderRadius: "0 0 8px 0",
            }}
          />

          <p
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(0.75rem, 2vw, 1rem)",
              fontWeight: 700,
              color: "#1a0d08",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {product.performance}
          </p>

          <div
            style={{
              width: 28,
              height: 1,
              background: GOLD_GRAD,
              opacity: 0.7,
            }}
          />

          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)",
              fontWeight: 400,
              color: "#7a5c45",
              lineHeight: 1.5,
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.desc}
          </p>

          <p
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 700,
              margin: 0,
              background: GOLD_GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {formatPrice(product.price)}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            style={{
              width: "100%",
              fontFamily: BODY_FONT,
              fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1a0d08",
              background: GOLD_GRAD,
              border: "none",
              borderRadius: "4px",
              padding: "7px 12px",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
