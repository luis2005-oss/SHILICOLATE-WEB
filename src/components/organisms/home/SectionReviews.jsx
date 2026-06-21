import { LazyImage } from "../../common/LazyImage";

function ReviewCard({ title, img, className = "" }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-[6px]
        cursor-pointer bg-[#2a1810]
        ${className}
      `}
    >
      <LazyImage
        src={img}
        alt={title}
        width={800}
        height={800}
        sizes="(max-width: 768px) 50vw, 33vw"
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
          bg-gradient-to-t
          from-[rgba(26,13,8,0.88)]
          via-transparent
          to-transparent
          flex items-end
          p-4 sm:p-5
        "
      >
        <p
          className="
            font-serif font-light text-[0.9rem]
            text-[#f5e8d5]
            opacity-0 translate-y-1.5
            transition-[opacity,transform]
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
            group-active:opacity-100
            group-active:translate-y-0
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
    { id: 1, img: "/REVIEW-3.webp" },
    { id: 2, img: "/REVIEW-4.webp" },
    { id: 3, img: "/REVIEW-2.webp" },
    { id: 4, img: "/REVIEW-1.webp" },
    { id: 5, img: "/REVIEW-5.webp" },
    { id: 6, img: "/REVIEW-6.webp" },
  ];

  return (
    <section className="bg-[#1a0d08] w-full py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="font-serif text-4xl text-[#f5e8d5]">
            Cada detalle, <em className="text-[#c8895a]">una experiencia</em>
          <br />
            para recordar
        </h2>
      </div>

      {/* MÓVIL */}
      <div className="grid grid-cols-2 gap-3 max-w-5xl mx-auto md:hidden">
        {listReviews.map((review) => (
          <ReviewCard
            key={review.id}
            img={review.img}
            className="h-[180px]"
          />
        ))}
      </div>

      {/* DESKTOP */}
      <div
        className="
          hidden md:grid max-w-5xl mx-auto gap-3
          grid-cols-3
          grid-rows-[220px_220px_220px]
        "
      >
        {/* 1 */}
        <ReviewCard
          img={listReviews[0].img}
          className="row-span-2 col-start-1 row-start-1"
        />

        {/* 2 */}
        <ReviewCard
          img={listReviews[1].img}
          className="col-start-2 row-start-1"
        />

        {/* 3 */}
        <ReviewCard
          img={listReviews[2].img}
          className="row-span-2 col-start-3 row-start-1"
        />

        {/* 5 */}
        <ReviewCard
          img={listReviews[4].img}
          className="row-span-2 col-start-2 row-start-2"
        />

        {/* 4 */}
        <ReviewCard
          img={listReviews[3].img}
          className="col-start-1 row-start-3"
        />

        {/* 6 */}
        <ReviewCard
          img={listReviews[5].img}
          className="col-start-3 row-start-3"
        />
      </div>
    </section>
  );
}

export { Reviews };