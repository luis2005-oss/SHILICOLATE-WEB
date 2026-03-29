function AboutUsNavButton({ onClick, children, ...props }) {
  return (
    <button 
      onClick={onClick} 
      className="p-2 md:p-4 text-[#683D14] hover:text-[#CCA147] hover:scale-110 transition-all text-3xl md:text-5xl cursor-pointer z-20 drop-shadow-lg bg-transparent border-none"
      {...props}
    >
      {children}
    </button>
  )
}
export { AboutUsNavButton }