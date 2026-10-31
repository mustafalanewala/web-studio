# web-studio

A Claude Code skill that designs and builds award-level websites — brand, corporate, product/SaaS, real estate, portfolio, agency, campaign — that are 3D, animated, scroll-driven and concept-led instead of template-generic.

It runs a studio workflow:

1. **Brief** — asks a few short questions (what, who, goal, feeling, assets)
2. **Live reference hunt** — opens real galleries (Recent, Awwwards, Land-book, SiteInspire…) in a browser and screenshots 10–15 relevant sites
3. **Three directions** — a moodboard page with three genuinely different concepts: story, signature moment, palette, free fonts, motion, 3D level, layout and references
4. **Plan** — tokens, section map and a precise spec for every moving section
5. **Build** — Next.js + Tailwind + GSAP/ScrollTrigger + Lenis + Motion + React Three Fiber
6. **Strict quality gate** — Lighthouse, accessibility, reduced motion, weak-GPU frame rate, screenshots at three sizes

Everything it recommends is free for commercial use and was verified on 2026-10-31.

## Requirements

- [Claude Code](https://claude.com/claude-code)
- **Playwright plugin** (used for live references and visual QA) — in Claude Code: `/plugin install playwright@claude-plugins-official`
- **Frontend Design plugin** (recommended companion for aesthetic discipline) — `/plugin install frontend-design@claude-plugins-official`
- Node.js 20+ and Python 3 (Python only serves the local moodboard page)

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

Or start it explicitly with `/web-studio`. Claude will ask the brief questions, gather references, show you three directions to choose from, then plan and build the one you pick.

Working files are kept in a `_studio/` folder inside your project:
```
_studio/
  refs/            reference screenshots
  moodboard.html   the three directions
  plan.md          tokens, section map, section specs, asset licences, budgets
  qa/              screenshots from the quality gate
```

Tips:
- Share sites you love or hate in the brief; they shape the directions more than adjectives do.
- Ask for a section spec on its own ("write the spec for a scroll-built tower hero") — the skill writes specs in the style described in `references/prompt-craft.md`.
- Intensity follows the brief: a law firm gets restraint, a sneaker launch gets spectacle. Ask for more or less.

## What's inside

```
skills/web-studio/
  SKILL.md                     workflow and rules
  references/
    resources.md               verified free library: galleries, fonts, icons, 3D assets, shaders,
                               components, motion libraries, learning, licence traps
    directions.md              16 visual directions, 10 story structures, signature moments by site type
    recipes.md                 35 section recipes with mobile and reduced-motion versions
    prompt-craft.md            how award-level section specs are written (12 moves + template)
    prompts.md                 prompt templates for each phase
    motion.md                  motion tokens, GSAP + Lenis setup in Next.js, patterns, reduced motion
    3d.md                      when 3D earns its place, R3F setup, asset pipeline, performance tiers
    quality.md                 the strict quality gate
  assets/
    moodboard-template.html    the three-directions board
research/                      verification notes behind the library (2026-10-31)
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
- References are real sites found live, used for learning, never copied
- Every animation has a mobile and a reduced-motion version
- Done means the quality gate passes

## Licence

[MIT](LICENSE) © 2026 Mustafa Lanewala.

The skill links to and describes third-party websites, libraries, fonts and assets; each stays under its own licence and none are redistributed here. `prompt-craft.md` summarises patterns observed in the public section descriptions on [motionin.design](https://motionin.design), with short quotes for commentary; the model-first idea credits [teardown](https://github.com/elvarofficial/teardown) (MIT) and the brief → build → review method credits [dioramas](https://github.com/blendi-remade/dioramas) (MIT).
