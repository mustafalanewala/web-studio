// Copy into the project as src/components/media.tsx, with the manifest in src/content/media.ts.
// Renders the real image/video when the slot has a src, otherwise a designed placeholder of the same size.
import Image from "next/image";
import { MEDIA, type MediaSlot } from "@/content/media";

interface Props {
  slot: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
}

function Placeholder({ m, className, fill }: { m: MediaSlot; className?: string; fill?: boolean }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${m.alt}`}
      className={`relative flex items-end overflow-hidden ${fill ? "absolute inset-0" : ""} ${className ?? ""}`}
      style={{
        aspectRatio: fill ? undefined : m.aspect,
        background: "linear-gradient(135deg, var(--placeholder-a, #3a2a22), var(--placeholder-b, #1a120e))",
      }}
    >
      <span className="m-3 max-w-[34ch] rounded-sm bg-black/45 px-2.5 py-1.5 text-[11px] leading-snug text-white/90">
        <strong className="block font-medium">{m.id}</strong>
        {m.shot} · min {m.minWidth}px · {m.aspect}
      </span>
    </div>
  );
}

export function Media({ slot, sizes = "100vw", priority, className, fill }: Props) {
  const m = MEDIA[slot];
  if (!m) throw new Error(`Unknown media slot: ${slot}`);
  if (!m.src) return <Placeholder m={m} className={className} fill={fill} />;

  if (m.kind === "video") {
    return (
      <video
        className={`${fill ? "absolute inset-0 h-full w-full" : "w-full"} object-cover ${className ?? ""}`}
        style={{ aspectRatio: fill ? undefined : m.aspect }}
        src={m.src}
        poster={m.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={m.alt}
      />
    );
  }

  return fill ? (
    <Image src={m.src} alt={m.alt} fill sizes={sizes} priority={priority} className={`object-cover ${className ?? ""}`} />
  ) : (
    <div className="relative w-full" style={{ aspectRatio: m.aspect }}>
      <Image src={m.src} alt={m.alt} fill sizes={sizes} priority={priority} className={`object-cover ${className ?? ""}`} />
    </div>
  );
}
