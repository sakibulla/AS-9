import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Plants from '../Plants/Plants';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const Home = () => {
    const data = useLoaderData(); 
    const [loading, setLoading] = useState(true);
    const [firstThreePlants, setFirstThreePlants] = useState([]);

    const tips = [
        { title: "Watering", description: "Most indoor plants prefer to dry out slightly between watering." },
        { title: "Sunlight", description: "Place your plants near bright, indirect light." },
        { title: "Fertilizing", description: "Feed your plants during the growing season every 4-6 weeks." },
        { title: "Humidity", description: "Tropical plants love humidity. Mist leaves or use a humidifier." },
        { title: "Pruning", description: "Trim yellowing or dead leaves to encourage new growth." },
        { title: "Potting", description: "Ensure proper drainage and repot every 1-2 years." }
    ];

    const experts = [
        { name: "Alice Green", specialization: "Indoor Plants Specialist", image: "https://assets.mycast.io/actor_images/actor-alice-green-183628_large.jpg?1615064426" },
        { name: "Bob Leaf", specialization: "Succulents & Cacti Expert", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK5fpMWz928PhoRwq-OSOklatZWYlmM4iMw&s    " },
        { name: "Catherine Bloom", specialization: "Plant Nutrition & Fertilizing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5-pLd-eI0sUZv8ZVdkkDIzzqtQtn7hB2DA&s" },
        { name: "David Sprout", specialization: "Garden Design & Eco Decor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuXL2dYdNZjwVYCS8ODl1e26YA4FOlcjk8w&s" }
    ];

    const ecoIdeas = [
        { image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1138552930.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*", title: "Modern Indoor Greenery" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfsgh-AEtdMEbZaAcIK638glqI_Dkka0GDw&s", title: "Eco-Friendly Shelf Display" },
        { image: "https://png.pngtree.com/background/20250108/original/pngtree-beautiful-plant-on-corner-at-minimalist-home-interior-picture-image_15709697.jpg", title: "Minimalist Plant Corners" },
        { image: "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/easy-diy-hanging-planters.jpg", title: "Hanging Planters Ideas" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setFirstThreePlants(data.slice(0, 3));
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [data]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-ball loading-xs bg-black"></span>
                <span className="loading loading-ball loading-sm bg-black"></span>
                <span className="loading loading-ball loading-md bg-black"></span>
                <span className="loading loading-ball loading-lg bg-black"></span>
                <span className="loading loading-ball loading-xl bg-black"></span>
            </div>
        );
    }

    return (
        <div className='bg-white'>
            <Banner />

            <h1 className="text-3xl text-black text-center p-6 bg-white">Featured Plants</h1>
            <p className="text-gray-400 text-base text-center">
                Explore some of our most popular plants
            </p>
            <Plants data={firstThreePlants} />

            <div className="flex justify-center">
                <Link to="/plants">
                    <button className="btn btn-active btn-primary m-10">Show all</button>
                </Link>
            </div>

            <section className="bg-green-50 py-12 px-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
                    Plant Care Tips
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {tips.map((tip, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2 text-green-900">{tip.title}</h3>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 px-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
                    Meet Our Green Experts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {experts.map((expert, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <img src={expert.image} alt={expert.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                            <h3 className="text-xl font-semibold text-green-900">{expert.name}</h3>
                            <p className="text-gray-600">{expert.specialization}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-green-50 py-12 px-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
                    Eco Decor Ideas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {ecoIdeas.map((idea, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img src={idea.image} alt={idea.title} className="w-full h-48 object-cover" />
                            <div className="p-4 bg-white">
                                <h3 className="text-lg font-semibold text-green-900">{idea.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
<section className="py-14 px-6 bg-white">
    <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
        🌿 Plant of the Week
    </h2>
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8 bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">

        <img 
            src={data[0]?.image} 
            alt={data[0]?.plantName} 
            className="w-full lg:w-1/2 h-64 object-cover rounded-lg"
        />

        <div>
            <h3 className="text-2xl font-semibold text-green-900">
                {data[0]?.plantName}
            </h3>
            <p className="text-gray-600 my-3">
                {data[0]?.description?.slice(0, 120)}...
            </p>
            <p className="text-xl font-bold text-green-700 mb-4">
                ${data[0]?.price}
            </p>

            <Link to={`/plantDetails/${data[0]?.plantId}`}>
                <button className="btn btn-success px-6">
                    View Details
                </button>
            </Link>
        </div>

    </div>
</section>

        </div>
    );
};

export default Home;
