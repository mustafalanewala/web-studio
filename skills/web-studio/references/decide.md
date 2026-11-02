# Decide — the studio's judgement

Decide from the brief, the client's material and these defaults; browse only to fill a named gap. A studio lead doesn't browse for an hour before a pitch: they know the category, hold a point of view, and check one or two benchmarks.

## Research budget
- **Default: no browsing before the narrative.** Strategy and copy come from the brief, the client's own site and materials, and these reference files.
- **Quick lookups use plain fetch, not Playwright:** the client's current site, 2–3 competitor homepages for the competitor-swap test (`strategy.md`), a fact check.
- **Calibration (Phase 3) only when** the user gave no examples and no brand guidelines, or the category is unfamiliar. Cap: **10 minutes, one batch script, ≤ 6 sites, 2 benchmarks.** Start at recent.design → Websites, then Awwwards search (`resources.md`).
- **Playwright is for our own build:** style tiles, heroes, QA, plus the two benchmark screenshots for the hero gate.
- A site that blocks bots or needs a login is skipped, not fought.
- **Stop** as soon as you can name the benchmark and the one thing it does better than everyone else. More references after that dilute the direction.

## Defaults by site type
Starting points, not answers: adjust with the brief (below). Direction names are from `directions.md`, arcs from `strategy.md`, recipe numbers from `recipes.md`.

| Site type | Arc | Directions: safe · bold · wildcard | Hero | Imagery route | 3D | Motion |
|---|---|---|---|---|---|---|
| DTC / e-commerce | Product as hero · Origin and craft | Editorial luxury · Bold colour-block · Tactile / material | Product on colour, or video (#3) | Client product photos; generated scenes made from product photos | 0–1; 2 only with CAD, else a scrub sequence | Medium |
| Corporate / B2B | Problem → solution → proof · Transformation | Swiss · Monumental minimal · Documentary | Statement type + proof bar (#5) | Real work and people; generated only as texture or place | 0–1 | Low |
| SaaS | Problem → solution → proof | Dark tech precision · Glass / spatial · Kinetic typography | Real product UI (#7) | The real UI only, never generated UI; generated ambience at most | 0–1; 2 for hardware | Medium |
| Real estate / off-plan | Place · Transformation | Editorial luxury · Cinematic 3D object · Map / place-led | Full-bleed render or video; tower build (#21) | Developer renders (labelled); generated place and lifestyle; scrub sequences | 2–3, or a scrub sequence | High |
| Hospitality | Place · Origin and craft | Editorial luxury · Documentary · Tactile / material | Video of the real place (#3) | Real photos of the actual place and food; generated only for mood and texture | 0 | Medium |
| Agency / portfolio | Proof index · Manifesto | Index / archive · Kinetic typography · Brutalist | Type-as-image or work reel (#5) | The real work | 0–2 | High |
| Personal / founder | Manifesto · Journey / chapters | Monumental minimal · Editorial luxury · Kinetic typography | Statement type + one real portrait | A real portrait and real work | 0 | Low–medium |
| Event / campaign / launch | Transformation · Journey / chapters | Kinetic typography · Retro-futurist · Diorama | Kinetic headline (#1) or 3D world | A generated key visual + real past-event footage | 1–4 | High |

## Adjust from the brief
- **Feel → axes:**
  - calm, considered → still, airy
  - bold, loud → kinetic, type is the image
  - warm, human → warm, photographic
  - technical, precise → cool, grid, data
  - luxury → editorial, slow motion, restraint
  - playful → playful-premium, never cartoon (`quality-bar.md` §8)
- **Assets → imagery route:**
  - strong client photography → photo-led direction
  - product shots only → product on colour + generated scenes
  - nothing → type-led, or generated from the pack (`art-direction.md`)
  - CAD or GLB → 3D level 2–3
- **Audience:** older or B2B buyers → restraint, legibility, no scroll-jacking. Young consumer → more kinetic, one bolder interaction.
- **Time or budget short:** one signature moment, 3D level 0–1, a scrub sequence instead of real-time 3D.
- **Brief words always win** over these defaults.

## Making the call
- **Fewer, stronger.** One signature moment per site. When two ideas compete, the one closer to the big idea wins.
- **Unsure between two directions?** Show both as tiles; don't research more.
- **Log each decision** in one line with its reason in `_studio/narrative.md` → *Decisions*, so later edits keep the intent.
- **Recommend, don't survey.** Present options with a pick and a reason; the user decides.
