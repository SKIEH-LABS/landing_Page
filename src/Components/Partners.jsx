import React from 'react';

function Partners() {
    return (
        <>
            {/* Partners */}
            <div className="w-full px-4 sm:flex justify-center items-start  md:py-10 max-w-7xl mx-auto">
                <p className="text-md font-medium text-[#1a1a1a] tracking-wide sm:mt-8 mb-8">Partners</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tighter text-[#1a1a1a] max-w-5xl ml-auto sm:text-right">
                    All great things are achieved by those who are willing to roll up their sleeves. Our partners think so too.
                </h2>
            </div>

            {/* Partner Logos - 3 Layer Infinite Scroll */}
            <div className="w-full py-16 overflow-hidden flex flex-col gap-4">
                {/* Row 1 - scrolls left */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, setIndex) => (
                        <div key={setIndex} className="flex shrink-0">
                            {["flair", "surge", "SmartScripts", "neoventures", "Clinical ink"].map((partner, i) => (
                                <div key={`${setIndex}-${i}`} className="flex items-center justify-center h-16 rounded-full border border-gray-400 bg-white/50 hover:bg-white hover:border-gray-300 transition-all duration-300 px-8 mx-2">
                                    <span className="text-sm md:text-xl font-thin text-[#1a1a1a] tracking-wide">{partner}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Row 2 - scrolls right */}
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    {[...Array(4)].map((_, setIndex) => (
                        <div key={setIndex} className="flex shrink-0">
                            {["move9k", "Bostel Technologies", "Hutte", "FRONTIER", "RELIAS"].map((partner, i) => (
                                <div key={`${setIndex}-${i}`} className="flex items-center justify-center h-16 rounded-full border border-gray-400 bg-white/50 hover:bg-white hover:border-gray-300 transition-all duration-300 px-8 mx-2">
                                    <span className="text-sm md:text-xl font-thin text-[#1a1a1a] tracking-wide">{partner}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Row 3 - scrolls left */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, setIndex) => (
                        <div key={setIndex} className="flex shrink-0">
                            {["cada", "PSICOSOFT", "prestalo", "NCF", "BUHO"].map((partner, i) => (
                                <div key={`${setIndex}-${i}`} className="flex items-center justify-center h-16 rounded-full border border-gray-400 bg-white/50 hover:bg-white hover:border-gray-300 transition-all duration-300 px-8 mx-2">
                                    <span className="text-sm md:text-xl font-thin text-[#1a1a1a] tracking-wide">{partner}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Partners;
