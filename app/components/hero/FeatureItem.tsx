import React from "react";
import Image from "next/image";

interface FeatureItemProps {
    iconSrc: string;
    text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, text }) => {
    return (
        <li className="flex items-center space-x-4 group">
            <div className="relative w-6 h-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                <Image
                    src={iconSrc}
                    alt="icon"
                    width={20}
                    height={20}
                    className="object-contain"
                />
            </div>
            <span className="text-gray-200 font-light tracking-wide text-sm md:text-base group-hover:text-white transition-colors duration-300">
                {text}
            </span>
        </li>
    );
};

export default FeatureItem;
