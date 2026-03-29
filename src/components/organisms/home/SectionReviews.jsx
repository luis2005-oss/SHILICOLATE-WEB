function ReviewCard({ title, img, className = "" }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-[6px] cursor-pointer
        bg-[#2a1810] ${className}
      `}
    >
      <img
        src={img}
        alt={title}
        className="
          w-full h-full object-cover block
          transition-[transform,filter] duration-500
          [filter:sepia(20%)_brightness(0.82)]
          group-hover:[filter:sepia(10%)_brightness(0.65)]
          group-hover:scale-[1.06]
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-[rgba(26,13,8,0.88)] via-transparent to-transparent
          flex items-end
          p-4 sm:p-5
        "
      >
        <p
          className="
            font-serif font-light text-[0.9rem] text-[#f5e8d5]
            opacity-0 translate-y-1.5
            transition-[opacity,transform] duration-300
            group-hover:opacity-100 group-hover:translate-y-0
          "
        >
          {title}
        </p>
      </div>

      <div
        className="
          absolute bottom-0 left-0 right-0 h-[2px]
          bg-[#c8895a]
          scale-x-0 origin-left
          transition-transform duration-[350ms]
          group-hover:scale-x-100
        "
      />
    </div>
  );
}

function Reviews() {
  const listReviews = [
    { id: 1, title: "Cacao seleccionado", img: "/REVIEW-1.jpeg" },
    { id: 2, title: "Chocolates hechos para disfrutar", img: "REVIEW-5.jpg" },
    { id: 3, title: "Ambiente cálido", img: "REVIEW-3.jpg" },
    { id: 4, title: "Tradición Shilicolate", img: "REVIEW-4.png" },
    { id: 5, title: "Chocolates en chapa", img: "REVIEW-2.png" },
    { id: 6, title: "Momentos especiales", img: "REVIEW-6.jpg" },
  ];

  return (
    <section className="bg-[#1a0d08] w-full py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="font-serif text-4xl text-[#f5e8d5]">
          Cada foto, <em className="text-[#c8895a]">un sabor</em>
          <br />
          que recordar
        </h2>
      </div>

      {/* GRID EXACTO */}
      <div
        className="
    grid max-w-5xl mx-auto gap-3
    grid-cols-3
    grid-rows-[220px_220px_220px]
  "
      >
        {/* 1 - izquierda grande */}
        <ReviewCard
          title={listReviews[0].title}
          img={listReviews[0].img}
          className="row-span-2 col-start-1 row-start-1"
        />

        {/* 2 - arriba centro */}
        <ReviewCard
          title={listReviews[1].title}
          img={listReviews[1].img}
          className="col-start-2 row-start-1"
        />

        {/* 3 - derecha grande */}
        <ReviewCard
          title={listReviews[2].title}
          img={listReviews[2].img}
          className="row-span-2 col-start-3 row-start-1"
        />

        {/* 5 - centro grande */}
        <ReviewCard
          title={listReviews[4].title}
          img={listReviews[4].img}
          className="row-span-2 col-start-2 row-start-2"
        />

        {/* 4 - abajo izquierda */}
        <ReviewCard
          title={listReviews[3].title}
          img={listReviews[3].img}
          className="col-start-1 row-start-3"
        />

        {/* 6 - abajo derecha */}
        <ReviewCard
          title={listReviews[5].title}
          img={listReviews[5].img}
          className="col-start-3 row-start-3"
        />
      </div>
    </section>
  );
}

export { Reviews };
