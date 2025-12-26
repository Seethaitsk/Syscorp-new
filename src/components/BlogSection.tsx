// components/BlogSection.tsx
"use client";

import React from "react";
import {InfoCard} from "./ui/Infocard";
import Button from "./ui/Button";

const blogPosts = [
    {
        date: "15 December, 2025",
        admin: "admin",
        comments: "05",
        title: "We Focus On The Solutions Not On The Problems",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    },
    {
        date: "20 December, 2025",
        admin: "admin",
        comments: "05",
        title: "How To Create Viral Content That Drives Sales",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
        date: "25 December, 2025",
        admin: "admin",
        comments: "05",
        title: "How AI Is Changing The Future Of Online Shopping",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    },
];

export default function BlogSection() {
    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="space-y-6">
                        {/* <span className="inline-block bg-[#3F82FB] text-white text-[11px] font-bold px-5 py-2 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10">
                            Blog & Events
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
                            Our Blog
                        </span>
                        <h2 className="heading-1 font-extrabold text-[#0D1C16] leading-tight max-w-2xl">
                            Read All Our Consulting News & Blogs
                        </h2>
                    </div>
                    <Button href="#" className="service-sect-btn">
                        Contact Us
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <InfoCard
                            key={index}
                            image={post.image}
                            badge={post.date}
                            title={post.title}
                            admin={post.admin}
                            comments={post.comments}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
