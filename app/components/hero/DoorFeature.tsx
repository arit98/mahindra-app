import React from "react";
import Image from "next/image";

interface DoorFeatureProps {
    imageSrc: string;
}

const DoorFeature: React.FC<DoorFeatureProps> = ({ imageSrc }) => {
    return (
        <div className="relative w-full max-w-[400px] aspect-2/3 mx-auto lg:ml-auto md:-ml-12">
            <div className="relative h-full rounded-t-full border-[12px] border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10 bg-gray-200 translate-y-12 md:translate-y-24">
                <Image
                    src={imageSrc}
                    alt="Feature"
                    fill
                    className="object-cover"
                    unoptimized={imageSrc.endsWith('.gif')}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
        </div>
    );
};

export default DoorFeature;
