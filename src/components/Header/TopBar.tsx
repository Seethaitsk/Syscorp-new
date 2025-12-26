"use client";

export default function TopBar() {
    return (
        <div className="top-nav-bg text-sm">
            <div className="container mx-auto px-4 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">
                    {/* Left */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="mailto:sales@itsk.in" className="flex items-center gap-2">
                            <i className="fa-solid fa-envelope" />
                            sales@itsk.in
                        </a>

                        <a href="tel:+919344430402" className="flex items-center gap-2">
                            <i className="fa-solid fa-phone" />
                            +91 93444 30402
                        </a>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-blue-600">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#" className="hover:text-sky-500">
                            <i className="fa-brands fa-twitter" />
                        </a>
                        <a href="#" className="hover:text-pink-500">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
