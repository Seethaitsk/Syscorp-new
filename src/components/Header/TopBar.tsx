"use client";

export default function TopBar() {
    return (
        <div className="top-nav-bg text-sm">
            <div className="container mx-auto px-4 text-white">
                <div className="flex flex-col items-center justify-between gap-2 py-2 md:flex-row">
                    {/* Left */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="mailto:sales@itsk.in" className="flex items-center gap-2">
                            <i className="fa-solid fa-envelope" aria-hidden="true" />
                            <span className="sr-only">Email us:</span>
                            <span>sales@itsk.in</span>
                        </a>

                        <a href="tel:+919344430402" className="flex items-center gap-2">
                            <i className="fa-solid fa-phone" aria-hidden="true" />
                            <span className="sr-only">Call us:</span>
                            <span>+91 93444 30402</span>
                        </a>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            aria-label="Visit our Facebook page"
                            className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                        >
                            <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                        </a>

                        <a
                            href="#"
                            aria-label="Visit our Twitter profile"
                            className="hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                        >
                            <i className="fa-brands fa-twitter" aria-hidden="true" />
                        </a>

                        <a
                            href="#"
                            aria-label="Visit our Instagram profile"
                            className="hover:text-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                        >
                            <i className="fa-brands fa-instagram" aria-hidden="true" />
                        </a>

                        <a
                            href="#"
                            aria-label="Visit our LinkedIn page"
                            className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                        >
                            <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
