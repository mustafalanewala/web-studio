# web-studio

A Claude Code skill for designing and building award-level websites (brand, corporate, SaaS, real estate, portfolio, campaigns): brief → live reference hunt → 3 moodboard directions → build → strict QA.

- `skill/` — the skill itself (linked into `~/.claude/skills/web-studio`)
  - `SKILL.md` — workflow and rules
  - `references/` — resources, directions, recipes, motion, 3D, quality gate, prompts
  - `assets/moodboard-template.html` — the 3-directions board
- `research/` — the verification notes behind the library (2026-10-31)

Use: in any project, ask Claude to design/build a website, or type `/web-studio`.
Constraints baked in: free tools only, English, Playwright for browsing, one signature moment per site.
