import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white py-32 px-5 sm:px-10 lg:px-20">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left Info Section */}
                <div className="space-y-8">
                    {/* Address 1 */}
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-4 rounded-full">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414M6.343 7.343a8 8 0 0111.314 11.314l-4.243-4.243m0 0A4 4 0 106.343 7.343z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Address</h4>
                            <p>Dhaka 102, 8000 sent behavior utl<br />1216, road 45 house of street</p>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-4 rounded-full">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h1.5a2 2 0 012 2v0a2 2 0 01-2 2H5a2 2 0 01-2-2v0z M5 11h14M12 17v-6" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Let’s Talk us</h4>
                            <p>Phone number: +32566 – 800 – 890<br />Fax: 1234 – 58963 – 007</p>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-4 rounded-full">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Address</h4>
                            <p>Dhaka 102, 8000 sent behavior utl<br />1216, road 45 house of street</p>
                        </div>
                    </div>
                </div>

                {/* Right Contact Form */}
                <form className="bg-gray-50 p-8 rounded shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name*" className="border border-gray-300 px-4 py-2 rounded w-full" />
                        <input type="email" placeholder="Your Email*" className="border border-gray-300 px-4 py-2 rounded w-full" />
                        <input type="text" placeholder="Phone number*" className="border border-gray-300 px-4 py-2 rounded w-full" />
                        <input type="text" placeholder="Your website*" className="border border-gray-300 px-4 py-2 rounded w-full" />
                    </div>
                    <textarea placeholder="Write your Message here*" className="w-full mt-4 border border-gray-300 px-4 py-2 rounded h-32"></textarea>
                    <button type="submit" className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                        Submit Now
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Contact;