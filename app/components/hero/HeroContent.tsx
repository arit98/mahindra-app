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
        <div className="flex flex-col space-y-8 z-20 items-center lg:items-start mt-16 lg:mt-8">
            <div className="space-y-4 pt-16">
                <div className="space-y-3 text-center lg:text-left">
                    <h1 className="tracking-tight leading-none font-serif text-3xl md:text-5xl lg:text-7xl">
                        <span className="text-primary inline font-medium">
                            {title.first}
                        </span>{" "}
                        <span className="font-normal text-white">
                            {title.second}
                        </span>
                    </h1>
                    <p className="text-[#cccccc] text-[0.68rem] md:text-sm lg:text-base tracking-[0.4em] font-medium uppercase italic">
                        {subtitle}
                    </p>
                </div>

                <div className="flex w-full mt-4 justify-center lg:justify-start">
                    <Image
                        src={breakerIcon}
                        alt="divider"
                        width={250}
                        height={24}
                        className="opacity-90 w-full max-w-[280px] md:max-w-[500px]"
                    />
                </div>
            </div>

            <div className="space-y-6 max-w-lg flex flex-col items-center lg:items-start">
                <p className="w-72 text-base md:text-lg lg:text-xl text-gray-300 font-md leading-relaxed text-center lg:text-left md:line-clamp-2">
                    {description}
                </p>

                <PriceBadge price={pricing.price} subtext={pricing.subtext} />
            </div>

            <div className="w-full max-w-md pb-16">
                <ul className="flex flex-col items-start gap-4 pt-4">
                    {features.map((feature, idx) => (
                        <FeatureItem key={idx} iconSrc={bulletIcon} text={feature.text} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeroContent;
