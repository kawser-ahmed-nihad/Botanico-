import React from "react";

const tips = [
  {
    title: "Proper Watering Schedule",
    content: "Water your succulents only when the soil is completely dry. Overwatering is the most common cause of root rot.",
  },
  {
    title: "Light Requirements",
    content: "Place your tropical plants in bright, indirect sunlight. Avoid direct afternoon sun as it can scorch leaves.",
  },
  {
    title: "Fertilizing Basics",
    content: "Use balanced fertilizer during the growing season (spring/summer) and avoid during dormancy (winter).",
  },
];

const PlantTips = () => {
  return (
    <div className=" py-8 max-w-7xl mx-auto rounded-xl ">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-6">
        Plant Care Tips & Guidance
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-green-200 shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantTips;
