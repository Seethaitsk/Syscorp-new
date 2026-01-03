import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Head from "./head";
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>;

export const metadata = {
    title: "My Website",
    description: "Best Website Development Company",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Head />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
