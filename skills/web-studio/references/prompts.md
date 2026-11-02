# Prompt templates

Fill the [brackets]. These are for you (Claude) to run through the workflow, or for the user to paste.

## Brief summary (end of Phase 0)
```
Subject: [what it is, in one line]
Audience: [who, what they care about]
Goal: [the one action]
Feeling: [3 adjectives] — not: [what it must not feel like]
Constraints: [assets available, must-have sections, deadline, existing stack]
```

## Narrative (Phase 1)
```
Using strategy.md, write the one-page narrative for [brand]: audience + tension, insight (use 2–3 of the
insight methods), positioning sentence, big idea, promise, 3 proof facts, personality (this-not-that ×3),
voice rules + 2 sample lines, story arc with beats mapped to sections, messaging hierarchy, sitemap.
Run the so-what, competitor-swap, repeat and proof tests; rewrite anything that fails. Keep it to one page.
```

## Content (Phase 2)
```
Take the [site type] blueprint, order its sections by the story arc, and write final copy for every section
with copy.md: headline (vary the approach per section), subhead, body, CTA wording, microcopy.
Climb the specificity ladder on every line; mark unknown facts [[client: …]]; run the editing pass.
Then list every image/video slot with a shot description, aspect and min width in media.ts and assets.md.
```

## Style tiles (Phase 4)
```
Create 3 visual systems for the same real content that differ on at least 3 axes (directions.md → Axes).
Each: name + why it fits the narrative, palette (60/30/10, named hex, accent job), type pair + scale,
buttons/links, radius, image treatment (grade recipe; real media, stock or placeholder shot), a mini hero
and a proof section using the real headline and copy. Check each against quality-bar.md's instant fails
and frontend-design's default traits; revise anything generic before showing.
```

## Look (with each style tile, Phase 4)
```
Write the Look for [tile name] with art-direction.md §2: medium, camera, light, palette (the tile's hex),
grade, world, never. Derive each line from the narrative and the tile's axes. No hype words.
```

## Prompt pack (after the hero pick)
```
Build _studio/prompts.md from media.ts with assets/prompt-pack-template.md: the chosen Look, then a card per
slot without src, anchor first, then by shared setup. Each still prompt follows art-direction.md §3 and states
its safe zone from the section layout and the mobile crop; each video starts from an approved still (§5).
Store safeZone, prompt, motion and refs back in media.ts. File names = slot ids.
```

## Hero options (Phase 5)
```
In the chosen system, build 3 hero variants at /studio/heroes that differ in composition (e.g. statement type,
asymmetric type + image, full-bleed media with caption grid) and copy angle (claim, reframe, contrast).
Use real copy and <Media> slots. Screenshot each at 1440×900 and 390×844, score with the rubric, show all three.
```

## Calibration references (Phase 3, optional)
```
Find 5–8 live references from at least 3 source types (resources.md) for a [site type] that should feel
[adjectives]. Close pop-ups before screenshots. Pick 1–2 benchmarks and note exactly what quality bar they set.
```

## Section build
Write the spec first with the anatomy in `prompt-craft.md`, then:
```
Build the [section] for [direction name] using recipe [#/name] from recipes.md and the spec below.
Content: [real copy]. Beat in the story: [what this section must make the visitor feel/know].
Motion: [what moves, duration token, easing token]; reduced-motion version: [static behaviour]; mobile: [behaviour].
Use only the plan's tokens. Screenshot at 375 and 1440 when done and compare with the moodboard.
```

## Model-first 3D object (adapted from the teardown method)
```
Build [object/mechanism] as a 3D scene in React Three Fiber. Reference attached: [image/cutaway].
Before drawing anything, write the model as pure functions of one input: [scroll progress 0–1 / time / slider].
Use real dimensions and numbers: [list]. Check them and show the check; flag any number you are unsure of.
Every mesh, label and number on screen reads from that one model; nothing is animated by hand.
Camera beats: [hero, 3/4, close-up, exploded, cutaway]. Fallback poster for low tier and reduced motion.
```

## Scroll story
```
Turn this narrative into a pinned scroll story: [beats].
One timeline, scrubbed (0.6–1), pinned ≤ 3 screens on desktop; stacked cards on mobile and reduced motion.
Text changes per beat; the visual [transforms how] in sync. Provide a still for every beat.
```

## Self-critique (before showing anything)
```
Render a still at every beat and every breakpoint. Look for: parts passing through each other,
text clipped or covered, labels covering what they name, numbers disagreeing with the visual,
jumps between beats (scrub in 0.2-viewport steps), anything that reads as a generic default.
List what you checked and what you fixed, and show the stills.
```

## Using free prompts from prompt shops
Free sections from motionin.design / scrolltide.co / motionsites.ai can seed an idea. Rewrite them to the chosen direction's tokens, story and copy; never ship them as-is.
