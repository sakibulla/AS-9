import React from "react";
import { Link } from "react-router";

const Plant = ({ singlePlant }) => {
  const { image, plantName, category, price, rating, plantId } = singlePlant;

  return (
    <Link to={`/plantDetails/${plantId}`}>
      <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-80 md:w-96 mx-auto border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-1">
        <div className="bg-gray-100 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={plantName}
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">{plantName}</h3>

        <p className="text-sm md:text-base text-gray-500">{category}</p>

        <div className="flex justify-center gap-4 mt-5">
          <span className="flex items-center gap-2 text-sm md:text-base bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            ${price}
          </span>
          <span className="flex items-center gap-2 text-sm md:text-base bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-medium">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Plant;
