import React from 'react';
import { Globe } from 'lucide-react';

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-40  md:mt-40 px-4 relative">

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-[#1a1a1a]  leading-tighter  sm:leading-28">
                Full-Stack Automate
                <br />
                <span className="relative inline-block">
                    <span className="text-[#858488] line-through decoration-2 decoration-[#858488]">Agency</span>
                    <span className="ml-4 text-[#1a1a1a]">Lab.</span>
                </span>
            </h1>

            <div className="mt-8 flex flex-col items-center gap-4">
                <Globe className="w-6 h-6 shadow-2xl shadow-black text-black stroke-1" />
                <p className="text-xs md:text-sm text-black sm:max-w-[420px] max-w-[350px] leading-relaxed tracking-wider font-medium">
                    SKIEH is an elite collective of automation architects,
                    <br />
                    for visionaries leveraging efficiency as an unfair advantage.
                </p>
            </div>
        </div>
    );
}

export default Hero;
