import React from "react";
import Image from "next/image";

interface MobHeroBackgroundProps {
    image1Src: string,
    image2Src: string
}

const MobHeroBackground: React.FC<MobHeroBackgroundProps> = ({ image1Src, image2Src }) => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10" />

            <div className="flex flex-col items-center">
                <img
                src={image1Src}
                alt="Mahindra Blossom Hero"
                className="w-full h-fit scale-200"
            />
            <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-linear-to-t from-black via-black/60 to-transparent z-20" />
            <Image
                src={image2Src}
                alt="Mahindra Blossom Hero"
                fill
                className="object-cover object-center mt-28 scale-100"
                priority
            />
            </div>
            <div className="absolute bottom-0 w-full h-[15%] bg-linear-to-t from-black/20 to-transparent z-30" />
        </div>
    );
};

export default MobHeroBackground;
