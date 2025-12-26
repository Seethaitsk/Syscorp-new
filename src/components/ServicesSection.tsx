import React from "react";
import Button from "./ui/Button";

const services = [
    {
        title: "Business Planning",
        desc: "Lorem Ipsum is simply is design iomyl is text Lorem Ipsum is simply is our busi designer Lorem is Ipsum is",
        image: "/images/card/card-bg.png",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
    },
    {
        title: "Marketing & Branding",
        desc: "Lorem Ipsum is simply is design iomyl is text Lorem Ipsum is simply is our busi designer Lorem is Ipsum is",
        image: "/images/card/card-bg.png",

        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
            </svg>
        ),
    },
    {
        title: "Sales Consulting",
        desc: "Lorem Ipsum is simply is design iomyl is text Lorem Ipsum is simply is our busi designer Lorem is Ipsum is",
        image: "/images/card/card-bg.png",

        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        ),
    },
    // Repeat for second row if needed
];

export default function ServicesSection() {
    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        {/* <span className="inline-block bg-[#3F82FB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10 ring-offset-0 transition-all hover:ring-[#1A5CDD]/20">
                            Our Services
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
                            Our Services
                        </span>
                        <h2 className="heading-1 font-extrabold text-[#1a2b3c] leading-[1.2]">
                            Empower Your Business <br /> To Succeed & Grow.
                        </h2>
                    </div>

                    {/* <button className="bg-gradient-to-r from-[#3FB5FD] to-[#1A5CDD] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-200 hover:opacity-90 transition-all self-start">
                        More Services &rarr;
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

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F4F8FF] rounded-xl mb-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group rounded-3xl p-10 text-center overflow-hidden min-h-[400px] flex flex-col justify-center"
                        >
                            {/* 1. The Actual Background Image */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    opacity: "0.3",
                                    width: "100%",
                                    maxWidth: "200px",
                                    height: "100%",
                                    margin: "auto",
                                }}
                            ></div>

                            {/* 3. Icon Container */}
                            <div className="relative z-20 mx-auto w-20 h-20 bg-gradient-to-br from-[#3FB5FD] to-[#1A5CDD] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-100 ">
                                <div className="group-hover:text-[#1A5CDD] transition-colors">{service.icon}</div>
                            </div>

                            {/* 4. Text Content */}
                            <div className="relative z-20 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 transition-colors">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed transition-colors">
                                    {service.desc}
                                </p>
                                <button className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Services Grid */}
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F4F8FF] rounded-xl mb-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group rounded-3xl p-10 text-center overflow-hidden min-h-[400px] flex flex-col justify-center"
                        >
                            {/* 1. The Actual Background Image */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    opacity: "0.3",
                                    width: "100%",
                                    maxWidth: "200px",
                                    height: "100%",
                                    margin: "auto",
                                }}
                            ></div>

                            {/* 3. Icon Container */}
                            <div className="relative z-20 mx-auto w-20 h-20 bg-gradient-to-br from-[#3FB5FD] to-[#1A5CDD] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-100 ">
                                <div className="group-hover:text-[#1A5CDD] transition-colors">{service.icon}</div>
                            </div>

                            {/* 4. Text Content */}
                            <div className="relative z-20 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 transition-colors">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed transition-colors">
                                    {service.desc}
                                </p>
                                <button className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Services Grid */}
            </div>
        </section>
    );
}
