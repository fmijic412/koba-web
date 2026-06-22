import Reveal from "./Reveal";
import { LINKS, STILLWATER } from "../config";
import { XIcon, TelegramIcon } from "./icons";
import { withBase } from "../lib/paths";

export default function Community() {
  return (
    <section id="stillwater" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient art wash */}
      <picture>
        <source srcSet={withBase("/art/06-home.webp")} type="image/webp" />
        <img
          src={withBase("/art/06-home.jpg")}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      </picture>
      <div className="absolute inset-0 bg-ink-950/80" />

      <div className="container-koba relative">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label">For the Fans · By the Fans</p>
          <h2 className="display mt-3 text-4xl text-white sm:text-6xl">
            Join <span className="text-gradient">The Stillwater</span>
          </h2>
          <p className="mt-5 text-slate-300/90">
            A lone wanderer became a crew. One by one, Koba pulled the lost back
            from the rage. Loud dies. Calm rides. Stand with the river.
          </p>
        </Reveal>

        {/* The crew */}
        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {STILLWATER.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="glass h-full p-5 text-center transition-colors hover:border-water/40">
                <div className="text-3xl">{m.emoji}</div>
                <p className="mt-2 font-display text-lg uppercase text-white">{m.name}</p>
                <p className="text-xs uppercase tracking-widest text-water-light/70">{m.role}</p>
                <p className="mt-2 text-xs text-slate-400">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Social CTAs */}
        <Reveal className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex flex-1 items-center justify-center gap-3 p-5 font-display text-lg uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:border-water/50 hover:shadow-glow"
          >
            <XIcon size={20} />
            Follow on X
          </a>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex flex-1 items-center justify-center gap-3 p-5 font-display text-lg uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:border-water/50 hover:shadow-glow"
          >
            <TelegramIcon size={22} />
            Join Telegram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
