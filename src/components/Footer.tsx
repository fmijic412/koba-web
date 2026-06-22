import { LINKS, TOKEN } from "../config";
import { XIcon, TelegramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-12">
      <div className="container-koba">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt={TOKEN.ticker} className="h-10 w-10" />
            <span className="font-display text-2xl uppercase tracking-wider text-white">
              SOL<span className="text-gradient">KOBA</span>
            </span>
          </a>

          <p className="max-w-md font-jp text-lg text-gold-light/80">
            静水流深 — Still water runs deep.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-water/50 hover:text-water-light"
            >
              <XIcon size={18} />
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-water/50 hover:text-water-light"
            >
              <TelegramIcon size={20} />
            </a>
            <a
              href={LINKS.pumpfun}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-water to-water-glow px-5 py-2.5 font-display text-sm uppercase tracking-widest text-ink-950 shadow-glow transition-transform hover:scale-105"
            >
              Buy on pump.fun
            </a>
          </div>

          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-slate-500">
            {TOKEN.ticker} is a community meme token with no intrinsic value or
            expectation of financial return. It is for entertainment only. Crypto
            is highly volatile — never invest more than you can afford to lose, and
            always do your own research. This site is a fan-driven tribute and is
            not financial advice.
          </p>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {TOKEN.ticker} · The Stillwater stands forever.
          </p>
        </div>
      </div>
    </footer>
  );
}
