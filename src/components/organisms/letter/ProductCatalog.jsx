import { useState } from "react";
import { ProductCard } from "../../molecules/letter/ProductCard";

const products = [
  /* Chocolate en chapa */
  { idProduct: 1, name: "Chocolate en chapa de 55gr", category: "Chocolate en chapa", price: 4, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100% cacao puro, de sabor intenso y natural." },
  { idProduct: 2, name: "Chocolate en chapa de 70gr", category: "Chocolate en chapa", price: 5, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },
  { idProduct: 3, name: "Chocolate en chapa de 100gr", category: "Chocolate en chapa", price: 7, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },
  { idProduct: 4, name: "Chocolate en chapa de 150gr", category: "Chocolate en chapa", price: 9, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },
  { idProduct: 5, name: "Chocolate en chapa de 250gr", category: "Chocolate en chapa", price: 15, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },
  { idProduct: 6, name: "Chocolate en chapa de 300gr", category: "Chocolate en chapa", price: 18, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },
  { idProduct: 7, name: "Chocolate en chapa de 400gr", category: "Chocolate en chapa", price: 24, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },
  { idProduct: 8, name: "Chocolate en chapa de 460gr", category: "Chocolate en chapa", price: 28, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },
  { idProduct: 9, name: "Chocolate en chapa de 500gr", category: "Chocolate en chapa", price: 30, URL: "/CHOCOLATE-CHAPA.png", desc: "Elaborado con 100 % cacao puro, de sabor intenso y natural." },

  /* Chocolate en caja */
  { idProduct: 10, name: "Chocolate en caja de 100gr", category: "Chocolate en caja", price: 8, URL: "/CAJA-100.png", desc: "Cacao intenso, profundo y auténtico para cada momento." },
  { idProduct: 11, name: "Chocolate en caja de 200gr", category: "Chocolate en caja", price: 14, URL: "/CAJA-200.png", desc: "Cacao intenso, profundo y auténtico para cada momento." },

  /* Chocolate en barra */
  { idProduct: 12, name: "Chocolate en barra", category: "Chocolate en barra", price: 9, URL: "/CHOCOLATE-BARRA.png", desc: "Chocolates artesanales en barra, ideales para compartir o regalar.", },

  /* Chocolate */
  { idProduct: 13, name: "Chocolate", category: "Chocolate", price: 6.8, URL: "/CHOCOLATE.png", desc: "100% cacao artesanal, perfecto para una taza de chocolate caliente." },

  /* Shilibombones */
  { idProduct: 14, name: "Shilibombones", category: "Shilibombones", price: 8, URL: "/SHILIBOMBONES.png", desc: "Bombones artesanales con cacao selecto y cremas de delicioso sabor." },

  /* Chocolate comestible */
  { idProduct: 15, name: "Sabor a Pecana de 70gr", category: "Chocolate comestible", price: 8, URL: "/CHOCOLARE-COM-PECANA.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 16, name: "Sabor a Blueberry de 70gr", category: "Chocolate comestible", price: 8, URL: "/CHOCOLARE-COM-BLUEBERRY.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 17, name: "Sabor Aguaymanto de 70gr", category: "Chocolate comestible", price: 8, URL: "/CHOCOLARE-COM-AGUAYMANTO.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 18, name: "Sabor a Cafe de 70gr", category: "Chocolate comestible", price: 8, URL: "/CHOCOLARE-COM-CAFE.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 19, name: "Sabor a Almendra de 70gr", category: "Chocolate comestible", price: 8, URL: "/CHOCOLARE-COM-ALMENDRA.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },

  { idProduct: 20, name: "Sabor a Pecana de 35gr", category: "Chocolate comestible", price: 4, URL: "/CHOCOLARE-COM-PECANA.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 21, name: "Sabor a Blueberry de 35gr", category: "Chocolate comestible", price: 4, URL: "/CHOCOLARE-COM-BLUEBERRY.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 22, name: "Sabor Aguaymanto de 35gr", category: "Chocolate comestible", price: 4, URL: "/CHOCOLARE-COM-AGUAYMANTO.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 23, name: "Sabor a Cafe de 35gr", category: "Chocolate comestible", price: 4, URL: "/CHOCOLARE-COM-CAFE.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },
  { idProduct: 24, name: "Sabor a Almendra de 35gr", category: "Chocolate comestible", price: 4, URL: "/CHOCOLARE-COM-ALMENDRA.png", desc: "Chocolate comestible artesanal, con deliciosos sabores naturales que combinan perfectamente con el intenso cacao." },

  /* Shilicotejas */
  { idProduct: 25, name: "Shilicoteja de Maracuyá", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de maracuyá, con un equilibrio perfecto entre dulzura y acidez." },
  { idProduct: 26, name: "Shilicoteja de Maracumago", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja con mermelada de maracuyá y mango, una mezcla tropical de dulzura y frescura." },
  { idProduct: 27, name: "Shilicoteja de Naranja", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja con mermelada de naranja, una combinación cítrica de dulzura y acidez." },
  { idProduct: 28, name: "Shilicoteja de Mandarina", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de mandarina, con un toque cítrico en cada bocado." },
  { idProduct: 29, name: "Shilicoteja de Aguaymanto", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de aguaymanto, con un ligero toque agridulce en cada bocado." },
  { idProduct: 30, name: "Shilicoteja de Piña", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de piña, con un sabor tropical y refrescante." },
  { idProduct: 31, name: "Shilicoteja de Limón", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de limón, con un toque cítrico y refrescante." },
  { idProduct: 32, name: "Shilicoteja de Tamarindo", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de tamarindo, con un sabor único y refrescante." },
  { idProduct: 33, name: "Shilicoteja de Pisco", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con crema de pisco, un delicado toque de licor que resalta el sabor del chocolate." },
  { idProduct: 34, name: "Shilicoteja de Vino", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con vino, un toque de licor que resalta el sabor del chocolate." },
  { idProduct: 35, name: "Shilicoteja de Fresa", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de fresa, con un sabor dulce y refrescante." },
  { idProduct: 36, name: "Shilicoteja de Mora", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de mora, con un sabor intenso y refrescante." },
  { idProduct: 37, name: "Shilicoteja de Arándano", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de arándano, con un sabor dulce y refrescante." },
  { idProduct: 38, name: "Shilicoteja de Sauco", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de sauco, con un sabor único y refrescante." },
  { idProduct: 39, name: "Shilicoteja de Lúcuma", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: " Shilicoteja rellena con crema lúcuma. Un sabor suave que endulza cada bocado." },
  { idProduct: 40, name: "Shilicoteja de Pasas", category:"Shilicotejas", price:1, URL:"/SHILICOTEJAS.png", desc: "Shilicoteja rellena con pasas deshidratadas. Un sabor dulce que endulza cada bocado." },
  { idProduct: 41, name: "Shilicoteja de Guindón", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de guindón, con un sabor intenso y refrescante." },
  { idProduct: 42, name: "Shilicoteja de Café", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de café, con un sabor intenso y refrescante." },
  { idProduct: 43, name: "Shilicoteja de Pitahaya", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de pitahaya, con un sabor único y refrescante." },
  { idProduct: 44, name: "Shilicoteja de Pecana", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de pecana, con un sabor intenso y refrescante." },
  { idProduct: 45, name: "Shilicoteja de Coco", category: "Shilicotejas", price:  1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de coco, con un sabor tropical y refrescante." },
  { idProduct: 46, name: "Shilicoteja de Maní", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png",desc: "Shilicoteja rellena con mermelada de maní,con un sabor intenso y refrescante." },
  { idProduct: 47, name: "Shilicoteja de Almendra", category: "Shilicotejas", price: 1, URL: "/SHILICOTEJAS.png", desc: "Shilicoteja rellena con mermelada de almendra, con un sabor intenso y refrescante." }
];

const categories = [
  "Todos",
  "Chocolate en chapa",
  "Chocolate en caja",
  "Chocolate en barra",
  "Chocolate",
  "Shilibombones",
  "Chocolate comestible",
  "Shilicotejas"
];

export function ProductCatalog({ addToCart }) {

  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter(p => p.category === activeCategory);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  const dividirShilicotejas = (items) => {
    const grupos = {
      "Mermelada Agridulce": ["Maracuyá", "Maracumago", "Naranja", "Mandarina", "Aguaymanto", "Piña", "Limón", "Tamarindo"],
      "Licor": ["Pisco", "Vino",],
      "Mermelada Dulce": ["Fresa", "Mora", "Arándano", "Sauco", "Lúcuma"],
      "Frutas Deshidratadas": ["Pasas", "Guindón"],
      "Exoticascas": ["Café", "Pitahaya"],
      "Frutos secos": ["Pecana", "Coco", "Maní", "Almendra"]
    };

    const resultado = {};

    Object.entries(grupos).forEach(([grupo, sabores]) => {
      resultado[grupo] = items.filter(item =>
        sabores.some(s => item.name.includes(s))
      );
    });

    return resultado;
  };

  return (
    <>
      {/* BOTONES */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition
            ${activeCategory === cat
                ? "bg-[#462114] text-white border-[#CCA047]"
                : "bg-white text-[#462114] border-[#462114]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTOS */}
      <div className="space-y-14">

        {Object.entries(groupedProducts).map(([category, items]) => (

          <div key={category}>

            <h2 className="text-2xl font-bold text-[#462114] mb-6 border-b pb-2">
              {category}
            </h2>

            {category === "Shilicotejas" ? (

              Object.entries(dividirShilicotejas(items)).map(([grupo, productos]) => (

                <div key={grupo} className="mb-10">

                  <h3 className="text-xl font-semibold text-[#462114] mb-4 ">
                    {grupo}
                  </h3>

                  <div
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))"
                    }}
                  >

                    {productos.map(product => (

                      <ProductCard
                        key={product.idProduct}
                        product={product}
                        addToCart={addToCart}
                      />

                    ))}

                  </div>

                </div>

              ))

            ) : (

              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))"
                }}
              >

                {items.map(product => (

                  <ProductCard
                    key={product.idProduct}
                    product={product}
                    addToCart={addToCart}
                  />

                ))}

              </div>

            )}

          </div>

        ))}

      </div>
    </>
  );
}