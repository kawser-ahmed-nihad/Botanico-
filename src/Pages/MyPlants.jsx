import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Loader from '../components/Loader'; 

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://one0-85jk.onrender.com/myplants?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setPlants(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          Swal.fire('Error', 'Failed to load plant data', 'error');
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This plant will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://plants-self-iota.vercel.app/plants/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setPlants(plants.filter(plant => plant._id !== id));
              Swal.fire('Deleted!', 'Your plant has been deleted.', 'success');
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Plants</h2>
      {plants.length === 0 ? (
        <p>No plants added yet.</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Category</th>
              <th className="border px-2 py-1">Next Watering</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map(plant => (
              <tr key={plant._id}>
                <td className="border px-2 py-1">{plant.name}</td>
                <td className="border px-2 py-1">{plant.category}</td>
                <td className="border px-2 py-1">{plant.nextWateringDate}</td>
                <td className="border px-2 py-1 space-x-2">
                  <button
                    onClick={() => handleUpdate(plant._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyPlants;
