import { MyTemplate } from "../templates/myTemplate"
import { ContactHero } from "../organisms/contact/contactHero"
import { ContactFormSection } from "../organisms/contact/ContactFormSection"

function ContactPage() {
  return (
    <MyTemplate>
      <ContactHero />
      <ContactFormSection />
    </MyTemplate>
  )
}

export { ContactPage }