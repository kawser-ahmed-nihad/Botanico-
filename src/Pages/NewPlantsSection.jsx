import React from "react";
import { useLoaderData } from "react-router";
import ShowPlants from "./ShowPlants";

const NewPlantsSection = () => {
  const plants = useLoaderData()

  return (
    <div className="py-18">
      <h1 className="text-3xl font-bold text-center mb-4">Explore Our Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  max-w-7xl mx-auto">

        {
          plants.map(plant => <ShowPlants plant={plant}></ShowPlants>)
        }
      </div>
    </div>

  );
};

export default NewPlantsSection;
