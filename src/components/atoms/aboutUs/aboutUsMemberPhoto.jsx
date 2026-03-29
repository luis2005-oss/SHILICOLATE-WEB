function AboutUsMemberPhoto({ src, alt, isActive }) {
  return (
    <div className={`
      w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[4px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500
      ${isActive 
        ? 'border-[#683D14] grayscale-0 brightness-100' 
        : 'border-[#9A6F28] grayscale md:hover:grayscale-0 md:hover:brightness-100'
      }
    `}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
export { AboutUsMemberPhoto }