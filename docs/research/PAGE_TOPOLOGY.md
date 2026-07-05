# Page Topology — Joseph Alexander Creative Portfolio

**Source URL:** https://3000-iaw0r2feqvqigc6si5id6.sandbox.webild.io/  
**Preview wrapper:** https://www.webild.io/preview/a0825ca3-e028-46a1-8be4-2725e3ddce68

## Global Layout

- **Scroll container:** `html.lenis` with Lenis smooth scroll
- **Background layer:** Fixed `inset-0 -z-10` decorative radial gradients (top-right, bottom-left)
- **Content width:** `--width-content-width: clamp(40rem, 67.5vw, 61rem)` (~976px max)
- **Font:** Inter Tight
- **Palette:** White background `#ffffff`, foreground `#171717`, card `#f5f5f5`, accent `#171717`

## Section Order (top → bottom)

| # | Section | DOM | Position | Interaction |
|---|---------|-----|----------|-------------|
| 0 | **Navbar** | `nav.fixed` | Fixed overlay, top 20px, centered | Static |
| 1 | **Hero** | `#hero [aria-label="Hero section"]` | Flow, `md:h-svh` | Scroll-reveal animations (opacity/transform) |
| 2 | **Work** | `[aria-label="Work section"]` | Flow, horizontal carousel | Scroll-reveal, carousel scroll |
| 3 | **Testimonials** | `[aria-label="Testimonials section"]` | Flow | Scroll-reveal fade-up |
| 4 | **About** | `#about [aria-label="About section"]` | Flow, 5-col grid | Static + hover on avatar |
| 5 | **Services** | `#services [aria-label="Features section"]` | Flow, 4-card grid | Scroll-reveal word animation on headings |
| 6 | **FAQ** | `[aria-label="FAQ section"]` | Flow, card container | **Click-driven** tab switching (General/Pricing/Process/Results) |
| 7 | **Contact** | `#contact [aria-label="Contact section"]` | Flow, 2-col grid | Form static, scroll-reveal |
| 8 | **Footer** | `footer[aria-label="Site footer"]` | Flow | Social button hovers |

## Z-Index Layers

1. Background gradients: `-z-10`
2. Main content: default
3. Navbar: `z-1000`

## Dependencies

- Navbar overlays all sections
- Hero CTA links to `#contact`
- FAQ CTA links to `#contact`
- Services CTA links to `#contact`