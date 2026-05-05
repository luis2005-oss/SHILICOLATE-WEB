import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ProductCard } from "../../molecules/letter/ProductCard"

const GOLD      = "#d4af37"
const GOLD_GRAD = "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)"
const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)"

const filterMap = {
  shilibombones: "Shilibombones al 55%",
  comestible:    "Chocolate al 70%",
  shilicotejas:  "Shilicotejas",
}

const products = [
  { idProduct: 14, name: "Shilibombones",             category: "Shilibombones al 55%",        price: 8, URL: "/SHILIBOMBONES.png",           desc: "Bombones artesanales con cacao selecto y rellenas de cremas." },
  { idProduct: 15, name: "Sabor a Pecana de 70gr",    category: "Chocolate al 70%", flavor: "Pecana",      price: 8, URL: "/CHOCOLARE-COM-PECANA.png",     desc: "Chocolate artesanal comestible con trozos de pecana tostada, elaborado con delicados sabores naturales." },
  { idProduct: 16, name: "Sabor a Blueberry de 70gr", category: "Chocolate al 70%", flavor: "Blueberry",   price: 8, URL: "/CHOCOLARE-COM-BLUEBERRY.png",  desc: "Chocolate artesanal comestible con delicado aroma a blueberry, elaborado con sabores naturales." },
  { idProduct: 17, name: "Sabor Aguaymanto de 70gr",  category: "Chocolate al 70%", flavor: "Aguaymanto",  price: 8, URL: "/CHOCOLARE-COM-AGUAYMANTO.png", desc: "Chocolate artesanal comestible con un toque ácido de aguaymanto, elaborado con sabores naturales." },
  { idProduct: 18, name: "Sabor a Cafe de 70gr",      category: "Chocolate al 70%", flavor: "Cafe",        price: 8, URL: "/CHOCOLARE-COM-CAFE.png",       desc: "Chocolate artesanal comestible con notas de café tostado, elaborado con delicados sabores naturales." },
  { idProduct: 19, name: "Sabor a Almendra de 70gr",  category: "Chocolate al 70%", flavor: "Almendra",    price: 8, URL: "/CHOCOLARE-COM-ALMENDRA.png",   desc: "Chocolate artesanal comestible con almendras crocantes, elaborado con delicados sabores naturales." },
  { idProduct: 20, name: "Sabor a Pecana de 35gr",    category: "Chocolate al 70%", flavor: "Pecana",      price: 4, URL: "/CHOCOLARE-COM-PECANA.png",     desc: "Chocolate artesanal comestible con trozos de pecana tostada, elaborado con delicados sabores naturales." },
  { idProduct: 21, name: "Sabor a Blueberry de 35gr", category: "Chocolate al 70%", flavor: "Blueberry",   price: 4, URL: "/CHOCOLARE-COM-BLUEBERRY.png",  desc: "Chocolate artesanal comestible con delicado aroma a blueberry, elaborado con sabores naturales." },
  { idProduct: 22, name: "Sabor Aguaymanto de 35gr",  category: "Chocolate al 70%", flavor: "Aguaymanto",  price: 4, URL: "/CHOCOLARE-COM-AGUAYMANTO.png", desc: "Chocolate artesanal comestible con un toque ácido de aguaymanto, elaborado con sabores naturales." },
  { idProduct: 23, name: "Sabor a Cafe de 35gr",      category: "Chocolate al 70%", flavor: "Cafe",        price: 4, URL: "/CHOCOLARE-COM-CAFE.png",       desc: "Chocolate artesanal comestible con notas de café tostado, elaborado con delicados sabores naturales." },
  { idProduct: 24, name: "Sabor a Almendra de 35gr",  category: "Chocolate al 70%", flavor: "Almendra",    price: 4, URL: "/CHOCOLARE-COM-ALMENDRA.png",   desc: "Chocolate artesanal comestible con almendras crocantes, elaborado con delicados sabores naturales." },
  { idProduct: 25, name: "Shilicoteja de Maracuyá",    category: "Shilicotejas", flavor: "Maracuyá",    price: 1, URL: "/SHILICOTEJA-MARACUYA.png",    desc: "Rellena con mermelada de maracuyá, equilibrio perfecto entre dulzura y acidez." },
  { idProduct: 26, name: "Shilicoteja de Maracumango", category: "Shilicotejas", flavor: "Maracumango", price: 1, URL: "/SHILICOTEJA-MARACUMAGO.png",  desc: "Con mermelada de maracuyá y mango, una mezcla tropical de dulzura y frescura." },
  { idProduct: 27, name: "Shilicoteja de Naranja",     category: "Shilicotejas", flavor: "Naranja",     price: 1, URL: "/SHILICOTEJA-NARANJA.png",     desc: "Con mermelada de naranja, una combinación cítrica de dulzura y acidez." },
  { idProduct: 28, name: "Shilicoteja de Mandarina",   category: "Shilicotejas", flavor: "Mandarina",   price: 1, URL: "/SHILICOTEJA-MANDARINA.png",   desc: "Rellena con mermelada de mandarina, con un toque cítrico en cada bocado." },
  { idProduct: 29, name: "Shilicoteja de Aguaymanto",  category: "Shilicotejas", flavor: "Aguaymanto",  price: 1, URL: "/SHILICOTEJA-AGUAYMANTO.png",  desc: "Rellena con mermelada de aguaymanto, con un ligero toque agridulce." },
  { idProduct: 30, name: "Shilicoteja de Piña",        category: "Shilicotejas", flavor: "Piña",        price: 1, URL: "/SHILICOTEJA-PINA.png",        desc: "Rellena con mermelada de piña, con un sabor tropical y refrescante." },
  { idProduct: 31, name: "Shilicoteja de Limón",       category: "Shilicotejas", flavor: "Limón",       price: 1, URL: "/SHILICOTEJA-LIMON.png",       desc: "Rellena con mermelada de limón, con un toque cítrico y refrescante." },
  { idProduct: 32, name: "Shilicoteja de Tamarindo",   category: "Shilicotejas", flavor: "Tamarindo",   price: 1, URL: "/SHILICOTEJA-TAMARINDO.png",   desc: "Rellena con mermelada de tamarindo, con un sabor único y refrescante." },
  { idProduct: 33, name: "Shilicoteja de Pisco",       category: "Shilicotejas", flavor: "Pisco",       price: 1, URL: "/SHILICOTEJA-PISCO.png",       desc: "Rellena con crema de pisco, un delicado toque de licor que resalta el cacao." },
  { idProduct: 34, name: "Shilicoteja de Vino",        category: "Shilicotejas", flavor: "Vino",        price: 1, URL: "/SHILICOTEJA-VINO.png",        desc: "Rellena con vino, un toque de licor que resalta el sabor del chocolate." },
  { idProduct: 35, name: "Shilicoteja de Fresa",       category: "Shilicotejas", flavor: "Fresa",       price: 1, URL: "/SHILICOTEJA-FRESA.png",       desc: "Rellena con mermelada de fresa, con un sabor dulce y refrescante." },
  { idProduct: 36, name: "Shilicoteja de Mora",        category: "Shilicotejas", flavor: "Mora",        price: 1, URL: "/SHILICOTEJA-MORA.png",        desc: "Rellena con mermelada de mora, con un sabor intenso y refrescante." },
  { idProduct: 37, name: "Shilicoteja de Arándano",    category: "Shilicotejas", flavor: "Arándano",    price: 1, URL: "/SHILICOTEJA-ARANDANO.png",    desc: "Rellena con mermelada de arándano, con un sabor dulce y refrescante." },
  { idProduct: 38, name: "Shilicoteja de Sauco",       category: "Shilicotejas", flavor: "Sauco",       price: 1, URL: "/SHILICOTEJA-SAUCO.png",       desc: "Rellena con mermelada de sauco, con un sabor único y refrescante." },
  { idProduct: 39, name: "Shilicoteja de Lúcuma",      category: "Shilicotejas", flavor: "Lúcuma",      price: 1, URL: "/SHILICOTEJA-LUCUMA.png",      desc: "Rellena con crema de lúcuma, un sabor suave que endulza cada bocado." },
  { idProduct: 40, name: "Shilicoteja de Pasas",       category: "Shilicotejas", flavor: "Pasas",       price: 1, URL: "/SHILICOTEJA-PASAS.png",       desc: "Rellena con pasas deshidratadas, un sabor dulce que endulza cada bocado." },
  { idProduct: 41, name: "Shilicoteja de Guindón",     category: "Shilicotejas", flavor: "Guindón",     price: 1, URL: "/SHILICOTEJA-GUINDON.png",     desc: "Rellena con mermelada de durazno, con un sabor dulce y refrescante." },
  { idProduct: 42, name: "Shilicoteja de Café",        category: "Shilicotejas", flavor: "Café",        price: 1, URL: "/SHILICOTEJA-CAFE.png",        desc: "Rellena con mermelada de café, con un sabor tropical y refrescante." },
  { idProduct: 43, name: "Shilicoteja de Pitahaya",    category: "Shilicotejas", flavor: "Pitahaya",    price: 1, URL: "/SHILICOTEJA-PITAHAYA.png",    desc: "Rellena con mermelada de pitahaya, con un sabor único y refrescante." },
  { idProduct: 44, name: "Shilicoteja de Pecana",      category: "Shilicotejas", flavor: "Pecana",      price: 1, URL: "/SHILICOTEJA-PECANA.png",      desc: "Rellena con mermelada de pecana, con un sabor intenso y refrescante." },
  { idProduct: 45, name: "Shilicoteja de Coco",        category: "Shilicotejas", flavor: "Coco",        price: 1, URL: "/SHILICOTEJA-COCO.png",        desc: "Rellena con mermelada de coco, con un sabor tropical y refrescante." },
  { idProduct: 46, name: "Shilicoteja de Maní",        category: "Shilicotejas", flavor: "Maní",        price: 1, URL: "/SHILICOTEJA-MANI.png",        desc: "Rellena con mermelada de maní, con un sabor intenso y refrescante." },
  { idProduct: 47, name: "Shilicoteja de Almendra",    category: "Shilicotejas", flavor: "Almendra",    price: 1, URL: "/SHILICOTEJA-ALMENDRA.png",    desc: "Rellena con mermelada de almendra, con un sabor intenso y refrescante." },
]

const categories = [
  { label: "Todos", value: "Todos" },
  { label: "Shilibombones al 55%", value: "Shilibombones al 55%" },
  { label: "Chocolate al 70%", value: "Chocolate al 70%" },
  { label: "Shilicotejas", value: "Shilicotejas" },
]

const shilicoTejaGroups = {
  "Mermelada Agridulce":  ["Maracuyá", "Maracumango", "Naranja", "Mandarina", "Aguaymanto", "Piña", "Limón", "Tamarindo"],
  "Licor":                ["Pisco", "Vino"],
  "Mermelada Dulce":      ["Fresa", "Mora", "Arándano", "Sauco", "Lúcuma"],
  "Frutas Deshidratadas": ["Pasas", "Guindón"],
  "Exóticas":             ["Café", "Pitahaya"],
  "Frutos Secos":         ["Pecana", "Coco", "Maní", "Almendra"],
}



function dividirShilicotejas(items) {
  const resultado = {}
  Object.entries(shilicoTejaGroups).forEach(([grupo, sabores]) => {
    const filtrados = items.filter(item => sabores.some(s => item.name.includes(s)))
    if (filtrados.length) resultado[grupo] = filtrados
  })
  return resultado
}

export function ProductComestibles() {
  const [searchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState("Todos")

  // Lee el param de la URL y combina con el estado local
  const param = searchParams.get("filter")
  const categoryFromUrl = filterMap[param] || "Todos"
  const effectiveCategory = param ? categoryFromUrl : activeCategory

  const filteredProducts =
    effectiveCategory === "Todos"
      ? products
      : products.filter(p => p.category === effectiveCategory)

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = []
    acc[product.category].push(product)
    return acc
  }, {})

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className="font-sans font-semibold text-[0.74rem] tracking-[0.1em] uppercase px-4 py-1 rounded-[4px] cursor-pointer transition-all duration-200"
            style={
              effectiveCategory === cat.value
                ? { background: GOLD_GRAD, color: "#1a0d08", border: "none" }
                : { background: "transparent", color: "#7a5c45", border: `0.145rem solid ${GOLD}44` }
            }
            onMouseEnter={e => { if (effectiveCategory !== cat.value) e.currentTarget.style.borderColor = GOLD }}
            onMouseLeave={e => { if (effectiveCategory !== cat.value) e.currentTarget.style.borderColor = `${GOLD}44` }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-14">
        {Object.entries(groupedProducts).map(([category, items]) => (
          <div key={category}>
            <h2
              className="font-sans font-bold text-[1.65rem] m-0 mb-1 tracking-tight"
              style={{ color: "#5E2E11" }}
            >
              {category}
            </h2>
            <div className="h-px mb-6" style={{ background: GOLD_LINE, opacity: 0.4 }} />

            {category === "Shilicotejas" ? (
              Object.entries(dividirShilicotejas(items)).map(([grupo, productos]) => (
                <div key={grupo} className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: GOLD, transform: "rotate(45deg)", opacity: 0.7 }}
                    />
                    <p
                      className="font-sans text-[0.78rem] tracking-[0.18em] uppercase m-0 font-semibold"
                      style={{ color: "#5E2E10" }}
                    >
                      {grupo}
                    </p>
                  </div>
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {productos.map(product => (
                      <ProductCard key={product.idProduct} product={product} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {items.map(product => (
                  <ProductCard key={product.idProduct} product={product} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}