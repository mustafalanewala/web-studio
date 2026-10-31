# Client-grade quality bar

The test: would a premium brand pay a top studio for this and launch it proudly? If it would look at home on a template marketplace, a kids' app or a hackathon demo, it fails, however clever the interaction is.

## 1. Benchmarks first
- From the reference hunt, pick **2 benchmark sites**: the best-crafted sites in the category or an adjacent premium one.
- Every direction names its benchmark and what it takes from it (art direction, type, pacing, product presentation).
- **Hero gate:** before building past the hero, screenshot yours and the benchmark's at 1440×900 and 390×844 and compare them side by side. If a stranger could tell which one is the template, stop and fix.

## 2. Imagery decides "premium"
- **Real photography or art-directed renders carry the site.** Use high resolution, a considered crop and one image doing one job.
- **One shoot, one grade.** Treat all photos so they look like one shoot (same warmth, contrast and black level). Use a pre-processed export or a single CSS filter recipe, never per-image guesswork.
- **Editorial stock only.** Pick natural light, texture, hands, process, macro detail, place. Avoid people smiling at the camera, staged offices, over-saturated HDR and anything with visible stock clichés.
- **Product is the hero.** For commerce, the product must be photographed or rendered at the quality of the benchmark. Never use a coloured box or a placeholder shape as the product.
- **3D only when it beats a photograph,** and only with assets that pass `3d.md` → *Quality floor*. Otherwise use photography, video or a scroll-scrubbed image sequence.

## 3. Typography
- **One display family and one text family.** Emphasis comes from scale and weight, rarely from colour.
- **Real scale contrast.** Hero display around 7–14vw against 16–18 px body; generous leading for text, tight for display.
- **Headlines are set by hand:** deliberate line breaks, `text-wrap: balance`, no widows, real quotes and dashes, tabular figures for prices and data.
- **Display type gets space.** Nothing overlaps it unless the overlap is a designed, legible composition.

## 4. Layout and space
- **A real grid** (12 columns, consistent gutters) with intentional breaks.
- **Generous margins** (≥ 5vw on desktop) and one focal point per screen.
- **Rhythm:** alternate density — a dense section, then a breathing one.
- **Images align to the grid** and bleed only on purpose.

## 5. Colour
- **Mostly neutrals** drawn from the subject (paper, stone, roast, glass), plus one accent used sparingly for action and state.
- **Saturated multi-colour palettes** need a strong concept and a benchmark that proves they can look premium.
- **Contrast is checked,** including text over images and video.

## 6. Motion
- **Smooth and purposeful.** Expo or cubic easing, slow reveals, one orchestrated moment.
- **Springs only for direct manipulation,** and subtle.
- **Nothing wobbles, bounces or squashes for fun.** Physics toys belong to a different kind of site.

## 7. Craft details
- **Considered hover states:** a 1.02–1.04 image zoom, an underline that draws, a cursor change with meaning.
- **Consistent system:** one radius scale, hairlines or no lines (never mixed randomly), real focus styles.
- **Real states:** loading, empty and success, plus favicon and share image.
- **Commerce reads like a top brand's product page:** large product imagery, name, notes, origin and process, size, price, quantity, add to bag, delivery info.

## 8. Playful is not cartoon
**Playful-premium is:** wit in the copy, an unexpected art direction, bold colour blocks used with restraint, one delightful interaction, confident type.
**Cartoon is:**
- stickers and hard offset shadows on every element
- clip-art characters
- emoji-style icons
- toy physics
- primitive shapes as the product
- kraft-paper-and-crayon everything

When a brief says "playful", find a premium brand that is playful (DTC food, design objects, fashion) and benchmark against it.

## 9. Instant fails
- **Fake product:** primitive geometry (spheres, boxes, capsules) used as the product or hero object.
- **Collisions:** objects or imagery covering the headline or the main call to action.
- **Default 3D materials:** glossy plastic in the default look, with no art-directed lighting.
- **Cartoon language:** stickers or illustrated characters as the main visual system of a premium brand.
- **Neo-brutalist sticker kit:** hard drop shadows and thick outlines on every component.
- **Generic stock hero,** or mismatched photos with no shared grade.
- **Default component library:** shadcn or any kit's out-of-the-box look.
- **Motion everywhere** with no hierarchy.
- **Lorem ipsum** or placeholder product data in a client review.

## 10. Scoring rubric (each 1–5; ship only when every line is 4 or 5)
| Criterion | 5 looks like |
|---|---|
| Story | In 5 seconds a stranger knows what it is, who it's for, why it's different; every section serves a beat |
| Imagery | Every image (or labelled placeholder) is benchmark quality, graded as one shoot, and on palette |
| Typography | Confident scale, hand-set headlines, perfect details |
| Layout & space | Clear grid, generous space, one focal point per screen |
| Colour | Restrained, subject-driven palette; accent only where it acts |
| Motion | Purposeful, smooth, one memorable moment, nothing gratuitous |
| Craft details | Hover/focus/empty/loading states feel designed |
| Copy | Specific, confident, on-brand, no filler |
| Benchmark parity | Side by side with the benchmark, it holds its own |

Report the scores honestly with the side-by-side screenshot. A 3 anywhere means fix before showing.
