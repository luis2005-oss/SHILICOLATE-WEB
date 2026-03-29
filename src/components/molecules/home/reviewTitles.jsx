import { Title } from "../../atoms/titles"

function ContTitles() {
  const title = '¿Por qué elegirnos?'
  return (
    <div className="flex items-end justify-center gap-2">
      <span className="w-[5em] h-0.5 bg-black rounded-full" ></span>
      <Title
        text={title}
        level="h2"
        weight="bold"
        align="center"
      />
      <span className="w-[5em] h-0.5 bg-black rounded-full"></span>
    </div>
  )
}

export { ContTitles }