import { Paragraph } from "../../atoms/paragraph"
import { Title } from "../../atoms/titles"

function Description({description}) {
  return (
    <div className="w-full max-w-5xl flex flex-col gap-2 rounded bg-white backdrop-blur-xl p-10 shadow-xl text-center text-black">
      <Title text="Información Importante" level="h3" weight="bold" align="center" />
      <Paragraph text={description} />
    </div>
  )
}

export { Description }