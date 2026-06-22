import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Art from "./Art";
import Reveal from "./Reveal";
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

/** Home-page teaser: the latest released episode + the running list, linking to the full saga. */
export default function Story() {
  const released = publishedEpisodes();
  const total = EPISODES.length;
  const latest = released[released.length - 1];

  return (
    <section id="story" className="water-grid relative py-24 sm:py-32">
      <div className="container-koba">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label">The Legend of Koba</p>
          <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
            From the <span className="text-gradient-fire">Fire</span>, a{" "}
            <span className="text-gradient">Stillness</span>
          </h2>
          <p className="mt-5 text-slate-400">
            The saga unfolds episode by episode, in step with X. New chapters drop
            as the river carries Koba forward.
          </p>
        </Reveal>

        {latest ? (
          <>
            {/* Latest released episode — featured */}
            <Reveal className="mx-auto max-w-5xl">
              <div className="glass overflow-hidden lg:grid lg:grid-cols-2">
                {latest.img && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={clsx("ring-1 ring-inset", toneRing[latest.tone])}
                  >
                    <Art
                      src={latest.img}
                      alt={latest.title}
                      loading="eager"
                      className="aspect-[16/10] h-full w-full object-cover"
                    />
                  </motion.div>
                )}
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Latest Episode
                  </p>
                  <p className={clsx("mt-2 font-display text-sm uppercase tracking-[0.3em]", toneText[latest.tone])}>
                    {latest.roman} — {latest.title}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-slate-200/90">
                    {latest.body}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Running episode list */}
            <Reveal className="mx-auto mt-8 max-w-5xl">
              <div className="flex flex-wrap justify-center gap-2.5">
                {released.map((e) => (
                  <a
                    key={e.num}
                    href={withBase(`/story.html#ep-${e.num}`)}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-water/40 hover:text-water-light"
                  >
                    <span className={clsx("font-display mr-1.5", toneText[e.tone])}>{e.roman}</span>
                    {e.title}
                  </a>
                ))}
              </div>
            </Reveal>
          </>
        ) : (
          <Reveal className="mx-auto max-w-xl text-center text-slate-400">
            The first episode drops soon. Follow on X to read it the moment it's posted.
          </Reveal>
        )}

        {/* CTA to full saga */}
        <Reveal className="mt-12 text-center">
          <a href={withBase("/story.html")} className="btn-gold">
            <BookOpen size={18} />
            Read the Full Saga
            <span className="opacity-70">
              ({latest ? latest.roman : "0"} of {toRoman(total)})
            </span>
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [v, s] of map) {
    while (n >= v) {
      out += s;
      n -= v;
    }
  }
  return out;
}
