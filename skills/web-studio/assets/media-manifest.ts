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
  },
];

export const MEDIA: Record<string, MediaSlot> = Object.fromEntries(slots.map((s) => [s.id, s]));
