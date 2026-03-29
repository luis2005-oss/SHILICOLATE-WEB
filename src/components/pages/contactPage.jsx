import { MyTemplate } from "../templates/myTemplate"
import { ContactHero } from "../organisms/contact/contactHero"
import { ContactFormSection } from "../organisms/contact/ContactFormSection"
import { ContactMapSection } from "../organisms/contact/ContactMapSection"

function ContactPage() {
  return (
    <MyTemplate>
      <ContactHero />
      <ContactFormSection />
      <ContactMapSection />
    </MyTemplate>
  )
}

export { ContactPage }