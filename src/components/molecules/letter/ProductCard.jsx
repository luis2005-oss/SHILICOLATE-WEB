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
      style={{ perspective: "1000px", width: "100%", height: "280px" }}
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
            padding: "1.5rem",
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

          {/* Badge categoría — solo para comestibles y shilicotejas */}
          {["Chocolate comestible", "Shilicotejas"].includes(
            product.category,
          ) && (
            <span
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontFamily: BODY_FONT,
                fontSize: "9.4px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#1a0d08",
                background: GOLD_GRAD,
                borderRadius: "999px",
                width: "11vh",
                height: "5vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                lineHeight: 1.2,
                padding: "4px",
              }}
            >
              {product.flavor}
            </span>
          )}

          <img
            src={product.URL}
            alt={product.name}
            style={{ width: "12rem", height: "12rem", objectFit: "contain" }}
          />

          <p
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#f5e8d5",
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
            gap: "0.5rem",
            padding: "1.5rem",
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
              fontSize: "0.88rem",
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
              fontSize: "0.90rem",
              fontWeight: 400,
              color: "#7a5c45",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {product.desc}
          </p>

          <p
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "1.7rem",
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
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1a0d08",
              background: GOLD_GRAD,
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
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
