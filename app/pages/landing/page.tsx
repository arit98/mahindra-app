"use client"
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import HeroBackground from "../../components/hero/HeroBackground";
import HeroContent from "../../components/hero/HeroContent";
import DoorFeature from "../../components/hero/DoorFeature";
import Image from "next/image";
import Background from "@/app/components/about/AboutBackground";
import AboutContent from "@/app/components/about/AboutContent";
import RowCard from "@/app/components/row/RowCard";
import Gallary from "@/app/components/gallary/Gallary";
import WrapCard from "@/app/components/wrap/wrapCard";
import RowLongCard from "@/app/components/row/RowLongCard";
import { MarqueeRow } from "@/app/components/gallary/MarqueeRow";
import Location from "@/app/components/location/Location";
import Footer from "@/app/components/footer/Footer";
import MobHeroContent from "@/app/components/hero/MobileHeroContent";
import MobHeroBackground from "@/app/components/hero/MobileHeroBackground";
import Booking from "@/app/components/Booking";

export default function LandingPage() {

    const [modal, setModal] = useState<boolean>();

    const features = [
        { text: "8 Acres | 1 Towers | 6 Wings | 733 Units" },
        { text: "Make it yours at just 7.5% down payment" },
        { text: "Abutting Hopefarm metro station" },
        { text: "IGBC Gold rated green home" },
        { text: "75+ Years of Mahindra Trust" },
    ];

    const rowItems = [
        { type: "2 BHK", size: "1800-1850", price: "2.18cr", isSoldOut: true },
        { type: "3 BHK", size: "1800-1850", price: "2.18cr", isSoldOut: false },
        { type: "4 BHK", size: "2200-2350", price: "2.88cr", isSoldOut: false }
    ]

    const floorPlans = [
        { type: "MASTER PLAN", image: "/assets/images/floor/e6ead2c6a6eaeeb7cf4bb2cc67c2820d8881c16d.png", isSoldOut: false },
        { type: "2 BHK", image: "/assets/images/floor/69c1c9e6161ebf4d1bd9936e8a73f3769feead0a.png", isSoldOut: true },
        { type: "2 BHK (Large)", image: "/assets/images/floor/69c1c9e6161ebf4d1bd9936e8a73f3769feead0a.png", isSoldOut: true },
        { type: "3 BHK", image: "/assets/images/floor/69c1c9e6161ebf4d1bd9936e8a73f3769feead0a.png", isSoldOut: false },
        { type: "3.5 BHK", image: "/assets/images/floor/69c1c9e6161ebf4d1bd9936e8a73f3769feead0a.png", isSoldOut: false },
        { type: "4 BHK", image: "/assets/images/floor/69c1c9e6161ebf4d1bd9936e8a73f3769feead0a.png", isSoldOut: false },
    ];

    const images = {
        aromaticGarden: "/assets/images/gal/d4df73e0bb5607d02bd8e614a728cae70df00696.png",
        spaciousKitchen: "/assets/images/gal/a34c3d67c3b760deeb5890999efccceb361d7155.jpg",
        partyLawn: "/assets/images/gal/d55e031fb938267c3cfa8e57281ecbcc1241f835.jpg",
        multipurposeCourt: "/assets/images/gal/b3313b666d29c044ab6b708c27667ae975ebf7da.jpg",
        modernBedroom: "/assets/images/gal/6550e6b4a3afe9337004a5de39e085f24f34278e.jpg",
        gym: "/assets/images/gal/2999d463e2f8a092c45763ddc24730d3ce89ff17.png",
        cricketNets: "/assets/images/gal/148dd6b6be1dd668adda0f3bf161bea79aa0222d.jpg",
        olympicPool: "/assets/images/gal/b52bd7eac260fe7d93e5bbf28320916dece154ac.jpg",
        landscapedGardens: "/assets/images/gal/94ef86ebcf8bb751e374b8c2c0142e5e3b2d21a9.png",
        ventilatedFlats: "/assets/images/gal/a50579942cd02462603a3ef2f677ceaf72d1f76e.jpg",
        largeBalcony: "/assets/images/gal/01f06dd93195733a6bf18c52e5ab013336cd8186 (2).jpg",
        joggingTrack: "/assets/images/gal/b3b5980a1a244fe6c4d548fd8edfdb43d056a29a.png",
    };



    const row1 = [
        { src: images.largeBalcony, width: 450 },
        { src: images.cricketNets, width: 320 },
        { src: images.gym, width: 500 },
        { src: images.modernBedroom, width: 380 },
    ];

    const row2 = [
        { src: images.spaciousKitchen, width: 300 },
        { src: images.ventilatedFlats, width: 440 },
        { src: images.multipurposeCourt, width: 480 },
        { src: images.joggingTrack, width: 400 },
        { src: images.olympicPool, width: 340 },
    ];

    const row3 = [
        { src: images.aromaticGarden, width: 400 },
        { src: images.partyLawn, width: 520 },
        { src: images.landscapedGardens, width: 460 },
    ];

    const specifications = [
        {
            title: "DOORS, WINDOWS & RAILINGS",
            image: "/assets/images/balcony.jpg",
            items: [
                "uPVC windows. Balcony with SS and glass railing.",
                "Main door, Interior and Toilet doors - Engineered wooden door frame and flush door shutter.",
                "Balcony and utility - uPVC door.",
                "Smart door locks."
            ]
        },
        {
            title: "Walls",
            image: "/assets/images/bedroom.jpg",
            items: [
                "Living, Dining, Bedrooms, Kitchen - Emulsion Paint for walls and oil bound distemper for ceiling.",
                "Exterior paint for external finish and enamel paint for MS grills and railings.."
            ]
        },
        {
            title: "CP & SANITARY FITTINGS",
            image: "/assets/images/washroom.png",
            items: [
                "Chromium Plated Fittings of reputed make.",
            ]
        },
        {
            title: "Floor Finishes",
            image: "/assets/images/kitchen.jpg",
            items: [
                "Large format Vitrified tiles in living & dining room, bedrooms and kitchen.",
                "Anti-skid ceramic tiles in bathrooms and utility.",
                "Balcony and utility - uPVC door.",
                "Smart door locks."
            ]
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-red-500/30 flex flex-col">
            <NavBar setModal={setModal} />

            {/* mobile */}
            <section className="relative min-h-screen md:hidden lg:hidden flex flex-col items-center pt-24 pb-12 overflow-hidden">
                <MobHeroBackground image1Src="/assets/images/hero.png" image2Src="/assets/images/tree.png" />

                <div className="container z-20">
                    <div className="flex flex-col items-center gap-12">
                        {/* left part */}
                        <div className="flex justify-center">
                            <MobHeroContent
                                title={{
                                    first: "Mahindra",
                                    second: "Blossom"
                                }}
                                subtitle="Home of Positive Energy"
                                description="2, 3 & 4BHK premium homes in Hopefarm Jn., Whitefield,"
                                pricing={{
                                    price: "₹1.88cr",
                                    subtext: "Onwards"
                                }}
                                features={features}
                                bulletIcon="/assets/images/bullet.png"
                                breakerIcon="/assets/images/breaker.png"
                            />
                        </div>

                        {/* right part */}
                        <div className="w-72 h-88">
                            <DoorFeature imageSrc="/assets/images/door.gif" />
                        </div>
                    </div>
                </div>
            </section>

            {/* desktop or tablet */}
            <section id="home" className="relative min-h-screen hidden md:flex lg:flex items-center pt-24 pb-12 overflow-hidden">
                <HeroBackground imageSrc="/assets/images/hero.png" />

                <div className="container z-20 md:ml-10 lg:ml-28">
                    <div className="flex items-center gap-12">
                        {/* left part */}
                        <div className="flex justify-center lg:justify-start">
                            <HeroContent
                                title={{
                                    first: "Mahindra",
                                    second: "Blossom"
                                }}
                                subtitle="Home of Positive Energy"
                                description="2, 3 & 4BHK premium homes in Hopefarm Jn., Whitefield,"
                                pricing={{
                                    price: "₹1.88cr",
                                    subtext: "Onwards"
                                }}
                                features={features}
                                bulletIcon="/assets/images/bullet.png"
                                breakerIcon="/assets/images/breaker.png"
                            />
                        </div>

                        {/* right part */}
                        <div className="lg:w-120 h-88 md:w-64">
                            <DoorFeature imageSrc="/assets/images/door.gif" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Background>
                    <div className="md:px-32 px-4">
                        <AboutContent />
                    </div>
                </Background>
            </section>

            <section id="pricing" className="w-full bg-primary py-12 lg:py-20 px-4 md:px-28">
                <div className="container mx-auto flex flex-col items-center space-y-8">
                    <div className="font-serif text-2xl md:text-4xl lg:text-5xl md:text-center text-start space-y-2">
                        <p className="text-white">Unlock the Door to Affordable Luxury</p>
                        <p className="text-[9px] md:text-base font-sans italic text-white/80 md:text-center text-end uppercase">Explore apartment options and pricing details tailored to your needs</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/assets/images/breaker.png"
                            alt="divider"
                            width={600}
                            height={24}
                            className="opacity-90 py-4 w-full max-w-[300px] md:max-w-[600px] brightness-200"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full justify-items-center">
                        {
                            rowItems.map((row, index) => (
                                <RowCard key={index} type={row.type} size={row.size} price={row.price} isSoldOut={row.isSoldOut} />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section id="amenities" className="py-20 bg-slate-100">
                <div className="container mx-auto px-4 text-start md:text-center">
                    <h2 className="text-2xl md:text-5xl font-serif mb-4 text-[#4B4D4C]"><span className="text-red-500">Amenities</span> for Every Age, Every Mood</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto italic md:text-center text-end md:text-base text-[9px] uppercase">Premium amenities that transform your home into a private retreat.</p>
                    <div className="flex justify-center mt-8">
                        <Image
                            src="/assets/images/breaker.png"
                            alt="divider"
                            width={600}
                            height={20}
                            className="opacity-70"
                        />
                    </div>
                </div>
                <Gallary images={images} />
            </section>

            <section id="floor-plans" className="bg-primary py-24 px-4 overflow-hidden">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-2xl md:text-6xl font-serif text-white md:text-center text-start">Thoughtfully Designed Floor Plans</h2>
                        <p className="text-white/80 tracking-[0.2em] font-medium uppercase text-[9px] md:text-base italic md:text-center text-end">
                            Smart layouts that maximize space, light, and everyday comfort.
                        </p>

                        <div className="flex justify-center pt-4 relative">
                            <Image
                                src="/assets/images/breaker.png"
                                alt="divider"
                                width={600}
                                height={40}
                                className="opacity-80 brightness-200"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-20 justify-items-center">
                        {floorPlans.map((plan, index) => (
                            <WrapCard
                                key={index}
                                type={plan.type}
                                image={plan.image}
                                isSoldOut={plan.isSoldOut}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-slate-50 py-8 overflow-hidden">
                <div className="text-center space-y-4 mb-4">
                    <div className="px-4 flex flex-col gap-4">
                        <h2 className="text-2xl md:text-6xl font-serif text-slate-900 md:text-center text-start">A <span className="text-primary">Glimpse</span> of Life at Mahindra Blossom</h2>
                        <p className="text-slate-900 tracking-[0.2em] font-medium uppercase text-[9px] md:text-base italic md:text-center text-end">
                            View images of homes, amenities, and the surrounding environment.
                        </p>
                    </div>

                    <div className="flex justify-center pt-4 relative">
                        <Image
                            src="/assets/images/breaker.png"
                            alt="divider"
                            width={1100}
                            height={40}
                            className="opacity-80 brightness-200"
                        />
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <MarqueeRow items={row1} duration={40} />
                    <MarqueeRow items={row2} reverse duration={50} />
                    <MarqueeRow items={row3} duration={45} />
                </div>
            </section>

            <section id="specifications" className="hidden md:hidden lg:flex py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-2">
                    <div className="text-center space-y-4 mb-8">
                        <h2 className="text-5xl md:text-6xl font-serif text-[#4B4D4C]">Smart <span className="text-primary">Specifications</span></h2>
                        <p className="text-gray-500 tracking-[0.2em] font-medium uppercase text-sm italic">
                            Where Quality Meets Functionality
                        </p>
                        <div className="flex justify-center pt-4">
                            <Image
                                src="/assets/images/breaker.png"
                                alt="divider"
                                width={600}
                                height={24}
                                className="opacity-60"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {specifications.map((spec, index) => (
                            <RowLongCard
                                key={index}
                                image={spec.image}
                                title={spec.title}
                                items={spec.items}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="location">
                <Location />
            </section>

            <div className="w-full lg:h-48 bg-white"></div>
            <section className="bg-white">
                <Footer />
            </section>

            {
                modal &&
                <Booking setModal={setModal} />
            }
        </div>
    );
}
