import Image from "next/image";

interface GalleryItemProps {
    src: string;
    label: string;
    className?: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, label, className }) => (
    <div className={`relative group overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02] ${className}`}>
        <div className="aspect-square relative w-full h-full min-h-[200px]">
            <Image
                src={src}
                alt={label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-white font-medium text-lg tracking-wide uppercase drop-shadow-md">
                    {label}
                </span>
            </div>
        </div>
    </div>
);