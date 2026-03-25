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
  metadataBase: new URL("https://mattlambson.github.io"),
  title: "Matt Lambson | Technical Consultant",
  description: "Head of Making it Make Sense.",
  openGraph: {
    title: "Matt Lambson | Technical Consultant",
    description: "Head of Making it Make Sense.",
    url: "https://mattlambson.github.io",
    siteName: "Matt Lambson | Technical Consultant",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Lambson | Technical Consultant",
    description: "Head of Making it Make Sense.",
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
