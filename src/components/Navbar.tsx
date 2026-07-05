"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { cls } from "@/lib/utils";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    onClose?: () => void,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { offset: 0 });
        } else {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    onClose?.();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-999 bg-foreground"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav
        data-section="navbar"
        className="fixed top-5 left-1/2 z-1000 w-content-width -translate-x-1/2"
      >
        <div className="card mx-auto w-full overflow-hidden rounded backdrop-blur-sm md:w-1/2">
          <div className="relative z-10 flex items-center justify-between gap-3 p-3 xl:gap-4 xl:p-4 2xl:gap-5 2xl:p-5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/avatar.png"
                alt="UDAY"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-xl font-medium text-foreground">
                UDAY
              </span>
            </Link>
            <button
              type="button"
              className="primary-button flex size-9 shrink-0 cursor-pointer items-center justify-center rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Plus
                className={cls(
                  "h-1/2 w-1/2 text-primary-cta-text transition-transform duration-300",
                  menuOpen ? "rotate-45" : "rotate-0",
                )}
                strokeWidth={1.5}
              />
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-3 p-3 pt-0 xl:gap-4 xl:p-4 xl:pt-0 2xl:gap-5 2xl:p-5 2xl:pt-0">
                  <div className="card rounded px-3 py-0 md:py-1 xl:px-4 2xl:px-5 2xl:py-2">
                    {navItems.map((item, index) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) =>
                            handleNavClick(e, item.href, () =>
                              setMenuOpen(false),
                            )
                          }
                          className="group flex w-full items-center justify-between py-3"
                        >
                          <span className="text-xl font-medium text-foreground transition-[margin] duration-300 group-hover:ml-3 md:text-2xl">
                            {item.name}
                          </span>
                          <ArrowUpRight
                            className="h-auto w-5 text-foreground transition-all duration-300 group-hover:mr-3 group-hover:rotate-45 md:w-6"
                            strokeWidth={2}
                          />
                        </a>
                        {index < navItems.length - 1 && (
                          <div className="h-px bg-accent/50" />
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="primary-button flex h-10 w-full items-center justify-center rounded px-6 text-sm text-primary-cta-text"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}