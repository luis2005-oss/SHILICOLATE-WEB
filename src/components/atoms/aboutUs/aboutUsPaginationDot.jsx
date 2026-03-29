function AboutUsPaginationDot({ isActive, ...props }) {
  return (
    <div 
      className={`h-3 rounded-full transition-all duration-500 shadow-lg ${isActive ? 'w-8 bg-[#683D14]' : 'w-3 bg-[#5c421b]'}`}
      {...props}
    ></div>
  )
}
export { AboutUsPaginationDot }