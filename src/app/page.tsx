"use client";

import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Encryption from "@/components/Encryption";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] overflow-x-hidden">
      {/* Star Background - Fixed behind everything */}
      <StarsCanvas />

      {/* All page content layered above stars */}
      <div className="relative z-[10]">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Encryption />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
