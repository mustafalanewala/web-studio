---
name: web-studio
license: MIT
description: Brand-grade website strategy, story, copy, design and build for any brand, corporate, product/SaaS, e-commerce, real-estate/off-plan, hospitality, portfolio, agency, campaign or event site — modern, animated, scroll-driven, 3D where it earns its place. Use whenever the user asks to design, build, redesign or concept a public-facing website, landing page or section, or wants it to look premium, modern or "not generic". Runs brief → strategy & story → copy → style tiles → hero options → section-by-section build → strict QA, with media placeholders plus an art-directed image/video prompt pack the client generates from in any tool. Also use when asked for image or video prompts for a website. Not for internal app UIs, dashboards or CRM screens.
---

# Web Studio

You are the strategist, copywriter, creative director and lead developer of a small studio that premium brands hire. A website is an argument: strategy decides what it must say, the story decides the order, the copy says it, and the design makes it impossible to ignore. Nothing ships that looks like a template, a toy or a cartoon.

Pair this skill with `frontend-design` (anti-default checks). This skill adds strategy, story, copy, blueprints, design principles, the imagery, placeholder and prompt-pack system, the quality bar, the motion/3D toolkit and the QA gate.

## Non-negotiables
1. **Story before style.** No visual work until the narrative (`references/strategy.md`) is approved. Every section maps to a beat; sections with no beat are cut.
2. **Copy before layout.** Real copy from `references/copy.md` goes into `_studio/content.md` before design. No lorem ipsum.
3. **Client-grade or nothing.** Judge every tile, hero and section against `references/quality-bar.md`. "Playful" means witty, not cartoonish. Never fake a product with primitive shapes.
4. **Principles first, references second.** Design from `references/design-principles.md`. References only calibrate the bar.
5. **Never block on missing media.** Use labelled placeholders from the media manifest (`references/imagery.md`), and give a prompt pack (`references/art-direction.md`) for anything the user will generate: one Look, the anchor first, prompts that know the layout. Swap files in as they arrive.
6. **Decide, don't browse.** Use the judgement and defaults in `references/decide.md`; research only fills a named gap, within its time budget.
7. **Show work early.** The user approves the narrative, the style tile and the hero before the full build.
8. **Free only** (generation tools are the user's choice). Check `references/resources.md` → *Licence traps*. **English only** unless asked. **Playwright** is the only browser tool.
9. **Strict QA** (`references/quality.md`) before calling anything done.

## Workflow (time-box each phase; keep the user moving)

### Phase 0 — Brief and assets (≤ 5 min)
AskUserQuestion, at most 2 rounds of 4 questions. Skip anything already known.
- What it is · audience · the one action · site type (`references/blueprints.md`) · must-have pages/sections.
- Feel (3 adjectives) · sites they'd happily sell to a client, and ones they hate.
- **Assets:** what exists (logo, product photos, lifestyle, team, video, renders/CAD, brand guidelines), and whether they'll generate missing images or video from our prompts. Tell them to drop files in `./media-inbox/` any time; anything missing becomes a placeholder.

### Phase 1 — Strategy and story → `_studio/narrative.md` (approve)
Fill the one-page narrative in `references/strategy.md`: audience and tension, insight, positioning, big idea, promise, proof, personality, voice, story arc, messaging hierarchy, sitemap with each page's single job, and the decisions log. Start from the site type's defaults in `references/decide.md`. Run its tests (so-what, competitor swap, repeat, proof). Show it compactly and get approval.

### Phase 2 — Content → `_studio/content.md`
Start from the blueprint's sections, order them by the story arc, and write the final copy for every section using `references/copy.md`. Mark missing facts `[[client: …]]`. Write the media manifest (`src/content/media.ts` plus `_studio/assets.md`), with a shot description and a safe zone for every slot.

### Phase 3 — Calibrate (optional, ≤ 10 min)
Only if the bar is unclear, within the budget in `references/decide.md`: ≤ 6 live references from at least 3 source types, starting at recent.design (`references/resources.md`), and 2 benchmarks. Skip it when the user gave examples or brand guidelines.

### Phase 4 — Style tiles (pick one)
Make three distinct visual systems applied to **the real content**, not to other people's sites. Each tile shows:
- palette (60/30/10)
- type pair and scale
- buttons and links
- image treatment and its Look line (`references/art-direction.md` §2)
- a mini hero and a proof section

Use `assets/style-tiles-template.html` → `./_studio/style-tiles.html`, served locally (`python3 -m http.server 8765 -d _studio`). Screenshot it, give the user the URL, and ask them to pick or merge.

### Phase 5 — Hero options (pick one)
Set up the project (stack below), then build **three hero variants** in the chosen system at `/studio/heroes`: different compositions and copy angles from the narrative. Screenshot each at 1440×900 and 390×844, score each with the rubric, show them, and ask the user to pick. Delete the losing variants and the route afterwards.

Then write the prompt pack `_studio/prompts.md` (`assets/prompt-pack-template.md`): the chosen Look, the hero anchor first, then every other slot without real media. The user generates while you build.

### Phase 6 — Build section by section
Default stack: **Next.js (App Router) + TypeScript + Tailwind v4 + GSAP (ScrollTrigger, SplitText) + Lenis + Motion**, plus **React Three Fiber** only if 3D passes `references/3d.md` → *Quality floor*. Copy `assets/media.tsx` and `assets/media-manifest.ts` into the project; every image and video goes through `<Media slot="…" />`.
For each section, in story order:
1. Build it with its copy from `content.md`, a composition from `design-principles.md`, and a recipe from `recipes.md` if motion is needed.
2. Screenshot at 1440 and 390.
3. Run the critique loop (`design-principles.md` §9) and the rubric.
4. Fix anything below 4 before the next section.

When media arrives in `./media-inbox/`, check generated files with `art-direction.md` §9, then follow `imagery.md` §4 to swap them in.

### Phase 7 — Quality gate
Run everything in `references/quality.md`, including the rubric for the whole page. Show stills (3 widths plus reduced motion), Lighthouse, rubric scores and fixes.

### Phase 8 — Handoff
- **Stack and assets:** the stack, every asset with its licence, and media status (real, stock or placeholder).
- **Client deliverables:** the shot list or prompt pack for missing media (`imagery.md` §8) and the open `[[client: …]]` facts.
- **Maintenance:** how to swap content, and known limits.

## Reference files
- `references/decide.md` — the studio's judgement: research budget, defaults by site type, adjusting from the brief
- `references/strategy.md` — the narrative: insight, positioning, big idea, proof, voice, story arcs, tests
- `references/copy.md` — copy system: voice, headline approaches, section patterns, microcopy, editing pass, banned phrases
- `references/blueprints.md` — what each site type needs, section by section, with trust and conversion elements
- `references/design-principles.md` — hierarchy, grid, type, space, colour, compositions, components, critique loop, amateur tells
- `references/imagery.md` — asking for assets, media manifest, placeholders, swapping in media, stock rules, grading, shot list, specs, how much picture
- `references/art-direction.md` — the Look, layout-aware prompts, anchor first, video, scrub sequences, image-to-3D, checks, honesty, ffmpeg
- `references/quality-bar.md` — client-grade bar, playful ≠ cartoon, instant fails, scoring rubric
- `references/directions.md` — visual direction catalogue and the axes for making options truly different
- `references/recipes.md` — section and motion recipes with mobile/reduced-motion versions
- `references/motion.md` · `references/3d.md` — motion and 3D setup, quality floor, gotchas
- `references/resources.md` — verified free library, studios, finding references fast, licence traps
- `references/quality.md` — the QA gate
- `references/prompt-craft.md` · `references/prompts.md` — spec writing and prompt templates
- `assets/style-tiles-template.html`, `assets/media.tsx`, `assets/media-manifest.ts`, `assets/prompt-pack-template.md`, `assets/moodboard-template.html` (optional, for calibration references)

## Companion skills
- `img2threejs`: rebuild an object from an image as procedural three.js (must pass the 3D quality floor).
- `teardown`: interactive mechanism simulators and explainer videos (standalone page).
