import React, { useState, useEffect } from 'react';
import Plants from '../Plants/Plants'; 
import { useLoaderData } from 'react-router';

const AllPlants = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-ball loading-xs bg-green-500"></span>
        <span className="loading loading-ball loading-sm bg-green-500"></span>
        <span className="loading loading-ball loading-md bg-green-500"></span>
        <span className="loading loading-ball loading-lg bg-green-500"></span>
        <span className="loading loading-ball loading-xl bg-green-500"></span>
      </div>
    );
  }

  return (
    <div className="bg-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-white">
        Our Plant Collection
      </h1>
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        Explore all plants we have available. From air purifiers to decorative plants, we have something for everyone!
      </p>
      <div className="mt-10">
        <Plants data={data} />
      </div>
    </div>
  );
};

export default AllPlants;
