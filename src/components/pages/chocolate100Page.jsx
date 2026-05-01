import { useSearchParams } from "react-router-dom"
import { MyTemplate } from "../templates/myTemplate"
import { ProductChocolate100 } from "../organisms/letter/ProductChocolate100"

const GOLD      = "#d4af37"
const GOLD_GRAD = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"
const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)"

const filterMap = {
  chapa:     "Chocolate en chapa",
  caja:      "Chocolate en caja",
  barra:     "Chocolate en barra",
  chocolate: "Chocolate",
}

export const Chocolate100Page = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = filterMap[searchParams.get("filter")] || "Todos"

  return (
    <MyTemplate>
      <div className="min-h-screen bg-[#fdf6ee] px-4 pt-32 pb-16 md:px-8 lg:px-16">

        <div className="max-w-7xl mx-auto mb-10">
          <h1
            className="font-serif font-bold text-[clamp(2rem,4vw,3rem)] m-0 mb-2 leading-tight"
            style={{
              background: GOLD_GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Chocolates al 100%
          </h1>
          <div className="flex items-center gap-3 mt-3" style={{ width: 140 }}>
            <div className="flex-1 h-px opacity-60" style={{ background: GOLD_LINE }} />
            <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: GOLD, transform: "rotate(45deg)", opacity: 0.7 }} />
            <div className="flex-1 h-px opacity-60" style={{ background: `linear-gradient(to left, ${GOLD}, #c8895a)` }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <ProductChocolate100 initialCategory={initialCategory} />
        </div>

      </div>
    </MyTemplate>
  )
}