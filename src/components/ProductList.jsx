import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProductList = () => {
  const { isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [subFilters, setSubFilters] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");

  const sortOptions = [
    { value: "recommended", label: "RECOMMENDED" },
    { value: "newest", label: "NEWEST" },
    { value: "price-low", label: "PRICE: LOW TO HIGH" },
    { value: "price-high", label: "PRICE: HIGH TO LOW" },
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilterChange = (category, value, checked) => {
    if (checked === undefined) {
      setFilters((prev) => ({
        ...prev,
        [category]: value,
      }));
      setSubFilters((prev) => ({
        ...prev,
        [category]: new Set(),
      }));
      return;
    }

    setSubFilters((prev) => {
      const newSubFilters = { ...prev };
      if (!newSubFilters[category]) {
        newSubFilters[category] = new Set();
      }

      if (checked) {
        newSubFilters[category].add(value);
      } else {
        newSubFilters[category].delete(value);
      }

      return newSubFilters;
    });
  };

  useEffect(() => {
    let filtered = [...products];

    Object.entries(filters).forEach(([category, selectedOption]) => {
      if (selectedOption && selectedOption !== "All") {
        filtered = filtered.filter((product) => {
          return product.category
            ?.toLowerCase()
            .includes(selectedOption.toLowerCase());
        });
      }
    });

    Object.entries(subFilters).forEach(([category, selectedSubOptions]) => {
      if (selectedSubOptions.size > 0) {
        filtered = filtered.filter((product) => {
          return Array.from(selectedSubOptions).some((subOption) =>
            product.category?.toLowerCase().includes(subOption.toLowerCase())
          );
        });
      }
    });

    setFilteredProducts(filtered);
  }, [filters, subFilters, products]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="container mx-auto px-2 sm:px-4 flex flex-col lg:flex-row gap-4">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative inset-y-0 left-0 w-64 sm:w-72 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 lg:z-0 lg:w-72 xl:w-80 flex-shrink-0`}
        >
          <div className="h-full bg-white lg:h-auto relative">
            {/* Mobile Close Button */}
            <button
              className="absolute top-4 right-4 p-1 lg:hidden"
              onClick={toggleSidebar}
            >
              <FiX className="h-6 w-6 text-gray-500" />
            </button>
            <Sidebar onFilterChange={handleFilterChange} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow min-w-0">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 py-4 gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={toggleSidebar}
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 font-medium"
              >
                {isSidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
              </button>
              <span className="text-sm font-medium">
                {filteredProducts.length} ITEMS
              </span>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-1 text-sm font-medium cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  {isLoggedIn ? (
                    <p className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </p>
                  ) : (
                    <Link
                      to="/login"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Sign in or Create an account to see pricing
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
