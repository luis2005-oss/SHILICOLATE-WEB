import { Link } from "../../atoms/links"

function BannerButtons() {
  return (
    <div className="flex  sm:flex-row gap-5 sm:gap-4 md:gap-6 lg:gap-16 w-auto sm:w-auto">
          <Link
            text={'Ver Productos'}
            href="/letter"
            variant="primary"
          />
          <Link
            text={'Reconocimientos'}
            href="/bookings"
            variant="primary"
          />
        </div>
    )
}

export { BannerButtons }