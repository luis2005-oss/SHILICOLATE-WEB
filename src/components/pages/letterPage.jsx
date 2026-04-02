import { useState } from "react"
import { MyTemplate } from "../templates/myTemplate"
import { ProductHeader } from "../organisms/letter/ProductHeader"
import { ProductCatalog } from "../organisms/letter/ProductCatalog"

const GOLD      = "#d4af37"
const GOLD_GRAD = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"
const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)"

export const LetterPage = () => {
  const [_cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(p => p.id === product.id)
      if (existing) {
        return prevCart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  return (
    <MyTemplate>
      <div className="min-h-screen bg-[#fdf6ee] px-4 pt-32 pb-16 md:px-8 lg:px-16">

        {/* ── Cabecera de página ── */}
        <div className="max-w-7xl mx-auto mb-10">

          {/* Título con gradiente */}
          <h1
            className="font-serif font-bold text-[clamp(2rem,4vw,3rem)] m-0 mb-2 leading-tight"
            style={{
              background: GOLD_GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nuestros productos
          </h1>

          {/* Línea con diamante */}
          <div className="flex items-center gap-3 mt-3" style={{ width: 140 }}>
            <div className="flex-1 h-px opacity-60" style={{ background: GOLD_LINE }} />
            <div
              className="w-1.5 h-1.5 flex-shrink-0"
              style={{ background: GOLD, transform: "rotate(45deg)", opacity: 0.7 }}
            />
            <div className="flex-1 h-px opacity-60" style={{ background: `linear-gradient(to left, ${GOLD}, #c8895a)` }} />
          </div>

        </div>

        {/* ── Catálogo ── */}
        <div className="max-w-7xl mx-auto">
          <ProductCatalog addToCart={addToCart} />
        </div>

      </div>
    </MyTemplate>
  )
}