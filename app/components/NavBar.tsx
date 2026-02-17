import { PhoneCall } from 'lucide-react'
import Logo from './Logo'

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-28 h-24 shadow-sm bg-black/20 backdrop-blur-xl border-b border-white/5">
            {/* logo */}
            <div className="flex items-center space-x-2 brightness-0 invert opacity-90 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Logo />
            </div>

            {/* btn */}
            <a
                href="#"
                className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/70 transition-all duration-300 cursor-pointer px-6 md:px-8 py-3 rounded-full shadow-lg shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0"
            >
                <PhoneCall size={20} className="text-white fill-white" />
                <p className="text-white text-sm md:text-base lg:text-lg font-semibold tracking-wide">
                    +91 9901717339
                </p>
            </a>
        </nav>
    )
}
