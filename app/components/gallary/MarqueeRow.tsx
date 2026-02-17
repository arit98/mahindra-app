"use client"
import { motion } from "framer-motion"
import Image from "next/image";

interface MarqueeRowProps {
    items: { src: string; width: number }[];
    reverse?: boolean;
    duration?: number;
}

export const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, reverse = false, duration = 40 }) => {
    const displayItems = [...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden py-4 w-full">
            <motion.div
                className="flex items-center space-x-8 shrink-0"
                animate={{
                    x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {displayItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-xl"
                        style={{
                            width: `min(${item.width}px, 70vw)`,
                            height: 'clamp(200px, 30vh, 280px)',
                        }}
                    >
                        <Image
                            src={item.src}
                            alt={`Gallery image ${idx}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};