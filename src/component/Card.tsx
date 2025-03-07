import { useState } from "react";
import { IconDetails, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({
  id,
  name,
  description,
  images,
  price,
  colors,
  slug,
  onAddToCart,
}) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="bg-white space-10 rounded-lg shadow-gray-300 shadow-lg overflow-hidden w-full text-left">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={currentImage}
            alt={name}
            className="w-full h-[250px] sm:h-[300px] object-cover"
          />
        </div>
        <div className="p-3">
          <h2 className="min-md:text-md font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
          <p className="min-md:text-md font-bold text-black-600 mt-1">
            Rp {price.toLocaleString()}
          </p>

          {/* add to cart*/}
          <div className="mt-4 flex justify-start space-x-1">
            <button
              className="flex items-center border rounded bg-black text-white border-gray-300 p-2 cursor-pointer"
              onClick={() => navigate(`/shop-fashion/${slug}`)}
            >
              <IconSearch size={20} />
            </button>
            <button
              className="flex items-center border rounded bg-black text-white border-gray-300 p-2 cursor-pointer"
              onClick={handleAddToCart}
            >
              <IconShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
