import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ServicesSection from "@/components/ServicesSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialSlider from "@/components/TestimonialSection";
import ServiceCompany from "@/components/ServiceCompany";
import FAQSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
// import HeroSlider from "@/components/HeroSlider";

export default function Index() {
    return (
        <div className="bg-zinc-50 font-sans dark:bg-black">
            {/* <HeroSlider /> */}
            <AboutSection />
            <AchievementsSection />
            <ServicesSection />
            <CommunitySection />
            <TestimonialSlider />
            <ServiceCompany />
            <FAQSection />
            <BlogSection />
        </div>
    );
}
