import React from 'react';
import { ArrowUpRight, Square, Circle, Triangle, Hexagon } from 'lucide-react';

const services = [
    {
        title: "Product Design",
        description: "Good design gets downloads. Great design gets daily use. We design software products that build habits and drive growth, at scale."
    },
    {
        title: "Engineering",
        description: "Robust, scalable, and future-proof. We build the technical foundation that powers your vision, from complex backends to pixel-perfect frontends."
    },
    {
        title: "Brand Identity",
        description: "More than just a logo. We craft memorable visual systems and brand narratives that resonate with your audience and stand out in the market."
    },
    {
        title: "Motion & 3D",
        description: "Bring your digital presence to life. We create immersive 3D experiences and fluid animations that captivate users and tell your story."
    }
];

function ServiceCards() {
    return (
        <div className="flex flex-col mt-10 gap-10">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="w-full bg-[#f2f0f8] border border-gray-300 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-gray-300 transition-colors sticky"
                    style={{ top: '150px' }}
                >

                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <h3 className="text-4xl md:text-5xl font-normal text-[#1a1a1a]">{service.title}</h3>
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex  flex-col md:flex-row justify-between items-end gap-8 relative z-10 text-neutral-500">
                        <div className="max-w-xl space-y-8">
                            <p className="text-xl md:text-2xl leading-relaxed font-normal text-[#1a1a1a]">
                                {service.description}
                            </p>

                            <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                                Learn more
                            </button>
                        </div>

                        {/* Decorative Icon Grid (Bottom Right) */}
                        <div className="hidden md:grid grid-cols-8 gap-3 opacity-50">
                            {Array.from({ length: 64 }).map((_, i) => {
                                const isPurple = [13, 27, 42, 58, 60].includes(i);
                                const icons = [Square, Circle, Triangle, Hexagon];
                                const IconComponent = icons[i % icons.length];

                                return (
                                    <IconComponent
                                        key={i}
                                        className={`w-3 h-3 ${isPurple ? 'text-purple-500' : 'text-gray-300'}`}
                                        strokeWidth={2.5}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceCards;
