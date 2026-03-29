import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet"></link>


export function ProductCard({ product }) {

  const [flipped,setFlipped] = useState(false);
  const { addToCart } = useCart();

  return (

    <div
      style={{perspective:"100rem",height:"17.5rem"}}
      onMouseEnter={()=>setFlipped(true)}
      onMouseLeave={()=>setFlipped(false)}
    >

      <div
        style={{
          position:"relative",
          width:"100%",
          height:"100%",
          transformStyle:"preserve-3d",
          transition:"transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >

        {/* FRENTE */}

        <div
          style={{
            backfaceVisibility:"hidden",
            position:"absolute",
            inset:0,
            borderRadius:"1.50rem",
            background:"#CCA157",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            padding:"1.5rem"
          }}
        >

          <img
            src={product.URL}
            alt={product.name}
            style={{
              width:"12rem",
              height:"12rem",
              objectFit:"contain",
              marginBottom:"0",
            }}
          />

          <h3 style={{color:"#472315", textAlign:"center", fontSize:"1.4rem", fontWeight:700, fontFamily:"Playfair Display, serif", margin:"0"}}>
            {product.name}
          </h3>

        </div>

        {/* REVERSO */}

        <div
          style={{
            backfaceVisibility:"hidden",
            position:"absolute",
            inset:0,
            transform:"rotateY(180deg)",
            borderRadius:"1.25rem",
            background:"#472315",
            color:"#fff",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            padding:"1.5rem",
            gap:"0.625rem"
          }}
        >

          <h3 style={{textAlign:"center"}}>
            {product.name}
          </h3>

          <p style={{fontSize:"0.75rem",textAlign:"center"}}>
            {product.desc}
          </p>

          <div
            style={{
              fontSize:"1.5rem",
              fontWeight:700
            }}
          >
            {formatPrice(product.price)}
          </div>

          <button
            onClick={() => addToCart(product)}
            style={{
              background:"#fff",
              color:"#472315",
              border:"none",
              borderRadius:"2rem",
              padding:"0.72rem 1.2rem",
              fontWeight:700,
              cursor:"pointer"
            }}
          >
            🛒 Agregar al carrito
          </button>

        </div>

      </div>

    </div>

  );
}