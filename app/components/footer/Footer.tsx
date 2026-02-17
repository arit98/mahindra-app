import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="relative bg-primary text-white pt-24 md:pt-48 pb-12 px-4 md:px-8 mt-20 md:mt-40">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Virtual Tour Section */}
                <div className="relative z-10 w-full max-w-5xl -mt-32 md:-mt-80 lg:-mt-112 mb-12 md:mb-16 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video group cursor-pointer bg-black/20 ring-1 ring-white/10">
                    <Image
                        src="/assets/images/hero.png" // Using hero image as placeholder for the virtual tour background
                        alt="Virtual Tour"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center">
                        {/* Play Button Icon */}
                        <div className="transition-transform group-hover:scale-110 drop-shadow-2xl">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-24 h-24 md:w-32 md:h-32 text-white fill-current"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>

                        {/* Virtual Tour Text - Positioned at bottom */}
                        <div className="absolute bottom-10 left-0 right-0 text-center">
                            <h2 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg">
                                Take The Virtual Tour
                            </h2>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 text-[10px] uppercase tracking-widest [writing-mode:vertical-lr] font-light">
                        Artistic impression for representation purpose only.
                    </div>
                </div>

                {/* RERA Information */}
                <div className="text-center space-y-2 mb-12">
                    <p className="text-sm md:text-base font-medium tracking-wide">
                        PROJECT RERA No: PRM/KA/RERA/1251/446/PR/171225/008348
                    </p>
                    <p className="text-sm md:text-base font-medium tracking-wide">
                        AGENT RERA No.: PRM/KA/RERA/1251/446/AG/240723/004988
                    </p>
                    <p className="text-sm md:text-base italic font-light opacity-90 mt-4">
                        Authorized channel partner of Mahindra Blossom by Mahindra Lifespaces
                    </p>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-white/20 mb-8"></div>

                {/* Bottom Footer */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-widest font-medium text-white/90 gap-4">
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white transition-colors">DISCLAIMER</a>
                        <div className="w-px h-3 bg-white/40 mx-2"></div>
                        <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                    </div>
                    <div className="text-center md:text-right">
                        ©2025. Mahindra Blossom . ALL RIGHTS RESERVED
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer