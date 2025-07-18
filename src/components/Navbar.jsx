import React, { useEffect, useState } from 'react';
import call_chat_svg from "../assets/icons/call_chat.svg"

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                const windowHeight = window.innerHeight;
                const stickyThreshold = windowHeight * 0.01;
                const isScrollingPastThreshold = window.scrollY >= stickyThreshold;
                setIsSticky(isScrollingPastThreshold);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <nav className={`flex w-full items-center justify-between px-14 py-4 bg-transparent ${isSticky ? "sticky top-0 left-0 shadow-xl bg-gray-100" : "static"
            }`}>
            <div className='flex w-fit items-center justify-between'>
                <h1 className={`font-serif font-bold text-base mr-2`}>
                    <span className={isSticky ? "text-blue-700" : ""}>TVS</span>
                    <span className={isSticky ? "text-lime-700" : ""}> Emerald</span>
                </h1>
                <h1 className={`font-bold font-sans text-xl border-l-2  pl-2 ${isSticky ? "border-gray-400 text-green-700" : "border-gray-300"}`}>Verde Vista</h1>
            </div>
            <ul className={`flex items-center w-fit justify-between font-sans font-semibold text-base ${isSticky ? "text-black" : ""}`}>
                <li className='mx-2 hover:text-black'><a href="#Highlight">Highlight</a></li>
                <li className='mx-2 hover:text-black'><a href="#Amenities">Amenities</a></li>
                <li className='mx-2 hover:text-black'><a href="#Overview">Overview</a></li>
                <li className='mx-2 hover:text-black'><a href="#Price_List">Price List</a></li>
                <li className='mx-2 hover:text-black'><a href="#Floor_Plan">Floor Plan</a></li>
                <li className='mx-2 hover:text-black'><a href="#Gallary">Gallary</a></li>
                <li className='mx-2 hover:text-black'><a href="#Location">Location</a></li>
                <li className='mx-2 hover:text-black'><a href="#Contact_Us">Contact Us</a></li>
            </ul>
            <button className='bg-blue-900 font-bold flex items-center w-fit px-6 py-2.5 rounded-lg text-white font-mono'>
                <img className='h-6 w-6 mr-2' src={call_chat_svg} alt="call" />
                <span>+91-8899776655</span>
            </button>
        </nav>
    );
};

export default Navbar;
