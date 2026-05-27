import { Link } from "../atoms/links"

function Logo({
  variant = "tertiary",
  className = "mt-10",
  loading = "eager",
}) {
  return (
    <Link
      href="/"
      variant={variant}
      className={className}
    >
      <img
        src="/LOGO.webp"
        alt="Logo de la empresa"
        className="w-40 md:w-40rem lg:w-60rem h-auto"
        loading={loading}
        decoding="async"
      />
    </Link>
  )
}

export { Logo }