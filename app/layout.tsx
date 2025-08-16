import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucumillo Experience",
  description: "Personalized Tours in La Serena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          {children}
          {/* Call to Action */}
          {/* <hr /> */}
          <FloatingWhatsAppButton />
          {/* Footer */}
          <Footer />
        </div>

      </body>
    </html>
  );
}
