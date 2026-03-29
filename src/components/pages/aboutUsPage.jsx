import { MyTemplate } from "../templates/myTemplate"
import { AboutUsHeroSection } from "../organisms/aboutUs/AboutUsHeroSection"
import { AboutUsGallerySection } from "../organisms/aboutUs/AboutUsGallerySection"

function AbouUsPage() {
  return (
    <MyTemplate>
      <AboutUsHeroSection />
      <AboutUsGallerySection />
    </MyTemplate>
  )
}

export { AbouUsPage }