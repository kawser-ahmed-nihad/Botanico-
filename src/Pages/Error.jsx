import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';


const Error = () => {
    return (

        <>
            <Helmet>
                <title>Botanico || Error </title>
            </Helmet>
            <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
                <div className="max-w-md text-center">
                    <h1 className="text-9xl font-extrabold text-red-600">404</h1>
                    <p className="text-2xl mt-4 font-semibold text-gray-800">Oops! Page not found.</p>
                    <p className="mt-2 text-gray-600">
                        The page you are looking for might have been deleted or you may have entered an incorrect link.
                    </p>
                    <Link
                        to="/"
                        className="mt-6 cursor-pointer inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Error;