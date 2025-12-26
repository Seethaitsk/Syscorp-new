"use client";

import Link from "next/link";
import {useState} from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar-bg relative z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src="images/logo/logo.webp" alt="Logo" className="h-10" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8 font-medium">
                        <li>
                            <Link href="/" className="hover:text-blue-600">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/about-us" className="hover:text-blue-600">
                                Company
                            </Link>
                        </li>

                        {/* Services Dropdown */}
                        <li className="group relative">
                            <span className="cursor-pointer hover:text-blue-600">Services</span>

                            <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[220px]">
                                <li>
                                    <Link href="/enterprise-seo" className="block px-4 py-2 hover:bg-gray-100">
                                        Enterprise SEO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/local-seo" className="block px-4 py-2 hover:bg-gray-100">
                                        Local SEO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ecommerce-seo" className="block px-4 py-2 hover:bg-gray-100">
                                        E-commerce SEO
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/contact" className="hover:text-blue-600">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        {/* <Link href="#" className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                            Request a Quote
                        </Link> */}

                        <Button href="#">Request a Quote</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setOpen(true)} className="lg:hidden text-3xl" aria-label="Open menu">
                        ☰
                    </button>
                </div>
            </div>

            {/* ================= OFF-CANVAS MOBILE MENU ================= */}

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* Offcanvas Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Offcanvas Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <img src="images/logo/logo.webp" alt="Logo" className="h-8" />
                    <button onClick={() => setOpen(false)} className="text-2xl" aria-label="Close menu">
                        ✕
                    </button>
                </div>

                {/* Offcanvas Menu Items */}
                <ul className="flex flex-col gap-4 p-4 font-medium">
                    <li>
                        <Link href="/" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/about-us" onClick={() => setOpen(false)}>
                            Company
                        </Link>
                    </li>

                    <li>
                        <Link href="/enterprise-seo" onClick={() => setOpen(false)}>
                            Enterprise SEO
                        </Link>
                    </li>

                    <li>
                        <Link href="/local-seo" onClick={() => setOpen(false)}>
                            Local SEO
                        </Link>
                    </li>

                    <li>
                        <Link href="/ecommerce-seo" onClick={() => setOpen(false)}>
                            E-commerce SEO
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" onClick={() => setOpen(false)}>
                            Contact
                        </Link>
                    </li>

                    {/* Mobile CTA */}
                    <Button href="#">Request a Quote</Button>
                </ul>
            </div>
        </nav>
    );
}
