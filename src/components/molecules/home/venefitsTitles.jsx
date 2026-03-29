import { Title } from "../../atoms/titles"

function ContTitles() {
  return (
    <div className="
  flex items-center 
  justify-center min-[420px]:justify-between
  px-4 py-3
  w-full
  sm:max-w-full
  bg-black text-white
  shadow-[0_8px_30px_black]
  gap-4
">


      <Title
        level="h3"
        text={'Donde el chocolate se convierte en experiencia'}
        weight="normal"
        align="center"
        variant="primary"
      />

      <Title
        level="h3"
        text={'Shilicolate'}
        weight="normal"
        align="center"
        variant="primary"
        className="hidden min-[420px]:block"
      />
    </div>
  )
}

export { ContTitles }