import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userPlants, setUserPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://one0-85jk.onrender.com/myplants?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserPlants(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Botanico | User Dashboard</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-6">
          <img
            src={user?.photoURL || 'https://i.ibb.co/JvYHcXk/default-user.png'}
            alt="User"
            className="w-28 h-28 rounded-full object-cover border-4 border-green-400 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{user?.displayName || 'Anonymous User'}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <p className="text-sm text-green-500 mt-1">Role: User</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-green-100 border border-green-400 text-green-700 text-center py-6 rounded-lg shadow">
            <p className="text-sm">Total Plants Added</p>
            <p className="text-3xl font-bold">{userPlants.length}</p>
          </div>
          <div className="bg-blue-100 border border-blue-400 text-blue-700 text-center py-6 rounded-lg shadow">
            <p className="text-sm">Verified Email</p>
            <p className="text-xl font-semibold">{user?.emailVerified ? 'Yes' : 'No'}</p>
          </div>
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 text-center py-6 rounded-lg shadow">
            <p className="text-sm">Account Status</p>
            <p className="text-xl font-semibold">Active</p>
          </div>
        </div>

        {/* Plant Preview Table */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-2">Your Added Plants</h3>
          {userPlants.length === 0 ? (
            <p className="text-gray-500">You haven't added any plants yet.</p>
          ) : (
            <table className="w-full text-sm table-auto border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Next Watering</th>
                </tr>
              </thead>
              <tbody>
                {userPlants.slice(0, 5).map((plant) => (
                  <tr key={plant._id} className="hover:bg-gray-50">
                    <td className="p-2 border">{plant.name}</td>
                    <td className="p-2 border">{plant.category}</td>
                    <td className="p-2 border">{plant.nextWateringDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
