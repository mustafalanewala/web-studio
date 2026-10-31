# Section recipes

Format: **use when** · **how** · **mobile / reduced motion** · **cliché risk**. Implementation details for GSAP/Lenis are in `motion.md`, for 3D in `3d.md`. Pick recipes from the plan's section map; never stack more than one heavy recipe per viewport.

## Heroes
1. **Kinetic headline** · the brand voice is the asset · GSAP SplitText (lines + mask), staggered rise or variable-font axis animation on load; one orchestrated sequence ≤1.2 s · mobile: same, shorter; reduced: static text, fade only · risk: letters flying in on every heading.
2. **3D hero object** · the object is the product (device, tower, bottle, watch) · R3F canvas, studio HDRI, object reacts to pointer (subtle) and scroll (camera beats) · mobile: lower DPR, no post-processing, or a poster image; reduced: static render · risk: abstract blob with no meaning.
3. **Cinematic video hero** · footage tells it best (places, people, process) · muted autoplay loop, `playsinline`, poster, ≤6 MB, H.264 + AV1/WebM · mobile: shorter cut or poster; reduced: poster only · risk: generic stock drone shot.
4. **Shader ambience** · a mood, not an object (wellness, AI, music) · Paper Shaders / ShaderGradient / own GLSL as a full-bleed background behind type · mobile: low resolution render target; reduced: static gradient image · risk: aurora/mesh cliché of AI startups.
5. **Type-as-image (monumental)** · strong statement copy · one giant word, scale or clip-path change on scroll into the next section · reduced: static · risk: weak copy kills it.
6. **Interactive toy** · playful brands, launches · something to drag, throw, paint or tilt (physics or springs) · mobile: touch-first version; reduced: still frame · risk: fun but unrelated to the brand.
7. **Product UI hero** · SaaS · real UI screenshot or live component that zooms/tilts out as you scroll · reduced: static screenshot · risk: fake dashboards with lorem data.

## Story sections
8. **Pinned scroll story** · 3–6 beats of a narrative (transformation, process) · ScrollTrigger pin + scrub one timeline; text column changes while visual morphs · mobile: unpin into stacked cards; reduced: stacked, no scrub · risk: pins longer than ~3 screens trap people.
9. **Scroll-scrubbed image sequence** · hardware rotation, construction progress, day→night · canvas drawing preloaded WebP/AVIF frames (60–150), frame index = scroll progress · mobile: half the frames, smaller size; reduced: key frames as images · risk: huge payload; always lazy-load and show a poster.
10. **Horizontal gallery / timeline** · chronological or a set of equals · pin + translate X with scrub on desktop · mobile: native horizontal swipe with snap or vertical stack · risk: trackpad confusion; keep it short.
11. **Sticky stacking cards** · 3–5 equal features or services · each card sticks and the next stacks over it with slight scale-down · reduced: normal list · risk: overused on SaaS; give cards distinct content.
12. **Parallax depth layers** · landscapes, places, illustration · 2–4 layers moving at different speeds (transform only) · mobile: reduce to 2 layers; reduced: none · risk: seasick if speeds differ too much.
13. **Chapter dividers** · long story pages · full-screen number/title with clip-path wipe into the chapter image · reduced: plain heading · risk: too many chapters.
14. **Data that builds** · impact, metrics, finance · numbers tick to real values when in view; charts draw with stroke-dashoffset · reduced: final values · risk: vanity numbers, fake precision.

## Showcases
15. **Index with cursor preview** · portfolios, case studies, projects list · list of titles; hovering shows a following image (lerped), optional WebGL distortion · mobile: thumbnails inline; reduced: no follow · risk: slow lerp feels laggy (keep ~0.15).
16. **Clip-path image reveals** · editorial imagery · `clip-path: inset()` animates on enter, image slightly scales down inside · reduced: fade · risk: reveal on every single image.
17. **WebGL image distortion** · portfolios, galleries · plane per image with displacement/RGB shift on hover/scroll velocity · mobile: off; reduced: off · risk: heavy and cliché on corporate/SaaS.
18. **Marquee** · rhythm between sections, logos, awards · CSS/transform loop, speed tied to scroll velocity, pause on hover · reduced: static row · risk: endless logo ticker.
19. **Bento / feature grid with motion** · many small features · varied cell sizes driven by content importance; each cell one micro-interaction · risk: identical rounded cards — vary hierarchy.

## Real-estate specials
20. **Masterplan explorer** · off-plan communities · 2D illustrated map or 3D diorama; hotspots for plots, amenities, phases; filter by type · fallback: list + static plan.
21. **Tower build-up** · single tower launches · scroll builds the tower floor by floor (3D or image sequence), then day/night toggle · reduced: final render.
22. **Location story** · any project · scroll flies from landmarks to the site, drive-time labels animate in · fallback: static map + list.
23. **Unit finder** · sales-led pages · filter by beds/size/view; floor-plan reveal with room labels; CTA per unit · must work without motion.
24. **Payment-plan timeline** · off-plan · milestones animate along a line (booking → construction → handover) with percentages · reduced: static timeline.

## SaaS specials
25. **Feature walkthrough** · pinned product frame, steps scroll on the side, UI state changes per step · mobile: step cards with screenshots.
26. **Live demo block** · the product can run in the page (playground, configurator) · always provide a "see it" fallback video/poster.

## Navigation, CTAs, footers
27. **Navigation** · references from navbar.gallery · hide on scroll down, show on up; full-screen menu with staggered links for brand sites; always keyboard-reachable · risk: hiding primary nav on desktop with no reason.
28. **Magnetic CTA** · playful brands, desktop · button and label pulled toward the cursor within a radius (spring) · touch: off · risk: on every button.
29. **CTA section** · references from cta.gallery · one action, one sentence, strong contrast; can echo the signature moment · risk: three competing buttons.
30. **Statement footer** · references from footer.design · giant wordmark or closing line, contact first, links second; footer reveal (content slides over a fixed footer) · risk: link dump.

## Transitions and system pieces
31. **Page transitions** · multi-page brand sites · View Transitions API (same-document in Next.js app router or cross-document where supported) or a ≤500 ms curtain; shared-element morph from card to page · reduced: instant · risk: long blocking wipes.
32. **Preloader** · only when real assets (3D, sequences) load · counter bound to real progress (drei `useProgress` / image decode) → exits into the hero · risk: fake counter on a static site.
33. **Custom cursor** · playful/portfolio, desktop only · small follower with states (view, drag, play); keep the native cursor for text and controls · risk: blob follower everywhere.
34. **Grain overlay** · tactile directions · fixed SVG noise (fffuel) at 4–8% opacity, `pointer-events: none` · risk: muddy text contrast.
35. **404 / empty states** · every site · on-concept moment (reuse the signature in small) with a clear way back.

## Choosing
- One heavy recipe per viewport (3D, sequence, WebGL distortion, pinned story).
- Intensity follows the brief: corporate → 1 signature + light reveals; launch/portfolio → signature + 2–3 supporting moments.
- Every recipe needs its reduced-motion and mobile version written in the plan before building.
