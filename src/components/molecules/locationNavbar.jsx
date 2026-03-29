import { FaLocationDot } from "react-icons/fa6";
import { Link } from "../atoms/links";



function LocationNavbar () {
  const location = 'Av. Amazonas 513 - Celendín'
    return(
        <Link 
          target='_black'
          href='https://maps.app.goo.gl/DrRYNZjjMCFXWKxTA'
          variant="danger"
        >
          <FaLocationDot className="text-red-500 "/>
          <small className="transition-all duration-300 hover:text-amber-300 text-amber-100">{location}</small>
        </Link>
    )
}

export {LocationNavbar}