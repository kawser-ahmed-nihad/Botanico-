import React from 'react';
import { Link } from 'react-router';

const ShowPlants = ({ plantsData }) => {
    return (
        <div className="">

            <div className="bg-white p-4 rounded-xl shadow text-center space-y-3">
                <img
                    src={plantsData.
                        image
                    }
                    alt=""
                    className="h-48 mx-auto object-contain"
                />
                <h3 className="text-sm font-medium text-gray-800">{
                    plantsData.name}</h3>
                <Link to={`/plants/${plantsData._id}`} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">
                    View Details
                </Link>

            </div>


        </div>
    );
};

export default ShowPlants;