import { useState } from "react";

interface ShopCategoriesProps {
  categories: string[];
  onCategoryChange?: (category: string) => void;
}

const ShopCategories = ({ categories, onCategoryChange }: ShopCategoriesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCategoryClick = (index: number, category: string) => {
    setActiveIndex(index);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="flex gap-3 p-2">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(index, category)}
          className={`px-3 py-0.5 font-bold transition duration-200 ${
            activeIndex === index
              ? "text-black border-b border-black"
              : "text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ShopCategories;
