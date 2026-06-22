import Reveal from "./Reveal";
import { TOKENOMICS } from "../config";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="water-grid relative border-y border-white/10 py-24 sm:py-32">
      <div className="container-koba">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label">No Tricks · No Tax · No Rage</p>
          <h2 className="display mt-3 text-4xl text-white sm:text-6xl">Tokenomics</h2>
          <p className="mt-5 text-slate-400">
            A fair launch on pump.fun. The river belongs to everyone — no team
            allocation, no hidden bends.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOKENOMICS.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.08}>
              <div className="glass group h-full p-6 text-center transition-colors hover:border-water/40">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-water-light/70">
                  {t.label}
                </p>
                <p className="mt-4 font-display text-4xl text-white transition-colors group-hover:text-water-light">
                  {t.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{t.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
