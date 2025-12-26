import React from "react";
import Button from "./ui/Button";

export default function CommunitySection() {
    const advantages = [
        "Guiding Your Business Success",
        "Available 24/7 to Assist You Anytime",
        "Evaluate Issues Hindering Your Progress",
        "Expert Consultants Expertise",
        "Strategic Insights for Business Growth",
        "Free Consultation to Collaboration",
    ];

    return (
        <section className="bg-[#E9F2FF] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl space-y-4">
                        {/* <span className="inline-block bg-[#3F82FB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10 ring-offset-0 transition-all hover:ring-[#1A5CDD]/20">
                            Why Choose us!
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
                            Why Choose Us!
                        </span>
                        <h2 className="heading-1 font-extrabold text-[#0D1C16] leading-tight">
                            Build A Thriving Community And Unlock Limitless Possibilities.
                        </h2>
                    </div>
                    {/* <button className="bg-[#3FB5FD] hover:bg-[#1A5CDD] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all self-start flex items-center gap-2">
                        More Services <span>&rarr;</span>
                    </button> */}
                    <Button href="#" className="service-sect-btn">
                        More Services
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M8 4l8 8-8 8" />
                        </svg>
                    </Button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Side: Cards and List (8 Columns) */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Contact Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Headquarter Card */}
                            <div className="bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] p-8 rounded-2xl text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Headquarter –</h3>
                                <p className="opacity-90 leading-relaxed">
                                    2715 Ash Dr. San Jose, South Dakota
                                    <br />
                                    83475
                                </p>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
                                <h3 className="text-2xl font-bold text-[#0D1C16] mb-4">Email Us –</h3>
                                <div className="space-y-1 text-gray-500 font-medium">
                                    <p>yourtheme@gmail.com</p>
                                    <p>helptheme@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Advantages List Card */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-blue-50">
                            <h3 className="text-xl font-bold text-[#0D1C16] mb-8">
                                The Advantages of Connecting with Us:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {advantages.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-gray-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image and Chart (4 Columns) */}
                    <div className="lg:col-span-5 relative flex justify-center justify-end">
                        <div className="relative w-full max-w-sm">
                            {/* Consultant Image */}
                            <img
                                src="/images/home/about-home.png"
                                alt="Consultant"
                                className="w-full h-auto z-10 relative"
                            />

                            {/* Floating Chart Card */}
                            <div className="absolute top-10 -right-20 bg-white p-4 rounded-xl shadow-2xl z-20 w-40 border border-gray-50">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Profit Chart</span>
                                    <span className="text-[10px] text-gray-300 italic">Monthly</span>
                                </div>
                                {/* Simplified Pie Chart Representation */}
                                <div className="relative w-18 h-18 mx-auto my-4">
                                    <div className="absolute inset-0 rounded-full border-[12px] border-blue-50"></div>
                                    <div className="absolute inset-0 rounded-full border-[12px] border-[#1A5CDD] border-t-transparent border-l-transparent -rotate-45"></div>
                                </div>
                                <div className="flex justify-between text-[9px] font-bold">
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-[#1A5CDD] rounded-full"></span> 65%
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-blue-100 rounded-full"></span> 35%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
