import { HomeBanner } from "../organisms/home/homeBanner";
import { MyTemplate } from "../templates/myTemplate";
import { Line } from "../molecules/home/homeLine";
import { Reviews } from "../organisms/home/SectionReviews";
import { VenefitsChocolate } from "../organisms/home/VenefitsChocolate";

function HomePage() {
  return (
    <MyTemplate 
    >
      <HomeBanner />
      <VenefitsChocolate />
      <Line/>
      <Reviews/>
    </MyTemplate>
  );
}

export { HomePage };
