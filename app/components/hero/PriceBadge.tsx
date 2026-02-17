import React from "react";

interface PriceBadgeProps {
    price: string;
    subtext: string;
}

const PriceBadge: React.FC<PriceBadgeProps> = ({ price, subtext }) => {
    return (
        <div className="inline-flex items-center bg-[#1a1a1a]/80 backdrop-blur-md px-6 py-3 rounded-lg border border-white/10 -skew-x-12 transform transition-transform hover:scale-105 duration-300 shadow-xl">
            <div className="skew-x-12 flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {price}
                </span>
                <span className="text-gray-400 font-light italic text-sm md:text-base">
                    {subtext}
                </span>
            </div>
        </div>
    );
};

export default PriceBadge;
