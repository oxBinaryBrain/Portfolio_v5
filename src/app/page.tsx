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
import { useIntroSession } from "@/hooks/useIntroSession";

export default function Home() {
  const { skipIntro, navbarDelay, heroDelay } = useIntroSession();

  return (
    <>
      {!skipIntro && (
        <LoaderReveal imageSrc="/images/avatar.png" title="UDAY" />
      )}
      <CornerGlowBackground position="fixed" />
      <motion.div
        initial={skipIntro ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: navbarDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Navbar />
      </motion.div>
      <main className="flex-grow">
        <HeroWorkScrollStack heroDelay={heroDelay} />
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