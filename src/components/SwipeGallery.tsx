import { useEffect, useMemo, useRef, useState } from "react";

type Img = { src: string; alt?: string };

export function SwipeGallery({
  images,
  autoPlay = false,
  autoPlayMs = 4500,
}: {
  images: Img[];
  autoPlay?: boolean;
  autoPlayMs?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const safeImages = useMemo(() => images.filter((i) => i?.src), [images]);

  function scrollToIndex(i: number) {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children.item(i) as HTMLElement | null;
    if (!child) return;
    child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    const idx = Math.round(el.scrollLeft / w);
    if (idx !== active) setActive(idx);
  }

  // Optional autoplay (off by default)
  useEffect(() => {
    if (!autoPlay) return;
    if (safeImages.length <= 1) return;

    const id = window.setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % safeImages.length;
        scrollToIndex(next);
        return next;
      });
    }, autoPlayMs);

    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, autoPlayMs, safeImages.length]);

  if (safeImages.length === 0) {
    return (
      <div style={{ padding: 16, color: "rgba(244,240,232,.6)", fontWeight: 700 }}>
        Add images to <code>/public/images</code> and update the list.
      </div>
    );
  }

  return (
    <div className="swipeGallery" aria-label="Photo gallery">
      <div className="swipeTrack" ref={trackRef} onScroll={onScroll}>
        {safeImages.map((img, i) => (
          <div className="swipeSlide" key={img.src + i}>
            <img src={img.src} alt={img.alt ?? `Gallery image ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="dots" aria-label="Gallery navigation">
        {safeImages.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}