# Art direction and generation prompts

The user generates images and video in whatever tool they like. Our job is the brief: **one Look for the whole site, one prompt per slot that knows the layout, and a pack they can paste anywhere.** Generated media is judged by the same bar as a real shoot (`quality-bar.md`). Random-looking AI images come from prompts written slot by slot with no shared direction; this file prevents that.

## 1. Where media comes from (in order)
1. **The client's real media:** product, place, people, work. An ordinary photo of the real thing beats a beautiful picture of something else.
2. **Generated from the prompt pack:** mood, places, materials, still lifes, product scenes made from real product photos, renders of unbuilt projects (labelled, §10).
3. **Honest stock or open collections,** only for generic subjects (sea, fog, texture, sky), never as the client's product, room, dish or person.
4. **No picture:** type-led or graphic-led (`imagery.md` §7).

**Never generate** the team, customers, guests, reviewers, press, or a room, dish or product the client doesn't actually have, as if it were real. A generated product shot must be made from photos of the real product and checked against them.

## 2. The Look (fixed with the style tile)
One block that every prompt inherits. Each style tile carries its own Look line; the chosen tile's Look is written in full at the top of `_studio/prompts.md`.
```
LOOK — [2–4 word name, e.g. "Roastery at first light"]
Medium: [editorial photograph / architectural render / macro still life / documentary 35 mm / product on colour]
Camera: [focal lengths, aperture, height, angle — e.g. 50 mm and 100 mm macro, f/2.8, eye level or low 3/4]
Light: [source, direction, colour temperature, contrast, time — e.g. one soft window key from the left, 5200 K, no fill]
Palette: [3–5 named hex from the tile; which one dominates]
Grade: [saturation, black level, contrast, grain — e.g. low saturation, lifted blacks, fine grain, no HDR]
World: [materials, surfaces, props and locations allowed]
Never: [subject clichés for this category + the AI tells in §9]
```
- Derive every line from the narrative and the tile: palette hex, the temperature and surface axes (`directions.md` → Axes).
- Write like a photographer's brief: lens, light, surface. Drop hype words ("stunning", "8k", "hyperrealistic", "award-winning"); they pull every tool toward the same glossy AI look.
- Naming a medium or a kind of publication is fine ("a print-magazine still life"). Never name a living photographer, artist or another brand's campaign.

## 3. Prompt anatomy (stills)
Write sentences, not tag lists. Most tools weight the start, so lead with medium and subject.
```
[Medium] of [subject: what, how many, material, state — specific and real].
[Composition: framing, angle, lens, where the subject sits].
[Safe zone: what stays calm for copy — "the left 40% is plain, out-of-focus wall in #2B1D16"].
[Light] [setting and background].
[Grade line from the Look].
[Aspect ratio]. No text, no logos, no watermark. [Slot nevers].
```
**Layout-aware prompts are what make it look designed.** Take each slot's safe zone from its section composition (`design-principles.md` §6):
- where the headline and CTA sit (left 40%, bottom third, centre column)
- a clear band at the top of a hero for the nav (top 10–12%)
- the mobile crop: keep the subject inside the central 50% of a 16:9 hero so a 4:5 crop still holds it, or give the phone its own slot
- the section's background colour, when the image must melt into it (cut-outs, scrub sequences)

**Mapping to any tool's fields:** prompt → the sentences · negative → the Never line · aspect → the slot's aspect · reference images → the anchor plus product photos · seed → record it. As of 2026-11, most image tools accept reference images, and most video tools accept a start frame (many also an end frame). Check the tool you're using.

## 4. Anchor first, then match
1. Generate the **anchor** first: the hero, or the most important slot. Ask for 6–8 variants.
2. The user picks one. Attach it as a style reference to every other prompt: "Match the light, grade and palette of the reference image."
3. Generate the rest in sets that share a setup (same location, same table, same light), like a shoot day (`imagery.md` §8).
4. **Contact sheet:** put every chosen image on one page at ~240 px wide, in page order (`_studio/contact-sheet.html`). Anything that reads as a different shoot is regenerated, not filtered or graded into shape.

Variants: hero 6–8 · section images 3–4 · video 2–4 takes.

## 5. Video
Make clips from **approved stills** (image-to-video). Text-to-video drifts away from the Look.
```
Start frame: [slot id of the approved still]
End frame: [slot id] — only for transformations and scrub sequences
Camera: LOCKED OFF | one slow move: [push-in 5% / lateral slide / 15° orbit], constant speed
Motion: [one natural motion: light shifting, clouds, water, fabric, steam, distant figures]
Duration: [5–10 s]; LOOP: last frame matches the first | HOLD: 0.5 s still at start and end (scrub)
Keep: subject shape, product details, light direction and palette identical to the start frame
Never: camera shake, zooms, speed ramps, morphing, objects appearing, text, faces turning to camera
```
- **Holds up:** locked or slow camera, light and weather, water, fog, fabric, smoke, architecture with a slow move, distant people, simple rigid objects turning.
- **Breaks:** hands doing tasks, close faces talking, text and logos, complex mechanisms, fast action, people interacting, long single shots. Shoot these for real or leave them out.
- **Loops:** check the seam. If it jumps, crossfade the last 0.5 s into the start, or ping-pong (forward then reversed) for motion with no direction (light, clouds), never for walking or pouring.
- The web plays muted; ignore generated audio.

## 6. Scroll-scrubbed sequences: 3D without real-time 3D
Use for rotation, assembled → exploded, before → after, construction, day → night.
1. Generate still **A** (start) and still **B** (end) with the same camera, light, margins and background. The background is the section's colour so the edges vanish.
2. Prompt for B: "Same camera, light and background as the reference. [The transformed state]. Parts stay ordered around the original silhouette; nothing leaves the frame."
3. Generate the A → B clip: locked camera, constant speed, holds at both ends.
4. Export frames (§11) and draw them on a canvas, frame = scroll progress (`recipes.md` #9).

This often beats real-time 3D on looks and payload, and passes the still test (`3d.md` → *Quality floor*) more easily. Use real-time 3D only when the visitor must control the object.

## 7. 3D models from images
When interaction earns real-time 3D and there's no CAD: generate a clean reference still → an image-to-3D tool that outputs GLB with PBR maps → inspect → `gltf-transform optimize` (`3d.md` → *Assets pipeline*) → still test.
```
Product reference for 3D reconstruction: [object], the whole object in frame with a 10% margin,
three-quarter front view, camera at the object's mid-height, 85 mm, even soft studio light with no hard
shadows or room reflections, plain neutral grey background (#808080), sharp front to back. No text, no props.
```
Generated meshes often have melted details, lighting baked into the colour map and noisy normals. If the still scores below 4 on imagery, use §6.

## 8. The prompt pack
- Every slot in `src/content/media.ts` without a `src` gets a card in `_studio/prompts.md` (template: `assets/prompt-pack-template.md`), in generation order: anchor first, then by set.
- Store the slot's `safeZone`, `prompt`, `motion` and `refs` in the manifest too, so the pack can be regenerated after copy or layout changes.
- **File name = slot id** (`hero.jpg`, `hero-loop.mp4`, `tower-build.mp4`). Files dropped in `media-inbox/` are then matched without asking (`imagery.md` §4).
- When the layout changes a slot's crop or safe zone, update its prompt and flag the slot for regeneration in the pack.

## 9. Check before swapping in
Reject and regenerate if any of these show at 100% zoom:
- garbled or invented text, signage or logos
- wrong hands, fingers, teeth or eyes; waxy skin; repeated faces in a crowd
- **the product differs from the real one** in shape, label, colour or proportion (compare side by side with the client photo)
- impossible physics: two light directions, wrong reflections, melted edges, floating objects
- the AI look: over-smooth surfaces, everything in focus, HDR glow, saturated skies, centred symmetry in every frame
- off-Look: grade, light direction or palette differs from the anchor
- a busy safe zone, or the subject lost in the mobile crop
- below `minWidth`, or upscaling artefacts
Video also: the loop seam, flicker, shimmer on fine textures, objects morphing, appearing or vanishing.

## 10. Honesty and labels
- Set `source: "generated"` and record the tool and seed in `credit` and the pack's delivered table.
- Unbuilt places (off-plan, renovations, venues not yet open): caption the image "Artist's impression".
- Product visuals must match the product as sold.
- No generated people presented as the client's team, customers, guests or reviewers: use real portraits or none.
- Check the tool's terms for commercial use before handoff.

## 11. Processing (ffmpeg)
If `ffmpeg` is missing, ask before installing it (`brew install ffmpeg`), or have the user export from their editor.
```bash
# hero loop: H.264 MP4 (web-optimised) + VP9 WebM, no audio, 1920 wide
ffmpeg -i in.mp4 -an -vf "scale=1920:-2" -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p -movflags +faststart public/media/hero-loop.mp4
ffmpeg -i in.mp4 -an -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 0 -crf 36 -row-mt 1 public/media/hero-loop.webm
# poster from the first frame
ffmpeg -i in.mp4 -frames:v 1 -q:v 2 public/media/hero-loop-poster.jpg
# scrub frames: N frames over the clip (fps = N / duration), desktop and a lighter mobile set
mkdir -p public/media/seq/<id>/desktop public/media/seq/<id>/mobile
ffmpeg -i in.mp4 -an -vf "fps=12,scale=1600:-2" -c:v libwebp -quality 78 public/media/seq/<id>/desktop/%03d.webp
ffmpeg -i in.mp4 -an -vf "fps=6,scale=800:-2" -c:v libwebp -quality 72 public/media/seq/<id>/mobile/%03d.webp
# loop seam fix: ping-pong (only for motion with no direction)
ffmpeg -i in.mp4 -an -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[v]" -map "[v]" -c:v libx264 -crf 20 -pix_fmt yuv420p pingpong.mp4
```
Keep the hero loop ≤ 6 MB (raise `-crf` to shrink it) and a sequence at 60–150 frames. Keep a full-resolution master of every still in `media-inbox/` and export it at or above `minWidth` to `/public/media`; `next/image` makes the AVIF/WebP versions.
