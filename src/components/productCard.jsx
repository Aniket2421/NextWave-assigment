import React from "react";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ product, isLoggedIn, onSignInClick }) => {
  const handleWishlistClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      onSignInClick();
    } else {
      // Handle adding to wishlist
      console.log("Adding to wishlist:", product.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 sm:p-6"
        />
        <button
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 p-1.5 sm:p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
        >
          <FiHeart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </button>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 line-clamp-2 mb-auto">
          {product.title}
        </h3>
        <div className="mt-2">
          <p className="text-base sm:text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          {!isLoggedIn && (
            <p className="mt-1 text-xs sm:text-sm text-blue-600">
              Sign in to see pricing
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
