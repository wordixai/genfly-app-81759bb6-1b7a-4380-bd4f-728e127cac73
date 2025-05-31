import React from "react";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex overflow-x-auto space-x-2 pb-2">
      {categories.map((category) => (
        <button
          key={category}
          className={cn(
            "px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium transition-colors",
            activeCategory === category
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          )}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;