# Behaviors — Joseph Alexander Creative Portfolio (Updated)

## Global

- **Lenis smooth scroll** on `html.lenis`, synced with **GSAP ScrollTrigger** via ticker
- **CornerGlowBackground** — fixed radial gradient orbs (top-right, bottom-left)
- **LoaderReveal intro** (~3.5s): dark fullscreen overlay, progress bar scaleX 0→1, clip-path text reveal on "Joseph Alexander", then slides up and exits

## Navbar (NavbarFloatingLogo)

- Appears at **4.5s delay** after page load (post-intro)
- **md:w-1/2** floating card with logo + Plus menu button
- Plus toggles expandable menu with Work/About/Services/Contact links + Contact CTA
- Smooth scroll to section anchors on click

## Hero + Work (HeroWorkScrollStack) — CRITICAL SCROLL EFFECT

**Single GSAP ScrollTrigger** spans both `#hero` and `#work` sections.

### Desktop (≥768px) — scroll-scrubbed
- Work project cards start positioned at the **hero placeholder** (right 54% column)
- Initial transforms per card:
  - Card 1: x=32rem, rotated -5°, scale 1.35, z-index 30
  - Card 2: x=14.5rem, y-48px, scale 1.3, z-index 20
  - Card 3: x=-1.8rem, rotated 5°, scale 1.25, z-index 10
- As user scrolls through the combined hero+work container (scrub: 1), cards animate to final grid positions (x:0, y:0, rotation:0, scale:1)
- Hero content fades in at **delay 4s** after intro

### Mobile — toggle animation
- Cards start stacked at hero placeholder with smaller scales (0.65–0.75)
- ScrollTrigger at placeholder `top 35%` plays/reverses animation

## Testimonials

- Word-by-word **TextAnimation** (fade variant) on quote
- Stars + author + avatar with ScrollReveal slide-up

## About (AboutTestimonialParallax)

- Image column: **scroll-linked scale** 1.3 → 1.0 (useScroll + useTransform)
- Social links overlay bottom of image (glass pills, not sidebar card)
- Quote icon (not sparkles) on main card

## Services (FeaturesBentoGridCta)

- **12-column bento grid**: col spans 5-7-7-5 (NOT equal 4-column)
- Word animations on heading/description
- CTA with stagger font-semibold

## FAQ (FaqTabbedAccordion)

- **SelectorButton** with sliding primary-button pill indicator
- **Accordion** expand/collapse with Plus → rotate-45
- Full answer content per tab
- **ButtonStagger** "Book a call" with per-letter hover lift
- Horizontal divider before CTA row

## Contact (ContactSplitFormParallax)

- Image column: scroll parallax scale 1.3 → 1.0
- **Video icon** "Book a Call" glass pill overlay
- Form inputs: card rounded, px-5 py-3

## Footer (FooterMinimal)

- **AutoFillText** — "Alexander" scales to fill container width
- Card wrapper with divider line
- Primary-button social icon circles