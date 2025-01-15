import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import React from "react";
import SliderComponent from "./SliderComponent";

const MenuSection = () => {
  const cards = [
    { title: "Home", active: true },
    { title: "Services", active: false },
    { title: "My Properties", active: false },
    { title: "Make A Payment", active: false },
    { title: "Register Interest", active: false },
  ];

  return (
    <div
      className="py-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(125, 184, 255, 0.64) 0%, #FFF 100%);",
      }}
    >
      <div className="container mx-auto">
        <div
          className="flex items-center space-x-6 mb-4 overflow-hidden"
          style={{ marginTop: "4rem" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-full h-20 flex items-center justify-center shadow-lg ${
                card.active
                  ? "bg-gradient-to-b from-white to-[#96a7e8] border border-white"
                  : "bg-white/50"
              } hover:scale-105 transition-transform duration-300`}
            >
              <span
                className={`text-lg font-medium ${
                  card.active ? "text-black" : "text-gray-500"
                }`}
              >
                {card.title}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-end gap-4 container">
          <button className="text-3xl " aria-label="Scroll Left">
            <FaRegArrowAltCircleLeft />
          </button>
          <button className="text-3xl" aria-label="Scroll Right">
            <FaRegArrowAltCircleRight />
          </button>
        </div>
        <SliderComponent />
        <SliderComponent />
        <SliderComponent />
        <SliderComponent />
      </div>
    </div>
  );
};

export default MenuSection;
