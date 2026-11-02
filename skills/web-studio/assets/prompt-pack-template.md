# Prompt pack — [Project]

Built from `src/content/media.ts` on [date]. Generate in any tool. Name each file after its slot id and drop it in `media-inbox/`; Claude checks it and swaps it in.

## How to use
1. Generate the **anchor** first (6–8 variants), pick one and drop it in as `[anchor-id].jpg`.
2. For every other slot, attach the anchor as a style reference, plus the product photos listed under *Refs*.
3. Tool fields: prompt → *Prompt* · negative → *Never* · aspect → the slot's aspect · reference images → *Refs* · video first/last frame → *Start* / *End*.
4. Keep the best take per slot and note the tool and seed under *Delivered*.

## Look — [name]
```
Medium:
Camera:
Light:
Palette:
Grade:
World:
Never:
```

## Order
1. [anchor-id] (anchor)
2. Set A — [shared setup]: [slot ids]
3. Set B — [shared setup]: [slot ids]
4. Video: [slot ids] (after their start frames are approved)

## Slots

### hero · image · 16:9 · ≥ 2400 px · ANCHOR
Section: Hero — [the beat it serves]
Safe zone: [left 40% calm for headline + CTA; top 12% clear for nav; subject inside the central 50% for the 4:5 phone crop]
Refs: [none (anchor) / client product photos: …]
Prompt:
```
[Medium] of [subject]. [Composition]. [Safe zone]. [Light, setting]. [Grade]. 16:9. No text, no logos, no watermark.
```
Never: [Look nevers + slot nevers]
Variants: 6–8 · Check: `art-direction.md` §9 + [slot-specific check]

### hero-loop · video · 16:9 · 8 s loop
Section: Hero (replaces the still once approved)
Start: hero (approved)
Prompt:
```
Camera: LOCKED OFF. Motion: [one natural motion]. Duration: 8 s, LOOP: last frame matches the first.
Keep: [what must stay identical]. Never: camera shake, zoom, morphing, new objects, text.
```
Takes: 2–4 · Check: seam, flicker, morphing

## Delivered
| Slot | File | Tool | Seed | Status |
|---|---|---|---|---|
| hero | | | | waiting |
