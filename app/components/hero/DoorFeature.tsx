import React from "react";
import Image from "next/image";

interface DoorFeatureProps {
    imageSrc: string;
}

const DoorFeature: React.FC<DoorFeatureProps> = ({ imageSrc }) => {
    return (
        <div className="relative w-full max-w-[400px] aspect-2/3 mx-auto lg:ml-auto">
            <div className="absolute inset-0 rounded-t-full border-[12px] border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10 bg-gray-200">
                <Image
                    src={imageSrc}
                    alt="Feature"
                    fill
                    className="object-cover"
                    unoptimized={imageSrc.endsWith('.gif')}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -inset-2 rounded-t-full border border-white/20 z-0 pointer-events-none" />
        </div>
    );
};

export default DoorFeature;
