"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

interface RowLongCardProps {
    image: string;
    title: string;
    items: string[];
}

const RowLongCard: React.FC<RowLongCardProps> = ({ image, title, items }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[300px] min-w-0 mx-auto bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col group border border-slate-100"
        >

            <div className="relative w-full aspect-[4.5/5.5] rounded-t-3xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
            </div>

            {/* main content */}
            <div className="px-6 py-10 flex flex-col">
                <h3 className="text-center font-bold text-[#4B4D4C] text-[1.15rem] uppercase tracking-widest leading-[1.4] mb-10 min-h-14 flex items-center justify-center">
                    {title}
                </h3>

                {/* list */}
                <div className="w-full space-y-7 px-1">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="relative w-[22px] h-[22px] shrink-0 mt-0.5">
                                <Image
                                    src="/assets/images/bullet.png"
                                    alt="bullet icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[0.98rem] text-slate-600/80 font-medium leading-[1.6]">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default RowLongCard;