import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../atoms/buttons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; // ajusta la ruta si es necesario

function CarNavbar({ setCartShopOpen }) {

  const { cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartShopOpen(true);
  };

  return (
    <div className="flex items-center gap-6 justify-center mr-6 ml-20">
      <Button
        variant="primary"
        onClick={handleSubmit}
        className="relative"
      >
        <FiShoppingCart className="text-[#FFBB00] size-6" />

        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>
        )}

      </Button>
    </div>
  );
}

export { CarNavbar };