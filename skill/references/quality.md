# Quality gate (strict)

Run against a production build (`next build && next start`), never the dev server. A site is done only when every gate passes or the user accepts a named exception.

## 1. Performance
| Check | Target |
|---|---|
| Lighthouse mobile Performance | ≥ 90 |
| LCP | < 2.5 s (mobile) |
| CLS | < 0.1 |
| INP / TBT | INP < 200 ms, TBT < 200 ms |
| JS on the landing route | ≤ ~250 KB gzipped excluding 3D chunk; 3D chunk lazy-loaded |
| Hero GLB | ≤ 2–3 MB compressed; textures ≤ 2K |
| Images | AVIF/WebP, `next/image` with sizes, hero preloaded, nothing above the fold lazy |
| Video | poster, ≤ 6 MB hero loop, `preload="metadata"` below the fold |
| Fonts | ≤ 2 families, subset, `display: swap`, preload the display face |
| 3D frame rate | 60 fps high tier, ≥ 45 fps with 4× CPU throttle, fallback on decline |

Lighthouse (free): `npx lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices --output=html --output-path=./_studio/lighthouse-mobile.html --chrome-flags="--headless"` (mobile is the default), then again with `--preset=desktop`.

## 2. Accessibility
- Lighthouse Accessibility ≥ 95
- Text contrast ≥ 4.5:1 (large text 3:1), including text over video, shaders and images
- Keyboard: every link/button reachable, visible focus style, skip link, no focus traps in menus/modals
- Semantic structure: one `h1`, ordered headings, landmarks, `alt` on meaningful images, `aria-hidden` on decorative canvases
- Motion: `prefers-reduced-motion` gives a calm, complete page (no pins, parallax, autoplay, smooth-scroll hijack)
- No content hidden only inside WebGL or on hover

## 3. Motion and interaction
- No jank: animations use transform/opacity; no layout thrash (check the Performance panel or long tasks)
- Every pin releases cleanly; no overlapping pinned sections; `ScrollTrigger.refresh()` after fonts/images
- Scroll feels native on touch; Lenis only on non-touch, lerp ~0.1
- Back/forward navigation keeps scroll position sensibly; no animation leaks after route change

## 4. Visual review with Playwright
Capture and actually look at each:
1. Full page at 375×812, 768×1024, 1440×900 → `./_studio/qa/{width}.png`
2. The same at 1440 with `reducedMotion: "reduce"`
3. A still at every beat of every pinned/scrubbed section (scroll in steps of ~0.2 viewport)
4. The hero after load at 0 s, 1 s, 3 s
Look for: overlapping/clipped text, parts passing through each other, labels covering what they name, empty frames during transitions, layout shift, colour drift from the plan.
Fix collisions with real numbers in the layout or model, never by hiding them with the camera.

## 5. Cross-browser and devices
- Chromium, WebKit (Safari) and Firefox via Playwright: hero renders, fonts load, no console errors
- Check every `@supports` fallback (scroll-driven animations, View Transitions)
- Touch device emulation: no hover-only content, tap targets ≥ 44 px

## 6. Content and licences
- No lorem ipsum, no placeholder stock that contradicts the brand
- Every font, image, model, icon, HDRI listed with source and licence; CC-BY attributions present
- Nothing copied from gallery reference sites

## Report to the user
Stills (3 widths + reduced motion), Lighthouse mobile/desktop scores, frame rate under throttle, what failed and what was fixed, any accepted exceptions.
