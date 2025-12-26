"use client";
import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Button from "./ui/Button";

const testimonials = [
    {
        name: "John Carter",
        role: "CTO, FinSecure Ltd.",
        company: "SYSCORP",
        quote: "Partnering with this cybersecurity team has completely transformed the way we protect our digital assets. Their proactive monitoring and immediate response have given us total confidence.",
    },
    {
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        company: "TECHFLOW",
        quote: "The best business consulting we've ever had. Our productivity increased by 40% in the first quarter alone after implementing their strategic insights.",
    },
];

// --- COMPONENTS ---

export default function HomePage() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
                    <div className="space-y-8 text-center lg:text-left">
                        {/* <span className="inline-block bg-[#3F82FB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10 ring-offset-0 transition-all hover:ring-[#1A5CDD]/20">
                            Client Says
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
                            Client Says
                        </span>
                        <h2 className="heading-1 font-extrabold leading-tight">
                            What our clients say about staying secure with us
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                            Empowering businesses to operate with total confidence through expert strategy.
                        </p>
                        <Button href="#">
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
                </div>

                <div className="lg:col-span-7 relativ">
                    <div className="overflow-hidden bg-[#E6EDFD] rounded-[10px] shadow-sm" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 p-10 md:p-10">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-2">
                                            {/* <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full" />
                                            <span className="text-2xl font-black uppercase tracking-tighter">
                                                {item.company}
                                            </span> */}
                                            <img src="images/logo/logo.webp" alt="" className="w-30" />
                                        </div>
                                        <blockquote className="font-bold text-[#1a2b3c] leading-snug">
                                            “{item.quote}”
                                        </blockquote>
                                        <div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <div>
                                                <h4 className="text-xl font-extrabold">{item.name}</h4>
                                                <p className="text-gray-400 font-medium">{item.role}</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={scrollPrev}
                                                    className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-[#3FB5FD] hover:bg-[#3FB5FD] hover:text-white transition-all"
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    onClick={scrollNext}
                                                    className="w-12 h-12 rounded-full bg-[#3FB5FD] flex items-center justify-center text-white hover:bg-[#1A5CDD] transition-all"
                                                >
                                                    →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
