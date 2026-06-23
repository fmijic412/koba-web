import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Art from "./Art";
import Reveal from "./Reveal";
import { XIcon } from "./icons";
import { EPISODES, publishedEpisodes } from "../data/episodes";
import { withBase } from "../lib/paths";

const toneText: Record<string, string> = {
  water: "text-water-light",
  rage: "text-rage-light",
  gold: "text-gold-light",
};
const toneRing: Record<string, string> = {
  water: "shadow-glow ring-water/30",
  rage: "shadow-ember ring-rage/30",
  gold: "shadow-glow-gold ring-gold/30",
};

export default function StoryFull() {
  const released = publishedEpisodes();
  const total = EPISODES.length;

  return (
    <section className="water-grid relative pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="container-koba">
        {/* Header */}
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <a
            href={withBase("/#top")}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-water-light"
          >
            <ArrowLeft size={16} /> Back home
          </a>
          <p className="section-label">The Koba Saga</p>
          <h1 className="display mt-3 text-5xl text-white sm:text-7xl">
            Still Water,
            <br />
            <span className="text-gradient">Sharp Blade</span>
          </h1>
          <p className="mt-5 text-slate-400">
            The full journey of Koba — released chapter by chapter alongside X.
            {" "}
            <span className="text-water-light">{released.length}</span> of {total} episodes told.
          </p>
        </Reveal>

        {released.length === 0 ? (
          <p className="text-center text-slate-400">The saga begins soon.</p>
        ) : (
          <div className="mx-auto flex max-w-5xl flex-col gap-16 sm:gap-24">
            {released.map((e, i) => {
              const flip = i % 2 === 1;
              return (
                <article
                  key={e.num}
                  id={`ep-${e.num}`}
                  className="grid scroll-mt-8 items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  {e.img ? (
                    <motion.div
                      initial={{ opacity: 0, x: flip ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className={clsx("group", flip && "lg:order-2")}
                    >
                      <div className={clsx("overflow-hidden rounded-2xl ring-1 ring-inset", toneRing[e.tone])}>
                        <Art
                          src={e.img}
                          alt={e.title}
                          className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    // Text-only episode: a large stylized numeral panel
                    <div className={clsx("flex items-center justify-center py-10", flip && "lg:order-2")}>
                      <span className={clsx("font-display text-8xl sm:text-9xl opacity-30", toneText[e.tone])}>
                        {e.roman}
                      </span>
                    </div>
                  )}

                  <Reveal className={clsx(flip && "lg:order-1")}>
                    <p className={clsx("font-display text-sm uppercase tracking-[0.3em]", toneText[e.tone])}>
                      Episode {e.roman}
                    </p>
                    <h2 className="mt-3 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
                      {e.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-300/90">{e.body}</p>
                    {e.xUrl && (
                      <a
                        href={e.xUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-slate-200 transition-colors hover:border-water/50 hover:text-water-light"
                      >
                        <XIcon size={15} /> View on X
                      </a>
                    )}
                  </Reveal>
                </article>
              );
            })}
          </div>
        )}

        {/* Footer CTA */}
        <Reveal className="mt-20 text-center">
          <p className="font-jp text-2xl text-gold-light/80">静水流深</p>
          <p className="mt-2 text-sm text-slate-500">More episodes drop as Koba's journey continues.</p>
        </Reveal>
      </div>
    </section>
  );
}
