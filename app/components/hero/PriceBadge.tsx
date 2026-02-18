import React from "react";

interface PriceBadgeProps {
    price: string;
    subtext: string;
}

const PriceBadge: React.FC<PriceBadgeProps> = ({ price, subtext }) => {
    return (
        <div className="inline-flex items-center md:bg-[#1a1a1a]/80 bg-white/20 backdrop-blur-md px-6 py-3 md:rounded-lg rounded-none border border-white/10 -skew-x-12 transform transition-transform hover:scale-105 duration-300 shadow-xl">
            <div className="skew-x-12 flex items-baseline gap-2">
                <span className="text-md md:text-3xl md:font-bold font-normal text-white tracking-tight">
                    {price}
                </span>
                <span className="md:text-gray-400 text-white md:font-light font-extralight italic text-sm md:text-base">
                    {subtext}
                </span>
            </div>
        </div>
    );
};

export default PriceBadge;
