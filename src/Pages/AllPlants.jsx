import { useEffect, useState } from "react";
import { Link } from "react-router";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://one0-85jk.onrender.com/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["All", ...new Set(plants.map((p) => p.category))];

  const sortedPlants = [...plants]
    .filter((p) =>
      filterCategory === "All" ? true : p.category === filterCategory
    )
    .sort((a, b) => {
      let compare = 0;

      if (sortBy === "careLevel") {
        const levels = { easy: 1, moderate: 2, difficult: 3 };
        compare =
          levels[a.careLevel.toLowerCase()] -
          levels[b.careLevel.toLowerCase()];
      }

      if (sortBy === "wateringDate") {
        compare =
          new Date(a.nextWateringDate) - new Date(b.nextWateringDate);
      }

      return sortOrder === "asc" ? compare : -compare;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        🌿 All Plants
      </h2>

      {/* Filter & Sort Centered */}
      <div className="flex flex-col md:flex-row flex-wrap items-center  gap-4 mb-6">
        {/* Category Filters */}
        <div className="flex flex-wrap  gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                filterCategory === cat
                  ? "bg-green-600 text-white border-green-600"
                  : "text-gray-600 border-gray-300 hover:border-green-400 hover:text-green-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sorting Controls */}
        <div className="flex gap-4">
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-3 py-2 rounded text-sm"
          >
            <option value="">Sort By</option>
            <option value="wateringDate">Next Watering Date</option>
            <option value="careLevel">Care Level</option>
          </select>

          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-3 py-2 rounded text-sm"
          >
            <option value="asc">Ascending ↑</option>
            <option value="desc">Descending ↓</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg py-10">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedPlants.map((plant) => (
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
          ))}

          {sortedPlants.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No plants found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllPlants;
