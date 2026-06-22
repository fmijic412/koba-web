import { useEffect } from "react";

/**
 * Make `/#section` links work when landing from another page.
 *
 * These pages are client-rendered, so when the browser opens a URL like
 * `/#tokenomics` (e.g. clicking a nav link from /story.html) the target section
 * hasn't been rendered yet at the moment the browser tries to jump to it — so it
 * stays at the top and the native anchor never fires again.
 *
 * This re-runs the jump once React has mounted, then a few more times as the
 * page settles (async sections like the market stats and lazy images shift
 * layout and move the target). It backs off as soon as the visitor scrolls, so
 * it never fights manual scrolling.
 */
export function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!id) return;

    let cancelled = false;

    const jump = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;
      // Override the page's `scroll-behavior: smooth` so a fresh landing jumps
      // straight to the section instead of slowly animating from the top.
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      el.scrollIntoView({ block: "start" }); // scroll-padding-top offsets the nav
      root.style.scrollBehavior = prev;
    };

    // Stop correcting the position the moment the visitor takes over.
    const release = () => {
      cancelled = true;
      cleanup();
    };
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchstart", release, { passive: true });
    window.addEventListener("keydown", release);

    const raf = requestAnimationFrame(jump);
    const timers = [120, 350, 700].map((ms) => window.setTimeout(jump, ms));

    function cleanup() {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchstart", release);
      window.removeEventListener("keydown", release);
    }

    return cleanup;
  }, []);
}
