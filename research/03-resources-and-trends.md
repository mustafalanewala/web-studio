# Free resources + 2025–26 trends (verified 2026-10-31)

Sources: npm registry, GitHub API, licence/pricing pages, MDN browser-compat-data, caniuse. Every URL loaded on the day.

## Dead or moved
- badasslibrefonts.com → gone; collection at design-research.be/by-womxn
- typetrends.com → down; use Typewolf / Fonts In Use
- velvetyne.fr → strike page; fonts at gitlab.com/velvetyne

## Licence traps for the starter
- React Bits, Animate UI (MIT + Commons Clause), Aceternity (own licence), Skiper UI (none published): never commit their source into the starter; install per project via shadcn CLI.
- Fontshare (ITF licence): free commercial use, not open source — load from the Fontshare CDN, don't commit font files.
- Shadertoy (CC BY-NC-SA default), The Book of Shaders (no reuse), Lygia (Prosperity, paid commercial): learn only, never copy.
- Spline free = logo watermark, no code export → effectively paid. Rive free = splash screen. Motion+ = paid. Theatre.js studio AGPL + stalled → avoid.

## 1. Inspiration galleries (no login unless noted)
Awwwards SOTD, Codrops Webzibition, CSS Design Awards, The FWA, SiteInspire, Httpster, Minimal Gallery, Hoverstat.es, Maxibestof, Lapa Ninja, One Page Love, Admire the Web, Muzli, Brutalist Websites, Typewolf, Fonts In Use. Savee (free account to save), Mobbin (login, product UI).

## 2. Component libraries
shadcn/ui (MIT), Magic UI (MIT, Pro paid), React Bits (MIT+Commons Clause), Aceternity (own licence), Motion Primitives (MIT), Cult UI (MIT), Animata (MIT), Kokonut UI (MIT), Animate UI (MIT+CC), Skiper UI (no licence), 21st.dev (per component), Uiverse (MIT), Origin UI / coss.com/origin (MIT).

## 3. Motion (versions 2026-10-31)
- GSAP 3.15.0 — all plugins free incl. SplitText, MorphSVG, ScrollSmoother, DrawSVG, Inertia; Webflow no-charge licence (bans use in competing no-code builders only).
- Lenis 1.3.27 (MIT). Motion 14.9.0 (MIT; Motion+ $399 paid). anime.js 4.5.0 (MIT). dotLottie web 0.82 (MIT).
- CSS scroll-driven animations: Chrome/Edge 115+, Safari 26+, Firefox 159+ (Oct 2026) — gate with `@supports (animation-timeline: scroll())`.
- View Transitions: same-document Baseline; cross-document Chrome 126+ / Safari 18.2+, not Firefox.

## 4. 3D + shaders
- three r187 (WebGPURenderer + TSL with WebGL2 fallback), R3F 9.8 (React 19), drei 10.7, @react-three/postprocessing 3.2 — all MIT.
- Free assets: Poly Haven (CC0 HDRI/textures/models), ambientCG (CC0), Kenney (CC0), Quaternius (CC0), Poly Pizza (CC0/CC-BY per model), Sketchfab CC0 filter, Khronos glTF samples.
- Optimise: glTF-Transform 4.5 `optimize` (Draco/Meshopt, KTX2, WebP), gltf.report, gltfjsx 6.5.3.
- Shaders: Paper Shaders (Apache-2.0, pin 0.0.x), ShaderGradient (MIT), Inigo Quilez articles (reference).

## 5. Fonts
Fontshare (CDN only): Satoshi, Clash Display, General Sans, Cabinet Grotesk, Switzer, Boska, Zodiak, Gambetta, Panchang, Tanker.
Google Fonts (OFL): Bricolage Grotesque, Instrument Serif, Fraunces, Unbounded, Syne, Big Shoulders Display, Funnel Display, Young Serif, Bodoni Moda; variable: Roboto Flex, Anybody, Climate Crisis; body: Geist, Host Grotesk, Schibsted Grotesk, Instrument Sans.
Libre foundries: Velvetyne (gitlab), Collletttivo, Uncut (per-font licence), Open Foundry, Libre Fonts by Womxn, Use & Modify, Free Faces (varies), Tunera, League of Moveable Type.

## 6. Icons, illustration, texture, colour
Icons: Lucide (ISC), Phosphor, Tabler, Iconoir, Heroicons (MIT), Remix (own licence), Hugeicons (free set), Icônes browser. 3D: 3dicons (CC0).
Illustration: unDraw, Open Peeps, Humaaans, Open Doodles (CC0).
Grain/gradients: fffuel, Haikei, meshgradient.in, Texturelabs, Transparent Textures.
Colour: oklch.com, Realtime Colors, Huemint, uicolors.app, Radix Colors, Leonardo, Coolors (free tier).
Footage: Pexels Videos, Mixkit (check per item).

## 7. Learning with reusable code
Codrops demos (MIT unless stated), GSAP CodePen + showcase, Bruno Simon folio-2025 (MIT), Maxime Heckel blog, three.js examples, R3F docs, Discover three.js, Olivier Larose, Yuri Artiukh (akella), Wawa Sensei, Frontend.horse, Josh Comeau. Three.js Journey is paid (some free lessons).

## 8. Award-site patterns (works when / cliché when)
References: landonorris.com (SOTD + Developer, Nov 2025), messenger.abeto.co (SOTD + Developer, Nov 2025).
1. Kinetic split-text — brand voice in hero/chapter titles / every heading staggering.
2. Pinned scroll story (3–6 beats) — product narratives / pins trapping readers.
3. WebGL image distortion — portfolios, galleries / corporate, SaaS.
4. Grain + grainy gradients — tactility / purple mesh + grain.
5. Scroll-driven 3D object — when the object is the product / meaningless blob.
6. Explorable worlds — memorable, costly, needs plain nav fallback.
7. Page transitions — under ~500 ms / long blocking wipes.
8. Horizontal scroll — desktop timelines/galleries / touch + trackpad; stack on mobile.
9. Scroll-scrubbed video / image sequence — hardware, craft / no poster, wrong keyframes.
10. Variable-font axis animation — distinctive, cheap / everything wobbling.
11. Custom / magnetic cursor — playful brands, desktop only / blob follower everywhere.
12. Smooth scroll (Lenis) — baseline, lerp ~0.1, native on touch / floaty.
13. Shader / aurora backgrounds — ambience / AI-startup cliché.
14. Preloader 0–100 — real asset loading / fake.
15. Marquees + clip-path reveals — rhythm / endless logo ticker, reveal on every image.
