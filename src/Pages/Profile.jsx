import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const [newName, setNewName] = useState(user?.displayName || '');


    const [newPhotoURL, setNewPhotoURL] = useState(user?.photoURL || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser({
                displayName: newName,
                photoURL: newPhotoURL,
            });

            setUser((prevUser) => ({
                ...prevUser,
                displayName: newName,
                photoURL: newPhotoURL,
            }));
            toast.success("Profile updated successfully!");

        } catch (error) {
            toast.error("Update failed!");

        }
    };

    return (
        <>
            <Helmet>
                <title>App Store || Profile</title>
            </Helmet>
            <ToastContainer />
            <div className="container mx-auto my-60">
                <div className="bg-white shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto relative">
                    <div className="flex justify-center">
                        <img
                            src={user?.photoURL}
                            alt="Avatar"
                            className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transform hover:scale-110 transition duration-200"
                        />
                    </div>

                    <div className="mt-16 p-6">
                        <h1 className="font-bold text-center text-3xl text-gray-900">{user?.email}</h1>
                        <p className="text-center text-sm text-gray-400 font-medium">
                            {user?.displayName || 'No name set'}
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Update Name</label>
                                    <input
                                        type="text"

                                        onChange={(e) => setNewName(e.target.value)}
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Update Photo URL</label>
                                    <input
                                        type="text"

                                        onChange={(e) => setNewPhotoURL(e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-green-500 text-white font-medium rounded-md"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
