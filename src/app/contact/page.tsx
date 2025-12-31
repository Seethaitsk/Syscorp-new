"use client";

import React, {useState} from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ContactUs() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <main className="bg-white">
            {/* Banner */}
            <section className="bg-[#011146] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-4 lg:px-8 flex flex-wrap -mx-4">
                    {/* Left: Contact Info */}
                    <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 space-y-10">
                        <div className="max-w-xs">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                            <p className="text-gray-700">
                                Have a project in mind? We'd love to hear from you. Send us a message or visit our
                                office.
                            </p>
                        </div>

                        {/* Address */}
                        <div className="flex items-start group">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mr-5 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 shadow-sm">
                                <i className="fas fa-map-marker-alt text-xl"></i>
                            </div>
                            <div>
                                <h6 className="text-lg font-bold text-gray-900 mb-1">Office Address</h6>
                                <p className="text-gray-600 leading-relaxed">
                                    Syscorp Technology Pvt Ltd
                                    <br />
                                    No.37, Kamaraj Salai, Thattanchavady
                                    <br />
                                    Puducherry - 605009
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start group">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mr-5 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 shadow-sm">
                                <i className="fas fa-phone-alt text-xl"></i>
                            </div>
                            <div>
                                <h6 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h6>
                                <a
                                    href="tel:+919344430402"
                                    className="hover:text-blue-600 transition-colors block font-medium"
                                >
                                    +91 9344430402
                                </a>
                                <p className="text-sm text-gray-600 mt-1">Mon - Sat: 10:00 AM - 7:30 PM</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start group">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mr-5 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 shadow-sm">
                                <i className="fas fa-envelope text-xl"></i>
                            </div>
                            <div>
                                <h6 className="text-lg font-bold text-gray-900 mb-1">Email Support</h6>
                                <a
                                    href="mailto:info@itsk.in"
                                    className="hover:text-blue-600 transition-colors block font-medium"
                                >
                                    info@itsk.in
                                </a>
                                <p className="text-sm text-gray-600 mt-1">Available for quick queries</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="w-full lg:w-2/3 px-4">
                        <div className="bg-white p-8 md:p-12 rounded-[10px] shadow-[0_20px_50px_rgba(8,112,184,0.1)] border border-gray-50">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                            {" "}
                                            Full Name{" "}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                            {" "}
                                            Email Address{" "}
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="example@mail.com"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                            {" "}
                                            Contact Number{" "}
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        {" "}
                                        Your Message{" "}
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your requirements..."
                                        className="w-full flex-grow px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-gray-50/50 resize-none min-h-[200px]"
                                        required
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2 flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full md:w-auto bg-blue-600 text-white px-12 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg shadow-blue-200 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                                    >
                                        {loading ? (
                                            <>
                                                <i className="fas fa-circle-notch fa-spin mr-3"></i> Processing...{" "}
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <i className="fas fa-paper-plane ml-3 text-sm opacity-70"></i>{" "}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}

            <section className="flex justify-center">
                <div className="relative w-[100%] h-80 md:h-[500px] overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15613.836360335323!2d79.79605165!3d11.9426838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a536179f6a96021%3A0x6928eb4736d20045!2sNo.37%2C%20Kamaraj%20Salai%2C%20Thattanchavady%2C%20Puducherry%2C%20605009!3m2!1d11.942911599999999!2d79.8053169!5e0!3m2!1sen!2sin!4v1767094849515!5m2!1sen!2sin"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Syscorp Technology Location"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
