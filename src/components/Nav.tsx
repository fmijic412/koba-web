import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { LINKS, TOKEN } from "../config";
import { XIcon, TelegramIcon } from "./icons";

// Section links use "/#id" so they work from any page (the Story page lives
// at /story.html). The Story link points at the dedicated page.
const NAV_LINKS = [
  { label: "Story", href: "/story.html" },
  { label: "Tokenomics", href: "/#tokenomics" },
  { label: "How to Buy", href: "/#buy" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Stillwater", href: "/#stillwater" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-koba flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <a href="/#top" className="flex items-center gap-2.5 group">
          <img
            src="/logo.svg"
            alt={TOKEN.ticker}
            className="h-9 w-9 transition-transform group-hover:rotate-6 sm:h-11 sm:w-11"
          />
          <span className="font-display text-xl uppercase tracking-wider text-white sm:text-2xl">
            SOL<span className="text-gradient">KOBA</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-water-light"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-water/50 hover:text-water-light"
            >
              <XIcon />
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-water/50 hover:text-water-light"
            >
              <TelegramIcon />
            </a>
          </div>
          <a
            href={LINKS.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-water to-water-glow px-5 py-2.5 font-display text-sm uppercase tracking-widest text-ink-950 shadow-glow transition-transform hover:scale-105 sm:inline-flex"
          >
            Buy
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <div className="container-koba flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-display uppercase tracking-widest text-slate-200 hover:bg-white/5 hover:text-water-light"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3">
              <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-3 text-xs">
                X
              </a>
              <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-3 text-xs">
                Telegram
              </a>
              <a href={LINKS.pumpfun} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 !py-3 text-xs">
                Buy
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
