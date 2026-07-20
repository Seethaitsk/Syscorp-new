"use client";
import React from "react";

const plans = [
  {
    name: "Basic Plan",
    price: "$39",
    iconBg: "#011146",
    isPopular: false,
    icon: (
      <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    features: [
      "Ideal for startups & scaleups",
      "Modern Development Stack",
      "Continuous Support & QA",
      "Full Source Code & Setup",
    ],
  },
  {
    name: "Standard Plan",
    price: "$49",
    iconBg: "#1A5CDD",
    isPopular: true,
    icon: (
      <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    features: [
      "Ideal for startups & scaleups",
      "Modern Development Stack",
      "Continuous Support & QA",
      "Full Source Code & Setup",
    ],
  },
  {
    name: "Premium Plan",
    price: "$59",
    iconBg: "#011146",
    isPopular: false,
    icon: (
      <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
    features: [
      "Ideal for startups & scaleups",
      "Modern Development Stack",
      "Continuous Support & QA",
      "Full Source Code & Setup",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-[#F0F8FF] dark:bg-[#080f25] py-12 md:py-20 lg:py-[100px] relative overflow-hidden transition-colors duration-500"
    >
      <style>{`
        .sky-pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .sky-pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Card Wrapper styling */
        .sky-pricing-card {
          background: #F8FAFC;
          border-radius: 28px;
          border: 1px solid rgba(26, 92, 221, 0.08);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s ease;
          position: relative;
        }
        .sky-pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(26, 92, 221, 0.06);
          border-color: rgba(26, 92, 221, 0.2);
        }

        .sky-pricing-card-popular {
          background: linear-gradient(135deg, #F0F4FF 0%, #E0EBFF 100%);
          border: 2px solid #1A5CDD;
          border-radius: 28px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s ease;
          position: relative;
        }
        .sky-pricing-card-popular::before {
          content: "MOST POPULAR";
          position: absolute;
          top: -12px;
          right: 24px;
          background: #1A5CDD;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 50px;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 10px rgba(26, 92, 221, 0.2);
        }
        .sky-pricing-card-popular:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(26, 92, 221, 0.15);
        }

        /* Top White Panel */
        .sky-pricing-top-panel {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 20px rgba(26, 92, 221, 0.02);
          display: flex;
          flex-direction: column;
        }

        .sky-pricing-icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        /* Checkmarks */
        .sky-check-circle {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1A5CDD;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 11px;
          font-weight: 900;
          flex-shrink: 0;
        }

        /* CTA Button */
        .sky-pricing-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1A5CDD;
          color: #fff;
          font-weight: 700;
          font-size: 14.5px;
          padding: 14px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
          margin-top: 12px;
          border: none;
          cursor: pointer;
        }
        .sky-pricing-cta:hover {
          background: #154ebc;
          box-shadow: 0 8px 20px rgba(26, 92, 221, 0.2);
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Centered Heading and Badge */}
        <div className="sky-about-badge-anim flex flex-col gap-[18px] items-center text-center mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1A5CDD]/10 border border-[#1A5CDD]/20 dark:bg-blue-500/10 dark:border-blue-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-[#1A5CDD] dark:text-blue-400 w-fit uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A5CDD] dark:bg-blue-400 inline-block animate-pulse" />
            Our Pricing Plan
          </span>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight m-0 font-sans tracking-tight">
            Transparent Pricing, Exceptional <span className="text-[#1A5CDD] dark:text-[#60A5FA]">Value Guaranteed</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="sky-pricing-grid">
          {plans.map((p, idx) => (
            <div key={idx} className={`${p.isPopular ? "sky-pricing-card-popular" : "sky-pricing-card"} gsap-pricing-card-item`}>

              {/* White Top Block */}
              <div className="sky-pricing-top-panel">
                <div className="sky-pricing-icon-btn" style={{ background: p.iconBg }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#011146", margin: "0 0 12px" }}>
                  {p.name}
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "38px", fontWeight: 900, color: "#011146", lineHeight: 1 }}>{p.price}</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748B" }}>/Per Month</span>
                </div>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.6, margin: 0 }}>
                  We offer transparent &amp; flexible pricing plan to meet the need of every client.
                </p>
              </div>

              {/* Grey Bottom Block Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 8px 12px" }}>
                <p style={{ fontSize: "14px", fontWeight: 800, color: "#011146", margin: 0 }}>What Included Feature:</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
                  {p.features.map((f, fi) => (
                    <li key={fi} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "#4B5563" }}>
                      <span className="sky-check-circle">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="sky-pricing-cta">Get Started</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
