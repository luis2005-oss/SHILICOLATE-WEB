import { useState } from "react";
import { ProductHeader } from "../organisms/letter/ProductHeader";
import { MyTemplate } from "../templates/myTemplate";
import { ProductCatalog } from "../organisms/letter/ProductCatalog";

export const LetterPage = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    setCart((prevCart) => {

      const existing = prevCart.find(p => p.id === product.id);

      if (existing) {
        return prevCart.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

  };

  return (
    <MyTemplate>
      <div className="min-h-screen bg-[#FFF0F5] px-4 pt-32 pb-8 md:px-8 lg:px-16">

        <ProductHeader title="Nuestros productos" />

        <div className="max-w-7xl mx-auto mt-8">
          <ProductCatalog addToCart={addToCart}/>
        </div>

      </div>
    </MyTemplate>
  );
};