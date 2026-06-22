import clsx from "clsx";
import { motion } from "framer-motion";
import Art from "./Art";
import Reveal from "./Reveal";
import { STORY } from "../config";

const toneRing: Record<string, string> = {
  water: "shadow-glow ring-water/30",
  rage: "shadow-ember ring-rage/30",
  gold: "shadow-glow-gold ring-gold/30",
};

const toneText: Record<string, string> = {
  water: "text-water-light",
  rage: "text-rage-light",
  gold: "text-gold-light",
};

export default function Story() {
  return (
    <section id="story" className="water-grid relative py-24 sm:py-32">
      <div className="container-koba">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="section-label">The Legend of Koba</p>
          <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
            From the <span className="text-gradient-fire">Fire</span>, a{" "}
            <span className="text-gradient">Stillness</span>
          </h2>
          <p className="mt-5 text-slate-400">
            One night the Frenzy took everything. What the river carried away came
            back as something the rage could never touch.
          </p>
        </Reveal>

        <div className="flex flex-col gap-20 sm:gap-28">
          {STORY.map((beat, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={beat.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, x: flip ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={clsx("group relative", flip && "lg:order-2")}
                >
                  <div
                    className={clsx(
                      "overflow-hidden rounded-2xl ring-1 ring-inset",
                      toneRing[beat.tone],
                    )}
                  >
                    <Art
                      src={beat.img}
                      alt={beat.title}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </motion.div>

                {/* Copy */}
                <Reveal className={clsx(flip && "lg:order-1")} delay={0.1}>
                  <p
                    className={clsx(
                      "font-display text-sm uppercase tracking-[0.3em]",
                      toneText[beat.tone],
                    )}
                  >
                    {beat.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
                    {beat.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300/90">
                    {beat.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
