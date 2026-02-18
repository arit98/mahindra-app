"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

interface RowCardProps {
    type: string,
    size: string,
    price: string,
    isSoldOut?: boolean
}

const RowCard: React.FC<RowCardProps> = ({ type, size, price, isSoldOut }) => {
    return (
        <div className={`relative w-full max-w-[380px] h-[220px] rounded-2xl bg-slate-200 shadow-md backdrop-blur-md py-3 overflow-hidden transition-all duration-500 ${isSoldOut ? 'cursor-not-allowed' : 'hover:scale-[1.01]'}`}>
            {/* Background Image */}
            <div className={`absolute inset-0 z-0 pointer-events-none opacity-[0.05] transition-all duration-500 ${isSoldOut ? 'blur-3xl grayscale' : ''}`}>
                <Image
                    src="/assets/images/cardBg.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center">
                {/* Title - Always visible/sharp */}
                <div className="py-4 text-slate-900">
                    <p className={`font-bold text-2xl text-center ${isSoldOut ? 'blur-[2px] opacity-30 select-none z-10' : ''}`}>{type}</p>
                </div>

                {/* Sellable Details - Blurred if sold out */}
                <div className={`flex flex-col items-center space-y-4 transition-all duration-500 ${isSoldOut ? 'blur-[2px] opacity-30 select-none' : ''}`}>
                    <p className='text-sm font-medium text-slate-700'>{size}{' '}sq.ft</p>
                    <p className='font-bold text-lg text-slate-900'>₹{price} <span className='italic font-extralight text-sm'>Onwards</span></p>

                    <button className={`px-10 py-2.5 rounded-full border border-slate-800/80 text-slate-900 font-bold hover:bg-slate-900 transition-all duration-300 bg-transparent shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] ${isSoldOut ? 'hover:bg-transparent cursor-not-allowed' : 'hover:text-white cursor-pointer'}`}>
                        Get Quote
                    </button>
                </div>

                {/* Sold Out Stamp - Top layer */}
                {isSoldOut && (
                    <motion.div
                        initial={{ scale: 0.8, rotate: -25, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: -14, opacity: 1 }}
                        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                        <Image
                            src="/assets/images/soldout.png"
                            alt="Sold Out"
                            width={260}
                            height={150}
                            className="object-contain mt-10"
                        />
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default RowCard;
