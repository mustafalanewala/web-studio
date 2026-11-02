# Imagery, video and placeholders

Imagery decides whether a site looks premium. The rule: **ask the client early, design with placeholders that describe the shot, hand over a prompt pack for anything they'll generate, and swap in real media as it arrives.** Never block the build on missing images, and never fake a product with shapes.

## 1. Ask early (in Phase 0)
Ask what exists, with AskUserQuestion: logo files · product photos · lifestyle/location photos · team portraits · video · renders or 3D/CAD · brand guidelines. Ask whether they'll generate missing images or video from our prompts (any tool). Tell the user where to put files: `./media-inbox/` in the project (any names; Claude sorts them).

## 2. The media manifest
Every image or video slot in the site is listed in `src/content/media.ts` (single source of truth):
```ts
export interface MediaSlot {
  id: string;                 // "hero", "product-ethiopia", "roastery-wide"
  kind: "image" | "video";
  src?: string;               // set when real media exists, e.g. "/media/hero.jpg"
  poster?: string;            // video poster
  alt: string;                // describes the real content; for placeholders, the intended shot
  aspect: string;             // "16/9", "4/5", "1/1"
  shot: string;               // art direction: subject, angle, light, mood, background
  minWidth: number;           // e.g. 2400 for full-bleed, 1200 for cards
  safeZone?: string;          // what stays calm for copy and crops: "left 40%; top 12% for nav"
  prompt?: string;            // generation prompt built from the Look (art-direction.md)
  motion?: string;            // video: camera, motion, duration, loop or hold
  refs?: string[];            // slot ids or files to attach as references, anchor first
  source?: "client" | "stock" | "generated";
  credit?: string;            // photographer / licence for stock; tool + seed if generated
}
```
Mirror it as a human table in `./_studio/assets.md` (slot · page/section · shot · size · status) so the client knows exactly what to shoot or send.

## 3. The placeholder component
`<Media slot="hero" />` renders the real image/video when `src` exists; otherwise a **designed placeholder**:
- the slot's aspect ratio, filled with a tone from the palette (a subtle gradient, not grey)
- a small caption block: slot id, the shot description, and the required size
- the same crop, radius and position as the final image, so the layout never jumps when real media arrives

Placeholders must look intentional in reviews: aligned, on palette, labelled. Never use grey boxes or broken-image icons.

## 4. Swapping in real media
When the user adds files (to `./media-inbox/` or in chat):
1. Match each file to a slot (file name = slot id; ask if unclear) and check the size against `minWidth`. Generated files must pass `art-direction.md` §9 first.
2. Export to `/public/media/<slot-id>.<ext>`: AVIF/WebP plus a JPG fallback via `next/image`, video as MP4 (H.264) + WebM with a poster.
3. Apply the project's grade (§6) if needed.
4. Set `src`, `alt`, `source`, `credit` in `media.ts`; update `assets.md` status.
5. Rebuild, screenshot the affected sections and re-check the crop and focal point.

## 5. Generated media and interim stock
**Generated (preferred for anything specific):** write the Look and a prompt per slot with `art-direction.md`, deliver `_studio/prompts.md`, and swap files in as they arrive.

**Stock (only for generic subjects):** if the user wants something better than placeholders before the shoot, use Pexels/Unsplash with API keys from environment variables only.
- **Choose editorial frames:** natural or dramatic directional light, texture, hands, process, macro detail, honest places.
- **Reject:** people posing for the camera, staged offices, over-saturated HDR, watermark-style compositions, mismatched styles.
- **Size:** download at the slot's `minWidth` or larger (Pexels: `?auto=compress&cs=tinysrgb&w=2400`).
- **Record** the photographer and licence in `media.ts` and mark `source: "stock"`, so the client knows what to replace.

## 6. One grade
Pick one treatment for all photos (warmth, contrast, black level, saturation) and apply it consistently: pre-processed exports when possible, or a single CSS filter recipe stored as a token. Mixed grades are the fastest way to look cheap.

## 7. When imagery is weak or missing
Choose a direction that doesn't depend on photography:
- **Type-led:** big statements, editorial layout, numbers.
- **Graphic-led:** a brand pattern, shapes from the logo, a colour system, original SVG illustration.
- **Product on colour:** cut-outs on art-directed colour fields (only with real product shots).
- **Motion-led:** kinetic type or shader ambience, used with restraint.

## 8. Shot list for the client (generate from the manifest)
For each slot: purpose, subject, framing (wide/medium/macro), angle, light, background/props, orientation and aspect, minimum resolution, and delivery format. Group by location and setup so it can be shot in one day. Slots the user will generate get a card in the prompt pack instead (`assets/prompt-pack-template.md`).

## 9. Specs
| Use | Size | Format |
|---|---|---|
| Full-bleed hero | ≥ 2400 px wide | AVIF/WebP + JPG, focal point set |
| Section image | ≥ 1600 px | same |
| Card / product | ≥ 1200 px, consistent aspect | same, consistent background |
| Hero video | 1080p, 8–15 s loop, ≤ 6 MB | MP4 H.264 + WebM, muted, playsinline, poster |
| Logo | SVG | currentColor where possible |
Alt text describes what's in the image and why it matters; decorative images get `alt=""`.

## 10. How much picture (rules of thumb)
From taste-skill's study of top-rated sites (MIT); use them as defaults, not laws:
- Pictures fill about a third of the scrolled page, and at least one screen in four has none.
- A picture either leads its screen (≥ 60% of it) or stays small (≤ 10%). Avoid screen after screen at 20–40%.
- 6–12 pictures per page (never fewer than 4), in 3–5 kinds of placement, never the same placement twice in a row.
- Two aspect ratios cover at least 75% of the pictures (e.g. 4:5 portraits, 16:9 or 3:2 landscapes).
- One moving picture per screen: 5–15 s, muted, looped, with a poster, paused off screen.
- Only display text sits on a picture (headline, one line, one action); body text goes beside or below it.
