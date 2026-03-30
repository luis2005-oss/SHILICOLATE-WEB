function GalleryCard({ src, alt, className = "" }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-[6px]
        bg-[#2a1810] cursor-pointer ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        className="
          w-full h-full object-cover block
          transition-[transform,filter] duration-500
          [filter:sepia(15%)_brightness(0.85)]
          group-hover:[filter:sepia(5%)_brightness(0.7)]
          group-hover:scale-[1.06]
        "
      />
      <div className="
        absolute bottom-0 left-0 right-0 h-[2px]
        bg-[#c8895a] scale-x-0 origin-left
        transition-transform duration-[350ms]
        group-hover:scale-x-100
      " />
    </div>
  )
}

function HistoryBlock() {
  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-2
        border border-[#e8d8c4] rounded-[10px] overflow-hidden
      "
    >
      {/* Izquierda — oscura */}
      <div className="bg-[#1a0d08] p-10 flex flex-col gap-4">
        <span className="font-serif text-[11px] tracking-[0.22em] uppercase text-[#c8895a]">
          Nuestro origen
        </span>
        <h3 className="font-serif font-bold text-[1.5rem] text-[#f5e8d5] leading-snug">
          Celendín,<br />tierra del chocolate
        </h3>
        <div className="w-8 h-px bg-[#c8895a] opacity-50" />
        <p className="font-serif font-light text-[0.9rem] text-[#c4a98a] leading-[1.8]">
          Shilicolate nació en el corazón de Celendín con la convicción de que el chocolate
          artesanal puede ser a la vez delicioso, sostenible y un reflejo fiel de nuestra cultura.
          Cada pieza lleva consigo el aroma y la tradición de nuestra tierra.
        </p>
      </div>

      {/* Derecha — clara */}
      <div className="bg-[#fdf6ee] p-10 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[#e8d8c4]">
        <span className="font-serif text-[11px] tracking-[0.22em] uppercase text-[#c8895a]">
          Nuestro compromiso
        </span>
        <h3 className="font-serif font-bold text-[1.5rem] text-[#1a0d08] leading-snug">
          Tradición que<br />se puede saborear
        </h3>
        <div className="w-8 h-px bg-[#c8895a] opacity-50" />
        <p className="font-serif font-light text-[0.9rem] text-[#7a5c45] leading-[1.8]">
          Trabajamos directamente con productores locales para garantizar el mejor cacao.
          Cada shilibonbón, chocoteja y chocolate en caja es elaborado a mano, con ingredientes
          naturales y el cuidado que merece cada momento especial.
        </p>
      </div>
    </div>
  )
}

function AboutUsGallerySection() {
  return (
    <section className="bg-[#fdf6ee] py-20 px-4">

      {/* Cabecera */}
      <div
        className="text-center mb-12"
        data-aos="fade-down"
        data-aos-duration="900"
      >

        <h2 className="font-serif font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a0d08] leading-tight">
          Un espacio{" "}
          <em className="italic font-normal text-[#c8895a]">hecho para ti</em>
        </h2>
      </div>

      {/* Grilla de imágenes */}
      <div
        className="
          grid max-w-5xl mx-auto mb-10 gap-2
          grid-cols-3
          grid-rows-[280px_280px]
        "
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >
        <GalleryCard src="./US-2.jpeg" alt="Interior chocolatería" className="row-span-2" />
        <GalleryCard src="./US-1.jpeg" alt="Detalle café" />
        <GalleryCard src="./US-4.jpeg" alt="Ambiente" className="row-span-2" />
        <GalleryCard src="./US-3.jpg"  alt="Grano de café" />
      </div>

      {/* Bloque historia */}
      <div
        className="max-w-5xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="350"
      >
        <HistoryBlock />
      </div>

    </section>
  )
}

export { AboutUsGallerySection }