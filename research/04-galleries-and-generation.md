# Galleries recheck + media generation (2026-11-02)

## Reference sites (curl with a browser user agent, then Playwright for anything blocked)
| Site | Result | Action |
|---|---|---|
| recent.design (godly.website redirects) | 200 | Made the first stop |
| supply.madebyoversight.com (+ /sections, /videos) | 200 | Added: 192 templates, 38 free sections after sign-in, video-style skills (Rays free, rest $9.99/mo) |
| theinternetdesigns.com | 200 | Added: UI shots from X and Pinterest, no live-site links |
| inspora.design | 200 | Added: hourly curation, web/branding/motion/3D |
| onepromptdesign.com | 200 | Added: free still-image prompts with a copy button, no login seen |
| scrolltide.co | 200 | Updated: 133 prompts, 2 free templates, $29–39/mo |
| cta.gallery, footer.design, 60fps.design, land-book.com, supahero.io | already listed | Kept |
| on.design | login redirect | Already dropped (invite-only) |
| devault.design | 403 in fetch and Playwright (Cloudflare block) | Dropped |
| locomotive.ca | 403 in fetch and Playwright (bot check) | Dropped |
| spline.design/community | 404 | Dropped |
| land-book.com, lapa.ninja, maxibestof.one, Codrops Webzibition | 403 in fetch, 200 in Playwright | Kept, marked "browser only" |
| siteinspire.com | 429 in fetch, 200 in Playwright | Kept |

## Comparable skills reviewed
- taste-skill (Leonxlnx/taste-skill, MIT, ~108k stars): keyless open-collection photo/video search script, a curated photo library, measured image-placement rules (borrowed into `imagery.md` §10 with credit). Its generation guidance is one paragraph.
- jack-scroll-asset-prompts (AgenticSupercharge): start frame / end frame / transition prompts for scroll-scrubbed video. The idea is used in `art-direction.md` §6, rewritten.
- frontend-design: anti-default taste only; no media or 3D.

## Generation landscape (blog roundups, mostly vendor or affiliate; directional only)
- Stills: GPT Image, Google's Nano Banana line, FLUX.2, Seedream and Firefly are the usual picks for photoreal product work. Most accept reference images.
- Video: Veo, Kling, Runway and Seedance are the usual picks; Sora's app and API were reported discontinued in 2026. Most take a start frame, many an end frame.
- Image-to-3D: Meshy, Tripo, Rodin (hosted); Hunyuan3D, TRELLIS 2 (open). Free tiers are often non-commercial.
The skill stays tool-neutral; this list only explains why prompts are written around reference images and start/end frames.
