import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import location_svg from "../assets/icons/location.svg"
import tick_svg from "../assets/icons/tick.svg"
import property_image1 from "../assets/images/property_image1.jpg";
import property_image2 from "../assets/images/property_image2.jpg";

export default function Hero() {
    const [index, setIndex] = useState(0);
    const images = [
        property_image1,
        property_image2
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length])
    return (
        <main className={`text-white h-screen bg-cover bg-center transition-transform duration-700 ease-in-out`} style={{ backgroundImage: `url(${images[index]})` }} >
            <div className="h-full bg-black/50 flex flex-col justify-between">
            <Navbar />
                <div className="pl-14 mt-14 h-full flex justify-between border-1">
                    <div className="w-fit h-full flex flex-col justify-between">
                        <div>
                            <h1 className="text-5xl font-bold font-sans mb-3.5">TVS Emerald Verde Vista</h1>
                            <p className="font-sans font-semibold"><img className="w-4 h-4 inline-block" src={location_svg} alt="" /> At Padur, Chennai</p>
                            <h2 className="text-3xl font-sans font-semibold mb-8 mt-6">2 & 3 BHK Apartments</h2>
                            <ul className="font-serif font-semibold">
                                <li className="flex items-center justify-between w-fit mb-2"><img className="w-3.5 h-3.5 mr-2" src={tick_svg} alt="" /> <p>Exclusive Deals For NRI</p></li>
                                <li className="flex items-center justify-between w-fit mb-2"><img className="w-3.5 h-3.5 mr-2" src={tick_svg} alt="" /> <p>Status - Pre Launch</p></li>
                                <li className="flex items-center justify-between w-fit"><img className="w-3.5 h-3.5 mr-2" src={tick_svg} alt="" /> <p>Project Size - 4.2 Acre</p></li>
                            </ul>
                        </div>
                        <div className="border-yellow-400 border-2 w-fit rounded-2xl p-1 text-center text-2xl text-yellow-400 font-sans font-bold mb-4">
                            <div className="bg-black/50 rounded-2xl py-2 px-1">
                                <h1 className="border-b-2 border-yellow-400 border-dotted px-8 pb-2">Starting Price</h1>
                                <h2 className="mt-2">₹ 67.4 Lacs*</h2>
                            </div>
                        </div>
                    </div>
                    <form className="self-end bg-gray-400/90 w-80 p-4">
                        <h1 className=" text-black text-3xl font-bold text-center mb-4">Book A Site Visit!</h1>
                        <input type="text" placeholder="Enter Name" className="block rounded-lg text-black outline-none px-2.5 py-2 font-semibold placeholder:text-black border-black border bg-transparent w-full mb-3" />
                        <input type="email" placeholder="Enter Email" className="block rounded-lg text-black outline-none px-2.5 py-2 font-semibold placeholder:text-black border-black border bg-transparent w-full mb-3" />
                        <input type="number" placeholder="Enter Number" className="block rounded-lg text-black outline-none px-2.5 py-2 font-semibold placeholder:text-black border-black border bg-transparent w-full mb-3" />
                        <input type="text" placeholder="Enter Message" className="block rounded-lg text-black outline-none px-2.5 py-2 font-semibold placeholder:text-black border-black border bg-transparent w-full" />
                        <button type="submit" className="w-full bg-blue-900 rounded-lg px-2.5 py-2 font-semibold text-white font-sans mt-4">Submit Now</button>
                        <div className="flex items-start mt-3">
                            <input type="checkbox" name="" id="" className="mt-[2px] mr-1" />
                            <p className="text-xs text-black">I authorize company representatives to Call,
                                SMS, Email or WhatsApp me about its products and offers. This consent overides any registeration for DNC/NDNC.</p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}