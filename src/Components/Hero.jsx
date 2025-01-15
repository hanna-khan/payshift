import React from "react";
import cardImage from "../Images/card.png";
import bgVideo from "../Images/video.mp4";
import { FaRegCircleRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Card */}
                <div className="relative w-80 h-80 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
                    {/* Card Image */}
                    <img
                        src={cardImage}
                        alt="Card"
                        className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/70 rounded-xl"></div>

                    {/* Text & Button */}
                    <div className="relative flex flex-col items-center justify-center h-full text-center">
                        <h1 className="text-gray-200 text-3xl leading-9 tracking-wider font-medium">
                            Pay <span className="text-black">Now</span>
                            <br />
                            <span className="text-black">With</span> PayShift
                        </h1>
                        <div>
                            <button className="flex items-center justify-center space-x-2 mt-4 px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
                                <span>Pay</span>
                                <FaRegCircleRight className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
