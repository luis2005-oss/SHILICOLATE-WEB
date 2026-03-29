import { Link } from "../atoms/links"

function Logo({variant = 'tertiary', className= 'mt-10' }) {
  return (

    
    <Link 
          href="/" 
          variant={variant}
          className={className}
        >
          <img 
            src="/LOGO.png" 
            alt="Logo de la empresa" 
            className="w-40 md:w-40rem lg:w-60rem h-auto"
          />

        </Link>
    )
}

export { Logo }