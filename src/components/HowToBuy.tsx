import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { HOW_TO_BUY } from "../config";

export default function HowToBuy() {
  return (
    <section id="buy" className="relative py-24 sm:py-32">
      <div className="container-koba">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label">Four Steps to the Stillwater</p>
          <h2 className="display mt-3 text-4xl text-white sm:text-6xl">How to Buy</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {HOW_TO_BUY.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group relative flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-water/40 hover:shadow-glow"
              >
                <span className="font-display text-5xl text-water/25 transition-colors group-hover:text-water/50">
                  {s.step}
                </span>
                <h3 className="mt-4 font-display text-xl uppercase text-white">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {s.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-water-light">
                  {s.cta}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
