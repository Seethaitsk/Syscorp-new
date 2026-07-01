"use client";
import React from "react";

const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Quality Craftsmanship - Superior software with attention to detail",
    desc: "We prioritize quality in every project, ensuring that every feature is executed with precision and care. Our skilled professionals use the best technologies.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: "Scalability - Durable and performance-conscious architecture",
    desc: "We build scalable systems in every project, ensuring that every detail is architected for growth and long-term performance. Our professionals use modern stacks.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 0c-1.8 0-3 3-3 9s1.2 9 3 9 3-3 3-9-1.2-9-3-9zm-9 9h18" />
      </svg>
    ),
    title: "Modern Techniques - Innovative software and digital design methods",
    desc: "We prioritize modern methodologies in every project, ensuring that every solution uses current best practices and design patterns. Our team stays ahead.",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
];

export default function ServiceCompany() {
  return (
    <section
      aria-labelledby="commitment-heading"
      className="bg-grid-pattern sky-commitment-section bg-white dark:bg-slate-950 py-[100px] overflow-hidden relative transition-colors duration-500"
    >
      {/* Background radial glow */}
      <div className="sky-glow-orb" />

      <style>{`

        .sky-glow-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(26, 92, 221, 0.05) 0%, transparent 70%);
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
          transition: background 0.4s ease;
        }
        .dark .sky-glow-orb {
          background: radial-gradient(circle, rgba(26, 92, 221, 0.12) 0%, transparent 70%);
        }

        .sky-commitment-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 1024px) {
          .sky-commitment-grid {
            grid-template-columns: 5fr 6fr;
            gap: 72px;
          }
        }

        /* Badge Tag */
        .sky-commitment-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(26, 92, 221, 0.05);
          border: 1px solid rgba(26, 92, 221, 0.15);
          border-radius: 50px;
          padding: 7px 18px;
          font-size: 12px;
          font-weight: 700;
          color: #1A5CDD;
          box-shadow: 0 2px 8px rgba(26, 92, 221, 0.04);
          width: fit-content;
          transition: all 0.3s ease;
        }
        .dark .sky-commitment-tag {
          background: rgba(26, 92, 221, 0.15);
          border-color: rgba(26, 92, 221, 0.3);
          color: #60A5FA;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .sky-commitment-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1A5CDD;
          display: inline-block;
          animation: skyDotPulse 2s infinite;
        }
        .dark .sky-commitment-dot {
          background: #60A5FA;
        }
        @keyframes skyDotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        /* Heading */
        .sky-commitment-title {
          font-size: clamp(2rem, 3.6vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #011146;
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0;
          transition: color 0.3s ease;
        }
        .dark .sky-commitment-title {
          color: #FFFFFF;
        }

        .sky-commitment-italic {
          font-style: italic;
          color: #64748B;
          font-weight: 400;
          transition: color 0.3s ease;
        }
        .dark .sky-commitment-italic {
          color: #94A3B8;
        }

        /* Desc */
        .sky-commitment-desc {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.78;
          margin: 0;
          transition: color 0.3s ease;
        }
        .dark .sky-commitment-desc {
          color: #9CA3AF;
        }

        /* Phone box styling */
        .sky-phone-box {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 8px 20px 8px 12px;
          border-radius: 50px;
          background: rgba(26, 92, 221, 0.03);
          border: 1.5px solid rgba(26, 92, 221, 0.06);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark .sky-phone-box {
          background: rgba(26, 92, 221, 0.08);
          border-color: rgba(26, 92, 221, 0.15);
        }
        .sky-phone-box:hover {
          background: rgba(26, 92, 221, 0.06);
          border-color: rgba(26, 92, 221, 0.18);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 92, 221, 0.04);
        }
        .dark .sky-phone-box:hover {
          background: rgba(26, 92, 221, 0.14);
          border-color: rgba(26, 92, 221, 0.3);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .sky-phone-ring-sm {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #1A5CDD;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          animation: skyPhonePing 2.5s ease infinite;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .dark .sky-phone-ring-sm {
          background: #3B82F6;
        }
        @keyframes skyPhonePing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(26, 92, 221, 0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(26, 92, 221, 0); }
        }

        .sky-phone-label {
          font-size: 10px;
          font-weight: 700;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0 0 2px 0;
        }
        .sky-phone-number {
          font-size: 15px;
          font-weight: 850;
          color: #011146;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .dark .sky-phone-number {
          color: #FFFFFF;
        }
        .sky-phone-number:hover {
          color: #1A5CDD;
        }
        .dark .sky-phone-number:hover {
          color: #60A5FA;
        }

        /* CTA Button */
        .sky-contact-us-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1A5CDD;
          color: #fff;
          font-weight: 700;
          font-size: 14.5px;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(26, 92, 221, 0.18);
        }
        .sky-contact-us-btn:hover {
          background: #154ebc;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(26, 92, 221, 0.32);
        }
        .dark .sky-contact-us-btn {
          background: #2563EB;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.25);
        }
        .dark .sky-contact-us-btn:hover {
          background: #1D4ED8;
          box-shadow: 0 10px 28px rgba(29, 78, 216, 0.4);
        }

        .sky-contact-arrow-w {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sky-contact-us-btn:hover .sky-contact-arrow-w {
          transform: translate(2px, -2px);
        }

        /* Avatar Stack */
        .sky-avatar-stack {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }
        .sky-avatar-img {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid #FFFFFF;
          object-fit: cover;
          margin-left: -10px;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.2s ease;
          position: relative;
        }
        .sky-avatar-img:first-child {
          margin-left: 0;
        }
        .dark .sky-avatar-img {
          border-color: #010925;
        }
        .sky-avatar-img:hover {
          transform: translateY(-4px) scale(1.08);
          z-index: 10;
        }

        .sky-avatar-plus {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1A5CDD 0%, #154ebc 100%);
          border: 2px solid #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: #fff;
          margin-left: -10px;
          box-shadow: 0 4px 10px rgba(26, 92, 221, 0.15);
          transition: transform 0.2s ease;
          cursor: default;
        }
        .dark .sky-avatar-plus {
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
          border-color: #010925;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
        }
        .sky-avatar-plus:hover {
          transform: translateY(-4px) scale(1.08);
        }

        .sky-quote-text {
          font-size: 14.5px;
          font-weight: 600;
          color: #4B5563;
          line-height: 1.65;
          max-width: 420px;
          border-left: 3px solid #1A5CDD;
          padding-left: 16px;
          margin: 0;
          transition: border-color 0.3s ease, color 0.3s ease;
        }
        .dark .sky-quote-text {
          color: #9CA3AF;
          border-left-color: #3B82F6;
        }

        /* Feature Rows (Right Column) */
        .sky-feat-row {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 26px 30px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          border: 1px solid rgba(26, 92, 221, 0.08);
          box-shadow: 0 8px 30px rgba(26, 92, 221, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .dark .sky-feat-row {
          background: rgba(1, 17, 70, 0.3);
          border-color: rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .sky-feat-row:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(26, 92, 221, 0.08);
          border-color: rgba(26, 92, 221, 0.22);
          background: rgba(255, 255, 255, 0.9);
        }
        .dark .sky-feat-row:hover {
          background: rgba(1, 17, 70, 0.55);
          border-color: rgba(26, 92, 221, 0.4);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
        }

        .sky-feat-row-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(26, 92, 221, 0.06);
          border: 1.5px solid rgba(26, 92, 221, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A5CDD;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark .sky-feat-row-icon {
          background: rgba(26, 92, 221, 0.12);
          border-color: rgba(26, 92, 221, 0.25);
          color: #60A5FA;
        }
        .sky-feat-row:hover .sky-feat-row-icon {
          background: #1A5CDD;
          border-color: #1A5CDD;
          color: #FFFFFF;
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 8px 20px rgba(26, 92, 221, 0.25);
        }
        .dark .sky-feat-row:hover .sky-feat-row-icon {
          background: #2563EB;
          border-color: #2563EB;
          color: #FFFFFF;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
        }

        .sky-feat-title {
          font-size: 16px;
          font-weight: 800;
          color: #011146;
          margin: 0 0 6px 0;
          line-height: 1.35;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: color 0.3s ease;
        }
        .dark .sky-feat-title {
          color: #FFFFFF;
        }

        .sky-feat-desc {
          font-size: 13.5px;
          color: #4B5563;
          line-height: 1.65;
          margin: 0;
          transition: color 0.3s ease;
        }
        .dark .sky-feat-desc {
          color: #9CA3AF;
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div className="sky-commitment-grid">

          {/* LEFT */}
          <div className="gsap-company-left-col" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div className="sky-about-badge-anim flex flex-col gap-[18px]">
              <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
                Our Commitment
              </span>
              <h2 id="commitment-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
                Dedicated to Honest &amp; <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Reliable Software Delivery</span>
              </h2>
            </div>

            {/* Desc */}
            <p className="sky-commitment-desc">
              We are committed to delivering software services built on honesty, reliability, and transparency — from planning to completion, we follow clear processes that keep you informed at every step.
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              <a href="/contact" className="sky-contact-us-btn">
                Contact Us
                <span className="sky-contact-arrow-w">
                  <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>

              <div className="sky-phone-box">
                <span className="sky-phone-ring-sm">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.242 1.242 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <div>
                  <p className="sky-phone-label">Call Us Now!</p>
                  <a href="tel:+918939540148" className="sky-phone-number">
                    +91 89395 40148
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(26, 92, 221, 0.08)" }} />

            {/* Avatar stack + quote */}
            <div>
              <div className="sky-avatar-stack">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Customer Avatar ${i + 1}`}
                    className="sky-avatar-img"
                  />
                ))}
                <div className="sky-avatar-plus">+24</div>
              </div>
              <p className="sky-quote-text">
                &ldquo;Creating modern software solutions and digital products — precision development and trusted technology expertise.&rdquo;
              </p>
            </div>
          </div>

          {/* RIGHT: Feature rows */}
          <div className="gsap-company-right-col" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {features.map((f, i) => (
              <div key={i} className="sky-feat-row">
                <div className="sky-feat-row-icon">{f.icon}</div>
                <div>
                  <h3 className="sky-feat-title">
                    {f.title}
                  </h3>
                  <p className="sky-feat-desc">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
