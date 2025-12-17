import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const sans = Inter({subsets: ["latin"], variable: "--font-sans"});
const serif = Playfair_Display({subsets: ["latin"], variable: "--font-serif"});

export const metadata: Metadata = {
  title: "Kamilla Mamatova — Software Engineering & AI",
  description: "Junior CS student focused on Software Engineering and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className = {`${sans.variable} ${serif.variable}`}>
      <body>
        <a
          href = "#main"
          className = "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-canvas focus:px-4 focus:py-2 focus:shadow-soft focus:outline-none focus:ring-2 focus:ring-blush"
        >
          Skip to content
        </a>

        <div className = "min-h-dvh">
          <Nav />
          <main id = "main" className = "mx-auto w-full max-w-5xl px-5 py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
