import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "Best Software Company in Chennai | Syscorp",
    description:
        "Choose the best software company in Chennai – Syscorp delivers custom software development, web solutions, and digital transformation services for businesses of all sizes.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                {/* Smooth inertia mouse-wheel scroll — zero dependencies */}
                <SmoothScrollProvider />
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
