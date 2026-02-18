import React from 'react';
import Image from 'next/image';
import { GalleryItem } from './GallaryItems';

interface GallaryProps {
    images: {
        aromaticGarden: string;
        spaciousKitchen: string;
        partyLawn: string;
        multipurposeCourt: string;
        modernBedroom: string;
        gym: string;
        cricketNets: string;
        olympicPool: string;
        landscapedGardens: string;
        ventilatedFlats: string;
        largeBalcony: string;
        joggingTrack: string;
    }
}

const Gallary: React.FC<GallaryProps> = ({ images }) => {
    return (
        <div className="w-full py-12 px-4 md:px-8 bg-transparent">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* mobile view */}
                <div className="flex flex-col gap-4 md:hidden">
                    <div className="h-[150px] relative group overflow-hidden md:rounded-3xl rounded-xl shadow-xl">
                        <Image
                            src={images.aromaticGarden}
                            alt="Aromatic Garden"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                            <span className="text-white font-medium md:text-lg text-xs tracking-wide uppercase drop-shadow-md">
                                Aromatic Garden
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4 h-full">
                        <GalleryItem src={images.spaciousKitchen} label="Spacious Kitchen" className="flex-4 [&>div]:aspect-auto [&>div]:h-full" />
                        <GalleryItem src={images.partyLawn} label="Party Lawn" className="flex-3 [&>div]:aspect-auto [&>div]:h-full" />
                    </div>

                    <div className="flex gap-4 h-[200px]">
                        <GalleryItem src={images.multipurposeCourt} label="Multipurpose Court" className="flex-1 [&>div]:aspect-auto [&>div]:h-full" />
                        <GalleryItem src={images.modernBedroom} label="Modern Bedroom" className="flex-1 [&>div]:aspect-auto [&>div]:h-full" />
                    </div>

                    <div className="flex gap-4 h-[200px]">
                        <GalleryItem src={images.gym} label="Gym" className="flex-4 [&>div]:aspect-auto [&>div]:h-full" />
                        <GalleryItem src={images.cricketNets} label="Cricket Nets" className="flex-3 [&>div]:aspect-auto [&>div]:h-full" />
                    </div>

                    <div className="h-[150px] relative group overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src={images.olympicPool}
                            alt="1/2 Olympic size pool"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                            <span className="text-white font-medium text-xs tracking-wide uppercase drop-shadow-md">
                                1/2 Olympic size pool
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4 h-[200px]">
                        <GalleryItem src={images.landscapedGardens} label="Landscaped Gardens" className="flex-1 [&>div]:aspect-auto [&>div]:h-full" />
                        <GalleryItem src={images.ventilatedFlats} label="Ventilated Flats" className="flex-1 [&>div]:aspect-auto [&>div]:h-full" />
                    </div>

                    <div className="flex gap-4 h-[200px]">
                        <GalleryItem src={images.largeBalcony} label="Large Balcony" className="flex-4 [&>div]:aspect-auto [&>div]:h-full" />
                        <GalleryItem src={images.joggingTrack} label="Jogging Track" className="flex-3 [&>div]:aspect-auto [&>div]:h-full" />
                    </div>
                </div>

                {/* desktop or tablet view */}
                <div className="hidden md:block space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-1 md:row-span-2">
                            <div className="h-full md:h-[525px] lg:h-[640px] relative group overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                                <div className="h-[200px] md:h-full relative">
                                    <Image
                                        src={images.aromaticGarden}
                                        alt="Aromatic Garden"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                        <span className="text-white font-medium text-lg tracking-wide uppercase drop-shadow-md">
                                            Aromatic Garden
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 min-h-[200px]">
                            <GalleryItem src={images.spaciousKitchen} label="Spacious Kitchen" />
                        </div>
                        <div className="md:col-span-2">
                            <div className="relative group overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                                <div className="aspect-2/1 md:aspect-auto md:h-full min-h-[300px] relative">
                                    <Image
                                        src={images.partyLawn}
                                        alt="Party Lawn"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                        <span className="text-white font-medium text-lg tracking-wide uppercase drop-shadow-md">
                                            Party Lawn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <div className="relative group overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                                <div className="aspect-2/1 relative min-h-[200px]">
                                    <Image
                                        src={images.multipurposeCourt}
                                        alt="Multipurpose Court"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                        <span className="text-white font-medium text-lg tracking-wide uppercase drop-shadow-md">
                                            Multipurpose Court
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <GalleryItem src={images.modernBedroom} label="Modern Bedroom" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GalleryItem src={images.gym} label="Gym" />
                        <GalleryItem src={images.cricketNets} label="Cricket Nets" />
                        <GalleryItem src={images.olympicPool} label="1/2 Olympic size pool" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <GalleryItem src={images.landscapedGardens} label="Landscaped Gardens" />
                        <GalleryItem src={images.ventilatedFlats} label="Ventilated Flats" />
                        <GalleryItem src={images.largeBalcony} label="Large Balcony" />
                        <GalleryItem src={images.joggingTrack} label="Jogging Track" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;