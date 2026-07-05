"use client";

import { motion } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CornerGlowBackground } from "@/components/CornerGlowBackground";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroWorkScrollStack } from "@/components/HeroWorkScrollStack";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LoaderReveal } from "@/components/ui/LoaderReveal";

export default function Home() {
  return (
    <>
      <LoaderReveal imageSrc="/images/avatar.png" title="UDAY" />
      <CornerGlowBackground position="fixed" />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 4.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Navbar />
      </motion.div>
      <main className="flex-grow">
        <HeroWorkScrollStack />
        <TestimonialsSection />
        <AboutSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}