# Resource library (verified 2026-10-31, free-first)

Every entry was checked live. "No login" = browsable with Playwright without an account. Re-verify anything older than ~6 months before relying on pricing or licences.

## Where to look (by need)

| Need | Go to first | Then |
|---|---|---|
| Overall direction, award level | recent.design (ex-Godly), Awwwards SOTD | The FWA, CSS Design Awards, Codrops Webzibition |
| Calm / editorial / studio | SiteInspire, Minimal Gallery | Httpster, Maxibestof |
| Bold / experimental / anti-template | Hoverstat.es, Brutalist Websites | Httpster, The FWA |
| Landing page structure by industry | Land-book (Playwright only), Landdding | Lapa Ninja, One Page Love |
| Hero sections | supahero.io | Land-book "sections" |
| Navigation | navbar.gallery | — |
| Footers | footer.design | — |
| Calls to action | cta.gallery | — |
| A real product's full design system (tokens) | styles.refero.design (DESIGN.md per site) | — |
| Typography in real use | Typewolf, Fonts In Use | Maxibestof |
| Font behind a reference logo | fontinlogo.com (free lookups, free near-matches) | — |
| Mobile interaction / micro-animation | 60fps.design (free explore) | — |
| Motion and WebGL techniques with code | Codrops (demos MIT unless stated) | GSAP showcase + GreenSock CodePen |
| Daily feeds | Muzli, Admire the Web | — |

### Gallery list
| Site | URL | Login | Notes |
|---|---|---|---|
| Recent (formerly Godly) | https://recent.design | No | Top-tier sites, launch videos; godly.website redirects here |
| Awwwards | https://www.awwwards.com/websites/sites_of_the_day/ | No | Each site page lists its stack |
| Codrops Webzibition | https://tympanus.net/codrops/webzibition/ | No | Creative-dev curation |
| CSS Design Awards | https://www.cssdesignawards.com | No | UI/UX/innovation scores |
| The FWA | https://thefwa.com | No | Experimental, interactive |
| SiteInspire | https://www.siteinspire.com | No | Filter by style/type |
| Httpster | https://httpster.net | No | Type-led, bold |
| Minimal Gallery | https://minimal.gallery | No | Restraint |
| Hoverstat.es | https://www.hoverstat.es | No | Art-direction-led |
| Maxibestof | https://maxibestof.one | No | Sites, sections, fonts in use |
| Land-book | https://land-book.com | No (Playwright only; Cloudflare blocks fetch) | Sites, sections, motion; filters |
| Landdding | https://landdding.com | No (limited free) | 2.7k landing pages, colour/tag filters |
| Lapa Ninja | https://www.lapa.ninja | No | 7,300+ landing pages by category |
| One Page Love | https://onepagelove.com | No | Single-page narratives |
| Brutalist Websites | https://brutalistwebsites.com | No | Anti-template |
| supahero.io | https://supahero.io | No | Hero sections |
| navbar.gallery | https://navbar.gallery | No | 8 nav types |
| footer.design | https://footer.design | No | Footers by style |
| cta.gallery | https://cta.gallery | No | CTAs by industry, light/dark |
| styles.refero.design | https://styles.refero.design | No | 2,000+ product design systems with tokens |
| 60fps.design | https://60fps.design | No (limited) | Mobile UI animation clips |
| Typewolf / Fonts In Use | https://www.typewolf.com · https://fontsinuse.com | No | Type pairings |
| Muzli / Admire the Web | https://muz.li · https://admiretheweb.com | No | Daily inspiration |
| Savee | https://savee.com | Free account | Moodboarding |

Reference sites worth studying (2025–26 award winners): landonorris.com (WebGL + GSAP), messenger.abeto.co (three.js world), bruno-simon.com (source: brunosimon/folio-2025, MIT).

## Fonts (free for commercial use)

| Source | Licence | How to use |
|---|---|---|
| Google Fonts | OFL | `next/font/google`. Display: Bricolage Grotesque, Instrument Serif, Fraunces, Unbounded, Syne, Big Shoulders Display, Funnel Display, Young Serif, Bodoni Moda. Variable/kinetic: Roboto Flex, Anybody, Climate Crisis. Body: Geist, Host Grotesk, Schibsted Grotesk, Instrument Sans |
| Fontshare (ITF) | Free commercial, not open source | Load from Fontshare CDN only, never commit files. Satoshi, Clash Display, General Sans, Cabinet Grotesk, Switzer, Boska, Zodiak, Gambetta, Panchang, Tanker |
| Velvetyne | OFL | gitlab.com/velvetyne (site shows a strike page). Radical display faces |
| Collletttivo | Mostly OFL | collletttivo.it |
| Open Foundry | SIL/MIT | open-foundry.com |
| Libre Fonts by Womxn | Libre | design-research.be/by-womxn |
| Use & Modify, Tunera, League of Moveable Type | Libre/OFL | usemodify.com · tunera.xyz · theleagueofmoveabletype.com |
| Uncut, Free Faces | Varies per font | Check each licence |

Rule: one or two families per site; avoid Inter/Roboto/Arial defaults unless the brief demands them.

## Icons, illustration, texture, colour
- Icons: Lucide (ISC), Phosphor (MIT, 6 weights), Tabler, Iconoir, Heroicons (MIT), Remix Icon (own licence, free commercial), Hugeicons (free stroke set), Icônes (browser; licence per set)
- 3D icons: 3dicons.co (CC0, free PNG ≤800px)
- Illustration: unDraw (free, no attribution), Open Peeps, Humaaans, Open Doodles (CC0)
- Grain/noise/gradients: fffuel.co, haikei.app (free tier), meshgradient.in, texturelabs.org, transparenttextures.com
- Colour: oklch.com, realtimecolors.com (preview on a live page), huemint.com, uicolors.app (Tailwind scales), Radix Colors (MIT), leonardocolor.io (contrast-based), coolors.co (free tier)
- Photos/video: Pexels (photos + videos), Unsplash, Mixkit (check per item). API keys only via environment variables.

## 3D and shaders
- Libraries: three r187 (WebGPURenderer + TSL with WebGL2 fallback), @react-three/fiber 9.8, @react-three/drei 10.7, @react-three/postprocessing 3.2 — all MIT
- Models/textures/HDRIs: Poly Haven (CC0), ambientCG (CC0), Kenney (CC0), Quaternius (CC0), Poly Pizza (CC0/CC-BY per model), Sketchfab with CC0 filter, Khronos glTF sample assets
- Optimise: glTF-Transform `optimize` (Draco/Meshopt, KTX2, WebP), gltf.report (browser), gltfjsx (model → JSX)
- Shaders you may use: Paper Shaders (Apache-2.0, pin the 0.0.x version), ShaderGradient (`@shadergradient/react`, MIT), your own GLSL/TSL
- Learn-only (do not copy into client work): The Book of Shaders, Shadertoy (CC BY-NC-SA default), Lygia (commercial use paid), Inigo Quilez articles (reference)

## Motion libraries (versions 2026-10-31)
- GSAP 3.15 — free incl. ScrollTrigger, SplitText, ScrollSmoother, MorphSVG, DrawSVG, Inertia (Webflow no-charge licence; commercial OK)
- Lenis 1.3 (MIT) — smooth scroll, pair with ScrollTrigger
- Motion 14.9 (MIT) — React UI motion, layout animations. Motion+ is paid: don't depend on it
- anime.js 4.5 (MIT), dotLottie (MIT runtime; LottieFiles public animations under Lottie Simple License)
- Native: CSS scroll-driven animations (Chrome/Edge 115+, Safari 26+, Firefox 159+; gate with `@supports`), View Transitions (same-document everywhere; cross-document Chrome/Safari only)

## Component libraries
Install per project with the shadcn CLI; read each licence first.
| Library | Licence | Good for |
|---|---|---|
| shadcn/ui | MIT | Accessible base primitives |
| Magic UI | MIT (Pro paid) | Marquees, tickers, text effects |
| Motion Primitives | MIT | Tasteful text/morph primitives |
| Cult UI, Animata, Kokonut UI, Uiverse, Origin UI (coss.com/origin) | MIT | Interactive pieces, micro-animations |
| Wensity (ui.wensity.com) | Free tier MIT | 38 components + 57 primitives, CLI + MCP |
| React Bits, Animate UI | MIT + Commons Clause | Best WebGL/text effects; per-project use only, never redistribute |
| Aceternity UI | Own licence | Hero backgrounds, 3D cards; per-project only |
| Skiper UI | No licence published | Treat as restricted |
| 21st.dev | Per component | Check each |

Use components as raw material: restyle to the direction's tokens. Out-of-the-box looks are a generic tell.

## Learning sources with reusable code
Codrops tutorials + demos (MIT unless stated) · GSAP showcase + codepen.io/GreenSock · three.js examples (MIT) · R3F docs · Maxime Heckel's blog (shaders, post-processing) · Olivier Larose (Next.js + GSAP/Motion with source) · Yuri Artiukh / akella (WebGL effects) · Wawa Sensei (R3F) · Discover three.js · Frontend.horse · Josh Comeau. Three.js Journey is paid (a few free lessons).

## Prompt / section shops (mostly paid — free items only)
- motionin.design: 4 free sections (Atlas, Pantheon, Folio, Cinema Reel) — study the demos as motion reference
- scrolltide.co: a few free templates (e.g. SELENE)
- motionsites.ai: some free prompts; hype-heavy marketing, treat claims with caution

## Dropped (don't use)
modulify.ai (paid builder) · wonderlist.design (paid Figma) · iconly.design (30 free icons only) · on.design (invite-only) · visual-learning.app (off-topic) · badasslibrefonts.com (dead) · typetrends.com (down) · Spline for production (free plan watermark, no code export) · Rive free plan (splash screen) · Motion+ (paid) · Theatre.js (AGPL studio, stalled)

## Licence traps (read before using anything)
- Never commit React Bits / Animate UI / Aceternity / Skiper UI source into a shared template; per-project installs only.
- Fontshare fonts: CDN only, no font files in the repo.
- Shadertoy / The Book of Shaders / Lygia: learning only.
- Poly Pizza and Sketchfab: licence per model; record CC-BY attribution in the handoff.
- Gallery screenshots are third-party work: reference only.

## Optional third-party skills (reviewed 2026-10-31)
| Skill/repo | Use | Install |
|---|---|---|
| img2threejs (Apache-2.0, ~19.9k stars) | Rebuild an object from a reference image as procedural three.js code | `npx img2threejs install --host claude`. Do NOT install its `img2` harness (edits ~/.claude/settings.json, links a global binary). Its SKILL.md is ~34 KB |
| teardown (MIT) | Machine simulators: model-first, explodable, cutaway, auto-tour, video export | `DO_NOT_TRACK=1 npx skills add elvarofficial/teardown -g -a claude-code`, pin commit e7e668c (new account), then `npm install && npx playwright install chromium` in its folder |
| dioramas (MIT, assets CC BY 4.0) | Reference only: 20 cinematic 3D landing pages (Vite, three.js, GSAP, Lenis, postprocessing); study docs/ENGINE.md and its brief → build → review method | Don't install; browse the repo. New assets need a paid fal.ai key |
| claude-motion (MIT) | Reference: motion rules + frame-review loop | Don't install |
| mg-styles-15 (MIT) | Reference: 15 animation styles with prompts | Browse its online gallery |
| video-shotcraft, lemo-opuscar | Promo/launch videos, not websites | Only if a launch video is requested |
