"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Target, Layout, Code, ShieldCheck, Rocket, Wrench } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
    {
        num: "01",
        title: "Discovery & Consultation",
        desc: "We begin by understanding your business objectives, challenges, target audience, and technical requirements.",
        icon: Search
    },
    {
        num: "02",
        title: "Planning & Strategy",
        desc: "Our experts prepare detailed project roadmaps, technology recommendations, timelines, and development strategies.",
        icon: Target
    },
    {
        num: "03",
        title: "UI/UX Design",
        desc: "We design intuitive, user-friendly interfaces that improve engagement and deliver seamless digital experiences.",
        icon: Layout
    },
    {
        num: "04",
        title: "Development",
        desc: "Our experienced developers build secure, scalable, and high-performance applications using modern technologies and coding standards.",
        icon: Code
    },
    {
        num: "05",
        title: "Quality Assurance",
        desc: "Every feature undergoes rigorous functional testing, performance testing, usability testing, and security validation.",
        icon: ShieldCheck
    },
    {
        num: "06",
        title: "Deployment",
        desc: "After successful testing, we deploy the application smoothly with minimal downtime and maximum reliability.",
        icon: Rocket
    },
    {
        num: "07",
        title: "Maintenance & Support",
        desc: "Our relationship doesn't end after launch. We provide ongoing support, updates, security improvements, and feature enhancements to ensure long-term success.",
        icon: Wrench
    }
];

export default function ProcessSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    // SVG Canvas Dimensions
    const CANVAS_WIDTH = 1200;
    const CANVAS_HEIGHT = 600;

    // Mathematical Sine Wave Path for 7 nodes
    // Centered at Y=300, Peaks at Y=250, Troughs at Y=350
    // Ends exactly at the 7th node (1050, 250)
    const pathD = `
        M 50 300
        C 80 250, 110 250, 150 250
        C 205 250, 245 350, 300 350
        C 355 350, 395 250, 450 250
        C 505 250, 545 350, 600 350
        C 655 350, 695 250, 750 250
        C 805 250, 845 350, 900 350
        C 955 350, 995 250, 1050 250
    `;

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {
            const curvePath = document.querySelector(".antigravity-wire-draw") as SVGPathElement;
            const nodes = gsap.utils.toArray(".timeline-card-node") as HTMLElement[];
            const dots = gsap.utils.toArray(".timeline-dot-node") as HTMLElement[];

            if (!curvePath) return;
            const length = curvePath.getTotalLength();
            gsap.set(curvePath, { strokeDasharray: length, strokeDashoffset: length });

            // Set initial state for cards and dots
            gsap.set(nodes, { opacity: 0, y: 30, scale: 0.95 });
            gsap.set(dots, { opacity: 0, scale: 0 });

            // Create ScrollTrigger Timeline for pinning and drawing
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top", // Pin exactly at top of the screen
                    end: "+=3000", // 3000px of scrolling for full timeline interaction
                    pin: true,
                    scrub: 1, // Smooth scrubbing
                }
            });

            // Calculate horizontal scroll distance if canvas is wider than screen
            const containerWidth = window.innerWidth;
            const isSmallScreen = containerWidth < CANVAS_WIDTH;
            const scrollWidth = isSmallScreen ? (CANVAS_WIDTH - containerWidth + 40) : 0;

            // 1. Draw the line smoothly over the scroll duration
            tl.to(curvePath, {
                strokeDashoffset: 0,
                ease: "none",
                duration: 1
            }, 0);

            // 1.5 Translate horizontally if needed (for smaller screens)
            if (scrollWidth > 0) {
                tl.to(canvasRef.current, {
                    x: -scrollWidth,
                    ease: "none",
                    duration: 1
                }, 0);
            }

            // 2. Reveal cards sequentially as the line draws
            nodes.forEach((node, i) => {
                // Approximate position along the 0 to 1 timeline
                const xPos = 150 + (i * 150);
                // Map X coordinate to 0-1 range (path ends at 1050)
                const progress = (xPos - 50) / 1000;

                // Animate Anchor Dot slightly before the line reaches it
                tl.to(dots[i], {
                    opacity: 1,
                    scale: 1,
                    duration: 0.05,
                    ease: "back.out(2)"
                }, Math.max(0, progress - 0.02));

                // Animate Card exactly when the line reaches the dot
                tl.to(node, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.1,
                    ease: "power2.out"
                }, progress);
            });
        });

        // Trigger ScrollTrigger refresh after delay to resolve initial Next.js layout paint height changes
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 800);

        return () => {
            mm.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-slate-50 dark:bg-[#020612] relative overflow-x-clip overflow-y-visible py-10 md:py-16 lg:py-24 lg:min-h-screen lg:flex lg:flex-col lg:justify-center font-sans">
            {/* Ambient Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-white dark:from-slate-900 dark:via-[#020612] dark:to-[#020612] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-20 mb-8 md:mb-12 pointer-events-none">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm rounded-full px-4 py-1.5 text-[11px] font-bold text-blue-600 dark:text-blue-400 w-fit uppercase tracking-widest mb-4 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)] animate-pulse" />
                        Our Development Process
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                        Proven <span className="text-blue-600 dark:text-blue-400">Methodology</span>
                    </h2>
                </div>
            </div>

            {/* Horizontal Timeline Container (Desktop only) */}
            <div className="sky-desktop-timeline w-full pb-24 pt-12 overflow-visible">
                <div ref={canvasRef} className="relative will-change-transform max-w-none" style={{ width: `${CANVAS_WIDTH}px`, height: `${CANVAS_HEIGHT}px`, marginLeft: 'max(0px, calc(50vw - 600px))' }}>

                    {/* Fixed Left Origin Icon (Tech/Processor) */}
                    <div className="absolute z-30 flex items-center justify-center bg-slate-900 border-2 border-blue-500 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.6)]" style={{ left: 20, top: 300, transform: 'translate(-50%, -50%)', width: 56, height: 56 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]">
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                            <rect x="9" y="9" width="6" height="6"></rect>
                            <line x1="9" y1="1" x2="9" y2="4"></line>
                            <line x1="15" y1="1" x2="15" y2="4"></line>
                            <line x1="9" y1="20" x2="9" y2="23"></line>
                            <line x1="15" y1="20" x2="15" y2="23"></line>
                            <line x1="20" y1="9" x2="23" y2="9"></line>
                            <line x1="20" y1="14" x2="23" y2="14"></line>
                            <line x1="1" y1="9" x2="4" y2="9"></line>
                            <line x1="1" y1="14" x2="4" y2="14"></line>
                        </svg>
                    </div>

                    {/* SVG Curve */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
                        <svg width="100%" height="100%" viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`} fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                            {/* Faint Background Wire */}
                            <path d={pathD} stroke="currentColor" strokeWidth="1.5" className="text-slate-200 dark:text-slate-800 opacity-50" strokeLinecap="round" />
                            {/* Glowing Foreground Wire (Animated via GSAP) */}
                            <path d={pathD} stroke="url(#wireGradient)" strokeWidth="3" className="antigravity-wire-draw drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="wireGradient" x1="0" y1="0" x2={CANVAS_WIDTH} y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
                                    <stop offset="10%" stopColor="#3b82f6" />
                                    <stop offset="50%" stopColor="#2563eb" />
                                    <stop offset="90%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Timeline Nodes */}
                    {processSteps.map((step, idx) => {
                        const isPeak = idx % 2 === 0; // 0, 2, 4, 6 are Peaks
                        const xPos = 150 + (idx * 150);
                        const yPos = isPeak ? 250 : 350;
                        const delay = idx * 0.3;
                        const Icon = step.icon;

                        return (
                            <div key={`node-${idx}`} className="absolute z-20 group" style={{ left: xPos, top: yPos, transform: 'translate(-50%, -50%)' }}>

                                {/* Anti-gravity Card Wrapper */}
                                <div className="timeline-card-node absolute w-[240px] -translate-x-1/2 flex flex-col items-center custom-float"
                                    style={{
                                        bottom: isPeak ? '18px' : 'auto',
                                        top: isPeak ? 'auto' : '18px',
                                        left: '50%',
                                        animationDelay: `${delay}s`
                                    }}>

                                    {/* Peak: Card is ABOVE the dot */}
                                    {isPeak && (
                                        <>
                                            <div className="bg-white/95 dark:bg-slate-900/95 px-6 pt-5 pb-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_15px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] group-hover:border-blue-300 dark:group-hover:border-blue-700 text-center w-full relative z-10 cursor-pointer group-hover:-translate-y-2">

                                                {/* Badge Icon on Bottom Edge */}
                                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 border-[3px] border-white dark:border-slate-900 group-hover:scale-110 transition-transform duration-500 z-20">
                                                    <Icon size={20} strokeWidth={2.5} />
                                                </div>

                                                <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-2 block">Step {step.num}</span>
                                                <h3 className="text-[16px] font-extrabold text-slate-800 dark:text-white leading-tight mb-3">
                                                    {step.title}
                                                </h3>
                                                <p className="text-[12.5px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 font-medium">
                                                    {step.desc}
                                                </p>
                                            </div>
                                            <div className="w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500/60 h-[40px] transition-all duration-300 opacity-50 group-hover:opacity-100 relative z-0"></div>
                                        </>
                                    )}

                                    {/* Trough: Card is BELOW the dot */}
                                    {!isPeak && (
                                        <>
                                            <div className="w-[1px] bg-gradient-to-b from-blue-500/60 to-blue-500/0 h-[40px] transition-all duration-300 opacity-50 group-hover:opacity-100 relative z-0"></div>
                                            <div className="bg-white/95 dark:bg-slate-900/95 px-6 pt-8 pb-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_15px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] group-hover:border-blue-300 dark:group-hover:border-blue-700 text-center w-full relative z-10 cursor-pointer group-hover:translate-y-2">

                                                {/* Badge Icon on Top Edge */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 border-[3px] border-white dark:border-slate-900 group-hover:scale-110 transition-transform duration-500 z-20">
                                                    <Icon size={20} strokeWidth={2.5} />
                                                </div>

                                                <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-2 block">Step {step.num}</span>
                                                <h3 className="text-[16px] font-extrabold text-slate-800 dark:text-white leading-tight mb-3">
                                                    {step.title}
                                                </h3>
                                                <p className="text-[12.5px] text-slate-500 dark:text-slate-400 leading-relaxed m-0 font-medium">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Glowing Anchor Dot on the SVG Curve */}
                                <div className="timeline-dot-node relative flex items-center justify-center transition-transform duration-300 group-hover:scale-150 z-0 cursor-pointer">
                                    <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    <div className="w-3.5 h-3.5 bg-white dark:bg-[#020612] border-[3px] border-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.6)] group-hover:bg-blue-400 group-hover:border-blue-300"></div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Vertical Timeline (Mobile & Tablet) */}
            <div className="sky-mobile-timeline container mx-auto px-6 max-w-3xl relative z-20 pb-8">
                <div className="relative ml-4 md:ml-8 pl-0">
                    {processSteps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={`mobile-node-${idx}`} className="mobile-timeline-card relative pl-8 pb-6 last:pb-0 border-l border-blue-200 dark:border-blue-900/60 last:border-l-transparent">
                                {/* Dot Icon on the Left Line */}
                                <div className="absolute left-0 top-1 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 border-[3px] border-white dark:border-slate-900 z-10">
                                    <Icon size={16} strokeWidth={2.5} />
                                </div>

                                {/* Card Body */}
                                <div className="bg-white/95 dark:bg-slate-900/95 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                                    <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-1.5 block">
                                        Step {step.num}
                                    </span>
                                    <h3 className="text-lg font-extrabold text-slate-800 dark:text-white leading-tight mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed m-0 font-medium font-sans">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-animation {
                    0%, 100% { transform: translateY(0) translateX(-50%); }
                    50% { transform: translateY(-8px) translateX(-50%); }
                }
                .custom-float {
                    animation: float-animation 4s ease-in-out infinite;
                }
                @media (max-width: 1199px) {
                    .sky-desktop-timeline {
                        display: none !important;
                    }
                    .sky-mobile-timeline {
                        display: block !important;
                    }
                }
                @media (min-width: 1200px) {
                    .sky-desktop-timeline {
                        display: block !important;
                    }
                    .sky-mobile-timeline {
                        display: none !important;
                    }
                }
            `}} />
        </section>
    );
}
