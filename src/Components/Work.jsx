import React from 'react';

function Work() {
    return (
        <div className="w-full  mt-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Card 1: surge */}
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl h-[300px] md:h-[400px]">
                    <div className="absolute inset-0 bg-linear-to-b from-black to-[#4a044e] p-6 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <span className="text-white text-xl font-medium flex items-start gap-1">surge <span className="text-xs leading-none">“</span></span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-[#7e22ce]/50 to-transparent blur-2xl"></div>
                    </div>
                </div>

                {/* Card 2: ComPsych */}
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl h-[300px] md:h-[400px] bg-white border border-gray-100">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center">
                        <div className="flex justify-end items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            </div>
                            <span className="text-blue-900 font-semibold">ComPsych</span>
                        </div>
                        {/* Overlay for text readability if needed, mostly white/cloudy image */}
                    </div>
                </div>

                {/* Card 3: amp */}
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl h-[300px] md:h-[400px] bg-black">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex justify-end items-center gap-2">
                            <span className="text-white font-bold text-xl flex items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" /></svg>
                                amp
                            </span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-neutral-800 rounded-tl-full opacity-50 blur-xl"></div>
                        {/* Placeholder for the device/object in the image */}
                        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-stone-300 rounded-xl rotate-[-15deg] shadow-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
