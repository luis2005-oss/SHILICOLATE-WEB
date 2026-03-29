import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../atoms/buttons";

function CarNavbar({setCartShopOpen}) {

  const handleSubmit = (e) =>{
    e.preventDefault()
    setCartShopOpen(true)
  }
  
  return (
    <div className="flex items-center gap-6 justify-center mr-6 ml-20">
      <Button 
        variant="primary"
        onClick={handleSubmit}
      >
        <FiShoppingCart  className="text-[#FFBB00] size-6"  />
      </Button>
      
    </div>
  )
}

export { CarNavbar }