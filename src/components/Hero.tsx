import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Countdown from "./Countdown";
import { LINKS, TOKEN } from "../config";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background art */}
      <picture>
        <source srcSet="/art/01-village.webp" type="image/webp" />
        <img
          src="/art/01-village.jpg"
          alt="Koba's river village at dawn"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="vignette absolute inset-0" />
      {/* subtle teal aura bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-water-deep/20 to-transparent" />

      <div className="container-koba relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-water/30 bg-ink-950/40 px-4 py-1.5 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-water opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-water" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-water-light">
              Solana · Fair Launch · pump.fun
            </span>
          </div>

          <h1 className="display text-5xl leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] sm:text-7xl lg:text-8xl">
            Still Water
            <br />
            <span className="text-gradient">Cuts Deepest</span>
          </h1>

          <p className="mt-3 font-jp text-2xl text-gold-light/90 drop-shadow sm:text-3xl">
            静水 · {TOKEN.ticker}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200/90 drop-shadow sm:text-lg">
            {TOKEN.pitch}
          </p>

          {/* Countdown */}
          <div className="mt-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/80">
              The river rises in
            </p>
            <Countdown />
            <p className="mt-3 text-sm text-slate-400">
              Wednesday, 24 June · 15:00 UTC
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={LINKS.pumpfun} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Buy on pump.fun
            </a>
            <a href="/story.html" className="btn-ghost">
              Read His Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#story"
        aria-label="Scroll to story"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-water-light/70 transition-colors hover:text-water-light"
      >
        <ArrowDown className="animate-float" size={26} />
      </a>
    </section>
  );
}
