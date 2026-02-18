"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AboutFeatureItem from './AboutFeature'

const Banners = [
    { name: 'garden', image: '/assets/images/garden.png' },
    { name: 'balcony', image: '/assets/images/balcony.jpg' },
]

export default function AboutContent() {
    const [activeBanner, setActiveBanner] = useState(0);
    return (
        <div className="container mx-auto relative z-10 py-12 lg:py-24">
            {/* about */}
            <div className="mb-20 lg:mb-32">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif">
                        <span className="text-[#EE3131]">About</span>{' '}
                        <span className="text-[#333333]">Mahindra Blossom</span>
                    </h2>
                    <p className="italic text-[9px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-medium text-[#666666] uppercase mt-3">
                        PREMIUM APARTMENTS IN WHITEFIELD, BENGALURU
                    </p>
                    <div className="flex justify-center my-8 lg:mt-8">
                        <Image
                            src="/assets/images/breaker.png"
                            alt="divider"
                            width={350}
                            height={24}
                            className="opacity-90 w-full max-w-[250px] md:max-w-[350px]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-4 md:space-y-6 text-[#444444] leading-relaxed text-sm md:text-base lg:text-[17px] text-start lg:text-left">
                        <p>
                            <span className="font-bold">Mahindra Blossom</span> is a thoughtfully designed <span className="font-bold">premium residential apartment project in Whitefield, Bangalore</span>, developed by <span className="font-bold text-[#EE3131]">Mahindra Lifespaces</span>, part of the trusted Mahindra Group. Known for quality construction, transparency, and sustainable development, Mahindra Lifespaces has delivered landmark residential communities across India.
                        </p>
                        <p>
                            Strategically located <span className="font-bold">near Hope Farm Junction, Whitefield</span>, Mahindra Blossom offers <span className="font-bold text-[#EE3131]">2 BHK, 3 BHK, and 4 BHK luxury apartments</span> crafted for modern families, professionals, and long-term investors. The project blends <span className="font-bold">urban convenience with green living</span>, creating a calm, secure, and future-ready residential environment.
                        </p>
                        <p>
                            With excellent connectivity to <span className="font-bold">ITPL, major tech parks, schools, hospitals, shopping hubs, and fully operational metro station</span>, Mahindra Blossom ensures everyday comfort while offering strong potential for property appreciation and rental demand.
                        </p>
                        <p className="italic pt-2 text-[#666666]">
                            Mahindra Blossom is not just a home — it&apos;s a lifestyle upgrade backed by the reliability of a trusted developer.
                        </p>
                    </div>

                    <div className="relative h-[400px] md:h-[450px] lg:h-[550px] flex items-center justify-center lg:justify-end overflow-hidden lg:overflow-visible">
                        <div className="relative w-full max-w-[200px] md:max-w-[320px] h-[280px] md:h-[420px] lg:mr-8">
                            {Banners.map((uni, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-all duration-500 cursor-pointer ${idx === activeBanner ? 'z-20 opacity-60 scale-95' : 'z-30 opacity-100 scale-100'
                                        }`}
                                    style={{
                                        transform: idx === activeBanner
                                            ? 'rotate(-8deg) translate(-30px, -30px)'
                                            : `rotate(0deg) scale(1)`,
                                    }}
                                    onMouseEnter={() => setActiveBanner(idx)}
                                >
                                    <div className="relative h-full bg-white rounded-2xl overflow-hidden border-2 border-white shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                                        <Image
                                            src={uni.image}
                                            alt={uni.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* feature */}
            <div className="pb-12 lg:pb-20">
                <div className="text-center mb-8 lg:mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif">
                        <span className="text-[#333333]">Features &</span>{' '}
                        <span className="text-[#EE3131]">Highlights</span>
                    </h2>
                    <p className="text-[9px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-medium text-[#666666] uppercase mt-3">
                        WHY BUY A HOME AT MAHINDRA BLOSSOM
                    </p>
                    <div className="flex justify-center mt-6 lg:mt-8">
                        <Image
                            src="/assets/images/breaker.png"
                            alt="divider"
                            width={350}
                            height={24}
                            className="opacity-90 w-full max-w-[250px] md:max-w-[350px]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative w-full max-w-[200px] md:max-w-[360px] h-[280px] md:h-[580px] rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/images/balcony.jpg"
                                alt="Mahindra Blossom View"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                        <AboutFeatureItem
                            title="PRIME AND WELL CONNECTED LOCATION"
                            description="Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and the fully operational metro — ensuring effortless daily travel and high future value."
                        />
                        <AboutFeatureItem
                            title="HOMES DESIGNED FOR SPACE, LIGHT & COMFORT"
                            description="Choose from 2, 3 & 4 BHK premium apartments with smart, vastu compliant layouts, abundant natural light, and excellent ventilation — crafted for modern families, work-from-home needs, and everyday comfort."
                        />
                        <AboutFeatureItem
                            title="WAKE UP TO GREEN, CALM LIVING"
                            description="Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers 4 acres of landscaped garden with bougainvillea canopies, aromatic and native plantations and butterfly park."
                        />
                        <AboutFeatureItem
                            title="RESORT-STYLE AMENITIES AT YOUR DOORSTEP"
                            description="Offering 97,000 sq. ft. of amenities and clubhouse spaces, including Bougainvillea canopies, half-Olympic size swimming pool, 25+ seater business center, cricket nets, 2 running tracks, 2 indoor badminton courts and much more."
                        />
                        <AboutFeatureItem
                            title="SUSTAINABLE LIVING"
                            description="Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design for lower consumption and sustainable living."
                        />
                        <AboutFeatureItem
                            title="75+ YEARS OF MAHINDRA TRUST"
                            description="Developed by Mahindra Lifespaces, part of the Mahindra Group, this project offers peace of mind through quality construction, transparency, & a proven track record of timely delivery."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
