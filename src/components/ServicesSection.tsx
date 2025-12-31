"use client";

import Button from "./ui/Button";

const services = [
    {
        title: "Business Planning",
        desc: "We help you create a solid plan for growth, minimizing risks and maximizing returns.",
        image: "/images/card/card-bg.png",
        icon: (
            <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
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
        desc: "We develop powerful branding and marketing strategies to grow your audience and impact.",
        image: "/images/card/card-bg.png",
        icon: (
            <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
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
        desc: "We optimize your sales process to increase revenue and strengthen client relationships.",
        image: "/images/card/card-bg.png",
        icon: (
            <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        ),
    },
];

export default function ServicesSection() {
    return (
        <section aria-labelledby="services-heading" className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4 text-center md:text-left">
                        <span className="inline-block rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                            Our Services
                        </span>
                        <h2 id="services-heading" className="heading-1 font-extrabold text-gray-900 leading-[1.2]">
                            Empower Your Business <br /> To Succeed & Grow
                        </h2>
                    </div>

                    <Button href="#" aria-label="View more services">
                        More Services
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M8 4l8 8-8 8" />
                        </svg>
                    </Button>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F4F8FF] rounded-xl p-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group rounded-3xl p-10 text-center overflow-hidden min-h-[400px] flex flex-col justify-center"
                        >
                            {/* Decorative Background */}
                            <div
                                className="absolute inset-0 z-0 opacity-30"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                aria-hidden="true"
                            />

                            {/* Icon */}
                            <div className="relative z-20 mx-auto w-20 h-20 bg-gradient-to-br from-[#3FB5FD] to-[#1A5CDD] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-20 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">{service.desc}</p>
                                {/* <button
                                    className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More
                                </button> */}
                                <button
                                    className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm transition-colors duration-300 hover:bg-[#0b6eda] hover:text-white cursor-pointer"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#F4F8FF] rounded-xl p-6 mt-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group rounded-3xl p-10 text-center overflow-hidden min-h-[400px] flex flex-col justify-center"
                        >
                            {/* Decorative Background */}
                            <div
                                className="absolute inset-0 z-0 opacity-30"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                aria-hidden="true"
                            />

                            {/* Icon */}
                            <div className="relative z-20 mx-auto w-20 h-20 bg-gradient-to-br from-[#3FB5FD] to-[#1A5CDD] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-20 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">{service.desc}</p>
                                {/* <button
                                    className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More
                                </button> */}
                                <button
                                    className="mt-4 bg-white text-gray-900 font-bold py-2.5 px-8 rounded-full shadow-sm border border-gray-100 text-sm transition-colors duration-300 hover:bg-[#0b6eda] hover:text-white cursor-pointer"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
