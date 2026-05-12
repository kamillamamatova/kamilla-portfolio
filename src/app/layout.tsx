import type { Metadata } from "next";
import "./globals.css";
import BackgroundScene from "@/components/BackgroundScene";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const sans = Inter({subsets: ["latin"], variable: "--font-sans"});
const serif = Playfair_Display({subsets: ["latin"], variable: "--font-serif"});

export const metadata: Metadata = {
  title: "Kamilla Mamatova - Software Engineering",
  description: "Junior CS student focused on Software Engineering",

  icons: {
    icon: [
      { url: "/favicons/icon4.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/icon4.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicons/icon4.png",
    shortcut: "/favicons/icon4.png",
  },

  openGraph: {
    title: "Kamilla Mamatova",
    description: "Junior CS student focused on Software Engineering",
    url: "https://",
    siteName: "Kamilla Mamatova",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className = {`${sans.variable} ${serif.variable} scroll-smooth"`}>
      <body>
        <BackgroundScene />

{children}

        <Analytics />
      </body>
    </html>
  );
}
