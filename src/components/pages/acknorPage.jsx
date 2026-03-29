import { MyTemplate } from "../templates/myTemplate"
import { Banner } from "../organisms/booking/banner"
import { Schedules } from "../organisms/booking/schedules"

function AcknorPage() {
  return (
    <MyTemplate>
      <Banner/>
      <Schedules/>
    </MyTemplate>
  )
}

export { AcknorPage }