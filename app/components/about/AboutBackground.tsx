import Image from 'next/image'
import React from 'react'

export default function AboutBackground({ children }: { children?: React.ReactNode }) {
    return (
        <section className="relative w-full overflow-hidden bg-white py-24">
            {/* Soft pink gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#FFF5F7] via-white to-[#FFF5F7] z-0" />

            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]">
                <Image
                    src="/assets/images/tree.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    )
}
