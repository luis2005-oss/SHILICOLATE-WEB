import { useState, useEffect } from "react";
import { ProductCard } from "../../molecules/letter/ProductCard";

const GOLD = "#d4af37";
const GOLD_GRAD =
  "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #c8895a 100%)";
const GOLD_LINE = "linear-gradient(to right, #d4af37, #c8895a)";

const products = [
  {
    idProduct: 1,
    name: "55gr",
    performance: "Rinde 11 Tazas",
    category: "Chocolate en chapa",
    price: 4,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 2,
    name: "70gr",
    performance: "Rinde 14 Tazas",
    category: "Chocolate en chapa",
    price: 5,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 3,
    name: "100gr",
    performance: "Rinde 20 Tazas",
    category: "Chocolate en chapa",
    price: 7,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 4,
    name: "150gr",
    performance: "Rinde 30 Tazas",
    category: "Chocolate en chapa",
    price: 9,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 5,
    name: "250gr",
    performance: "Rinde 55 Tazas",
    category: "Chocolate en chapa",
    price: 15,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 6,
    name: "300gr",
    performance: "Rinde 70 Tazas",
    category: "Chocolate en chapa",
    price: 18,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 7,
    name: "400gr",
    performance: "Rinde 85 Tazas",
    category: "Chocolate en chapa",
    price: 24,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 8,
    name: "460gr",
    performance: "Rinde 105 Tazas",
    category: "Chocolate en chapa",
    price: 28,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 9,
    name: "500gr",
    performance: "Rinde 112 Tazas",
    category: "Chocolate en chapa",
    price: 30,
    URL: "/CHOCOLATE-CHAPA.png",
    desc: "Elaborado con 100% cacao puro, de sabor intenso y natural.",
  },
  {
    idProduct: 10,
    name: "100gr",
    performance: "Rinde 20 Tazas",
    category: "Chocolate en caja",
    price: 8,
    URL: "/CAJA-100.png",
    desc: "Cacao intenso, profundo y auténtico para cada momento.",
  },
  {
    idProduct: 11,
    name: "200gr",
    performance: "Rinde 40 Tazas",
    category: "Chocolate en caja",
    price: 14,
    URL: "/CAJA-200.png",
    desc: "Cacao intenso, profundo y auténtico para cada momento.",
  },
  {
    idProduct: 12,
    name: "Chocolate en barra",
    performance: "Rinde 30 Tazas",
    category: "Chocolate en barra",
    price: 9,
    URL: "/CHOCOLATE-BARRA.png",
    desc: "Chocolates artesanales en barra, ideales para compartir o regalar.",
  },
  {
    idProduct: 13,
    name: "Chocolate en barra - presentación dorado",
    performance: "Rinde 17 Tazas",
    category: "Chocolate dorado",
    price: 6.8,
    URL: "/CHOCOLATE.png",
    desc: "100% cacao artesanal, perfecto para una taza de chocolate caliente.",
  },
];

const categories = [
  "Todos",
  "Chocolate en chapa",
  "Chocolate en caja",
  "Chocolate en barra",
  "Chocolate dorado",
];

export function ProductChocolate100({ initialCategory = "Todos" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="font-bold text-[0.74rem] tracking-[0.1em] uppercase px-4 py-1 rounded-[4px] cursor-pointer transition-all duration-200"
            style={
              activeCategory === cat
                ? { background: GOLD_GRAD, color: "#1a0d08", border: "none" }
                : {
                    background: "transparent",
                    color: "#7a5c45",
                    border: `0.145rem solid ${GOLD}44`,
                  }
            }
            onMouseEnter={(e) => {
              if (activeCategory !== cat)
                e.currentTarget.style.borderColor = GOLD;
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== cat)
                e.currentTarget.style.borderColor = `${GOLD}44`;
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-14">
        {Object.entries(groupedProducts).map(([category, items]) => (
          <div key={category}>
            {activeCategory === "Todos" && (
              <>
                <h2
                  className="font-serif font-bold text-[1.65rem] m-0 mb-1"
                  style={{ color: "#5E2E11" }}
                >
                  {category}
                </h2>
                <div
                  className="h-px mb-6"
                  style={{ background: GOLD_LINE, opacity: 0.4 }}
                />
              </>
            )}

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {items.map((product) => (
                <ProductCard key={product.idProduct} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
