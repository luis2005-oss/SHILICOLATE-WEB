import { CategoryButton } from "../../atoms/letter/CategoryButton";
import { FaCoffee, FaBirthdayCake } from "react-icons/fa";

function CategoryNav({ categories, onSelectCategory, activeCategory }) {
  if (!categories || categories.length === 0) return null;

  const getIcon = (name = "") => {
    const lowerName = name.toLowerCase();

    if (lowerName.includes("cafe") || lowerName.includes("café")) {
      return <FaCoffee />;
    }

    return <FaBirthdayCake />;
  };

  return (
    <nav
      className="sticky mb-4 top-[90px] md:top-[100px] z-40 py-4
                bg-[#020202]/95 backdrop-blur-md shadow-2xl
                border-b border-[#d6c394]/30 transition-all"
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide justify-start pl-2">
          {categories.map((cat, index) => (
            <div
              key={cat.idCategory}
              className="shrink-0 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={100 + index * 100}
              data-aos-once="true"
            >
              <CategoryButton
                nombre={cat.name}
                icono={getIcon(cat.name)}
                onClick={() => onSelectCategory(cat.idCategory)}
                isActive={activeCategory === cat.idCategory}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export { CategoryNav };
