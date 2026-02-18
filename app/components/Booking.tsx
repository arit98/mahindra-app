"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

const Booking = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 backdrop-blur-sm md:p-4 animate-in fade-in duration-300">
      <div
        className="relative w-full h-full md:h-auto md:max-w-6xl bg-white md:rounded-[3.5rem] overflow-x-hidden overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300 lg:scale-70 md:scale-75 scale-80 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setModal(false)}
          className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-gray-900 transition-colors z-210 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Left Side: Content & Illustration */}
        <div className="relative w-full md:w-[48%] p-8 md:p-12 flex flex-col justify-center bg-[#FDFDFD] min-h-[350px] md:min-h-0">
          {/* Skyline Illustration */}
          <div className="absolute top-0 md:top-auto md:bottom-8 left-0 w-full h-[35%] md:h-[50%] opacity-30 pointer-events-none select-none">
            <Image
              src="/assets/images/booking.png"
              alt=''
              fill
              className="object-contain object-top md:object-bottom-left scale-110 md:scale-130"
              priority
            />
          </div>

          <div className="relative z-10 md:-mt-48 mt-12 text-center md:text-left">
            <p className="text-[#9CA3AF] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold italic mb-4 md:mb-6">
              Let us show you around
            </p>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif text-[#374151] leading-[1.1] tracking-tight px-4 md:px-0">
              Book a guided site <span className="text-primary italic">visit</span> at your convenience.
            </h2>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[52%] p-8 md:p-20 bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.02)]">
          <form className="space-y-5 md:space-y-7 text-slate-900" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#4B5563]">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#4B5563]">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#4B5563]">Email</label>
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#4B5563]">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your message here"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium resize-none"
              ></textarea>
            </div>

            <div className="flex items-start gap-4 py-1">
              <div className="relative flex items-center h-6">
                <input
                  type="checkbox"
                  id="privacy"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-200 transition-all checked:bg-primary checked:border-primary hover:border-primary/50"
                />
                <svg
                  className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <label htmlFor="privacy" className="text-sm text-gray-400 font-medium leading-relaxed cursor-pointer select-none">
                By clicking, you agree to our <a href="#" className="underline decoration-primary/30 underline-offset-4 font-bold text-[#4B5563] hover:text-primary transition-colors">Privacy Policy</a> and marketing communication
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-extrabold py-5 rounded-full lg:text-xl md:text-md hover:bg-primary/90 hover:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.4)] active:scale-[0.98] transition-all duration-300 mt-4 shadow-xl shadow-primary/20"
            >
              Book an Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
