import React, { Suspense, useState, useEffect } from 'react';
import Plant from '../Plant/Plant';
import { CiSearch } from "react-icons/ci";

const Plants = ({ data }) => {
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState(data);
    const [loading, setLoading] = useState(false);

    const handleSearch = e => {
        setSearch(e.target.value);
        setLoading(true);
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            const filteredData = data.filter(d =>
                d.plantName.toLowerCase().includes(search.toLowerCase())
            );
            setFiltered(filteredData);
            setLoading(false);
        }, 500); 

        return () => clearTimeout(delay);
    }, [search, data]);

    return (
        <div className='bg-gray-50 px-4 md:px-8 py-6 rounded-lg'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
                <h3 className='text-xl font-bold text-gray-800'>
                    ({filtered.length}) Plants Found
                </h3>
                <div className='flex items-center border border-gray-300 px-4 py-2 w-full md:w-1/3 rounded-lg shadow-sm bg-white transition focus-within:ring-2 focus-within:ring-green-400'>
                    <CiSearch className='text-gray-400 text-xl mr-2' />
                    <input 
                        type='text' 
                        placeholder='Search Plants' 
                        value={search}
                        onChange={handleSearch}
                        className='outline-none flex-1 text-gray-700 placeholder-gray-400'
                    />
                </div>
            </div>

            {loading ? (
                <div className="text-center py-10 text-gray-500 font-semibold">Searching...</div>
            ) : (
                <Suspense fallback={<span>Loading plants...</span>}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filtered.map((singlePlant) => (
                            <Plant key={singlePlant.plantId} singlePlant={singlePlant} />
                        ))}
                    </div>
                </Suspense>
            )}
        </div>
    );
};

export default Plants;
