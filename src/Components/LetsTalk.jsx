import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import DotGrid from '../Bits/Dotgrid';

function LetsTalk() {
    return (
        <div className="w-full relative py-10 md:pt-32  px-4">
            {/* Dot Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <DotGrid
                    dotSize={2}
                    gap={15}
                    baseColor="#c4c4c4"
                    activeColor="#5227FF"
                    proximity={150}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading + Button */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
                    <h2 className="text-6xl md:text-[7rem] font-normal text-[#1a1a1a] leading-none tracking-tight">
                        Let's Talk.
                    </h2>
                    <button className="bg-[#1a1a1a] text-white px-8 py-5 rounded-full flex items-center gap-3 text-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 group">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        Get Started
                    </button>
                </div>

                {/* Contact Text */}
                <div className="flex justify-end mb-16">
                    <div className="flex items-center gap-4">
                        {/* Avatar Group */}
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-neutral-400 border-2 border-[#f2f0f8]"></div>
                            <div className="w-10 h-10 rounded-full bg-neutral-700 border-2 border-[#f2f0f8]"></div>
                            <div className="w-10 h-10 rounded-full bg-neutral-400 border-2 border-[#f2f0f8]"></div>
                        </div>
                        <p className="text-sm tracking-wide text-[#1a1a1a]">
                            We're always up for a coffee and a chat,<br />
                            <a href="#" className="text-black font-bold hover:underline">Send us a message</a> and we'll get back to you!.
                        </p>
                    </div>
                </div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border border-gray-500  overflow-hidden">
                    {[
                        { name: "Awwwards", icon: "W." },
                        { name: "Clutch", icon: "G" },
                        { name: "Instagram", icon: "◎" },
                        { name: "Dribbble", icon: "◉" },
                        { name: "Substack", icon: "▤" },
                        { name: "LinkedIn", icon: "in" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`flex flex-col items-start justify-between p-6 h-32 hover:bg-white/80 transition-colors ${i < 5 ? 'border-r border-gray-500' : ''}`}
                        >
                            <span className="text-2xl font-semibold text-[#1a1a1a]">{social.icon}</span>
                            <span className="text-md text-neutral-500">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LetsTalk;
