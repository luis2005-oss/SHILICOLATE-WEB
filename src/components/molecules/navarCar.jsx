import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../atoms/buttons";
import { useCart } from "../../context/CartContext";

function CarNavbar({ setCartShopOpen }) {
  const { cart } = useCart()
  const hasItems = cart && cart.length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    setCartShopOpen(true)
  }

  return (
    <div className="flex items-center gap-6 justify-center mr-6 ml-20">
      <Button
        variant="primary"
        onClick={handleSubmit}
      >
        <div className="relative">
          <FiShoppingCart className="text-[#FFBB00] size-6" />

          {hasItems && (
            <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1a0d08]" />
          )}
        </div>
      </Button>
    </div>
  )
}

export { CarNavbar }