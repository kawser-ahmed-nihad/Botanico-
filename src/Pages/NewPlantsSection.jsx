import React from "react";
import { useLoaderData } from "react-router";
import ShowPlants from "./ShowPlants";



const NewPlantsSection = () => {

    const data = useLoaderData()
    // console.log(data);
    return (
        <div className="max-w-7xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                New Plants
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {
                    data.map(plantsData => <ShowPlants key={plantsData._id
                    } plantsData={plantsData}></ShowPlants>)
                }
            </div>
        </div>
    );
};

export default NewPlantsSection;
