"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Location = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const features = [
        "Abutting Hopefarm Channasandra Metro Station",
        "Key terminals within 1.3km radius - Whitefield railway station and Hopefarm bus stop",
        "Major IT parks within 2.5km radius - ITPL, new Google office",
        "Social infrastructure within 3km - Schools, colleges, hospitals, etc."
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden md:px-6">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* header section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left md:col-span-1 order-1">
                        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-2">
                            A Perfect <span className="text-primary">Location</span>
                        </h2>
                        <p className="text-[10px] md:text-base tracking-[0.2em] font-medium text-gray-500 mb-6 uppercase italic">
                            Everything you need, just minutes away
                        </p>

                        <div className="w-full flex justify-center md:justify-start mb-8">
                            <div className="relative w-full max-w-[300px] md:max-w-[400px] flex items-center">
                                <div className="flex-1 h-px bg-slate-200"></div>
                                <div className="px-4">
                                    <Image
                                        src="/assets/images/breaker.png"
                                        alt="divider"
                                        width={1000}
                                        height={20}
                                        className="object-contain opacity-60"
                                    />
                                </div>
                                <div className="flex-1 h-px bg-slate-200"></div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <ul className="space-y-6 max-w-lg">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1 shrink-0">
                                            <Image
                                                src="/assets/images/bullet.png"
                                                alt="bullet"
                                                width={24}
                                                height={24}
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-slate-600 text-lg md:text-xl font-light hover:text-slate-900 transition-colors duration-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* map section */}
                    <div className="relative group cursor-zoom-in w-full order-2 md:col-span-1" onClick={() => setIsZoomed(true)}>
                        <div className="absolute -inset-4 bg-red-100/30 rounded-[2.5rem] blur-2xl group-hover:bg-red-200/40 transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200/50">
                            <Image
                                src="/assets/images/map.png"
                                alt="Location Map"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                                priority
                            />
                        </div>
                    </div>

                    {/* bottom on mobile */}
                    <div className="flex flex-col items-center md:hidden order-3 w-full">
                        <ul className="space-y-4 max-w-lg text-left w-full">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <div className="mt-1 shrink-0">
                                        <Image
                                            src="/assets/images/bullet.png"
                                            alt="bullet"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-slate-600 text-sm font-light">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* zoom box don't need extra component render derectly for now */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setIsZoomed(false)}
                    >
                        <motion.button
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-110"
                            onClick={() => setIsZoomed(false)}
                        >
                            <X size={40} strokeWidth={1.5} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/images/map.png"
                                    alt="Location Map Expanded"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Location;

