"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CornerGlowBackground } from "@/components/CornerGlowBackground";
import { Navbar } from "@/components/Navbar";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Footer } from "@/components/Footer";

export function ProjectsPageContent() {
  return (
    <>
      <CornerGlowBackground position="fixed" />
      <Navbar />
      <main className="relative flex-grow py-20 md:py-24">
        <div className="w-content-width mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/#work"
              className="secondary-button mb-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-secondary-cta-text transition-all duration-300"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
            <ProjectsGallery />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}