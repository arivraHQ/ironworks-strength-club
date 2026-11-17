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
      <body className="bg-bg text-text antialiased selection:bg-primary selection:text-bg font-body">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
