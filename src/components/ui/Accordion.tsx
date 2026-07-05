"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cls } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={cls("flex flex-col gap-3 xl:gap-3.5 2xl:gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={item.title}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          className="card cursor-pointer rounded p-3 select-none xl:p-3.5 2xl:p-4"
        >
          <div className="flex items-center justify-between gap-3 xl:gap-3.5 2xl:gap-4">
            <h3 className="text-lg leading-snug font-medium md:text-xl">
              {item.title}
            </h3>
            <div className="primary-button flex size-8 shrink-0 items-center justify-center rounded md:size-9">
              <Plus
                className={cls(
                  "size-3.5 text-primary-cta-text transition-transform duration-300 md:size-4",
                  activeIndex === index && "rotate-45",
                )}
                strokeWidth={2}
              />
            </div>
          </div>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="pt-1 text-base leading-snug">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}