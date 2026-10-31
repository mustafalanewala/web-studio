# Motion system

Motion has a job: guide attention, show change, carry the story. Decide per direction what moves and what never moves.

## Tokens (put in CSS variables / a `motion.ts`)
| Token | Value | Use |
|---|---|---|
| `--dur-micro` | 150–200 ms | hover, press, toggles |
| `--dur-ui` | 300–450 ms | menus, panels, small reveals |
| `--dur-reveal` | 700–1000 ms | section/text reveals |
| `--dur-hero` | 1000–1600 ms | the one orchestrated intro |
| ease out (enter) | `expo.out` / `cubic-bezier(.16,1,.3,1)` | things arriving |
| ease in-out (move) | `power3.inOut` / `cubic-bezier(.65,0,.35,1)` | things travelling |
| scrub smoothing | `scrub: 0.6–1` | scroll-linked timelines |
| stagger | 0.04–0.1 s | lines/words, never per letter for body text |

Character by direction: luxury = slow + soft; Swiss = fast + precise; playful = springy (Motion `type: "spring"`, stiffness 300–500, damping 20–30); brutalist = cuts, no easing.

## Rules
- Animate `transform` and `opacity` only (plus `clip-path`, `filter` sparingly). Never animate width/height/top/left.
- One orchestrated page-load moment. Elsewhere, motion answers scroll or user action.
- Text: reveal by line with masks; never letter-by-letter on paragraphs.
- Pins: ≤ ~3 screens of scroll each, and the page must still read top-to-bottom without them.
- Everything has a reduced-motion version (below) and a touch version.
- Kill/revert animations on unmount (use `useGSAP` scope) to avoid leaks in Next.js navigation.

## Setup in Next.js (App Router)
Packages: `gsap @gsap/react lenis motion` (all free; GSAP plugins included).

`src/lib/gsap.ts`
```ts
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export { gsap, ScrollTrigger, SplitText, useGSAP };
```

`src/components/smooth-scroll.tsx` — Lenis driven by GSAP's ticker so ScrollTrigger stays in sync; off for reduced motion; native scrolling on touch (Lenis default `syncTouch: false`).
```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, autoRaf: false });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return null;
}
```
Mount `<SmoothScroll />` once in the root layout. For React UI motion wrap the app in `<MotionConfig reducedMotion="user">` (`motion/react`).

## Patterns
**Line reveal headline (SplitText 3.13+)**
```tsx
useGSAP(() => {
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    SplitText.create(".hero-title", {
      type: "lines",
      mask: "lines",
      autoSplit: true, // re-splits after font load / resize
      onSplit: (self) =>
        gsap.from(self.lines, { yPercent: 100, duration: 1, ease: "expo.out", stagger: 0.08 }),
    });
  });
}, { scope: containerRef });
```

**Scroll reveal batch** — `ScrollTrigger.batch(".reveal", { onEnter: (els) => gsap.from(els, { y: 40, autoAlpha: 0, stagger: 0.08 }), once: true })`.

**Pinned scrubbed story**
```tsx
useGSAP(() => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".story", start: "top top", end: "+=250%", pin: true, scrub: 0.8 },
    });
    tl.to(".story-visual", { scale: 0.85 }).to(".beat-2", { autoAlpha: 1 }, "<");
  });
}, { scope: containerRef });
```
Mobile and reduced motion fall through to the stacked, unpinned layout.

**Horizontal section** — pin the wrapper, `x: () => -(track.scrollWidth - window.innerWidth)`, `invalidateOnRefresh: true`, desktop only via `matchMedia`.

**Scroll velocity** (marquee speed, skew) — `ScrollTrigger.create({ onUpdate: (self) => setVelocity(self.getVelocity()) })`, clamp and lerp the value.

**Refresh** — call `ScrollTrigger.refresh()` after fonts (`document.fonts.ready`) and above-the-fold images load, and after any layout change.

## Native CSS (no JS) where it's enough
Scroll-driven animations (Chrome/Edge 115+, Safari 26+, Firefox 159+):
```css
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .reveal { animation: reveal linear both; animation-timeline: view(); animation-range: entry 0% cover 30%; }
  }
}
@keyframes reveal { from { opacity: 0; transform: translateY(40px); } }
```
View Transitions: same-document transitions work in all modern browsers (`document.startViewTransition`); cross-document only Chrome/Safari. In Next.js, check the installed version's docs for React `<ViewTransition>` support before relying on it; keep transitions ≤500 ms and instant for reduced motion.

## Reduced motion (required)
- Detect with `prefers-reduced-motion`; GSAP via `gsap.matchMedia()`, Motion via `MotionConfig reducedMotion="user"`, CSS via media query.
- Replace movement with opacity or nothing; keep content order and meaning identical.
- No smooth-scroll hijack, no pins, no parallax, no autoplaying video (poster instead).

## Touch and mobile
- No custom cursors or magnetic effects on `(hover: none)`.
- Horizontal pinned sections become native swipe or vertical stacks.
- Halve parallax distances and stagger counts; shorter durations.

## Clichés to avoid
Fade-up on every section · letters flying in on every heading · cursor blob on corporate sites · 4-second preloaders · scroll hijack that fights the trackpad (keep Lenis lerp ~0.1) · motion with no relation to the concept.
