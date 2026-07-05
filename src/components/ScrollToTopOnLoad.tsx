"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function resetHomeScroll(lenis?: ReturnType<typeof useLenis>) {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== "/") return;

  if (window.location.hash) {
    window.history.replaceState(null, "", "/");
  }

  window.scrollTo(0, 0);
  lenis?.scrollTo(0, { immediate: true });
}

export function ScrollToTopOnLoad() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";
    resetHomeScroll(lenis);

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) resetHomeScroll(lenis);
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [pathname, lenis]);

  return null;
}