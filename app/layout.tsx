import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://muenee.vercel.app"),

  title: {
    default: "MueNee | วันนี้กินอะไรดี?",
    template: "%s | MueNee",
  },

  description:
    "MueNee เว็บไซต์ช่วยคิดเมนูอาหาร สุ่มเมนูอาหารไทย อาหารอีสาน ก๋วยเตี๋ยว ของหวาน และเครื่องดื่ม พร้อมสูตรอาหารและไอเดียทำอาหารง่าย ๆ สำหรับทุกวัน",

  keywords: [
    "MueNee",
    "วันนี้กินอะไรดี",
    "สุ่มเมนูอาหาร",
    "เมนูอาหาร",
    "อาหารไทย",
    "อาหารอีสาน",
    "ก๋วยเตี๋ยว",
    "ของหวาน",
    "เครื่องดื่ม",
    "สูตรอาหาร",
    "เมนูอาหารไทย",
    "เมนูอาหารอีสาน",
    "สูตรก๋วยเตี๋ยว",
    "ทำอาหาร",
    "ไอเดียทำอาหาร",
  ],

  authors: [
    {
      name: "MueNee",
    },
  ],

  creator: "MueNee",
  applicationName: "MueNee",

  openGraph: {
    title: "MueNee | วันนี้กินอะไรดี?",
    description:
      "สุ่มเมนูอาหารไทย อาหารอีสาน ก๋วยเตี๋ยว ของหวาน และเครื่องดื่ม พร้อมสูตรอาหารและไอเดียทำอาหารง่าย ๆ สำหรับทุกวัน",
    siteName: "MueNee",
    url: "https://muenee.vercel.app",
    locale: "th_TH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MueNee | วันนี้กินอะไรดี?",
    description:
      "สุ่มเมนูอาหารไทย อาหารอีสาน ก๋วยเตี๋ยว ของหวาน และเครื่องดื่ม พร้อมสูตรอาหารและไอเดียทำอาหารง่าย ๆ สำหรับทุกวัน",
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
      <head>
        <meta
          name="google-site-verification"
          content="K3R7qy1-c0LOUuA4FpC6bP9d8x8j3i8gOoNKBOa8FNA"
        />
      </head>

      <body
        className="
          antialiased
          bg-white
          text-gray-900
          dark:bg-gray-950
          dark:text-gray-100
          transition-colors
          duration-300
        "
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