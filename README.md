# $SOLKOBA — Launch Site

Story-driven landing site for **$SOLKOBA**, the capybara ronin. *Still water cuts deepest.*
A Solana meme token launching on **pump.fun**, **Wednesday 24 June, 15:00 UTC**.

Built with **Vite + React + TypeScript + Tailwind CSS**. Static output, deployable anywhere.

---

## 🚀 Pre-launch checklist

Everything you need to flip before/at launch lives in **`src/config.ts`**:

- [ ] **Contract address** — set `CONTRACT_ADDRESS` once the token mints.
      While empty, the site shows *"Revealed at launch — beware of fakes"* and the
      copy button is disabled. Paste the address and it goes live everywhere.
- [ ] **pump.fun link** — point `LINKS.pumpfun` at the exact token page
      (currently `https://pump.fun`).
- [ ] **Launch time** — confirm `LAUNCH_ISO` (`2026-06-24T15:00:00Z`). The hero
      countdown targets this; when it hits zero it flips to *"Now Live on pump.fun"*.
      ⚠️ The source story PDF mentioned other times (7PM / 9AM UTC) — **15:00 UTC**
      is the value used here per the launch brief. Change if needed.
- [ ] **Tokenomics** — confirm the numbers in `TOKENOMICS` (supply, tax, LP, launch).
- [ ] **Logo** — replace `public/logo.svg` and `public/favicon.svg` with the official
      $SOLKOBA mark (the current ones are a "still water" placeholder).
- [ ] **Socials** — `LINKS.twitter` / `LINKS.telegram` are set to
      `x.com/sol_koba` and `t.me/koba_group`. Verify.
- [ ] **OG image** — `public/og.jpg` (1200×630) is auto-generated from the hero art;
      swap if you want custom share artwork. Also update `og:url` in `index.html`
      to the final domain.

---

## Local development

This repo lives on the WSL filesystem; Node runs inside WSL (installed via `nvm`).

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # typecheck + production build -> dist/
npm run preview  # serve the production build locally
npm run lint     # typecheck only (tsc --noEmit)
```

> Helper scripts in `.tooling/` source `nvm` automatically and are what the in-editor
> preview panel uses (`.claude/launch.json`). You can ignore them for normal `npm` use.

---

## Deploy

`npm run build` produces a fully static `dist/`. Deploy to any static host:

- **Vercel / Netlify / Cloudflare Pages**: framework preset *Vite*, build
  `npm run build`, output directory `dist`.
- Or upload `dist/` to any static file host / S3 / nginx.

No backend, no environment variables, no wallet/on-chain code — it's a marketing
landing that links out to pump.fun for buying.

---

## Content & art

- Brand art lives in `public/art/` (cel-shaded illustrations from the Koba story,
  `.webp` with `.jpg` fallback). Story copy and the gallery list live in `src/config.ts`
  and `src/components/Gallery.tsx`.
- Sections (in order): Hero + countdown · Contract bar · Story · Tokenomics ·
  How to Buy · Gallery · The Stillwater (community) · Footer.

## Structure

```
src/
  config.ts            # ← single source of truth (edit this for launch)
  App.tsx              # section composition
  hooks/useCountdown.ts
  components/
    Nav  Hero  Countdown  ContractBar  Story
    Tokenomics  HowToBuy  Gallery  Community  Footer
    Art  Reveal  icons
public/
  art/                 # illustrations (webp + jpg)
  logo.svg favicon.svg og.jpg
```

---

*$SOLKOBA is a community meme token for entertainment only — no intrinsic value, not
financial advice. DYOR.*
