"use client"
import React, { useState } from 'react'
import { PhoneCall, Menu, X, Timer } from 'lucide-react'
import Logo from './Logo'
import Image from 'next/image'

export default function NavBar({setModal}:{setModal:()=>boolean}) {
    return (
            <nav className="sticky top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-28 md:px-8 h-20 md:h-24 shadow-sm bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
                {/* Desktop Logo */}
                <div className="hidden md:flex md:w-64 lg:w-[24rem] items-center space-x-2 brightness-0 invert opacity-90 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Logo />
                </div>

                {/* Mobile Logo */}
                <div className='flex md:hidden items-center relative w-32 h-10 brightness-0 invert opacity-90 transform hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <Image
                        src="/assets/images/mob-logo.png"
                        alt="Mobile Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

            {/* btn */}
                <button
                onClick={()=>setModal(true)}
                className="md:hidden lg:hidden flex items-center justify-center gap-1 bg-primary hover:bg-primary/70 transition-all duration-300 cursor-pointer px-2 py-1 rounded-full shadow-lg shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                    <Timer size={15} />
                    <p className="text-white text-sm font-light tracking-wide">
                        Book A Event
                    </p>
                </button>
                <button
                onClick={()=>setModal(true)}
                className="md:flex lg:flex hidden items-center justify-center gap-3 bg-primary hover:bg-primary/70 transition-all duration-300 cursor-pointer md:px-4 lg:px-8 lg:py-3 md:py-2 rounded-full shadow-lg shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                <PhoneCall size={15} className="md:flex lg:hidden hidden text-white fill-white" />
                <PhoneCall size={20} className="lg:flex hidden text-white fill-white" />
                    <p className="text-white md:text-sm lg:text-lg font-semibold tracking-wide">
                        +91 9901717339
                    </p>
                </button>
            </nav>
    )
}
