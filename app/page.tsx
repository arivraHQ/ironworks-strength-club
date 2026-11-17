import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Transformations from "@/components/Transformations";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <Marquee />
      <Programs />
      <Coaches />
      <Transformations />
      <Pricing />
    </main>
  );
}
