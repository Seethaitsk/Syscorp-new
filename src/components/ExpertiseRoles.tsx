"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const rolesData = {
    ai: {
        title: "AI Experts",
        desc: "As a leading Software Company in Pondicherry, we are AI and software experts dedicated to delivering innovative, high-quality digital solutions with honesty, precision, and reliability. We leverage Artificial Intelligence, automation, and modern development technologies to build scalable, secure, and future-ready software tailored to your business needs. Every solution is developed with transparent processes, robust architecture, and a commitment to quality, ensuring long-term performance, seamless user experiences, and lasting business value.",
        highlights: [
            { text: "Experienced Developers", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
            { text: "Secure Cloud Infrastructure", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
            { text: "AI-Powered Solutions", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { text: "Client-Focused Approach", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
        ],
        mainImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        subImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
    },
    architects: {
        title: "Software Architects",
        desc: "Our experienced Software Architects design secure, scalable, and high-performance application architectures that power modern businesses. From enterprise software and cloud-native applications to custom software development, we transform complex business requirements into efficient, future-ready digital solutions. As a trusted Software Company in Pondicherry, we focus on building reliable systems that improve performance, reduce infrastructure costs, and support long-term business growth.",
        highlights: [
            { text: "Experienced Architects", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { text: "Scalable Databases", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
            { text: "Agile Development", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
            { text: "Automated QA & CI/CD", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
        ],
        mainImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        subImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400"
    },
    saas: {
        title: "SaaS Engineers",
        desc: "Our SaaS Engineers specialize in building secure, responsive, and scalable cloud-based applications that deliver exceptional user experiences. From intuitive client dashboards and enterprise SaaS platforms to seamless API integrations and modern frontend development, we create solutions that improve productivity, streamline operations, and support business growth. Every application is optimized for speed, usability, performance, and long-term scalability.",
        highlights: [
            { text: "UI/UX-Focused Development", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
            { text: "Responsive Design", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
            { text: "Modern CSS & Animations", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { text: "SEO & Performance Optimization", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }
        ],
        mainImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
        subImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
    }
};

type RoleKey = keyof typeof rolesData;

export default function ExpertiseRoles() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<RoleKey>("saas");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".roles-title-anim",
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Animate content when tab changes
    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [activeTab]);

    const activeData = rolesData[activeTab];

    return (
        <section ref={sectionRef} className="py-24 bg-[#F8FAFC] dark:bg-[#040a1a] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                
                {/* Header & Tabs */}
                <div className="text-center mb-16 roles-title-anim flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-5 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                        WHO WE ARE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 dark:text-white leading-tight mb-10 tracking-tight">
                        Shaping Futuristic <span className="text-blue-600 dark:text-blue-500">Digital Ecosystems</span>
                    </h2>

                    {/* Custom Tab Bar */}
                    <div className="flex flex-wrap justify-center bg-white dark:bg-slate-900 rounded-full p-2 shadow-sm border border-slate-200 dark:border-slate-800 gap-2 w-fit">
                        <button 
                            onClick={() => setActiveTab("ai")}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[14.5px] font-bold transition-all duration-300 ${
                                activeTab === "ai" 
                                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            AI Experts
                        </button>
                        <button 
                            onClick={() => setActiveTab("architects")}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[14.5px] font-bold transition-all duration-300 ${
                                activeTab === "architects" 
                                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Software Architects
                        </button>
                        <button 
                            onClick={() => setActiveTab("saas")}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[14.5px] font-bold transition-all duration-300 ${
                                activeTab === "saas" 
                                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            SaaS Engineers
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">
                    
                    {/* Left Side: Text and Highlights */}
                    <div className="lg:col-span-7 flex flex-col">
                        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                            {activeData.title}:
                        </h3>
                        <p className="text-[15.5px] text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
                            {activeData.desc}
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {activeData.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={highlight.icon} />
                                        </svg>
                                    </div>
                                    <span className="text-[14.5px] font-bold text-slate-800 dark:text-slate-200">
                                        {highlight.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Contact Row */}
                        <div className="flex flex-wrap items-center gap-6">
                            <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-blue-500/20">
                                Contact Us
                                <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">CALL US NOW!</p>
                                    <p className="text-[15px] font-bold text-slate-900 dark:text-white m-0">+91 (123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image Composition */}
                    <div className="lg:col-span-5 relative">
                        {/* Main Image */}
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] w-full max-w-sm mx-auto ml-auto">
                            <Image 
                                src={activeData.mainImage} 
                                alt={activeData.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Small Image */}
                        <div className="absolute -bottom-10 right-0 md:-right-8 w-48 h-40 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.15)] border-4 border-white dark:border-[#040a1a] hidden sm:block">
                            <Image 
                                src={activeData.subImage} 
                                alt="Team working"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Client Card */}
                        <div className="absolute top-10 -left-6 md:-left-12 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center -space-x-3 mb-3">
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" width={40} height={40} alt="Client 1" className="object-cover h-full" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" width={40} height={40} alt="Client 2" className="object-cover h-full" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" width={40} height={40} alt="Client 3" className="object-cover h-full" />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 flex items-center justify-center text-white text-[11px] font-bold">
                                    +50
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-amber-400 mb-1">
                                {[1,2,3,4,5].map(i => (
                                    <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-[13px] font-bold text-slate-800 dark:text-slate-200">Our 50+ Satisfied Clients</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
