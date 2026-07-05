"use client";

import { useEffect, useState } from "react";
import { hasSeenIntro } from "@/lib/intro";

export function useIntroSession() {
  const [skipIntro, setSkipIntro] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSkipIntro(hasSeenIntro());
    setHydrated(true);
  }, []);

  return {
    skipIntro,
    hydrated,
    navbarDelay: skipIntro ? 0 : 4.5,
    heroDelay: skipIntro ? 0 : 4,
  };
}