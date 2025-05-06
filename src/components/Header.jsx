import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiGlobe,
  FiMenu,
} from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top row */}
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              className="lg:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FiMenu className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <Link to="/" className="text-xl sm:text-2xl font-bold">
              LOGO
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <button className="hover:text-gray-600 p-1 relative group">
                <FiSearch className="h-5 w-5" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
              </button>
              <button className="hover:text-gray-600 p-1 relative group">
                <FiHeart className="h-5 w-5" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
              </button>
              <button className="hover:text-gray-600 p-1 relative group">
                <FiShoppingCart className="h-5 w-5" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
              </button>
              <button className="hover:text-gray-600 p-1 relative group">
                <FiUser className="h-5 w-5" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
              </button>
              <button className="hover:text-gray-600 p-1 relative group">
                <FiGlobe className="h-5 w-5" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
              </button>
            </div>
            <Link
              to="/login"
              className="bg-black text-white px-4 sm:px-6 py-2 text-sm sm:text-base rounded hover:bg-gray-800 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4">
            <button className="hover:text-gray-600 p-1 relative group">
              <FiSearch className="h-5 w-5" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
            </button>
            <button className="hover:text-gray-600 p-1 relative group">
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
            </button>
            <Link
              to="/login"
              className="bg-black text-white px-3 py-1.5 text-sm rounded hover:bg-gray-800 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row - Navigation */}
      <nav
        className={`bg-white ${
          isMenuOpen ? "block" : "hidden"
        } lg:block border-t`}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center py-2 sm:py-4 gap-2 lg:gap-8 xl:gap-12">
            <li>
              <Link
                to="/"
                className="block py-2 lg:py-0 text-sm sm:text-base text-gray-800 hover:text-gray-600 font-medium relative group"
              >
                SHOP
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
              </Link>
            </li>
            {["SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 lg:py-0 text-sm sm:text-base text-gray-800 hover:text-gray-600 font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-100 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          DISCOVER OUR PRODUCTS
        </h1>
      </div>
    </header>
  );
};

export default Header;
