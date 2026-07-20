"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function AiServicePage() {
    useEffect(() => {
        // Add aiservice-specific class to body for scoping if needed
        document.body.classList.add("aiservice-page");
        return () => {
            document.body.classList.remove("aiservice-page");
        };
    }, []);

    return (
        <div className="aiservice-wrapper">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
                rel="stylesheet"
            />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="/aiservice/css/style.css?v=2" />

            {/* HERO */}
            <header id="top" className="hero d-flex align-items-center">
                <video className="hero-video" autoPlay muted loop playsInline>
                    <source src="/aiservice/images/banner4.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

                <div className="container position-relative hero-content text-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <span className="badge-eyebrow">
                                <i className="bi bi-stars me-1"></i> AI market trends, 2026
                            </span>
                            <h1 className="hero-title">
                                AI solutions built for<br /><span className="text-gradient">measurable business value</span>
                            </h1>
                            <p className="hero-sub mx-auto">
                                From intelligent chatbots to enterprise-scale automation — we design, build, and deploy
                                secure, production-ready AI across healthcare, finance, retail, manufacturing, and more.
                            </p>
                            <div className="d-flex gap-3 justify-content-center hero-btns">
                                <a href="#services" className="btn btn-primary-glow btn-lg">
                                    Explore services <i className="bi bi-arrow-right ms-1"></i>
                                </a>
                                <a href="#contact" className="btn btn-outline-light-custom btn-lg">Talk to our AI team</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-cue" aria-hidden="true">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </header>

            {/* DIGITAL EXPERIENCES */}
            <section className="section-digital-experiences" style={{ padding: "100px 0", background: "var(--navy)", overflow: "hidden" }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Left Column: Image Composition */}
                        <div className="col-lg-5">
                            <div className="experience-img-wrap">
                                <img src="/aiservice/images/people_working.png" alt="Team working" className="main-exp-img" />

                                <div className="floating-badge badge-top-right shadow-sm">
                                    <div className="badge-dot"></div>
                                    <span>Active Clients 320+</span>
                                </div>

                                <div className="floating-badge badge-bottom-left shadow">
                                    <i className="bi bi-graph-up-arrow text-primary fs-4 mb-1 d-block"></i>
                                    <div>
                                        <strong className="d-block text-dark mb-1">83.8% Success</strong>
                                        <div className="mini-chart"><span></span><span></span><span></span><span></span></div>
                                    </div>
                                </div>

                                <img src="/aiservice/images/laptop_code.png" alt="Laptop Code" className="overlap-exp-img shadow-lg" />
                            </div>
                        </div>

                        {/* Right Column: Content & 6 Cards */}
                        <div className="col-lg-7">
                            <div className="mb-4">
                                <span className="eyebrow-pill shadow-sm"><i className="bi bi-bar-chart-fill text-primary me-1"></i> MARKET TRENDS 2026</span>
                                <h2 className="display-5 fw-bold mt-3 mb-4" style={{ color: "var(--ink)", letterSpacing: "-1px" }}>
                                    AI has moved from experiment to <span className="text-primary">core infrastructure</span>
                                </h2>
                                <p style={{ color: "var(--muted)", fontSize: "15.5px", lineHeight: "1.7" }}>
                                    Eight shifts defining how organizations deploy AI at scale — sourced from Stanford HAI and DataForest.
                                </p>
                            </div>

                            <div className="experience-cards-grid mt-4">
                                {/* Card 1 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-diagram-3"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">Agentic AI</h4>
                                        <p className="exp-card-desc">AI agents complete full workflows, not just answers — checking CRMs, updating records, closing the loop.</p>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-magic"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">Generative AI</h4>
                                        <p className="exp-card-desc">From marketing copy to software development, generative AI is now a default business capability.</p>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-gear-wide-connected"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">AI-powered automation</h4>
                                        <p className="exp-card-desc">Invoices, onboarding, procurement — repetitive processes are increasingly run end-to-end by AI.</p>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-graph-up-arrow"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">AI + BI</h4>
                                        <p className="exp-card-desc">Dashboards evolve into advisors — organizations ask AI "what should we do next?" not just "what happened?"</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-5 d-flex align-items-center gap-3 flex-wrap">
                                <a href="#contact" className="btn btn-dark rounded-pill px-4 py-2 fw-semibold" style={{ background: "#0a1329", color: "#fff" }}>
                                    More About Us <i className="bi bi-arrow-up-right ms-1"></i>
                                </a>
                                <div className="d-flex align-items-center gap-2 ms-lg-3" style={{ fontSize: "14px", color: "var(--muted)", fontWeight: "500" }}>
                                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(14, 165, 233, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)" }}>
                                        <i className="bi bi-chat-dots-fill" style={{ fontSize: "12px" }}></i>
                                    </div>
                                    Let's make something great work together. <a href="#contact" className="text-dark fw-bold text-decoration-none border-bottom border-dark ms-1">Get Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AGENTIC AI FLOW */}
            <section className="section-flow">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 reveal">
                            <span className="badge-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                                <span className="hud-dot"></span> Example workflow — live
                            </span>
                            <h2>An AI agent handling a real customer request</h2>
                            <p className="text-muted-blue mb-4">Instead of answering questions only, coordinated AI agents now
                                complete
                                the entire process — the next step organizations are taking in enterprise automation.</p>
                            <div className="agent-robot-wrap">
                                <img src="/aiservice/images/Live chatbot.svg" className="img-fluid floating-img"
                                    style={{ maxHeight: "360px", objectFit: "contain", width: "100%", filter: "drop-shadow(0 10px 20px rgba(14,165,233,0.2))" }}
                                    alt="Live Chatbot AI Flow" />
                            </div>
                        </div>
                        <div className="col-lg-6 reveal reveal-delay-1">
                            <div className="flow-diagram" id="flowDiagram">
                                <div className="flow-step" data-step="0">
                                    <i className="bi bi-person"></i> Customer request
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="1">
                                    <i className="bi bi-robot"></i> AI agent
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="2">
                                    <i className="bi bi-database"></i> Checks CRM &amp; retrieves data
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="3">
                                    <i className="bi bi-chat-square-text"></i> Generates response
                                </div>
                                <div className="flow-arrow"><i className="bi bi-arrow-down"></i></div>
                                <div className="flow-step" data-step="4">
                                    <i className="bi bi-check-circle"></i> Updates CRM automatically
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* INDUSTRIES STRIP */}
            <section id="industries" className="section-industries">
                <div className="container">
                    <div className="section-heading reveal">
                        <span className="eyebrow-mono">Who we build for</span>
                        <h2>Target industries</h2>
                    </div>
                    <div className="bento-grid reveal">
                        <div className="bento-card bento-wide">
                            <img src="/aiservice/images/Healthcare.jpeg" className="bento-img" alt="Healthcare" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Health & Food</span>
                                    <h4 className="bento-title">Health Care Program</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-tall">
                            <img src="/aiservice/images/education.png" className="bento-img" alt="Education" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Education & Food</span>
                                    <h4 className="bento-title">Education & Safety Program</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <img src="/aiservice/images/finance.jpeg" className="bento-img" alt="Finance" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Finance & Tech</span>
                                    <h4 className="bento-title">Smart Finance Solutions</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-tall">
                            <img src="/aiservice/images/logistics.png" className="bento-img" alt="Logistics" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Transport & Food</span>
                                    <h4 className="bento-title">Transport & Food Program</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <img src="/aiservice/images/Retail.jpeg" className="bento-img" alt="Retail" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Retail & Commerce</span>
                                    <h4 className="bento-title">Next-Gen Retail</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-wide">
                            <img src="/aiservice/images/manufacturing.jpeg" className="bento-img" alt="Manufacturing" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Industrial AI</span>
                                    <h4 className="bento-title">Smart Manufacturing</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <img src="/aiservice/images/realestate.png" className="bento-img" alt="Real Estate" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Property Tech</span>
                                    <h4 className="bento-title">Real Estate AI</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-wide">
                            <img src="/aiservice/images/it.png" className="bento-img" alt="IT" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Technology & Ops</span>
                                    <h4 className="bento-title">IT Infrastructure Modernization</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card bento-tall">
                            <img src="/aiservice/images/hospitality.png" className="bento-img" alt="Hospitality" />
                            <div className="bento-overlay">
                                <div className="bento-badge"><i className="bi bi-arrow-up-right"></i></div>
                                <div className="bento-text-wrap">
                                    <span className="bento-category">Travel & Leisure</span>
                                    <h4 className="bento-title">Smart Hospitality</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="section-services" style={{ position: 'relative' }}>
                <div className="doodle-bg">
                    <i className="bi bi-robot" style={{ top: '10%', left: '5%', fontSize: '4rem', transform: 'rotate(-15deg)' }}></i>
                    <i className="bi bi-cpu" style={{ top: '8%', left: '30%', fontSize: '3rem', transform: 'rotate(10deg)' }}></i>
                    <i className="bi bi-diagram-3" style={{ top: '25%', left: '15%', fontSize: '3.5rem', transform: 'rotate(-5deg)' }}></i>
                    <i className="bi bi-motherboard" style={{ top: '40%', left: '40%', fontSize: '5rem', transform: 'rotate(0deg)' }}></i>
                    <i className="bi bi-magic" style={{ top: '15%', left: '70%', fontSize: '3.5rem', transform: 'rotate(20deg)' }}></i>
                    <i className="bi bi-bar-chart-steps" style={{ top: '30%', left: '55%', fontSize: '3rem', transform: 'rotate(-10deg)' }}></i>
                    <i className="bi bi-database" style={{ top: '55%', left: '10%', fontSize: '3.5rem', transform: 'rotate(-25deg)' }}></i>
                    <i className="bi bi-hdd-network" style={{ top: '70%', left: '25%', fontSize: '3rem', transform: 'rotate(15deg)' }}></i>
                    <i className="bi bi-bezier2" style={{ top: '50%', left: '80%', fontSize: '4rem', transform: 'rotate(30deg)' }}></i>
                    <i className="bi bi-fingerprint" style={{ top: '85%', left: '15%', fontSize: '3rem', transform: 'rotate(-10deg)' }}></i>
                    <i className="bi bi-code-slash" style={{ top: '75%', left: '45%', fontSize: '3.5rem', transform: 'rotate(5deg)' }}></i>
                    <i className="bi bi-soundwave" style={{ top: '65%', left: '70%', fontSize: '3rem', transform: 'rotate(45deg)' }}></i>
                    <i className="bi bi-lightning-charge" style={{ top: '85%', left: '60%', fontSize: '4rem', transform: 'rotate(-15deg)' }}></i>
                    <i className="bi bi-braces-asterisk" style={{ top: '90%', left: '35%', fontSize: '2rem', transform: 'rotate(20deg)' }}></i>
                    <i className="bi bi-person-bounding-box" style={{ top: '45%', left: '65%', fontSize: '2rem', transform: 'rotate(-25deg)' }}></i>
                    <i className="bi bi-shield-lock" style={{ top: '60%', left: '85%', fontSize: '3.5rem', transform: 'rotate(10deg)' }}></i>
                    <i className="bi bi-translate" style={{ top: '25%', left: '85%', fontSize: '4rem', transform: 'rotate(-5deg)' }}></i>
                    <i className="bi bi-cloud-arrow-up" style={{ top: '5%', left: '55%', fontSize: '3rem', transform: 'rotate(5deg)' }}></i>
                    <i className="bi bi-qr-code-scan" style={{ top: '40%', left: '25%', fontSize: '2.5rem', transform: 'rotate(-15deg)' }}></i>
                    <i className="bi bi-gear-wide-connected" style={{ top: '80%', left: '85%', fontSize: '3rem', transform: 'rotate(25deg)' }}></i>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-heading reveal">
                        <span className="eyebrow-mono">What we build</span>
                        <h2>Eight AI services, one <span className="text-gradient">consistent standard</span></h2>
                        <p className="text-muted-blue">Overview, offerings, benefits, and a real scenario for each — open a service
                            to see the detail.</p>
                    </div>

                    <div className="services-marquee-wrap reveal mb-5">
                        <div className="services-marquee-track">
                            {/* set 1 */}
                            <div className="service-chip" data-target="chatbot">
                                <span className="service-chip-icon"><i className="bi bi-chat-dots"></i></span>
                                <span className="service-chip-label">AI chatbot development</span>
                            </div>
                            <div className="service-chip" data-target="agents">
                                <span className="service-chip-icon"><i className="bi bi-cpu"></i></span>
                                <span className="service-chip-label">Custom AI agents</span>
                            </div>
                            <div className="service-chip" data-target="genai">
                                <span className="service-chip-icon"><i className="bi bi-magic"></i></span>
                                <span className="service-chip-label">Generative AI solutions</span>
                            </div>
                            <div className="service-chip" data-target="automation">
                                <span className="service-chip-icon"><i className="bi bi-gear-wide-connected"></i></span>
                                <span className="service-chip-label">AI workflow automation</span>
                            </div>
                            <div className="service-chip" data-target="analytics">
                                <span className="service-chip-icon"><i className="bi bi-graph-up-arrow"></i></span>
                                <span className="service-chip-label">Data analytics &amp; BI</span>
                            </div>
                            <div className="service-chip" data-target="vision">
                                <span className="service-chip-icon"><i className="bi bi-eye"></i></span>
                                <span className="service-chip-label">Computer vision solutions</span>
                            </div>
                            <div className="service-chip" data-target="nlp">
                                <span className="service-chip-icon"><i className="bi bi-translate"></i></span>
                                <span className="service-chip-label">Natural language processing</span>
                            </div>
                            <div className="service-chip" data-target="consulting">
                                <span className="service-chip-icon"><i className="bi bi-lightbulb"></i></span>
                                <span className="service-chip-label">AI consulting &amp; strategy</span>
                            </div>
                            {/* set 2 */}
                            <div className="service-chip" data-target="chatbot" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-chat-dots"></i></span>
                                <span className="service-chip-label">AI chatbot development</span>
                            </div>
                            <div className="service-chip" data-target="agents" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-cpu"></i></span>
                                <span className="service-chip-label">Custom AI agents</span>
                            </div>
                            <div className="service-chip" data-target="genai" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-magic"></i></span>
                                <span className="service-chip-label">Generative AI solutions</span>
                            </div>
                            <div className="service-chip" data-target="automation" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-gear-wide-connected"></i></span>
                                <span className="service-chip-label">AI workflow automation</span>
                            </div>
                            <div className="service-chip" data-target="analytics" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-graph-up-arrow"></i></span>
                                <span className="service-chip-label">Data analytics &amp; BI</span>
                            </div>
                            <div className="service-chip" data-target="vision" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-eye"></i></span>
                                <span className="service-chip-label">Computer vision solutions</span>
                            </div>
                            <div className="service-chip" data-target="nlp" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-translate"></i></span>
                                <span className="service-chip-label">Natural language processing</span>
                            </div>
                            <div className="service-chip" data-target="consulting" aria-hidden="true">
                                <span className="service-chip-icon"><i className="bi bi-lightbulb"></i></span>
                                <span className="service-chip-label">AI consulting &amp; strategy</span>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="accordion services-accordion" id="servicesAccordion"></div>
                        </div>
                        <div className="col-12 col-lg-5 order-first order-lg-last mb-4 mb-lg-0">
                            <div className="sticky-lg-top" style={{ top: "100px", zIndex: 10 }}>
                                <div className="services-visual shadow-lg mb-4">
                                    <img src="/aiservice/images/Chatbot.jpeg" className="services-visual-img" alt="AI service visualization"
                                        id="serviceVisualImg" />
                                    <div className="hud-frame">
                                        <span className="hud-corner tl"></span>
                                        <span className="hud-corner tr"></span>
                                        <span className="hud-corner bl"></span>
                                        <span className="hud-corner br"></span>
                                        <div className="hud-scanline"></div>
                                    </div>
                                    <div className="hud-chip hud-chip--1">
                                        <span className="hud-dot"></span> Model inference <span className="hud-val"
                                            data-target="94">0</span>%
                                    </div>
                                    <div className="hud-chip hud-chip--2">
                                        <span className="hud-dot"></span> Nodes active <span className="hud-val"
                                            data-target="128">0</span>
                                    </div>
                                </div>

                                {/* NEW LAYOUT BALANCER: Enterprise Standards Card */}
                                <div className="p-4 rounded-4 shadow-lg reveal reveal-delay-1"
                                    style={{ background: "var(--bg-card)", border: "1px solid rgba(14, 165, 233, 0.2)" }}>
                                    <h4 className="mb-4"
                                        style={{ fontSize: "16px", fontWeight: "600", color: "var(--ink)", letterSpacing: "0.5px" }}>
                                        ENTERPRISE AI STANDARDS</h4>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-light)" }}>
                                                <i className="bi bi-shield-check" style={{ fontSize: "20px" }}></i>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "14.5px", fontWeight: "600", color: "var(--ink)" }}>SOC 2 Type
                                                    II Certified</div>
                                                <div style={{ fontSize: "13px", color: "var(--muted)" }}>Bank-grade data security
                                                    &amp; privacy</div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-light)" }}>
                                                <i className="bi bi-lightning-charge" style={{ fontSize: "20px" }}></i>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "14.5px", fontWeight: "600", color: "var(--ink)" }}>99.99%
                                                    Uptime SLA</div>
                                                <div style={{ fontSize: "13px", color: "var(--muted)" }}>Highly available, scalable
                                                    infrastructure</div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.08)", border: "1px solid rgba(56, 189, 248, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-light)" }}>
                                                <i className="bi bi-boxes" style={{ fontSize: "20px" }}></i>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "14.5px", fontWeight: "600", color: "var(--ink)" }}>Seamless
                                                    Integration</div>
                                                <div style={{ fontSize: "13px", color: "var(--muted)" }}>Native APIs for 200+
                                                    enterprise tools</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY USE CASES */}
            <section className="section-usecases">
                <div className="container">
                    <div className="section-heading reveal">
                        <span className="eyebrow-mono">$ ai --use-cases</span>
                        <h2>Real capabilities, applied to <span className="text-gradient">your world</span></h2>
                    </div>

                    <div className="usecase-timeline" id="usecaseTimeline">
                        <div className="timeline-line">
                            <div className="timeline-line-fill" id="timelineFill"></div>
                        </div>

                        <div className="timeline-item timeline-item--left reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Patients spend time waiting to schedule appointments.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-heart-pulse"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>"Book an appointment with a cardiologist tomorrow." "Dr. Kumar is available at 11:00 AM.
                                    Confirm?"</p>
                            </div>
                            <div className="timeline-tag">Healthcare</div>
                        </div>

                        <div className="timeline-item timeline-item--right reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Realtors spend hours matching leads to suitable listings.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-building"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>"Show me 2BHK apartments under ₹85L in Chennai." Matching results returned instantly.</p>
                            </div>
                            <div className="timeline-tag">Real estate</div>
                        </div>

                        <div className="timeline-item timeline-item--left reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Customers struggle to find suitable products.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-cart3"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>A shopper views running shoes — AI recommends matching socks, fitness trackers, and running
                                    apparel.</p>
                            </div>
                            <div className="timeline-tag">E-commerce</div>
                        </div>

                        <div className="timeline-item timeline-item--right reveal">
                            <div className="timeline-side timeline-question">
                                <span className="usecase-row-label">Problem</span>
                                <p>Fraud detection is slow and reactive.</p>
                            </div>
                            <div className="timeline-node"><i className="bi bi-bank"></i></div>
                            <div className="timeline-side timeline-answer">
                                <span className="usecase-row-label usecase-row-label--accent">AI solution</span>
                                <p>A customer usually spends ₹6,000 per transaction. AI flags a sudden ₹1,50,000 international
                                    charge for review.</p>
                            </div>
                            <div className="timeline-tag">Banking &amp; finance</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="section-cta">
                <video className="cta-video" autoPlay muted loop playsInline>
                    <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4"
                        type="video/mp4" />
                </video>
                <div className="cta-canvas-wrap">
                    <canvas id="ctaCanvas"></canvas>
                </div>
                <div className="container position-relative text-center">
                    <div className="cta-glass-box reveal">
                        <div className="cta-glass-content">
                            <span className="eyebrow-mono">AI consulting &amp; strategy</span>
                            <h2>Not sure where to start? <br /><span className="text-gradient">We'll map the roadmap.</span></h2>
                            <p className="text-muted-blue mx-auto" style={{ maxWidth: "560px", fontSize: "16px" }}>
                                Our AI consulting team assesses your operations, identifies the highest-value automation
                                opportunities, and delivers a clear implementation plan — reducing risk and accelerating ROI.
                            </p>
                            <a href="#contact" className="btn btn-primary-glow btn-lg mt-4">
                                Talk to our AI consulting team <i className="bi bi-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chatbot Widget */}
            <div className="chatbot-wrapper">
                <div className="chatbot-window shadow-lg" id="chatbotWindow">
                    <div className="chatbot-header">
                        <div className="d-flex align-items-center gap-2">
                            <div className="chatbot-avatar"><i className="bi bi-robot"></i></div>
                            <div>
                                <h5 className="mb-0 fs-6">AI Solutions Bot</h5>
                                <small className="text-white-50" style={{ fontSize: "11px" }}>Always active</small>
                            </div>
                        </div>
                        <button className="btn-close btn-close-white" id="closeChatbot" aria-label="Close"></button>
                    </div>
                    <div className="chatbot-body" id="chatbotBody">
                        <div className="chat-msg bot-msg">
                            <div className="msg-content">Hello! I'm your AI assistant. How can I help you modernize your business
                                today?</div>
                            <div className="msg-time">Just now</div>
                        </div>
                    </div>
                    <div className="chatbot-footer">
                        <div className="input-group">
                            <input type="text" className="form-control" id="chatInput" placeholder="Type a message..." />
                            <button className="btn btn-primary" id="sendChatBtn"><i className="bi bi-send-fill"></i></button>
                        </div>
                    </div>
                </div>
                <button className="chatbot-toggle btn-primary-glow" id="toggleChatbot" aria-label="Open Chat">
                    <i className="bi bi-chat-dots-fill fs-4"></i>
                </button>
            </div>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="lazyOnload" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
            <Script src="/aiservice/js/script.js" strategy="lazyOnload" />
        </div>
    );
}
