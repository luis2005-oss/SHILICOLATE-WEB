import { Paragraph } from "../../atoms/paragraph";
import { Title } from "../../atoms/titles";

function VenefitionsList({ items, iconPosition = "left" }) {
  return (
    <div className="flex flex-col gap-16 min-[600px]:gap-20 lg:gap-24 min-[600px]:mt-12 lg:mt-16 items-center min-[600px]:items-start">
      {items.map((item, i) => (
        <article
          key={i}
          className={`
            flex 
            items-center 
            justify-start 
            gap-3 
            max-w-md 
            ${iconPosition === "right" ? "flex-row-reverse text-right" : ""}
          `}
        >
          <span className="
            w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
            shrink-0 rounded-full bg-black text-[#FFBB00] 
            flex items-center justify-center 
            group cursor-pointer hover:bg-cyan-950
          ">
            <span className="transition-transform duration-300 group-hover:rotate-30">
              {item.icon}
            </span>
          </span>
          <div className="flex-1">
            <Title
              text={item.title}
              level="h4"
              weight="bold"
              className="mb-1"
            />
            <Paragraph
              text={item.paragraph}
              size="medium"
              variant="danger"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export { VenefitionsList };
