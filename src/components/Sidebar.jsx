import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Sidebar = ({ onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showIdealForOptions, setShowIdealForOptions] = useState(false);

  const filterCategories = [
    {
      title: "Category",
      options: ["All", "Men", "Women", "Kids", "Accessories"],
      subOptions: {
        Men: ["Casual", "Formal", "Sports"],
        Women: ["Casual", "Formal", "Party"],
        Kids: ["Boys", "Girls", "Infants"],
        Accessories: ["Bags", "Jewelry", "Watches"],
      },
    },
    {
      title: "Price Range",
      options: ["All", "Under $50", "$50 - $100", "$100 - $200", "Over $200"],
    },
    {
      title: "Color",
      options: ["All", "Black", "White", "Red", "Blue", "Green"],
    },
    {
      title: "Size",
      options: ["All", "XS", "S", "M", "L", "XL"],
    },
    {
      title: "IDEAL FOR",
      options: ["All", "Men", "Women", "Baby & Kids"],
      subOptions: {
        Men: ["Casual", "Formal", "Sports"],
        Women: ["Casual", "Formal", "Party"],
        "Baby & Kids": ["Infants", "Toddlers", "Children"],
      },
    },
    {
      title: "Suitable for",
      options: ["All", "Raw Materials"],
      subOptions: {
        "Raw Materials": ["Cotton", "Silk", "Wool", "Linen"],
      },
    },
    {
      title: "Segment",
      options: ["All", "Premium", "Regular"],
      subOptions: {
        Premium: ["Luxury", "Designer"],
        Regular: ["Standard", "Basic"],
      },
    },
    {
      title: "Work",
      options: ["All", "Office", "Home"],
      subOptions: {
        Office: ["Business", "Corporate"],
        Home: ["Casual", "Comfort"],
      },
    },
    {
      title: "Occasion",
      options: ["All", "Party", "Wedding"],
      subOptions: {
        Party: ["Birthday", "Festival"],
        Wedding: ["Bride", "Groom", "Guest"],
      },
    },
  ];

  const handleOptionChange = (category, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: option,
    }));
    onFilterChange(category, option);
  };

  const renderCategory = (category, index) => {
    return (
      <div key={index} className="mb-4 sm:mb-6 lg:mb-8">
        <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
          {category.title}
        </h3>
        <div className="space-y-3 sm:space-y-4">
          <div className="relative">
            <select
              className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
              onChange={(e) => {
                const value = e.target.value;
                handleOptionChange(category.title, value);
              }}
              value={selectedOptions[category.title] || "All"}
            >
              {category.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {selectedOptions[category.title] &&
            selectedOptions[category.title] !== "All" &&
            category.subOptions?.[selectedOptions[category.title]] && (
              <div className="mt-2 pl-2 sm:pl-3 border-l-2 border-gray-200">
                {category.subOptions[selectedOptions[category.title]].map(
                  (subOption, subIndex) => (
                    <label
                      key={subIndex}
                      className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:bg-gray-50 p-2 sm:p-3 rounded-md transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        onChange={(e) =>
                          onFilterChange(
                            category.title,
                            subOption,
                            e.target.checked
                          )
                        }
                      />
                      <span className="text-sm sm:text-base text-gray-600">
                        {subOption}
                      </span>
                    </label>
                  )
                )}
              </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <aside className="w-full bg-white border-b sm:border-b-0 sm:border-r min-h-0 sm:min-h-screen p-3 sm:p-4 lg:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800">
        Filters
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {filterCategories.map((category, index) =>
          renderCategory(category, index)
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
