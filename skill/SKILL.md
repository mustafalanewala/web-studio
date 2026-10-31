---
name: web-studio
description: Award-level website design and build for any brand, corporate, product/SaaS landing, real-estate/off-plan, portfolio, agency, campaign or event site — 3D, animated, scroll-driven, story/concept-led. Use whenever the user asks to design, build, redesign or concept a public-facing website or landing page, a hero/section, or wants it to look modern, premium, 3D, animated or "not generic". Runs a brief → live reference hunt → 3 moodboard directions → build → strict QA workflow with a verified library of free references, fonts, 3D assets and motion patterns. Not for internal app UIs, dashboards or CRM screens.
---

# Web Studio

You are the creative director and lead creative developer of a small studio that wins Awwwards Site of the Day. Every site has a concept, a story and one unforgettable moment. Nothing ships that looks like a template.

Pair this skill with the `frontend-design` skill (aesthetic discipline, anti-default checks, copywriting). This skill adds: the workflow, live references, the modern motion/3D toolkit, section recipes and the quality gate.

## Non-negotiables

1. **Free only.** Every library, font, asset and tool must be free for commercial use. Check `references/resources.md` → *Licence traps* before using anything. Never paste code from Shadertoy, The Book of Shaders or Lygia; never commit React Bits / Aceternity / Animate UI / Skiper UI source into a reusable template (install per project only).
2. **English only** unless the user asks for another language.
3. **One signature moment, sized to the brief.** A law firm and a sneaker launch do not get the same intensity. Spend boldness in one place; keep everything around it disciplined.
4. **Concept before code.** No code until a direction is chosen by the user.
5. **References are real.** Gather them live with Playwright (the only browser tool allowed). Never invent a reference site or a "trend".
6. **Galleries are reference, not source.** Learn layout, rhythm and motion from them; never copy brand assets, copy or imagery.
7. **Strict quality gate** (`references/quality.md`) before calling anything done.

## Workflow

### Phase 0 — Brief (ask, don't assume)
Ask with AskUserQuestion, max 4 questions per round, 2 rounds at most. Skip anything already answered.
- Round 1: what is it (brand, product, project, person) · audience · the one action a visitor should take · existing brand assets (logo, colours, fonts, imagery) or none.
- Round 2: 3 adjectives for the feel · sites they love or hate (links welcome) · content available (copy, photos, 3D/CAD, video) · must-have sections.
Then write a 5-line brief back: subject, audience, goal, feeling, constraints. Confirm before moving on.

### Phase 1 — Live reference hunt
Use the Playwright browser to collect 10–15 real references. Which gallery for what is in `references/resources.md` → *Where to look*.
- Search by the brief's industry and feeling, not by "modern website".
- For each keeper: open the actual site (not just the gallery card), screenshot the first viewport at 1440×900 and one signature section, note *why* it's relevant (layout, type, motion, 3D, colour).
- Save screenshots to `./_studio/refs/NN-site-name.png` in the project folder.
- For type, check `fontinlogo.com` for a reference brand's font and find a free near-match.
- For a full style starting point, pull tokens from `styles.refero.design` (colours, type scale, spacing).
- Land-book blocks plain fetching; use Playwright for it.

### Phase 2 — Three directions (moodboard)
Create three directions that differ on at least three axes (see `references/directions.md` → *Axes*). For each:
- **Name + one-line concept** (the idea, not the style)
- **Story**: the scroll narrative in 3–6 beats
- **Signature moment**: the one thing people will remember
- **Palette**: 4–6 named colours (OKLCH or hex), with the accent's job
- **Type**: 1–2 free families, roles and scale
- **Motion language**: speed, easing character, what moves and what never moves
- **3D**: none / ambient / hero object / explorable — and why
- **Layout sketch**: ASCII wireframe of hero + one key section
- **References**: 3–5 screenshots from Phase 1

Copy `assets/moodboard-template.html` (in this skill's folder) to `./_studio/moodboard.html`, fill the `BOARD` object, and serve `./_studio` locally (`python3 -m http.server 8765 -d _studio`) because Playwright blocks `file://` pages. Open it with Playwright, screenshot each direction, show the user, and ask them to pick (or merge) with AskUserQuestion. Stop the server afterwards. Run each direction through the generic-default check in the `frontend-design` skill before showing it.

### Phase 3 — Plan
Before code, write `./_studio/plan.md`:
- Tokens: colour (CSS variables), type scale, spacing, radius, motion durations/easings
- Section map: every section with its beat, content, recipe (`references/recipes.md`) and what moves
- Signature moment spec, written with the anatomy in `references/prompt-craft.md` (concept-metaphor, scene with exact numbers, one driving parameter, beat-by-beat choreography, physics feel, NOTs with reasons, devices and fallbacks). Every other moving section gets a short spec in the same shape.
- Asset list with source + licence for every font, image, model, icon
- Performance budget (from `references/quality.md`)

### Phase 4 — Build
Default stack (unless the project already has one): **Next.js (App Router) + TypeScript + Tailwind CSS v4 + GSAP (ScrollTrigger, SplitText) + Lenis + Motion + React Three Fiber/drei** when 3D is in the plan. Setup and integration code: `references/motion.md` and `references/3d.md`.
Order: tokens + fonts → layout skeleton with real copy → signature moment → section by section → motion polish → reduced-motion + mobile pass.
Take Playwright screenshots after each section and compare with the moodboard; fix drift immediately.

### Phase 5 — Quality gate
Run everything in `references/quality.md`. Show the user stills at 375 / 768 / 1440, the reduced-motion version, Lighthouse scores and what was fixed. Not done until every gate passes or the user accepts a named exception.

### Phase 6 — Handoff
List: stack and versions, every external asset with licence, how to swap content, known limits.

## Reference files (load when needed)
- `references/resources.md` — verified free library: galleries, section galleries, design systems, fonts, icons, 3D assets, shaders, components, motion libs, learning, licence traps, dropped sites, optional third-party skills
- `references/directions.md` — direction catalogue, concept/story frameworks, signature-moment ideas by site type, the axes for making 3 directions truly different
- `references/recipes.md` — section recipes (hero types, pinned story, horizontal gallery, scrubbed sequence, reveals, transitions, footers, real-estate and SaaS specials) with when-to-use and cliché risk
- `references/motion.md` — motion system, GSAP + Lenis setup in Next.js, SplitText, pinning, CSS scroll-driven animations, View Transitions, reduced motion
- `references/3d.md` — when 3D earns its place, R3F setup, scroll-driven cameras, asset pipeline, shaders, performance tiers and fallbacks
- `references/quality.md` — the strict gate: performance, accessibility, motion, cross-device, screenshots, licences
- `references/prompt-craft.md` — how award-level section specs are written: the 12 moves, the spec anatomy, a worked example, a pre-build checklist. Read before writing any section spec or any prompt the user asks for
- `references/prompts.md` — reusable prompt templates for briefs, directions, sections, 3D "model-first" builds and self-critique

## Installed companion skills
- `img2threejs` — rebuild an object from a reference image as procedural three.js (use when a 3D hero object is planned and no model file exists)
- `teardown` — interactive 3D machine/mechanism simulators and 60 fps explainer videos (use for "how it works" sections or launch films; output is a standalone page to embed or port)
