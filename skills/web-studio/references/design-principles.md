# Design principles (design without leaning on references)

References calibrate the quality bar; these principles produce the design. Apply them in this order: content and hierarchy → grid → type → space → colour → imagery → motion.

## 1. Hierarchy
- Each screen has **one focal point**, then a second and a third. Decide them before designing.
- Create hierarchy with, in this order of strength: size, position, weight, contrast, colour. Use as few as needed.
- At most **3 levels of type importance per screen** (display, body, small). More levels read as noise.

## 2. Grid
- 12 columns with consistent gutters (24–32 px desktop, 16 px mobile) and outer margins of at least 5vw on desktop.
- Asymmetric splits look designed; even halves look default. Prefer 5/7, 4/8 or 3/9.
- Align everything to columns and a 4 or 8 px spacing scale. Break the grid only on purpose, with one element: a bleeding image or an oversized word.

## 3. Typography
- **Pairing logic:** contrast in structure, harmony in proportion. Serif display with a grotesk body, or one superfamily with width and weight contrast. Two families maximum.
- **Scale:** display 6–14vw for statements; section headings 2.5–4.5rem; body 16–19 px. Big jumps between levels read as confident; small jumps read as muddy.
- **Measure** 55–75 characters for body. **Leading** 1.45–1.6 for body, 0.85–1.0 for large display. Tracking: slightly negative for large display, slightly positive for small caps and labels.
- Set headlines by hand: line breaks on meaning, no widows, `text-wrap: balance`.
- Use tabular figures for prices and data, and real quotes, apostrophes and dashes.

## 4. Space and rhythm
- **Section padding:** 96–160 px desktop, 64–96 px mobile. Space is what makes a site feel expensive.
- **Alternate density:** a dense section (products, details), then a breathing one (statement, image).
- **Group by proximity:** related items close, unrelated far apart. The space between groups should be at least twice the space inside them.

## 5. Colour
- **60 / 30 / 10:** dominant neutral, secondary, one accent.
- **Neutrals come from the subject** (paper, stone, roast, linen, concrete), not a default grey.
- **The accent has a job** (action, state, the one thing to notice). If it appears everywhere, it means nothing.
- **Contrast:** 4.5:1 for text, including text over images.
- **Dark sections** are a deliberate rhythm change, not a default.

## 6. Composition patterns that read as designed
- **Statement:** one huge line of type, plus a small supporting line and generous space.
- **Type + one image:** an asymmetric split; image full-height on one side, text anchored to the grid on the other.
- **Full-bleed image with a caption grid:** the image carries it; small captions aligned to columns.
- **Product on a colour field:** the product photographed or cut out on a solid, art-directed colour.
- **Editorial columns:** 2–3 text columns with a pulled quote or number breaking across.
- **Index list:** a typographic list of items with hover previews (projects, coffees, rooms).
- **Number moments:** one big figure with a one-line meaning.

Avoid **identical card grids** as the default answer. Vary sizes by importance, or use a list.

## 7. Components
- **Buttons:** one primary style (filled), one secondary (outline or text). Never three competing styles.
- **Links:** underline or draw-underline. Colour alone is not enough.
- **Forms:** labels above fields, generous hit areas, inline validation.
- **Radius:** one scale (e.g. 0 / 6 / 999). Use a hairline or a shadow, not both.

## 8. Motion as hierarchy
Motion guides attention to the focal point and between beats. One orchestrated entrance, scroll reveals only where they help reading, interaction feedback everywhere. See `motion.md`.

## 9. The critique loop (run after every section)
1. **Squint test:** blur your eyes. Is the focal point still obvious?
2. **3-second test:** what is it, who is it for, what do I do next?
3. **First, second, third:** list what the eye hits in order. Is it the intended order?
4. **Alignment:** every edge on a column or a deliberate offset.
5. **Remove one thing:** what can go without loss?
6. **Real content:** no lorem; does the copy fit the layout naturally?
7. **Benchmark:** side by side with the benchmark, does it hold its own?

## 10. Amateur tells
- Everything centred.
- Even 50/50 splits everywhere.
- Too many type sizes.
- Grey-on-grey low contrast.
- Identical cards.
- Random icon sets.
- Every element with a border and a shadow.
- Stock-photo clichés.
- Accent colour everywhere.
- Cramped section spacing.
- Text over busy imagery without treatment.
- Motion on everything.
