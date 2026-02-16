import React, { useState, useEffect } from 'react';

function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Simulate progress while DOM loads
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        const handleLoad = () => {
            setProgress(100);
            clearInterval(interval);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            clearInterval(interval);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => onComplete(), 800);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [progress, onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1a1a] transition-all duration-700 ${isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        >
            {/* Logo / Brand */}
            <div className={`mb-12 transition-all duration-500 ${isExiting ? 'translate-y-[-20px] opacity-0' : ''}`}>
                <h1 className="text-5xl md:text-7xl font-normal text-white tracking-wider">
                    SKIEH.
                </h1>
            </div>

            {/* Progress Bar */}
            <div className={`w-64 md:w-80 transition-all duration-500 ${isExiting ? 'translate-y-[20px] opacity-0' : ''}`}>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-white rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                <div className="flex justify-between mt-3">
                    <span className="text-xs text-white/40 tracking-widest uppercase">Loading</span>
                    <span className="text-xs text-white/40 font-mono">{Math.min(Math.round(progress), 100)}%</span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
