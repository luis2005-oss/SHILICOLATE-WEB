function GalleryCard({ src, alt, className = "" }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-md
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
      <div
        className="
        absolute bottom-0 left-0 right-0 h-[2px]
        bg-[#c8895a] scale-x-0 origin-left
        transition-transform duration-[350ms]
        group-hover:scale-x-100
      "
      />
    </div>
  );
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
          Nuestra historia
        </span>
        <h3 className="font-serif font-bold text-[1.5rem] text-[#f5e8d5] leading-snug">
          Shilicolate,
          <br />
          el sabor de una tradición
        </h3>
        <div className="w-8 h-px bg-[#c8895a] opacity-50" />
        <p className="font-serif font-light text-[0.9rem] text-[#c4a98a] leading-[1.8]">
          La EMPRESA VIRGEN DEL CARMEN – CELENDIN SRL, fue creada el 13 de
          octubre del 2006. Es una empresa peruana ubicada en Celendín,
          Cajamarca. Que nació como una idea de negocio que se dedica a la
          elaboración y comercialización de productos derivados del cacao.{" "}
          <br /><br />
          Tiene como marca registrada “SHILICOLATE – El Verdadero Sabor Del
          Chocolate Shilico”, teniendo como dueña la Señora Jesús Haydee Briones
          Sánchez y Representante Legal a su hija Lourdes Jacquelin Alva
          Briones. <br /><br />
          Tiene como marca registrada “SHILICOLATE – El Verdadero Sabor Del
          Chocolate Shilico”, teniendo como dueña la Señora Jesús Haydee Briones
          Sánchez y Representante Legal a su hija Lourdes Jacquelin Alva
          Briones. <br /><br />
          Actualmente la empresa, su principal producto es el chocolate al 100%
          y sus derivados: chocolate al 70%, Shilibombones, Chocotejas,
          Shilicoctel. La cual comercializa dentro de la provincia de Celendín,
          Región Cajamarca, y Costa Central.
        </p>
      </div>

      {/* Derecha — clara */}
      <div className="bg-[#fdf6ee] p-10 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[#e8d8c4]">
        <span className="font-serif text-[11px] tracking-[0.22em] uppercase text-[#c8895a]">
          Nuestros valores
        </span>
        <h3 className="font-serif font-bold text-[1.5rem] text-[#1a0d08] leading-snug">
          Calidad que respeta la naturaleza
          <br />y nuestra identidad.
        </h3>
        <div className="w-8 h-px bg-[#c8895a] opacity-50" />
        <div className="flex flex-col gap-5 font-serif text-[0.9rem] text-[#7a5c45] leading-[1.8]">
          <p>
            <strong>Calidad</strong>
            <br />
            En Shilicolate, la calidad no es solo un estándar, es una promesa.
            Seleccionamos cuidadosamente el mejor cacao de la región y
            elaboramos cada producto de forma artesanal, garantizando sabor,
            textura y frescura. Utilizamos ingredientes naturales, sin aditivos
            ni conservantes, cuidando también cada detalle en la presentación y
            experiencia del cliente.
          </p>

          <p>
            <strong>Innovación</strong>
            <br />
            Creamos productos únicos como Shilibombones y chocolates al 70% y
            50%. Experimentamos constantemente con nuevas combinaciones,
            texturas y formatos que sorprenden, incorporando además empaques
            sostenibles y diseños que reflejan nuestra identidad local.
          </p>

          <p>
            <strong>Compromiso con la comunidad</strong>
            <br />
            Trabajamos directamente con agricultores locales, promoviendo
            prácticas sostenibles y generando oportunidades para jóvenes y
            mujeres de la zona. Participamos en iniciativas culturales,
            educativas y ambientales que fortalecen nuestra comunidad. Cada
            producto refleja el esfuerzo y la esencia de nuestra tierra.
          </p>

          <p>
            <strong>Pasión por el chocolate</strong>
            <br />
            El chocolate es nuestro arte e inspiración. Cada creación nace del
            amor por el cacao y el deseo de compartirlo con el mundo. Buscamos
            despertar emociones, crear momentos y transmitir orgullo local en
            cada experiencia.
          </p>
        </div>
      </div>
    </div>
  );
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
          grid max-w-6xl mx-auto mb-10 gap-2
          grid-cols-3
          grid-rows-[280px_280px]
        "
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >
        <GalleryCard
          src="./US-2.jpeg"
          alt="Interior chocolatería"
          className="row-span-2"
        />
        <GalleryCard src="./US-1.jpeg" alt="Detalle café" />
        <GalleryCard src="./US-4.jpeg" alt="Ambiente" className="row-span-2" />
        <GalleryCard src="./US-3.jpg" alt="Grano de café" />
      </div>

      {/* Bloque historia */}
      <div
        className="max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="350"
      >
        <HistoryBlock />
      </div>
    </section>
  );
}

export { AboutUsGallerySection };
