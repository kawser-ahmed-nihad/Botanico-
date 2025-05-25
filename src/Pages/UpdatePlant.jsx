import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';

const UpdatePlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://one0-85jk.onrender.com/plants/${id}`)
      .then(res => res.json())
      .then(data => setPlant(data))
      .catch(() => toast.error('Failed to load plant data'));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedPlant = {
      image: e.target.image.value,
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      careLevel: e.target.careLevel.value,
      wateringFrequency: e.target.wateringFrequency.value,
      lastWateredDate: e.target.lastWateredDate.value,
      nextWateringDate: e.target.nextWateringDate.value,
      healthStatus: e.target.healthStatus.value
    };

    try {
      const res = await fetch(`https://one0-85jk.onrender.com/plants/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPlant),
      });

      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success('Plant updated successfully!');
        setTimeout(() => navigate('/my-plants'), 1500);
      } else {
        toast.warn('No changes were made!');
      }
    } catch {
      toast.error('Network error occurred!');
    } finally {
      setLoading(false);
    }
  };

  if (!plant) return <Loader></Loader>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ToastContainer position="top-center" autoClose={2500} />
      <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Update Plant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="image" type="text" defaultValue={plant.image} className="input input-bordered w-full" required />
        <input name="name" type="text" defaultValue={plant.name} className="input input-bordered w-full" required />
        
        <select name="category" defaultValue={plant.category} className="select select-bordered w-full" required>
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>

        <textarea name="description" defaultValue={plant.description} className="textarea textarea-bordered w-full" required></textarea>

        <select name="careLevel" defaultValue={plant.careLevel} className="select select-bordered w-full" required>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>

        <input name="wateringFrequency" type="text" defaultValue={plant.wateringFrequency} className="input input-bordered w-full" required />

        <input name="lastWateredDate" type="date" defaultValue={plant.lastWateredDate} className="input input-bordered w-full" required />
        <input name="nextWateringDate" type="date" defaultValue={plant.nextWateringDate} className="input input-bordered w-full" required />

        <input name="healthStatus" type="text" defaultValue={plant.healthStatus} className="input input-bordered w-full" required />

        
        <input name="userName" type="text" value={plant.userName} readOnly className="input input-bordered w-full bg-gray-100" />
        <input name="userEmail" type="text" value={plant.userEmail} readOnly className="input input-bordered w-full bg-gray-100" />

        <button type="submit" disabled={loading} className="btn btn-success w-full">
          {loading ? <Loader /> : 'Update Plant'}
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;
