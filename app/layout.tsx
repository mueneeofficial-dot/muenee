import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MueNee | วันนี้กินอะไรดี?",
    template: "%s | MueNee",
  },

  description:
    "MueNee เว็บไซต์ช่วยคิดเมนูอาหาร สุ่มเมนูอาหารไทย อาหารอีสาน พร้อมสูตรอาหาร วิธีทำ และไอเดียทำกินทุกวัน",

  keywords: [
    "MueNee",
    "วันนี้กินอะไรดี",
    "เมนูอาหาร",
    "สุ่มเมนูอาหาร",
    "อาหารไทย",
    "อาหารอีสาน",
    "สูตรอาหาร",
    "วิธีทำอาหาร",
    "เมนูง่ายๆ",
  ],

  authors: [
    {
      name: "MueNee",
    },
  ],

  creator: "MueNee",

  applicationName: "MueNee",

  metadataBase: new URL("https://example.com"),

  openGraph: {
    title: "MueNee | วันนี้กินอะไรดี?",
    description:
      "ช่วยคิดเมนูอาหาร สุ่มเมนูอาหาร พร้อมสูตรอาหารและวิธีทำแบบง่าย ๆ",
    siteName: "MueNee",
    locale: "th_TH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MueNee | วันนี้กินอะไรดี?",
    description:
      "ช่วยคิดเมนูอาหาร สุ่มเมนูอาหาร พร้อมสูตรอาหารและวิธีทำแบบง่าย ๆ",
  },

  robots: {
    index: true,
    follow: true,
  },

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
    <html lang="th" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-white
          text-gray-900
          dark:bg-gray-950
          dark:text-gray-100
          transition-colors
          duration-300
        `}
      >
        <Providers>
          <Navbar />

          <main className="pt-20">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}