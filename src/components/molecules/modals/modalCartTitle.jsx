import { Title } from "../../atoms/titles"
import { FiX  } from "react-icons/fi";


function CartTitle({CloseModal}) {
  const title = "Tus Productos";

  return (
    <div className="relative flex w-full h-full">
      <Title
        text={title}
        level="h3"
        variant="danger"
        className="text-2xl font-bold my-o mx-auto" />
      <FiX size={'20px'} onClick={CloseModal} className="absolute top-0 right-0 transition-transform duration-500 hover:rotate-90" />
    </div>
  )
}

export { CartTitle }