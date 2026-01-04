import React, { useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlantDetails = () => {
  const { id } = useParams();
  const plantId = parseInt(id);
  const data = useLoaderData();
  const singlePlant = data.find((plant) => plant.plantId === plantId);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Consultation booked successfully!');
    setFormData({ name: '', email: '' });
  };

  if (!singlePlant) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <img
            src=""
            alt="Plant Not Found"
            className="mx-auto mb-6 w-100 h-100 object-contain"
          />
          <h1 className="text-5xl font-bold mb-4 text-black">
            OOPS! PLANT NOT FOUND
          </h1>
          <p className="text-gray-600 mb-6">
            The plant you are requesting is not found. Please try another plant.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  const {
    image,
    plantName,
    category,
    price,
    availableStock,
    careLevel,
    description,
    ratingAvg,
  } = singlePlant;

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <section className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={plantName}
                className="w-64 h-64 rounded-md object-cover bg-gray-50 shadow-sm"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-gray-900">{plantName}</h1>
              <p className="text-sm text-indigo-600 mt-2">
                Category: <span className="font-medium">{category}</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Care Level: <span className="font-medium">{careLevel}</span>
              </p>
              <p className="text-sm text-green-600 mt-1 font-semibold">
                Price: ${price}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Stock: {availableStock} pcs
              </p>
              <p className="text-sm text-yellow-500 mt-1 font-medium">
                Rating: {ratingAvg} / 5
              </p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-500">{description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Book Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 font-semibold"
            >
              Book Now
            </button>
          </form>
        </section>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default PlantDetails;
