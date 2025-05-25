import { useEffect, useState } from "react";
import { Link } from "react-router";

const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        fetch("https://one0-85jk.onrender.com/plants")
            .then((res) => res.json())
            .then((data) => setPlants(data));
    }, []);

    const sortedPlants = [...plants].sort((a, b) => {
        if (sortBy === "careLevel") {
            const levels = { easy: 1, moderate: 2, difficult: 3 };
            return levels[a.careLevel.toLowerCase()] - levels[b.careLevel.toLowerCase()];
        }
        if (sortBy === "wateringDate") {
            return new Date(a.nextWateringDate) - new Date(b.nextWateringDate);
        }
        return 0;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-green-700">All Plants</h2>
                <select
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded px-3 py-1 text-sm"
                >
                    <option value="">Sort By</option>
                    <option value="wateringDate">Next Watering Date</option>
                    <option value="careLevel">Care Level</option>
                </select>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full text-sm text-left text-gray-600">
                    <thead className="bg-green-100 text-green-800 uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-3">Plant Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Watering Frequency</th>
                            <th className="px-6 py-3">Next Watering</th>
                            <th className="px-6 py-3">Care Level</th>
                            <th className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPlants.map((plant) => (
                            <tr key={plant._id} className="border-b hover:bg-green-50">
                                <td className="px-6 py-4">{plant.name}</td>
                                <td className="px-6 py-4">{plant.category}</td>
                                <td className="px-6 py-4">{plant.wateringFrequency}</td>
                                <td className="px-6 py-4">{plant.nextWateringDate}</td>
                                <td className="px-6 py-4 capitalize">{plant.careLevel}</td>
                                <td className="px-6 py-4 text-center">
                                    <Link
                                        to={`/plants/${plant._id}`}
                                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {plants.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-6 text-gray-500">
                                    No plants found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPlants;