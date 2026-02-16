import React from 'react';

const BorderBeam = ({
    duration = 10,
    borderWidth = 2,
    colorFrom = '#a855f7', // purple-500
    colorTo = '#3b82f6',   // blue-500
    className = "",
    innerClassName = "bg-[#f2f0f8]"
}) => {
    return (
        <div className={`absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden ${className}`}>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-spin-slow"
                style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 80deg, ${colorFrom} 120deg, ${colorTo} 180deg, transparent 240deg, transparent 360deg)`,
                    animationDuration: `${duration}s`
                }}
            ></div>

            {/* Inner Mask */}
            <div className={`absolute inset-px rounded-[calc(inherit-1px)] z-0 ${innerClassName}`}></div>
        </div>
    );
};

export default BorderBeam;
