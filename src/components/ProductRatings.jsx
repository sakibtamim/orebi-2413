import React from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const ProductRatings = ({ rating }) => {
  const fullRating = Math.floor(rating);
  const halfRating = rating % 1 >= 0.5;
  const emptyRating = 5 - fullRating - (halfRating ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullRating)].map((_, i) => (
        <IoMdStar key={i} />
      ))}
      {halfRating && <IoMdStarHalf />}
      {[...Array(emptyRating)].map((_, i) => (
        <IoMdStarOutline key={i} />
      ))}
    </div>
  );
};

export default ProductRatings;
