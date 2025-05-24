import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loader from '../components/Loader';

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        fetch(`https://plants-self-iota.vercel.app/plants/${id}`)
            .then(res => res.json())
            .then(data => setPlant(data));
    }, [id]);

    if (!plant) return <Loader></Loader>;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-md"
                />
                <div className="flex-1 space-y-3">
                    <h1 className="text-3xl font-bold text-green-700">{plant.name}</h1>
                    <p className="text-gray-600">
                        <span className="font-medium">Category:</span> {plant.category}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Care Level:</span> {plant.careLevel}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Watering Frequency:</span> {plant.wateringFrequency}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Last Watered:</span> {plant.lastWateredDate}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Next Watering:</span> {plant.nextWateringDate}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Health Status:</span>{" "}
                        <span className={`font-semibold ${plant.healthStatus === "Healthy" ? "text-green-600" : "text-red-500"}`}>
                            {plant.healthStatus}
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-green-700 mb-2">Description</h2>
                <p className="text-gray-700 leading-relaxed">{plant.description}</p>
            </div>
        </div>
    );
};

export default PlantDetails;
