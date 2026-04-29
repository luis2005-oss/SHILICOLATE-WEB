import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../atoms/buttons";
import { useCart } from "../../context/CartContext";

function CarNavbar({ setCartShopOpen }) {
  const { totalItems } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartShopOpen(true);
  };

  return (
    <div className="flex items-center gap-6 justify-center mr-6 ml-20">
      <Button variant="primary" onClick={handleSubmit}>
        <div className="relative inline-flex items-center gap-2">
          <FiShoppingCart className="text-[#FFBB00] size-6" />

          {totalItems > 0 && (
            <span className="text-[#FFBB00] font-serif text-sm font-bold">
              {totalItems}
            </span>
          )}
        </div>
      </Button>
    </div>
  );
}

export { CarNavbar };