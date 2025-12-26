"use client";

export default function AchievementsSection() {
    const stats = [
        {
            number: "15+",
            label: "Team member",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 text-white"
                >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
        },
        {
            number: "100+",
            label: "Projects Delivered",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 text-white"
                >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            ),
        },
        {
            number: "7M",
            label: "Winning award",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 text-white"
                >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-[#F3F8FF] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content Side */}
                <div className="lg:w-2/5 space-y-6 text-center lg:text-left">
                    <div>
                        {/* The Badge with the "ring" border you requested */}
                        {/* <span className="inline-block bg-[#3F82FB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest ring-4 ring-[#1A5CDD]/10 ring-offset-0 transition-all hover:ring-[#1A5CDD]/20">
                            Our Achievements
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
                            Our Achievements
                        </span>
                    </div>

                    <h2 className="heading-1 font-extrabold text-[#1a2b3c] leading-[1.2]">
                        Future ready that goes beyond defense
                    </h2>
                </div>

                {/* Right Stats Grid */}
                <div className="lg:w-3/5 w-full grid grid-cols-1 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-8 transition-transform hover:-translate-y-1 duration-300 ${
                                // Vertical dividers that disappear on mobile
                                index !== stats.length - 1 ? "md:border-r border-gray-200" : ""
                            }`}
                        >
                            {/* Blue Icon Box with Gradient */}
                            <div className="w-16 h-16 bg-gradient-to-br from-[#3FB5FD] to-[#1A5CDD] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 mb-6">
                                {stat.icon}
                            </div>

                            {/* Stat Numbers */}
                            <div className="text-center">
                                <span className="text-5xl font-black text-gray-900 tracking-tight">{stat.number}</span>
                                <p className="text-gray-500 mt-3 tracking-wide achievementname">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
