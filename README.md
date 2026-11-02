# web-studio

A Claude Code skill that works like a small brand studio: strategy, story, copy, design and build for brand, corporate, e-commerce, SaaS, real estate, hospitality, portfolio and campaign websites. Modern and animated, with 3D only where it earns its place, and never template-generic.

It runs a studio workflow:

1. **Brief and assets:** a few short questions, plus what photos, video and brand material exist.
2. **Strategy and story:** a one-page narrative (audience tension, insight, positioning, big idea, proof, voice, story arc, sitemap) that you approve.
3. **Content:** final copy for every section, written before any layout, plus a media list with a shot description for every image and video.
4. **Calibration (optional, ≤ 10 min):** a short look at up to 6 sites, starting at recent.design. The skill decides from built-in judgement first and only browses to fill a gap.
5. **Style tiles:** three visual systems applied to your real content, each with its photographic Look; you pick one.
6. **Hero options:** three working heroes; you pick one. Then you get a **prompt pack** for every image and video still missing.
7. **Build, section by section:** Next.js, Tailwind, GSAP, Lenis and Motion (React Three Fiber only if 3D passes the quality floor). Each section is screenshotted, critiqued and scored before the next one starts.
8. **Strict quality gate:** a client-grade rubric, Lighthouse, accessibility, reduced motion and screenshots at three sizes.

**Missing photos or video never block the build.** Every media slot shows a designed placeholder that describes the shot needed. Drop real files into `media-inbox/` and Claude swaps them in. At handoff you also get a shot list for the photographer.

**Generate media in any tool.** `_studio/prompts.md` gives one Look for the whole site (lens, light, palette, grade) and one prompt per slot. Each prompt knows where the headline sits and how the phone crops the image. Generate the hero anchor first, then use it as the reference for the rest so everything looks like one shoot. Video prompts start from your approved stills. Scroll-scrubbed sequences and image-to-3D are covered too. Name files after their slot and drop them in `media-inbox/`; Claude checks them for AI tells and swaps them in.

Everything it recommends is free for commercial use and was verified on 2026-10-31 (galleries rechecked 2026-11-02). Image and video generators are your choice.

## Requirements

- [Claude Code](https://claude.com/claude-code)
- **Playwright plugin** (used for live references and visual QA) — in Claude Code: `/plugin install playwright@claude-plugins-official`
- **Frontend Design plugin** (recommended companion for aesthetic discipline) — `/plugin install frontend-design@claude-plugins-official`
- Node.js 20+ and Python 3 (Python only serves the local moodboard page)
- Optional: `ffmpeg` for web video, posters and scroll frame sequences

## Install

**Option A — skills CLI (recommended)**
```bash
npx skills add mustafalanewala/web-studio -g -a claude-code
```
`-g` installs it for all your projects. The CLI sends anonymous install telemetry; prefix with `DO_NOT_TRACK=1` to turn it off.

**Option B — clone and link (easy to update with `git pull`)**
```bash
git clone https://github.com/mustafalanewala/web-studio.git ~/web-studio
mkdir -p ~/.claude/skills
ln -s ~/web-studio/skills/web-studio ~/.claude/skills/web-studio
```

**Option C — one project only**
Copy `skills/web-studio` into your project at `.claude/skills/web-studio`.

**Check it's installed:** start a new Claude Code session and type `/web-studio`, or ask "which skills do you have?".

**Update:** `npx skills update web-studio` (Option A) or `git pull` (Option B).
**Remove:** `npx skills remove web-studio`, or delete `~/.claude/skills/web-studio`.

## Use

Open Claude Code in an empty folder (or an existing site) and ask for a website, for example:

- "Design a launch website for a 60-floor off-plan tower in Dubai Creek Harbour"
- "Redesign our agency site — it looks like every other template"
- "Build a product landing page for our AI note-taking app with a 3D hero"

Or start it explicitly with `/web-studio`. Claude asks the brief questions, writes the narrative and copy for your approval, shows three style tiles and three hero options, then builds section by section.

Working files are kept in a `_studio/` folder inside your project:
```
_studio/
  narrative.md       strategy and story (approved first)
  content.md         final copy for every section
  assets.md          every image/video slot: shot, size, status
  prompts.md         the Look + a generation prompt for every missing image/video
  style-tiles.html   the three visual systems
  refs/              calibration references (optional)
  qa/                screenshots from the quality gate
media-inbox/         drop your photos and videos here at any time
```

Tips:
- Share sites you love or hate in the brief; they shape the directions more than adjectives do.
- Ask for a section spec on its own ("write the spec for a scroll-built tower hero") — the skill writes specs in the style described in `references/prompt-craft.md`.
- Intensity follows the brief: a law firm gets restraint, a sneaker launch gets spectacle. Ask for more or less.
- Ask for prompts on their own ("give me the image and video prompts for the hero and the product section"). They follow `references/art-direction.md`.

## What's inside

```
skills/web-studio/
  SKILL.md                     workflow and rules
  references/
    decide.md                  the studio's judgement: research budget, defaults by site type
    strategy.md                narrative: insight, positioning, big idea, proof, voice, story arcs, tests
    copy.md                    copy system: voice, headlines, section patterns, microcopy, editing pass
    blueprints.md              what each site type needs, section by section
    design-principles.md       hierarchy, grid, type, space, colour, compositions, critique loop
    imagery.md                 asset requests, media manifest, placeholders, swapping media, shot list
    art-direction.md           the Look, layout-aware image/video prompts, scrub sequences,
                               image-to-3D, checks for AI tells, ffmpeg export
    quality-bar.md             client-grade bar, instant fails, scoring rubric
    resources.md               verified free library: galleries, studios, fonts, icons, 3D assets,
                               components, motion libraries, learning, licence traps
    directions.md              16 visual directions, 10 story structures, signature moments by site type
    recipes.md                 35 section recipes with mobile and reduced-motion versions
    prompt-craft.md            how award-level section specs are written (12 moves + template)
    prompts.md                 prompt templates for each phase
    motion.md                  motion tokens, GSAP + Lenis setup in Next.js, patterns, reduced motion
    3d.md                      when 3D earns its place, R3F setup, asset pipeline, performance tiers
    quality.md                 the strict quality gate
  assets/
    style-tiles-template.html  the three visual systems board
    media.tsx                  <Media> component: real image/video or a labelled placeholder
    media-manifest.ts          media slot list (single source of truth)
    prompt-pack-template.md    the prompt pack handed to whoever generates the media
    moodboard-template.html    optional board for calibration references
research/                      verification notes behind the library (2026-10-31, 2026-11-02)
```

## Optional companion skills

Reviewed for safety on 2026-10-31. Install only if you need them.

- **img2threejs** — rebuilds an object from a reference image as procedural three.js code (useful when a client has no 3D model):
  `npx img2threejs install --host claude --ref v2.0.0`
  Skip its optional `img2` harness; it edits Claude settings and installs a global binary.
- **teardown** — interactive 3D machine simulators and 60 fps explainer videos:
  ```bash
  git clone https://github.com/elvarofficial/teardown.git ~/.claude/skills/teardown
  cd ~/.claude/skills/teardown && git checkout e7e668c && npm ci && npx playwright install chromium
  ```
  Video export also needs `ffmpeg`.

## Principles baked in

- Free tools and assets only; licence traps are listed and avoided
- One signature moment per site, sized to the brief
- Concept before code; nothing is built before a direction is chosen
- Decide first, browse little: built-in judgement, research only to fill a gap
- References are real sites found live, used for learning, never copied
- Generated media is art-directed like a shoot and labelled honestly
- Every animation has a mobile and a reduced-motion version
- Done means the quality gate passes

## Licence

[MIT](LICENSE) © 2026 Mustafa Lanewala.

The skill links to and describes third-party websites, libraries, fonts and assets; each stays under its own licence and none are redistributed here. `prompt-craft.md` summarises patterns observed in the public section descriptions on [motionin.design](https://motionin.design), with short quotes for commentary; the model-first idea credits [teardown](https://github.com/elvarofficial/teardown) (MIT) and the brief → build → review method credits [dioramas](https://github.com/blendi-remade/dioramas) (MIT).
