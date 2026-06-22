import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Art from "./Art";
import Reveal from "./Reveal";
import { publishedWithArt } from "../data/episodes";
import { withBase } from "../lib/paths";

// The home gallery is a teaser, not the full archive: it shows the most recent
// frames (newest first) and links to the Story page, which holds every released
// episode's art inline. This keeps the home section short as the saga grows
// toward 25 episodes. It still mirrors the released story, so it never spoils
// art ahead of your X posts.
const GALLERY_LIMIT = 8;
const ALL_ART = publishedWithArt();
const IMAGES = ALL_ART.slice(-GALLERY_LIMIT)
  .reverse()
  .map((e) => ({ src: e.img as string, alt: `${e.roman} — ${e.title}` }));
const HAS_MORE = ALL_ART.length > IMAGES.length;

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = () => setOpen(null);
  const prev = () => setOpen((i) => (i === null ? i : (i + IMAGES.length - 1) % IMAGES.length));
  const next = () => setOpen((i) => (i === null ? i : (i + 1) % IMAGES.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (IMAGES.length === 0) return null;

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container-koba">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label">The Saga in Frames</p>
          <h2 className="display mt-3 text-4xl text-white sm:text-6xl">Gallery</h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 0.08}
              className={i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""}
            >
              <button
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-all hover:ring-water/50"
              >
                <Art
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>

        {/* The full visual archive lives on the Story page. */}
        <Reveal className="mt-12 text-center">
          {HAS_MORE && (
            <p className="mb-4 text-sm text-slate-400">
              Showing the latest {IMAGES.length} — {ALL_ART.length} frames in the full saga.
            </p>
          )}
          <a
            href={withBase("/story.html")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-200 transition-colors hover:border-water/50 hover:text-water-light"
          >
            {HAS_MORE ? `See all ${ALL_ART.length} frames` : "Read the full saga"}
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <X size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 sm:left-6"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 sm:right-6"
            >
              <ChevronRight size={26} />
            </button>
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl"
            >
              <Art
                src={IMAGES[open].src}
                alt={IMAGES[open].alt}
                loading="eager"
                className="max-h-[85vh] w-auto rounded-xl object-contain shadow-glow"
              />
              <p className="mt-3 text-center text-sm text-slate-400">{IMAGES[open].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
