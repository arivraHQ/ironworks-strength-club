import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <Marquee />
    </main>
  );
}
