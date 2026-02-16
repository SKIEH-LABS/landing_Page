import React from 'react';
import { Apple } from 'lucide-react';

function Credentials() {
    return (
        <section className="w-full px-4  flex flex-col md:flex-row items-end justify-end max-w-7xl mx-auto relative">

            {/* Visual Element (Bottom Left) - Placeholder for the sphere/video */}

            {/* Right Side Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-12">
                <div className="space-y-8 text-lg md:text-xl font-normal leading-relaxed text-[#1a1a1a]">
                    <p>
                        Since 2015, we've partnered with <span className="border-b border-black">Social Networks</span>,{' '}
                        <span className="border-b border-black">Governments</span>,{' '}
                        <span className="border-b border-black">Presidents</span>, handled all design for a{' '}
                        <span className="border-b border-black">$25B Unicorn</span>, branded the <span className="border-b border-black">world’s largest mental health provider</span>, designed products with <span className="border-b border-black">an Apple team</span> and a few{' '}
                        <span className="border-b border-black">Fortune 500</span>.
                    </p>

                    <p>
                        Actively used by millions and widely loved by our collective mothers, our work has been awarded by the folks from{' '}
                        <span className="border-b border-black">Awwwards</span> and <span className="border-b border-black">Webby</span>, survived the critics at <span className="border-b border-black">Product Hunt</span>, talked about in the obscure corners of <span className="border-b border-black">HackerNews</span>, spotted in the background of a <span className="border-b border-black">Tim Cook</span> Keynote, featured on the cover of <span className="border-b border-black">Forbes</span> and smiled from the top of the{' '}
                        <span className="border-b border-black">App Store</span>.
                    </p>

                    <p>
                        We live at the intersection of tech, brand and product.
                    </p>
                </div>

                {/* Logos/Icons */}
                <div className="flex items-center gap-8 mt-4 opacity-80 grayscale hover:grayscale-0 transition-all">
                    <span className="font-bold text-xl tracking-tighter">FWA</span>
                    <span className="font-bold text-xl serif">W.</span>
                    <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 border border-black rounded-full"></div>
                    </div>
                    <Apple className="w-6 h-6" />
                    <div className="flex flex-col gap-[2px]">
                        <div className="w-4 h-[2px] bg-black"></div>
                        <div className="w-4 h-[2px] bg-black translate-x-1"></div>
                        <div className="w-4 h-[2px] bg-black"></div>
                        <div className="w-4 h-[2px] bg-black translate-x-1"></div>
                    </div>
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-bold rotate-45">S</div>
                </div>
            </div>
        </section>
    );
}

export default Credentials;
