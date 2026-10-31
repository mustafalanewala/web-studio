# Prompt craft — how award-level section specs are written

Learned from studying the 54 section specs on motionin.design (public openings plus three full free specs, 2026-10-31) and the teardown method. The difference between a generic section and a remarkable one is almost always the spec. Write every signature section spec this way before building it, and use the same style when the user asks for a prompt.

## The 12 moves

1. **Open with a concept-metaphor in one line.** Name what the section *is* as a physical thing, not a UI pattern: "a portfolio as an arcade machine", "a gallery that builds itself", "a photographer's cutting mat that asks one question", "a works index built as a vortex that resolves into a chain". The metaphor decides every later choice.
2. **Describe it as a scene in the real world.** Use the vocabulary of photography, film, print and objects: prints on a hang, a camera that dollies, a lens iris that shuts, a stage, a cabinet, paper cut from card, a shelf. Real-world language gives the model real-world behaviour.
3. **Give exact numbers.** Counts (a dozen prints, eleven photos, 72 cards of 18 looks), angles (leans about 30°), sizes (fills 75 vh, a word at half the viewport height), ratios (38/62 split), colours as hex, named fonts, durations and easings (easeInOutCubic, `back.out`). Vague words ("some", "nice", "smooth") produce defaults.
4. **Choreograph in beats.** Write the timeline in order: on load → idle/rest → interaction → transition → next rest. Make beats distinct: "right, still, left — three distinct movements rather than one drift". Name the staged "second beat".
5. **Shout the non-negotiables.** Put the few words that must not be missed in CAPS: ONE line, RIGID, opens on BLACK, it WAITS, SNAPS, SHRINKS. Use sparingly — 3–8 per spec.
6. **Forbid the shortcuts.** Say what it is *not*: "nothing slides sideways", "never a fan", "no spinner, no placeholder", "no auto-advance", "never reversing, never snapping", "true lensing, not a flat CSS blur", "a true cylinder, not a linear cover-flow that unevens the gaps". Each "not" blocks a default the model would otherwise reach for.
7. **Explain why.** Give the reason behind each rule so the model makes the right call in cases you didn't list: "because parallel planes can't intersect, the depth order can never go wrong"; "because the photos are already decoded, there is nothing to wait for".
8. **One source of truth.** Drive everything from one parameter: "a single scroll-progress value drives every card's target pose", "one parameter sets both angle and height on the helix", "a single timeline scalar". This keeps parts, text and camera in sync (same idea as teardown's model-first rule).
9. **Name the mechanism.** Say how it's built when it matters: perspective divide, FLIP expand, spring toward a target pose with hold-morph-hold remap, Gaussian falloff, critically damped lerp, pixel picking from an ID map, Snell's-law displacement map, per-frame Y-sorting. The model then builds the real thing instead of a fake.
10. **Physics as feel.** Describe feel through physics: "heavy, critically damped momentum", "a patient idle drift", "a genuine overshoot", "a tension threshold — anything short springs back", "the void holds still while the cursor rests, and only follows when you wander out".
11. **Every input and every device.** List all inputs (scroll, wheel, drag, fling, arrow keys, buttons, pips, or simply waiting), the mobile version ("a single alternating column on mobile"), light/dark behaviour, reduced motion.
12. **Real content and edge cases.** Real copy, real names, real states (idle → loading → success). Cover the edges: infinite loops that wrap invisibly, duplicates never adjacent, dark photos lifted so they don't sink into a dark theme, what happens at the first and last item.

Optional: expose the key parameters in a small settings panel during development (speed, curvature, counts) so the look can be tuned live, then remove it or keep it hidden.

## Anatomy (fill in order)
```
[NAME] — [one-line concept-metaphor].

SCENE: what the visitor sees, described as a physical scene, with exact counts, sizes, positions,
colours (hex), fonts and materials. The 3–8 non-negotiables in CAPS.

MODEL: the one parameter (scroll progress / time / index) everything reads from, and how each
element's pose/colour/text derives from it.

CHOREOGRAPHY:
- On load: …
- At rest: … (what idles, what WAITS)
- On [input]: … (all inputs listed)
- Transition: … (beat by beat, distinct movements)
- End / loop: … (how it wraps or settles)

FEEL: physics and timing (springs, damping, overshoot, thresholds, durations, easings).

NOT: the shortcuts it must not take (each with the reason).

CONTENT: real copy, names, states.

DEVICES: mobile layout, touch inputs, light/dark, reduced-motion version, weak-GPU fallback.
```

## Worked example (ours, for a Dubai off-plan launch)
```
RISE — the tower is built in front of you, floor by floor, as you scroll.

SCENE: A full-viewport hero on a pale sand stage (#EDE6DA) at golden hour. ONE tower stands
dead-centre on a podium, 60 floors, its glass a deep bronze (#3B2F2A, roughness 0.5 so it never
streaks white). The project name AZURE sits behind the tower in Bodoni Moda at 28vw, ink #1C1A17,
cut by the tower's silhouette. A thin ruler runs up the right edge with floor numbers every 10.

MODEL: one scroll value p (0→1) over 300vh. Floors built = round(p × 60). Sun angle, sky colour,
ruler highlight and the floor counter all read from p — nothing is animated on its own.

CHOREOGRAPHY:
- On load: the stage is EMPTY — only the podium and the name. The first floor rises in 600 ms.
- At rest: the tower holds; a faint heat-haze shimmer on the podium only.
- On scroll (wheel, trackpad, touch, arrow keys): floors stack from the bottom up, each sliding
  down 4 m from above and settling with a small overshoot; the ruler fills in step.
- Transition: at p = 0.85 the sun drops below the horizon and every built floor's windows light
  up in a random but fixed order over 1.2 s — the tower turns from bronze to lantern.
- End: at p = 1 the camera eases back 20% to show the full skyline, and the CTA "Register interest"
  rises under the name.

FEEL: floors land heavy (critically damped, 350 ms), windows flicker on like real lights,
the camera never moves until the last beat.

NOT: no rotating tower (the story is the build, not the turntable); no fade-in floors (they must
physically arrive from above); no fake construction cranes.

CONTENT: AZURE · Dubai Creek Harbour · 60 floors · Handover Q4 2028 · "Register interest".

DEVICES: mobile — 150vh scroll, 30 floors, no camera move; reduced motion — the finished tower
lit at dusk as a still with the counter at 60; low GPU — a 60-frame image sequence instead of 3D.
```

## Long-form spec (for the signature section)
The short anatomy above is enough for supporting sections. The signature moment gets a long-form spec whose stated goal is: *another agent could rebuild it pixel-for-pixel from this document alone.* Studying full free specs (2026-10-31) showed the same skeleton every time:

1. **Title line**: `Name — what it is, with its 2–3 defining techniques`.
2. **Experience summary**: one paragraph of what the visitor sees and does, then a **quality bar** note: what makes this real and not a cheap imitation (e.g. a truly lit sphere rather than a sticker, real refraction rather than blur, every item pickable rather than a few hotspots).
3. **Stack**: exact libraries and what each one is allowed to do (e.g. GSAP only for the entrance and open/close glides, one rAF loop for everything per-frame), plus what *not* to use.
4. **Beats**: a numbered timeline of the experience: load → resting state → each interaction → open state → close. Each beat says what moves, from what to what, over how long.
5. **Assets**: a table of every file: purpose, format, size, source and licence, plus loading rules (colour space, filtering, preload, priority for the first image).
6. **Data model**: typed interfaces, a real sample record, the empty/missing-content state, display-name shorteners and search aliases.
7. **Tokens**: colours as a table (value + where used), fonts with exact weights and where each is used, grain/dither settings.
8. **Layer stack**: a DOM tree and a z-index table, saying which layers are click-through.
9. **Geometry**: exact formulas for positions and sizes, including responsive ones (e.g. camera distance from aspect ratio, ring radius from the shorter screen side).
10. **Per-frame state**: formulas for scale, opacity, blur and z from the one driving value (e.g. a smoothstepped "how close to the focus slot" factor).
11. **Core technique**: the shader / picking / physics code or pseudocode, with **⚠ gotchas** marked where implementations usually break.
12. **The loop**: pseudocode for the single animation loop, including pausing when the tab is hidden or the section is off-screen.
13. **Inputs**: every input with exact sensitivities and thresholds (drag-per-step, click-vs-drag distance, wheel threshold, momentum decay, keyboard map, touch-action, pointer capture and cancel).
14. **States and switching**: open/close layouts with pixel values per breakpoint, and how switching between two items animates without the two overlapping into a blur.
15. **Every animation**: on load, on open, on close, on switch — durations, easings, delays and keyframes. Closes always ease out; Esc backs out one level at a time.
16. **Responsiveness**: a desktop vs mobile table; name the exact sizes to verify (e.g. 390×844 and 1440×900).
17. **Tunables**: every magic number in one block.
18. **Accessibility and reduced motion**: what is skipped, what still works.
19. **Acceptance checklist**: testable checkboxes covering every beat and device.
20. **Why it works**: a few lines on the judgement calls, so later edits keep the intent.

### Lessons from full specs
- **Restraint is written down.** "Everything rests, nothing auto-plays gimmicks", "one palette, two fonts", "no saturated UI colour": the calm is specified, not hoped for.
- **Velocity drives effects.** Motion blur and scanlines scale with current speed, loud mid-flight and silent on landing, so effects read as physics rather than decoration.
- **Asymmetric enter and exit.** The incoming item fades in only once it's half in view; the outgoing item stays solid and races ahead with extra parallax. Old gives way to new instead of dissolving.
- **Switching without garbling.** When one item replaces another, the old content lifts and fades fast, the new content rises in with a delay; two titles never sit on top of each other.
- **Live commit.** The index changes the moment a gesture crosses half a step, not after an idle timer, so it feels like it snaps in your hand; the spring settles after.
- **One flick, one step.** Trackpad inertia is handled explicitly: accumulate the delta, step once at a threshold, swallow the decaying momentum tail, re-arm only on a real re-acceleration.
- **Mobile trims content, not features.** Secondary decorations hide on phones; the core interaction works by touch with the same physics; panels become bottom sheets with safe-area padding.
- **Decide theme behaviour on purpose.** A section over dark imagery may stay dark in light mode; say so and why.
- **Name the browser limits.** If an effect is Chromium-only (e.g. SVG-filter backdrop refraction), specify the fallback for Safari and Firefox.
- **Graceful empties.** Items without content still respond and show a calm "coming soon" state.

## Checklist before building from a spec
- Could another model build something *generic* from this text? If yes, add numbers, a NOT, or a reason.
- Is there one parameter that drives everything?
- Are load, rest, interaction, transition and end all described?
- Is the mobile and reduced-motion version written, not implied?
- Are the CAPS words ≤ 8 and truly the non-negotiables?

## Sources of example specs
- motionin.design gallery: every card shows the opening of its spec publicly; 9 sections are free with a (free) sign-in — Atlas, Pantheon, Folio, Cinema Reel, Momentum Slider, Drag Gallery, Membrane, Shape Trail, Liquid Type. Read for style; never paste a paid spec.
- teardown skill (installed): model-first method for mechanisms.
- dioramas repo: brief → build → review method for cinematic 3D landing pages.
