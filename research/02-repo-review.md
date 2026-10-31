# Third-party repos/skills — safety + usefulness review (2026-10-31)

Read-only via `gh api` and the npm registry. Nothing executed.

| Repo | Stars | Licence | Relevance | Verdict |
|---|---|---|---|---|
| elvarofficial/teardown | 39 | MIT | Medium | Optional install, pin commit e7e668c (account created 2026-10-30, 1 commit) |
| whaleyxbt/claude-motion | 733 | MIT | Low-med | Reference: borrow motion rules + frame-review loop |
| img2threejs/img2threejs | 19,890 | Apache-2.0 | Medium | Install with `--host claude` only; skip the `img2` harness (edits ~/.claude/settings.json, links a binary) |
| MaxLiu22/Motion2MixamoRig | 1,818 | Apache-2.0 | Low | Skip (5 GB weights, SMPL-X non-commercial, Mixamo account) |
| sixtysevenlf/dsh-blender-plugin | 1,485 | BSD-3 | Low | Skip (DeepSeek harness, curl\|bash, open localhost Python port) |
| blendi-remade/dioramas | 835 | MIT (assets CC BY 4.0) | **High** | Reference: 20 cinematic 3D landing pages (Vite, three.js, GSAP, Lenis, postprocessing, Rapier), docs/ENGINE.md, brief→build→review method. FAL_KEY only for generating new models (paid) |
| Vincentwei1021/video-shotcraft | 15,190 | Apache-2.0 | Low-med | Skip for sites (Remotion promo videos) |
| lemomo-ai/lemo-opuscar | 9,810 | MIT | Low | Skip (films in code, heavy) |
| Vincentwei1021/mg-styles-15 | 2,690 | MIT | Low-med | Reference only via its online gallery (repo 567 MB) |
| anthropics/skills → frontend-design | 185k | Apache-2.0 | High | Already installed; identical to official |
| `skills` CLI (vercel-labs/skills) | 37k | MIT | — | OK; sends install telemetry — run with `DO_NOT_TRACK=1` |

Install notes:
- teardown: `npx skills add elvarofficial/teardown -g -a claude-code` copies to ~/.agents/skills and symlinks ~/.claude/skills; then `npm install && npx playwright install chromium` (~150 MB). Writes only to ./teardown-out; child processes ffmpeg/ffprobe/python3.
- img2threejs: `npx img2threejs install --host claude`; SKILL.md is 34 KB (heavy context).
