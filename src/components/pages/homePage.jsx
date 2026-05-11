import { HomeBanner } from "../organisms/home/homeBanner";
import { MyTemplate } from "../templates/myTemplate";
import { Reviews } from "../organisms/home/SectionReviews";
import { VenefitsChocolate } from "../organisms/home/VenefitsChocolate";
import { HomeMapSection} from "../organisms/home/HomeMapSection"
import { SpecialMoment } from '../organisms/home/SpecialMoment'

function HomePage() {
  return (
    <MyTemplate 
    >
      <HomeBanner />
      <Reviews/>
      <VenefitsChocolate />
      <SpecialMoment />
      <HomeMapSection />
    </MyTemplate>
  );
}

export { HomePage };
