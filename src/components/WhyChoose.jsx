import React from "react";

const WhyChoose = () => {
    return (
        <section className="mt-12 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-green-700 text-center">Why Choose Botanico?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="p-4 bg-green-50 rounded-xl shadow">
                    <h4 className="font-semibold text-lg">Eco-Friendly</h4>
                    <p className="text-sm text-gray-600 mt-2">All our products are sustainable and nature-safe.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl shadow">
                    <h4 className="font-semibold text-lg">Expert Advice</h4>
                    <p className="text-sm text-gray-600 mt-2">Get tips from professional botanists and plant lovers.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl shadow">
                    <h4 className="font-semibold text-lg">Home Delivery</h4>
                    <p className="text-sm text-gray-600 mt-2">Plants delivered fresh and fast to your doorstep.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
