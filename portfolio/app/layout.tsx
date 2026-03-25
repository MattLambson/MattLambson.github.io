import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matt Lambson | Technical Consultant",
  description:
    "Head of Making it Make Sense.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundColor: "#121212",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col w-full min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
