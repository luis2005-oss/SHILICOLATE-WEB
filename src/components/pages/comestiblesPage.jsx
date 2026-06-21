import { MyTemplate } from "../templates/myTemplate"
import { ProductComestibles } from "../organisms/letter/ProductComestibles"

const GOLD      = "#d4af37"
const GOLD_GRAD = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"
const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)"

export const ComestiblesPage = () => {
  return (
    <MyTemplate>
      <div className="min-h-screen bg-[#fdf6ee] px-4 pt-32 pb-16 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto mb-10">
          <h1
            className="font-serif font-bold text-[clamp(3rem,4.5vw,4rem)] m-0 mb-2 leading-tight"
            style={{
              background: GOLD_GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Comestibles
          </h1>
          <div className="flex items-center gap-4 mt-3 w-[81%] sm:w-[43%] md:w-full max-w-[25rem] px-2 sm:px-0">
            <div className="h-[1px] flex-1 opacity-70" style={{ background: GOLD_LINE }} />
            <div className="w-2 h-2 rotate-45° opacity-80" style={{ background: GOLD, transform: "rotate(45deg)", opacity: 0.7 }} />
            <div className="h-[1px] flex-1 opacity-70" style={{ background: `linear-gradient(to left, ${GOLD}, #c8895a)` }} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <ProductComestibles />
        </div>
      </div>
    </MyTemplate>
  )
}