// Copy into the project as src/content/media.ts. One entry per image/video slot on the site.
// Set `src` when real media arrives in /public/media; until then <Media> shows a labelled placeholder.
export interface MediaSlot {
  id: string;
  kind: "image" | "video";
  src?: string;
  poster?: string;
  alt: string;
  aspect: string;
  shot: string;
  minWidth: number;
  safeZone?: string;
  prompt?: string;
  motion?: string;
  refs?: string[];
  source?: "client" | "stock" | "generated";
  credit?: string;
}

const slots: MediaSlot[] = [
  {
    id: "hero",
    kind: "image",
    alt: "The product in its setting",
    aspect: "16/9",
    shot: "Hero: the product, dramatic side light, dark background, room for the headline on the left",
    minWidth: 2400,
    safeZone: "left 40% calm for headline + CTA; top 12% clear for nav; subject inside the central 50%",
  },
  {
    id: "hero-loop",
    kind: "video",
    poster: "/media/hero.jpg",
    alt: "The hero scene with light slowly shifting",
    aspect: "16/9",
    shot: "The approved hero still, camera locked, light shifting slowly, 8 s seamless loop",
    minWidth: 1920,
    motion: "LOCKED OFF; one slow light change; 8 s LOOP; no zoom, no morphing",
    refs: ["hero"],
  },
];

export const MEDIA: Record<string, MediaSlot> = Object.fromEntries(slots.map((s) => [s.id, s]));
