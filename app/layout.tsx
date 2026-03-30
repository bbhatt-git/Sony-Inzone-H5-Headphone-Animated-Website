import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sony INZONE H5 | Pro Wireless Gaming Headset",
  description: "Victory, amplified. Experience 360 Spatial Sound for gaming with incredible comfort and 28 hours of battery life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar antialiased">
      <body className={`${inter.variable} font-sans bg-black text-white/90 selection:bg-primaryAccent selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
