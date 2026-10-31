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

## Reference hunt (Phase 1)
```
Find 10–15 live references for a [industry] site that should feel [adjectives].
Search [galleries from resources.md → Where to look] by industry and mood.
For each keeper open the real site, screenshot the first viewport at 1440×900 and its best section,
and note what to learn (layout / type / motion / 3D / colour). Skip anything that is just "a nice template".
```

## Three directions (Phase 2)
```
From the brief and the top-tier references, propose 3 client-grade directions that differ on at least 3 axes
(directions.md → Axes): one safe-strong, one bold, one wildcard concept.
Each: name, one-line concept, 3–6 beat story, signature moment, benchmark site (and what it takes from it),
asset strategy (which imagery carries it, from where, how it's graded), palette (4–6 named colours + accent job),
free type pairing with roles, motion language, 3D level and why (only if it passes 3d.md → Quality floor),
ASCII layout of hero + one key section, 3–5 references.
Then check each against the generic defaults in the frontend-design skill and the instant-fail list in
quality-bar.md; revise anything that reads as a default, a template or a cartoon.
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
