import React from "react";

export default function ServiceCompany() {
    return (
        <section className="relative w-full py-24 px-6 overflow-hidden min-h-[500px] flex items-center">
            {/* 1. Background Image - Changed to 'cover' for better responsiveness */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(images/bg.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            {/* 2. Dark Blue Overlay - Acts as the tint layer */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#06163A]/90 via-[#06163A]/85 to-[#040D21]"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="flex justify-center">
                    {/* <span className="inline-block bg-[#3F82FB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10 ring-offset-0 transition-all hover:ring-[#1A5CDD]/20">
                        Best Software Company
                    </span> */}
                    <span
                        className="
    inline-block
    bg-[#3F82FB]
    text-white
    text-sm
    font-semibold
    px-4
    py-1.5
    rounded-full
    uppercase
    tracking-widest
    leading-none

    ring-2
    ring-white/30

    transition
    hover:ring-white/50

    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-white
    focus-visible:outline-offset-2

    motion-reduce:transition-none
  "
                    >
                        Best Software Company
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    The Future Of Corporate And <br className="hidden md:block" /> Business Solutions
                </h1>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    {/* Glassmorphism Button */}
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 backdrop-blur-md group">
                        Discover More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>

                    {/* Solid Blue Button */}
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] text-white font-bold flex items-center justify-center gap-2 group">
                        Get A Quote
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
