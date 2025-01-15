import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import React from "react";

const MenuSection = () => {
    const cards = [
        { title: "Home", active: true },
        { title: "Services", active: false },
        { title: "My Properties", active: false },
        { title: "Make A Payment", active: false },
        { title: "Register Interest", active: false },
    ];

    return (
        <div className="flex flex-col">
            <div className="relative w-full h-screen justify-center bg-gradient-to-r from-[#7DB8FF] to-[#FFFFFF] overflow-hidden">
                <div className="flex flex-col items-center">
                    <div className="flex space-x-2 mb-4" style={{ marginTop: '4rem' }}>
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`w-48 h-20 flex items-center justify-center shadow-lg ${card.active
                                    ? "bg-gradient-to-b from-white to-[#96a7e8] border border-white"
                                    : "bg-white/50"
                                    } hover:scale-105 transition-transform duration-300`}
                            >
                                <span
                                    className={`text-lg font-medium ${card.active ? "text-black" : "text-gray-500"
                                        }`}
                                >
                                    {card.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center w-[300px] gap-4">
                        <button
                            className="text-3xl "
                            aria-label="Scroll Left"
                        >
                            <FaRegArrowAltCircleLeft />
                        </button>
                        <button
                            className="text-3xl"
                            aria-label="Scroll Right"
                        >
                            <FaRegArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuSection;
