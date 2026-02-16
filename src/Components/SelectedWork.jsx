import React from 'react';

function SelectedWork() {
    return (
        <div className="w-full mt-8 px-4">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-20 md:py-32 gap-8">
                <h2 className="text-6xl md:text-9xl font-normal text-[#1a1a1a] tracking-tight">
                    Selected Work
                </h2>
                <p className="text-xl md:text-3xl text-[#1a1a1a] font-normal">
                    World-class design at studio speed.
                </p>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-8xl mx-auto pb-20">
                {/* Project 1 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-[350px] md:h-[450px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                        <span className="text-sm text-white/60 font-medium uppercase tracking-wider">Product Design · Branding</span>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-normal text-white mb-2">Surge</h3>
                            <p className="text-white/50 text-lg">Fintech platform redesign</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-purple-600/20 rounded-tl-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-500"></div>
                </div>

                {/* Project 2 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-[350px] md:h-[450px] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] border border-gray-200">
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                        <span className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Web App · Engineering</span>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-normal text-[#1a1a1a] mb-2">ComPsych</h3>
                            <p className="text-neutral-500 text-lg">Mental health & wellness</p>
                        </div>
                    </div>
                    <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl group-hover:bg-blue-200 transition-all duration-500"></div>
                </div>

                {/* Project 3 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-[350px] md:h-[450px] bg-[#0a0a0a]">
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                        <span className="text-sm text-white/60 font-medium uppercase tracking-wider">Mobile App · Motion</span>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-normal text-white mb-2">Amp</h3>
                            <p className="text-white/50 text-lg">Audio streaming experience</p>
                        </div>
                    </div>
                    <div className="absolute bottom-[-20px] right-[-20px] w-60 h-60 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
                </div>

                {/* Project 4 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-3xl h-[350px] md:h-[450px] bg-gradient-to-br from-[#2d1b69] to-[#11001c]">
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                        <span className="text-sm text-white/60 font-medium uppercase tracking-wider">Brand Identity · 3D</span>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-normal text-white mb-2">Nexus</h3>
                            <p className="text-white/50 text-lg">AI-powered workspace</p>
                        </div>
                    </div>
                    <div className="absolute top-20 left-20 w-48 h-48 bg-violet-500/15 rounded-full blur-3xl group-hover:bg-violet-500/25 transition-all duration-500"></div>
                </div>
            </div>
        </div>
    );
}

export default SelectedWork;
