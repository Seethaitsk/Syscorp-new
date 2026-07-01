"use client";

import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialSlider from "@/components/TestimonialSection";
import FAQSection from "@/components/FaqSection";
import CommunitySection from "@/components/CommunitySection";
import HeaderBanner from "@/components/ui/HeaderBanner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Aboutus = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            const ease = "power2.out";

            // 1. Community Section entrance
            gsap.fromTo(
                ".gsap-community-sec",
                { filter: "blur(8px)", y: 40, opacity: 0 },
                {
                    filter: "blur(0px)",
                    y: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-community-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // 2. Testimonials Section entrance
            gsap.fromTo(
                ".gsap-testimonials-sec",
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-testimonials-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // 3. FAQ Section entrance
            gsap.fromTo(
                ".gsap-faq-sec",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease,
                    scrollTrigger: {
                        trigger: ".gsap-faq-sec",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <HeaderBanner
                title={
                    <>
                        We are a <span className="text-[#38bdf8] font-serif italic font-normal">selectively skilled</span> tech partner with a strong focus on producing high-quality and impactful digital products.
                    </>
                }
                description="Syscorp is a technology-driven software development company dedicated to building powerful, scalable, and customized digital solutions. Operating at the intersection of architecture, motion, and design, the diversity of our skills drives growth."
            />

            <AboutSection />

            <div className="gsap-community-sec opacity-0">
                <CommunitySection />
            </div>

            <div className="gsap-faq-sec opacity-0">
                <FAQSection />
            </div>

            <div className="gsap-testimonials-sec opacity-0">
                <TestimonialSlider bgClass="bg-[#F0F8FF] dark:bg-[#080f25]" />
            </div>
        </>
    );
};

export default Aboutus;
