"use client";
import React, { useState } from "react";

const stats = [
  { value: "500+", label: "Projects Delivered", desc: "Enterprise grade solutions" },
  { value: "99.9%", label: "Uptime SLA", desc: "Reliable cloud infrastructure" },
  { value: "50M+", label: "Active Users", desc: "Engaging digital products" },
  { value: "15+", label: "Years Experience", desc: "Expert engineers & designers" }
];

export default function AchievementsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      aria-labelledby="video-heading"
      className="relative min-h-[640px] overflow-hidden flex flex-col justify-between py-16 md:py-24 bg-slate-950"
    >
      <style>{`
        .sky-vid-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
        }
        .sky-vid-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(1, 9, 37, 0.35) 0%, #010925 100%);
          z-index: 2;
        }
        .sky-play-badge {
          width: 130px; height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
          cursor: pointer;
        }
        @keyframes skySpinText {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .sky-play-text-ring {
          animation: skySpinText 12s linear infinite;
        }
        .sky-play-center {
          position: absolute;
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #1A5CDD;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(26,92,221,0.45);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          color: #ffffff;
        }
        .sky-play-center::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(26, 92, 221, 0.4);
          animation: skyPlayPulse 2s infinite;
        }
        @keyframes skyPlayPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .sky-play-badge:hover .sky-play-center {
          transform: scale(1.1);
          background: #ffffff;
          color: #1A5CDD;
          box-shadow: 0 12px 32px rgba(255,255,255,0.4);
        }
        .sky-glass-stat {
          background: rgba(1, 17, 70, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(26, 92, 221, 0.15);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-glass-stat:hover {
          background: rgba(1, 17, 70, 0.65);
          border-color: rgba(96, 165, 250, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(26, 92, 221, 0.2);
        }
      `}</style>

      {/* Background image simulating video screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1800&h=800"
        alt="Syscorp video background"
        className="sky-vid-bg"
      />
      <div className="sky-vid-overlay" />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:px-14 flex-1 flex flex-col justify-between gap-12">
        {/* TOP ROW: Title & Play Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-4">
          <div className="sky-about-badge-anim flex flex-col gap-[18px] max-w-xl">
            <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
              Watch Video
            </span>
            <h2 id="video-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight m-0 font-sans tracking-tight">
              Watch How We Build <span className="text-[#60A5FA] dark:text-[#60A5FA]">Future-Ready Software</span>
            </h2>
          </div>

          {/* Rotating Play Badge */}
          <div className="sky-play-badge" onClick={() => setIsPlaying(true)}>
            {/* SVG text ring */}
            <svg className="sky-play-text-ring" width="130" height="130" viewBox="0 0 100 100">
              <defs>
                <path id="play-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text style={{ fontSize: "9px", fontWeight: 700, fill: "#fff", letterSpacing: "3.5px" }}>
                <textPath href="#play-circle">WATCH VIDEO * WATCH VIDEO *</textPath>
              </text>
            </svg>

            {/* Central play button icon */}
            <div className="sky-play-center">
              <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Glassmorphic Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-4">
          {stats.map((stat, i) => (
            <div key={i} className="sky-glass-stat p-6 rounded-2xl">
              <span className="text-3xl md:text-4xl font-extrabold text-[#60A5FA] tracking-tight block mb-1 font-sans">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-white block mb-1 font-sans">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 block font-sans">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300">
          <div className="relative w-full max-w-4xl aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Syscorp Corporate Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
