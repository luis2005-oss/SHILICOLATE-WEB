import { HomeBanner } from "../organisms/home/homeBanner";
import { MyTemplate } from "../templates/myTemplate";
import { Reviews } from "../organisms/home/SectionReviews";
import { VenefitsChocolate } from "../organisms/home/VenefitsChocolate";
import { HomeMapSection} from "../organisms/home/HomeMapSection"

function HomePage() {
  return (
    <MyTemplate 
    >
      <HomeBanner />
      <Reviews/>
      <VenefitsChocolate />
      <HomeMapSection />
    </MyTemplate>
  );
}

export { HomePage };
