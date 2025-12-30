"use client";

export default function AchievementsSection() {
    const stats = [
        {
            number: "15+",
            label: "Team members",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
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
            label: "Projects delivered",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
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
            label: "Awards won",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            ),
        },
    ];

    return (
        <section aria-labelledby="achievements-heading" className="bg-[#F3F8FF] py-24 px-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl flex flex-col items-center gap-16 lg:flex-row">
                {/* Left Content */}
                <div className="space-y-6 text-center lg:w-2/5 lg:text-left">
                    <span className="inline-block rounded-full bg-[#1A5CDD] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-4 ring-[#1A5CDD]/10">
                        Our Achievements
                    </span>

                    {/* Correct heading level */}
                    <h2 id="achievements-heading" className="heading-1 font-extrabold leading-[1.2] text-gray-900">
                        Future-ready solutions that go beyond defense
                    </h2>
                </div>

                {/* Right Stats Grid */}
                <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:w-3/5">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-8 text-center transition-transform duration-300 hover:-translate-y-1 ${
                                index !== stats.length - 1 ? "md:border-r md:border-gray-300" : ""
                            }`}
                        >
                            {/* Icon Box */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#3FB5FD] to-[#1A5CDD] shadow-lg shadow-blue-200">
                                {stat.icon}
                            </div>

                            {/* Stats */}
                            <p className="text-5xl font-black tracking-tight text-gray-900">{stat.number}</p>
                            <p className="mt-3 text-sm font-medium tracking-wide text-gray-800">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
