function AboutUsCircleContainer({ children }) {
  return (
    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 border-4 border-transparent cursor-default">
      {children}
    </div>
  )
}

export { AboutUsCircleContainer }