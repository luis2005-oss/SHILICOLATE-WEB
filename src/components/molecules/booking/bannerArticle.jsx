import { Paragraph } from "../../atoms/paragraph"
import { Title } from "../../atoms/titles"
import { BannerBgCurve } from "../bannerBgCurve"

function Article({ ...props }) {
  const title  = 'Nuestros reconocimientos'
  const description = `Reconocimientos que respaldan nuestra calidad, esfuerzo y compromiso con cada cliente.`

  return (
    <article 
      className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white z-10 pt-20 md:pt-0"
      {...props}
    >
      <Title
        text={title}
        level="h1"
        weight="bold"
        variant="primary"
        className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
      />
      <Paragraph
        text={description}
        size="large"
        variant="secondary"
        className="max-w-2xl lg:max-w-3xl mb-6 md:mb-8 lg:mb-10 leading-relaxed"
      />

      <BannerBgCurve design={2} />
    </article>
  )
}

export { Article }