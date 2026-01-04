import React from 'react';
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div 
            className="relative w-full h-64 md:h-96 overflow-hidden bg-cover bg-center flex items-center"
            style={{
                backgroundImage: "url('https://media.gq.com/photos/598c8374412ab6640db89216/16:9/w_2560%2Cc_limit/20170616-P1030383.jpg')",
            }}
        >
            <motion.div
                className="text-white text-2xl md:text-4xl font-bold whitespace-nowrap"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                🌿 Welcome to GreenNest — Your Eco Living Partner 🌱
            </motion.div>
        </div>
    );
};

export default Header;
