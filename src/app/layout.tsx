import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamilla Mamatova — Software Engineering & AI",
  description: "Junior CS student portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
