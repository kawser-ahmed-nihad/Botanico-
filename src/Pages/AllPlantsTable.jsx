import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router';
const AllPlantsTable = () => {

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("https://one0-85jk.onrender.com/plants")
            .then((res) => res.json())
            .then((data) => setPlants(data))
            .catch(() => alert("Failed to load plant data"));
    }, []);
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center md:text-left">
                🌱 All Plants
            </h2>

            {plants.length === 0 ? (
                <p className="text-center text-gray-500">No plants available.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-sm text-left bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-green-100 text-green-800">
                            <tr>
                                <th className="px-4 py-2 border">Image</th>
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">Category</th>
                                <th className="px-4 py-2 border">Care Level</th>
                                <th className="px-4 py-2 border">Watering</th>
                                <th className="px-4 py-2 border">Next Watering</th>
                                <th className="px-4 py-2 border text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map((plant) => (
                                <tr key={plant._id} className="hover:bg-green-50 transition">
                                    <td className="px-4 py-2 border">
                                        <img
                                            src={plant.image}
                                            alt={plant.name}
                                            className="h-12 w-12 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border">{plant.name}</td>
                                    <td className="px-4 py-2 border capitalize">{plant.category}</td>
                                    <td className="px-4 py-2 border capitalize">{plant.careLevel}</td>
                                    <td className="px-4 py-2 border">{plant.wateringFrequency}</td>
                                    <td className="px-4 py-2 border">{plant.nextWateringDate}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <Link
                                            to={`/plants/${plant._id}`}
                                            className="text-green-600 hover:underline"
                                        >
                                            View Details →
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllPlantsTable;