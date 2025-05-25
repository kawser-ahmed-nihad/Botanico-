import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import { AuthContext } from '../Context/AuthContext';

const AddPlant = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const newPlant = {
      image: form.image.value,
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      careLevel: form.careLevel.value,
      wateringFrequency: form.wateringFrequency.value,
      lastWateredDate: form.lastWateredDate.value,
      nextWateringDate: form.nextWateringDate.value,
      healthStatus: form.healthStatus.value,
      userEmail: form.userEmail.value, 
      userName: form.userName.value,    
    };

    try {
      const res = await fetch('https://one0-85jk.onrender.com/plants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlant),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success('Plant added successfully!');
        form.reset();
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      toast.error('Network problem!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-16 bg-white shadow rounded">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Add New Plant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block font-medium">Image URL</label>
        <input name="image" type="text" placeholder="Image URL" className="input input-bordered w-full" required />

        <label className="block font-medium">Plant Name</label>
        <input name="name" type="text" placeholder="Plant Name" className="input input-bordered w-full" required />

        <label className="block font-medium">Category</label>
        <select name="category" className="select select-bordered w-full" required defaultValue="">
          <option value="" disabled>Select Category</option>
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>

        <label className="block font-medium">Description</label>
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>

        <label className="block font-medium">Care Level</label>
        <select name="careLevel" className="select select-bordered w-full" required defaultValue="">
          <option value="" disabled>Care Level</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>

        <label className="block font-medium">Watering Frequency</label>
        <input name="wateringFrequency" type="text" placeholder="Watering Frequency" className="input input-bordered w-full" required />

        <label className="block font-medium">Last Watered Date</label>
        <input name="lastWateredDate" type="date" className="input input-bordered w-full" required />

        <label className="block font-medium">Next Watering Date</label>
        <input name="nextWateringDate" type="date" className="input input-bordered w-full" required />

        <label className="block font-medium">Health Status</label>
        <input name="healthStatus" type="text" placeholder="Health Status" className="input input-bordered w-full" required />

        <label className="block font-medium">User Name</label>
        <input name="userName" type="text" value={user.displayName} className="input input-bordered w-full" readOnly />

        <label className="block font-medium">User Email</label>
        <input name="userEmail" type="text" value={user.email} className="input input-bordered w-full" readOnly />

        <button type="submit" className="btn btn-success w-full" disabled={loading}>
          {loading ? <Loader /> : 'Add Plant'}
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
