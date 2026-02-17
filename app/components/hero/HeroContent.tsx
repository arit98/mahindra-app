import React from "react";
import Image from "next/image";
import PriceBadge from "./PriceBadge";
import FeatureItem from "./FeatureItem";

interface Feature {
    text: string;
}

interface HeroContentProps {
    title: {
        first: string;
        second: string;
    };
    subtitle: string;
    pricing: {
        price: string;
        subtext: string;
    };
    description: string;
    features: Feature[];
    bulletIcon: string;
    breakerIcon: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
    title,
    subtitle,
    pricing,
    description,
    features,
    bulletIcon,
    breakerIcon,
}) => {
    return (
        <div className="flex flex-col space-y-8 z-20 items-center lg:items-start">
            <div className="space-y-4">
                <div className="space-y-1 text-center lg:text-left">
                    <h1 className="tracking-tight leading-none font-serif text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-primary block lg:inline font-medium">
                            {title.first}
                        </span>{" "}
                        <span className="font-normal text-white">
                            {title.second}
                        </span>
                    </h1>
                    <p className="text-[#cccccc] text-xs md:text-sm lg:text-base tracking-[0.4em] font-medium uppercase italic lg:ml-1">
                        {subtitle}
                    </p>
                </div>

                <div className="flex w-full mt-4 justify-center lg:justify-start">
                    <Image
                        src={breakerIcon}
                        alt="divider"
                        width={350}
                        height={24}
                        className="opacity-90 w-full max-w-[280px] md:max-w-[350px]"
                    />
                </div>
            </div>

            <div className="space-y-6 max-w-lg flex flex-col items-center lg:items-start">
                <p className="text-base md:text-lg lg:text-xl text-gray-300 font-md leading-relaxed text-center lg:text-left">
                    {description}
                </p>

                <PriceBadge price={pricing.price} subtext={pricing.subtext} />
            </div>

            <div className="w-full max-w-md">
                <ul className="flex flex-col items-center lg:items-start gap-4 pt-4">
                    {features.map((feature, idx) => (
                        <FeatureItem key={idx} iconSrc={bulletIcon} text={feature.text} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeroContent;
