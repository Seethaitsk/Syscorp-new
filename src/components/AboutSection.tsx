// components/home/AboutSection.tsx
import Image from "next/image";
import Button from "./ui/Button";

export default function AboutSection() {
    return (
        <section className="relative bg-[#fafafa] py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Image & Overlay Cards */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md">
                        {/* Main Consultant Image */}
                        {/* Replace /consultant.png with your actual image path */}
                        <div className="relative z-10 rounded-2xl overflow-hidden">
                            <img
                                src="/images/home/about-home.png"
                                alt="Business Consultant"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Top Left: Profitability Card */}
                        <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-2xl z-20 hidden sm:block border border-gray-100">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Growth Rate</p>
                            <div className="flex items-end gap-1.5 h-10 mt-2">
                                {/* Lightest Blue */}
                                <div className="w-2 bg-[#1A5CDD]/20 h-1/2 rounded-full"></div>
                                {/* Medium Light Blue */}
                                <div className="w-2 bg-[#1A5CDD]/40 h-3/4 rounded-full"></div>
                                {/* Your Primary Blue (#1A5CDD) */}
                                <div className="w-2 bg-[#1A5CDD] h-full rounded-full shadow-[0_0_8px_rgba(26,92,221,0.4)]"></div>
                                {/* Medium Blue */}
                                <div className="w-2 bg-[#1A5CDD]/60 h-2/3 rounded-full"></div>
                            </div>
                        </div>

                        {/* Bottom Right: Experience Card (Using Winbet Purple) */}
                        <div className="absolute -bottom-8 -right-4 bg-[#1A5CDD] text-white p-6 rounded-2xl z-20 w-72">
                            <h3 className="text-3xl font-bold">10+</h3>
                            <p className="text-sm opacity-90 mb-4">Years of Winning Experience</p>
                            <div className="flex items-center pt-2 border-t border-purple-400/30">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-9 h-9 rounded-full border-2 border-[#1A5CDD] bg-gray-300 overflow-hidden"
                                        >
                                            <img src={`/images/user.avif`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <p className="ml-4 text-xs font-medium text-purple-100">5m+ Customers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="flex flex-col space-y-7">
                    <div>
                        {/* <span className="inline-block bg-[#3F82FB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10 ring-offset-0 transition-all hover:ring-[#1A5CDD]/20">
                            About Us
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
                            About Us
                        </span>
                    </div>
                    <h2 className="heading font-black text-gray-900 leading-[1.1]">
                        Ensure The Success Of Your Business Venture
                    </h2>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                        Business consulting is a dynamic and diverse field that plays a crucial role in helping
                        organizations succeed in today's competitive environment.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-8 mt-4">
                        {/* Feature 1 */}
                        <div className="flex gap-5 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow border border-gray-50">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Simplifying Complexity</h4>
                                <p className="text-gray-400 text-sm mt-1 leading-snug">
                                    We transform complex betting data into actionable insights for your growth.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-5 group">
                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow border border-gray-50">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Empowering Growth</h4>
                                <p className="text-gray-400 text-sm mt-1 leading-snug">
                                    Our strategies are designed to scale your ventures effectively and safely.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button (Using Winbet Yellow) */}
                    <div className="pt-4">
                        <Button href="#">
                            Get Started{" "}
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
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-[50%] h-full bg-gradient-to-l from-purple-50 to-transparent opacity-50"></div>
        </section>
    );
}
