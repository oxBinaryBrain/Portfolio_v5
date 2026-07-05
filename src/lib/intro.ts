export const INTRO_SEEN_KEY = "uday-portfolio-intro-seen";

export function hasSeenIntro(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
}

export function markIntroSeen(): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(INTRO_SEEN_KEY, "1");
}