import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRONWORKS STRENGTH CLUB | Kanpur — Built, Not Given.",
  description:
    "Serious, disciplined barbell strength and conditioning in Civil Lines, Kanpur. IPF-spec platforms, coach-led batches, zero fitness gimmicks.",
  keywords: [
    "Gym Kanpur",
    "Powerlifting Kanpur",
    "Strength Training Kanpur",
    "Civil Lines Gym",
    "Barbell Club",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Archivo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased selection:bg-primary selection:text-bg font-body">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
