"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/services", hasDropdown: true },
  { label: "Pricing", href: "/about" },
  { label: "Testimonial", href: "/#testimonial-heading" },
  { label: "News", href: "/blog" },
];

const megaMenuData = [
  {
    title: "WEBSITE SERVICES",
    items: [
      { label: "Custom Website Design", href: "/services/website-design", icon: "Palette" },
      { label: "Responsive UI/UX", href: "/services/ui-ux", icon: "Smartphone" },
      { label: "Business Websites", href: "/services/business-websites", icon: "Briefcase" },
      { label: "Corporate Website", href: "/services/corporate-websites", icon: "Building" },
      { label: "E-Commerce", href: "/services/ecommerce", icon: "ShoppingCart" },
      { label: "Web Applications And Dashboards", href: "/services/dashboards", icon: "Layout" },
      { label: "Hosting And Domain", href: "/services/hosting", icon: "Server" },
      { label: "Website Maintenance and Support", href: "/services/maintenance", icon: "Wrench" },
    ]
  },
  {
    title: "SEO SERVICES",
    items: [
      { label: "SEO Audit", href: "/services/seo-audit", icon: "Code" },
      { label: "Keyword Research", href: "/services/keyword-research", icon: "Search" },
      { label: "On-Page SEO", href: "/services/on-page-seo", icon: "TrendingUp" },
      { label: "Off-Page SEO", href: "/services/off-page-seo", icon: "Network" },
      { label: "Technical SEO", href: "/services/technical-seo", icon: "Terminal" },
      { label: "Local SEO", href: "/services/local-seo", icon: "MapPin" },
      { label: "Link Building", href: "/services/link-building", icon: "Link" },
      { label: "Performance Tracking and Reporting", href: "/services/seo-reporting", icon: "Activity" },
    ]
  },
  {
    title: "DIGITAL MARKETING",
    items: [
      { label: "Brand-Focused Marketing Strategy", href: "/services/marketing-strategy", icon: "Target" },
      { label: "High-Impact Performance Ads", href: "/services/performance-ads", icon: "BarChart" },
      { label: "Premium Social Media Management", href: "/services/social-media", icon: "Hash" },
      { label: "Content & Creative Marketing", href: "/services/creative-marketing", icon: "Edit" },
      { label: "Instagram Ads", href: "/services/instagram-ads", icon: "Instagram" },
      { label: "Facebook Ads", href: "/services/facebook-ads", icon: "Facebook" },
      { label: "SEO & Organic Growth", href: "/services/organic-growth", icon: "LineChart" },
    ]
  }
];

function getMenuIcon(iconName: string) {
  const commonClasses = "w-[18px] h-[18px]";
  switch (iconName) {
    case "Palette":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.63-.77 1.63-1.7 0-.42-.16-.83-.44-1.14-.29-.32-.46-.74-.46-1.19 0-.93.77-1.7 1.7-1.7H19c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z" />
          <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
        </svg>
      );
    case "Smartphone":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "Briefcase":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "Building":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="15" y1="22" x2="15" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" />
        </svg>
      );
    case "ShoppingCart":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case "Layout":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "Server":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "Wrench":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "Code":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "Search":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "TrendingUp":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "Network":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M12 8v8M12 12H5v4M12 12h7v4" />
        </svg>
      );
    case "Terminal":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "MapPin":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "Link":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "Activity":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "Target":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "BarChart":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "Hash":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </svg>
      );
    case "Edit":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "LineChart":
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      );
    default:
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => {
      const banner = document.getElementById("home-banner");
      const threshold = banner ? (banner.offsetHeight - 80) : 600;
      setScrolled(window.scrollY > threshold);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn, { passive: true });
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
    };
  }, []);

  return (
    <>
      <style>{`
        .sky-nav {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 1300px;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .sky-nav.scrolled {
          top: 0;
          width: 100%;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }
        .sky-nav-inner {
          background: #fff;
          border-radius: 50px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }
        .sky-nav.scrolled .sky-nav-inner {
          background: transparent;
          border-radius: 0;
          border: none;
          box-shadow: none;
          padding: 16px 24px;
        }
        .sky-nav-link {
          font-size: 14.5px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          padding: 6px 2px;
          position: relative;
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }
        .sky-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1A5CDD;
          transition: width 0.25s ease;
          border-radius: 2px;
        }
        .sky-nav-link:hover, .sky-nav-link.active {
          color: #1A5CDD;
        }
        .sky-nav-link:hover::after, .sky-nav-link.active::after {
          width: 100%;
        }
        .sky-cta-btn {
          display: none;
          align-items: center;
          gap: 8px;
          background: #1A5CDD;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        @media (min-width: 1024px) {
          .sky-cta-btn {
            display: inline-flex;
          }
        }
        .sky-cta-btn:hover {
          background: #154ebc;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(26,92,221,0.25);
        }
        .sky-dropdown {
          position: absolute;
          top: calc(100% + 16px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.07);
          padding: 12px;
          min-width: 260px;
          z-index: 100;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
        }
        .sky-drop-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .sky-drop-item:hover {
          background: rgba(26,92,221,0.07);
          color: #1A5CDD;
        }
        .sky-drop-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1A5CDD;
          opacity: 0.4;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .sky-drop-item:hover .sky-drop-dot {
          opacity: 1;
        }
        /* Mobile */
        .sky-mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #fff;
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 80px 28px 40px;
          gap: 4px;
          overflow-y: auto;
        }
        .sky-mobile-link {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #0B132A;
          text-decoration: none;
          padding: 14px 16px;
          border-radius: 12px;
          transition: all 0.25s ease;
        }
        .sky-mobile-link:hover, .sky-mobile-link.active {
          background: rgba(26,92,221,0.08);
          color: #1A5CDD;
        }
        .sky-ham {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
        }
        @media (max-width: 1023px) {
          .sky-ham {
            display: flex;
          }
        }
        .sky-ham span {
          display: block;
          width: 22px;
          height: 2px;
          background: #0B132A;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .sky-ham.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .sky-ham.open span:nth-child(2) { opacity: 0; }
        .sky-ham.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
      `}</style>

      <nav className={`sky-nav${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
        <div className="sky-nav-inner lg:relative">
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image
              src="/images/logo/logo.svg"
              alt="Syscorp Technology"
              width={130}
              height={40}
              className="main-logo"
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="lg:static relative"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <span
                    className={`sky-nav-link${pathname.startsWith("/services") ? " active" : ""}`}
                    style={{ cursor: "default" }}
                  >
                    {link.label}
                    <svg
                      style={{
                        width: "14px", height: "14px",
                        transition: "transform 0.3s ease",
                        transform: serviceOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                  </span>

                  {/* Mega Menu using strictly Tailwind utility classes with invisible hover bridge */}
                  <div className={`absolute top-[calc(100%+8px)] left-6 right-6 bg-white dark:bg-[#0b0f19] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08),0_6px_20px_rgba(26,92,221,0.03)] border border-black/5 dark:border-white/5 p-9 z-[1000] grid grid-cols-3 gap-8 box-sizing-border-box transition-all duration-300 ease-out transform before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 ${serviceOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible translate-y-3 pointer-events-none"
                    }`}>
                    {megaMenuData.map((category) => (
                      <div key={category.title} className="flex flex-col">
                        <h4 className="text-[11px] font-extrabold text-[#6B7280] dark:text-gray-400 tracking-wider mb-5 uppercase font-sans">
                          {category.title}
                        </h4>
                        <div className="flex flex-col gap-1">
                          {category.items.map((item) => (
                            <Link key={item.href} href={item.href} className="group flex items-center gap-3.5 p-2.5 rounded-2xl transition-all duration-300 hover:bg-[#1A5CDD]/5 dark:hover:bg-[#3B82F6]/10 no-underline">
                              <div className="w-9 h-9 rounded-xl bg-[#1A5CDD]/5 dark:bg-[#3B82F6]/10 text-[#1A5CDD] dark:text-[#60A5FA] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#1A5CDD] dark:group-hover:bg-[#3B82F6] group-hover:text-white group-hover:scale-105">
                                {getMenuIcon(item.icon)}
                              </div>
                              <span className="text-sm font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200 group-hover:text-[#1A5CDD] dark:group-hover:text-[#60A5FA] font-sans">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {category.title === "DIGITAL MARKETING" && (
                          <div className="mt-6 flex">
                            <Link href="/services" className="inline-flex items-center gap-2 bg-[#1A5CDD] dark:bg-[#3B82F6] text-white font-bold text-[13.5px] px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[#154ebc] dark:hover:bg-[#2563EB] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(26,92,221,0.25)] no-underline">
                              View All Services
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`sky-nav-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA (Sign In) + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="/contact" className="sky-cta-btn">
              Sign In
              <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <button
              className={`sky-ham${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sky-mobile-menu dark:bg-[#0b0f19]">
          {/* Close */}
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute", top: "20px", right: "24px",
              width: "40px", height: "40px", borderRadius: "50%",
              background: "rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", border: "none",
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="#374151" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Image src="/images/logo/logo.svg" alt="Syscorp" width={120} height={36} style={{ height: "34px", width: "auto", objectFit: "contain", marginBottom: "16px" }} />

          {navLinks.map((link) => (
            <React.Fragment key={link.href}>
              <Link
                href={link.href}
                className={`sky-mobile-link dark:text-white dark:hover:text-[#60A5FA]${pathname === link.href ? " active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 flex flex-col gap-3 mt-1 mb-2">
                  {megaMenuData.map((category) => (
                    <div key={category.title}>
                      <div className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 tracking-wider px-3 py-1 uppercase">
                        {category.title}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {category.items.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-[13px] font-semibold text-gray-600 dark:text-gray-400 hover:text-[#1A5CDD] dark:hover:text-[#60A5FA] px-3 py-2 rounded-xl transition-all duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/30 no-underline"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1A5CDD] dark:text-[#60A5FA] px-3 py-2 no-underline"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </React.Fragment>
          ))}

          <a href="/contact" className="sky-cta-btn" style={{ marginTop: "16px", justifyContent: "center" }}>
            Sign In
            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}
