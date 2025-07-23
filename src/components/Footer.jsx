import React from "react";

export default function Footer(){
    return (
        <footer className="bg-black text-white sticky bottom-0 left-0 flex justify-between w-full px-3 font-sans text-lg py-1">
                <button>Enquire Now</button>
                <a href="tel:+918899776655">Tap To Call</a>
                <a href="https://api.whatsapp.com/send?phone=+918899776655">WhatsApp</a>
        </footer>
    )
}