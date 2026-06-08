import { Search } from "lucide-react";
import { useState } from "react";

interface ExperienceFiltersProps {
  onSearch: (search: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function ExperienceFilters({
  onSearch,
  onCategoryChange,
}: ExperienceFiltersProps) {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Sve");

  const categories = [
    "Sve",
    "Med",
    "Med sa ukusom",
    "Lekoviti med",
  ];

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-12">
      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Pretraži iskustva..."
          className="
            w-full
            rounded-2xl
            border
            border-honey/30
            bg-white
            p-4
            pr-14
            outline-none
            focus:border-honey
            transition
          "
        />

        <button
          onClick={handleSearch}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            bg-honey
            text-brown
            rounded-xl
            p-2.5
            cursor-pointer
            hover:scale-105
            transition
          "
        >
          <Search size={20} />
        </button>
      </div>

      {/* Categories */}
      <div
        className="
          flex
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              handleCategoryClick(category)
            }
            className={`
              px-5
              py-2
              rounded-full
              whitespace-nowrap
              cursor-pointer
              transition
              font-bree
              ${
                activeCategory === category
                  ? "bg-honey text-brown shadow-md"
                  : "bg-white text-brown border border-honey/30 hover:bg-honey/20"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}