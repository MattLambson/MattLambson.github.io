import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

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
        className="min-h-screen"
        style={{
          backgroundColor: "#121212",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
