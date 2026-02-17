import Image from 'next/image'
import React from 'react'

export default function AboutFeatureItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="shrink-0 mt-1">
                <Image
                    src="/assets/images/bullet.png"
                    alt="bullet"
                    width={20}
                    height={20}
                    className="mt-0.5"
                />
            </div>
            <div className="space-y-0.5">
                <h4 className="font-bold text-[15px] text-[#333333] uppercase tracking-wide">{title}</h4>
                <p className="text-[13px] text-[#666666] leading-relaxed font-light">{description}</p>
            </div>
        </div>
    )
}
