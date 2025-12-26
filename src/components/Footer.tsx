import React from "react";
import Link from "next/link";

const services = [
    {name: "Search Engine Optimization", href: "/seo-service"},
    {name: "Search Engine Marketing", href: "/search-engine-marketing"},
    {name: "Social Media Marketing", href: "/socialmedia-marketing"},
    {name: "Web Development", href: "/best-website-development-company-in-chennai"},
    {name: "CRM Software", href: "/overseas-education-consulting-crm-software"},
];

const socials = ["facebook", "twitter", "linkedin", "instagram", "youtube"];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#011146] text-white">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* About */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Logo */}
                        <div>
                            <img src="images/logo/logo.webp" alt="Syscorp Logo" className="w-32" />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            Subscribe to our newsletter and stay updated with the latest insights, offers, and digital
                            trends.
                        </p>

                        {/* Newsletter */}
                        <form className="relative max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full bg-white/5 border border-white/10
            rounded-full px-5 py-3 pr-32
            text-sm text-white placeholder-gray-400
            focus:outline-none focus:border-[#3FB5FD]
            transition"
                            />

                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1
            px-6 rounded-full
            bg-[#3FB5FD] text-sm font-semibold text-white
            hover:bg-[#2da3f3] transition"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Helper text */}
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-4 space-y-5">
                        <h4 className="text-lg font-semibold uppercase tracking-wide">Services</h4>
                        <ul className="space-y-3">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-[#3FB5FD] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4 space-y-5">
                        <h4 className="text-lg font-semibold uppercase tracking-wide">Contact</h4>

                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>📍 Vadapalani, Chennai – 26</li>
                            <li>📍 Puducherry</li>
                            <li>✉️ syscorptechno@gmail.com</li>
                            <li>✉️ hr@itsk.in</li>
                            <li>📞 +91 93444 30402</li>
                        </ul>

                        {/* Socials */}
                        <div className="flex gap-3 pt-4">
                            {socials.map((icon) => (
                                <Link
                                    key={icon}
                                    href={`https://${icon}.com`}
                                    target="_blank"
                                    className="w-9 h-9 rounded-full border border-white/15 
                                    flex items-center justify-center text-gray-400
                                    hover:bg-[#3FB5FD] hover:text-white hover:border-[#3FB5FD]
                                    transition-all"
                                >
                                    <i className={`fab fa-${icon}`}></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div
                    className="max-w-7xl mx-auto px-6 py-6
                    flex flex-col md:flex-row gap-4 md:gap-0
                    justify-between items-center text-sm text-gray-400"
                >
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-[#3FB5FD]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className="hover:text-[#3FB5FD]">
                            Terms & Conditions
                        </Link>
                        <Link href="/disclaimer" className="hover:text-[#3FB5FD]">
                            Disclaimer
                        </Link>
                    </div>

                    <p>
                        © {year}{" "}
                        <Link href="/" className="text-white hover:text-[#3FB5FD]">
                            Syscorp Technology Pvt Ltd
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
