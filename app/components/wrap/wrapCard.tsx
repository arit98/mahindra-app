"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface WrapCardProps {
    type: string;
    image?: string;
    isSoldOut?: boolean;
}

const WrapCard: React.FC<WrapCardProps> = ({ type, image = "/assets/images/cardBg.jpg", isSoldOut }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative w-full max-w-[380px] h-[220px] aspect-[4/3.2] rounded-2xl overflow-visible bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl group transition-all duration-500 ${isSoldOut ? 'opacity-90 cursor-not-allowed' : 'hover:translate-y-[-8px]'}`}
        >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm px-8 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 w-fit flex justify-center items-center">
                    <span className="text-slate-800 font-bold text-sm tracking-widest uppercase line-clamp-1">{type}</span>
                </div>
            </div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <div className='absolute inset-0 z-0 transition-all duration-1000 blur-sm opacity-70 group-hover:blur-sm group-hover:scale-110 group-hover:opacity-100'>
                    <Image
                        src={image}
                        alt={type}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 z-5 bg-linear-to-tr from-white/20 to-transparent opacity-50" />

                <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-6">
                    {!isSoldOut ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-2.5 rounded-full border border-slate-800/80 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 bg-transparent shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] cursor-pointer"
                        >
                            View Plan
                        </motion.button>
                    ) : (
                        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                            <motion.div
                                initial={{ scale: 0.8, rotate: -25, opacity: 0 }}
                                whileInView={{ scale: 1, rotate: -15, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                            >
                                <Image
                                    src="/assets/images/soldout.png"
                                    alt="Sold Out"
                                    width={260}
                                    height={150}
                                />
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default WrapCard
