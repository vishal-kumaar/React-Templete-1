import React from "react";
import close_svg from "../assets/icons/cross.svg"

export default function Sidebar(){
    return (
        <aside className="bg-black h-screen w-full flex flex-col items-center text-center">
            <img src={close_svg} alt="" className="w-5 h-5 block self-end mt-6 mr-6 mb-10" />
            <ul className="text-white text-lg font-sans font-semibold">
                <li className='mb-3'><a href="#Overview">Overview</a></li>
                <li className='mb-3'><a href="#Highlight">Highlight</a></li>
                <li className='mb-3'><a href="#Amenities">Amenities</a></li>
                <li className='mb-3'><a href="#Price_List">Price List</a></li>
                <li className='mb-3'><a href="#Floor_Plan">Floor Plan</a></li>
                <li className='mb-3'><a href="#Gallary">Gallary</a></li>
                <li className='mb-3'><a href="#Location">Location</a></li>
                <li className='mb-3'><a href="#Contact_Us">Contact Us</a></li>
                <li className='mb-3'><a href="tel:+918899776655">+91 8899776655</a></li>
            </ul>
        </aside>
    )
}