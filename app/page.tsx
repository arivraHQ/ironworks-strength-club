import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Transformations from "@/components/Transformations";
import Pricing from "@/components/Pricing";
import Timetable from "@/components/Timetable";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-primary selection:text-bg">
      <Navbar />
      <Hero />
      <Marquee />
      <Programs />
      <Coaches />
      <Transformations />
      <Pricing />
      <Timetable />
      <FAQ />
      <Footer />
    </main>
  );
}
