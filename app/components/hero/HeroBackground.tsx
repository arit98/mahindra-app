import React from "react";
import Image from "next/image";

interface HeroBackgroundProps {
    imageSrc: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ imageSrc }) => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-linear-to-r from-black via-black/60 to-transparent z-20" />

            <Image
                src={imageSrc}
                alt="Mahindra Blossom Hero"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute bottom-0 w-full h-[15%] bg-linear-to-t from-black/20 to-transparent z-30" />
        </div>
    );
};

export default HeroBackground;
