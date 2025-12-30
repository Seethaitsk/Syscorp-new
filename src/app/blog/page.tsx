"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import {useState} from "react";

// Mock Blog Data
const ALL_POSTS = [
    {
        id: 1,
        title: "Modern Next.js Guide",
        category: "Technology",
        date: "Dec 29, 2025",
        slug: "nextjs-guide",
        excerpt:
            "Explore the latest techniques in web performance, from server-side rendering to advanced image compression...",
    },
    {
        id: 2,
        title: "UI Design Trends",
        category: "Web Design",
        date: "Dec 28, 2025",
        slug: "ui-trends",
        excerpt: "Master the art of modern interfaces with these upcoming design trends for the new year...",
    },
    {
        id: 3,
        title: "SEO Strategies",
        category: "Marketing",
        date: "Dec 27, 2025",
        slug: "seo-tips",
        excerpt: "Learn how to rank higher on search engines using modern AI-driven optimization techniques...",
    },
    {
        id: 4,
        title: "Scaling Your Startup",
        category: "Business",
        date: "Dec 26, 2025",
        slug: "scaling-startup",
        excerpt: "Moving from a small team to a global enterprise requires specific structural changes...",
    },
    {
        id: 5,
        title: "Mastering Tailwind",
        category: "Web Design",
        date: "Dec 25, 2025",
        slug: "mastering-tailwind",
        excerpt: "Utility-first CSS is the future of rapid styling. Learn how to stay organized and fast...",
    },
    {
        id: 6,
        title: "Future of Business AI",
        category: "Business",
        date: "Dec 26, 2025",
        slug: "future-business-ai",
        excerpt: "AI is no longer an option; it's a necessity for modern business efficiency...",
    },
];

export default function BlogPage() {
    const [activeCat, setActiveCat] = useState("All Posts");
    const categories = ["All Posts", "Technology", "Web Design", "Marketing", "Business"];

    const filteredPosts = ALL_POSTS.filter((post) => (activeCat === "All Posts" ? true : post.category === activeCat));

    return (
        <main className="bg-white min-h-screen">
            {/* Header Banner */}
            <section className="bg-[#011146] py-20 relative overflow-hidden" aria-label="Page header">
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48"
                    aria-hidden="true"
                ></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Blog</h1>
                    <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-[2rem] border border-white/20">
                        <Breadcrumbs />
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            {/* bg-gray-50/50 */}
            <section className="py-16 lg:py-24 bg-[#f3f8ff]">
                <div className="container mx-auto px-4">
                    {/* Category Filter */}
                    <div
                        className="flex flex-wrap justify-center gap-4 mb-16"
                        role="tablist"
                        aria-label="Blog categories"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                    activeCat === cat
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                                role="tab"
                                aria-selected={activeCat === cat}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div aria-live="polite" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-[10px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
                                aria-labelledby={`post-title-${post.id}`}
                            >
                                {/* Image */}
                                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                                    <img
                                        src={`https://picsum.photos/seed/${post.id}/600/400`}
                                        alt={`Featured image for ${post.title}`}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-widest shadow-sm">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <header className="mb-4">
                                        <div className="flex items-center text-gray-800 text-xs space-x-4 mb-2">
                                            <span className="flex items-center">
                                                <i className="far fa-calendar-alt mr-2"></i> {post.date}
                                            </span>
                                            <span className="flex items-center">
                                                <i className="far fa-user mr-2"></i> Admin
                                            </span>
                                        </div>
                                        <h3
                                            id={`post-title-${post.id}`}
                                            className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors"
                                        >
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>
                                    </header>

                                    <p className="text-gray-800 text-sm line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>

                                    <Button
                                        href="/blog-details"
                                        className="mx-auto w-50"
                                        aria-label={`Read full article: ${post.title}`}
                                    >
                                        Read Article
                                        <svg
                                            className="ml-2 h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M8 4l8 8-8 8" />
                                        </svg>
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <nav aria-label="Pagination" className="mt-20 flex justify-center space-x-2">
                        <button
                            className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
                            aria-label="Previous page"
                        >
                            <i className="fas fa-chevron-left text-xs"></i>
                        </button>
                        <button
                            className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-100"
                            aria-current="page"
                        >
                            1
                        </button>
                        <button
                            className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all font-bold"
                            aria-label="Page 2"
                        >
                            2
                        </button>
                        <button
                            className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
                            aria-label="Next page"
                        >
                            <i className="fas fa-chevron-right text-xs"></i>
                        </button>
                    </nav>
                </div>
            </section>
        </main>
    );
}
