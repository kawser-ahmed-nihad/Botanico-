import React from 'react';
import { Link } from 'react-router'; 

const ShowPlants = ({ plant, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 w-full col-span-full">
        <div className="w-10 h-10 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      key={plant._id}
      className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden"
    >
      <img
        src={plant.image}
        alt={plant.name}
        className="h-44 w-full object-cover"
      />
      <div className="p-4 space-y-3">
        <h2 className="text-green-700 font-semibold text-lg truncate">
          {plant.name?.trim()}
        </h2>
        <p className="text-xs text-gray-500 mt-1 mb-2 capitalize">
          Category: {plant.category} | Care: {plant.careLevel}
        </p>

        <p className="text-xs mt-2 text-gray-400">
          💧 Watering: {plant.wateringFrequency}
        </p>

        <div className="mt-4 text-right">
          <Link
            to={`/plants/${plant._id}`}
            className="text-sm text-green-600 font-medium hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowPlants;
