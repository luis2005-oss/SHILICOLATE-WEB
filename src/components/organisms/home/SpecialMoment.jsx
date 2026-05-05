function SpecialMoment({
  image = "/VENEFITIONS.png",
  quote = "Cada pieza de Shilicolate está pensada para regalarte un momento especial.",
  imageAlt = "Producto Shilicolate",
  backgroundColor = "#fdf6ee",
}) {
  return (
    <div
      className="w-screen relative left-[calc(-50vw+50%)] py-20 md:py-28"
      style={{ backgroundColor }}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
    >
      {/* Contenedor interno con max-width */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-0">
        {/* Imagen - 50% */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
          <img
            src={image}
            alt={imageAlt}
            className="w-40 md:w-56 lg:w-64 drop-shadow-[0_8px_20px_rgba(26,13,8,0.18)] hover:scale-105 transition-transform duration-400"
          />
        </div>

        {/* Frase - 50% */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
          <blockquote className="font-serif italic text-[clamp(1.1rem,2.5vw,1.5rem)] text-[#1a0d08] leading-relaxed m-0 border-l-4 border-[#c8895a] pl-6">
            "{quote}"
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export { SpecialMoment };
