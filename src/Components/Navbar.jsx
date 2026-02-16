import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import BorderBeam from './BorderBeam';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 flex justify-between border-b border-neutral-500 items-center pl-4 md:pr-40 pr-4 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#f2f0f8]/90 backdrop-blur-sm' : 'backdrop-blur-xs'} py-6`}>
            <div className="flex items-center gap-2 min-w-[200px]">
                <span className={`font-bold tracking-wider transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    transform-gpu will-change-transform ${isScrolled ? 'sm:text-xl text-neutral-500 font-medium' : 'text-2xl text-black'}`}>


                    <span className="inline-block transition-all duration-500">
                        {isScrolled ? "Automate Anything" : "SKIEH"}
                    </span>
                </span>
            </div>

            <div className="flex items-center gap-6 relative z-10">
                <span className={`text-sm font-medium text-gray-600 hidden md:block transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>Evening vibes!</span>
                <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                    <ArrowUpRight className="w-4 h-4" />
                    Hire us
                </button>
            </div>
        </nav>
    );
}

export default Navbar;