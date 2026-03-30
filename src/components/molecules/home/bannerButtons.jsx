import { Link } from "../../atoms/links"

function BannerButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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