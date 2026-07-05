"use client";

import Image from "next/image";
import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonStagger } from "@/components/ui/ButtonStagger";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SelectorButton } from "@/components/ui/SelectorButton";
import { TextAnimation } from "@/components/ui/TextAnimation";
import { Transition } from "@/components/ui/Transition";
import { faqCategories } from "@/types/content";

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(
    faqCategories[0]?.name ?? "General",
  );
  const currentItems =
    faqCategories.find((c) => c.name === activeCategory)?.items ?? [];

  return (
    <section aria-label="FAQ section" className="py-20">
      <div className="w-content-width mx-auto">
        <div className="card flex flex-col gap-6 rounded p-6 md:gap-10 md:p-10">
          <div className="flex flex-col items-center gap-2">
            <div className="card mb-1 w-fit rounded px-3 py-1 text-sm">
              <p>FAQ</p>
            </div>
            <TextAnimation
              text="Frequently Asked Questions"
              variant="fade"
              gradientText
              tag="h2"
              className="text-center text-6xl leading-[1.15] font-semibold text-balance md:max-w-8/10 2xl:text-7xl"
            />
            <TextAnimation
              text="Everything you need to know before we start working together."
              variant="fade"
              tag="p"
              className="text-center text-lg leading-snug text-balance md:max-w-7/10 md:text-xl"
            />
            <SelectorButton
              options={faqCategories.map((c) => ({
                value: c.name,
                label: c.name,
              }))}
              activeValue={activeCategory}
              onValueChange={setActiveCategory}
              className="mt-2 md:mt-3"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <Transition key={activeCategory} whileInView={false} className="">
              <Accordion
                items={currentItems.map((item) => ({
                  title: item.question,
                  content: item.answer,
                }))}
              />
            </Transition>
          </ScrollReveal>

          <div className="h-px w-full bg-foreground/5" />
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar.png"
                alt="UDAY"
                width={48}
                height={48}
                className="size-10 rounded-full object-cover md:size-11 2xl:size-12"
              />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-base leading-snug font-semibold text-foreground">
                  More questions? Reach out anytime.
                </span>
                <span className="truncate text-base leading-snug text-foreground/75">
                  hello@uday.dev
                </span>
              </div>
            </div>
            <ButtonStagger text="Book a call" href="#contact" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}