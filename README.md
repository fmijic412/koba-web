# $SOLKOBA — Launch Site

Story-driven launch site for **$SOLKOBA**, the capybara ronin. *Still water cuts deepest.*
A Solana meme token launching on **pump.fun**, **Wednesday 24 June, 15:00 UTC**.

Built with **Vite + React + TypeScript + Tailwind CSS**. Static output, two pages:

- `/` — the landing page (hero, countdown, tokenomics, how to buy, gallery, community)
- `/story.html` — **The Koba Saga**, released episode by episode

---

## 🚀 Pre-launch checklist

Everything tunable lives in **`src/config.ts`**:

- [ ] **Contract address** — set `CONTRACT_ADDRESS` once the token mints. While empty,
      the site shows *"Revealed at launch"* and the copy button is disabled. Paste the
      address and the copy button + live market stats turn on automatically.
- [ ] **pump.fun link** — point `LINKS.pumpfun` at the exact token page.
- [ ] **Launch time** — confirm `LAUNCH_ISO` (`2026-06-24T15:00:00Z`).
- [ ] **Tokenomics** — confirm the static numbers in `TOKENOMICS` (see "Tokenomics" below).
- [ ] **Logo** — replace `public/logo.svg` + `public/favicon.svg` with the official mark.
- [ ] **Socials** — `LINKS.twitter` / `LINKS.telegram` (currently `x.com/sol_koba`,
      `t.me/koba_group`).
- [ ] **Domain** — set `og:url` in `index.html` + `story.html` and add `public/CNAME`
      (see "Custom domain" below).

---

## 📖 Releasing story episodes (mirroring X)

The saga lives in one file: **`src/data/episodes.ts`**. All 25 episodes are pre-written;
only the ones marked `published: true` show on the site, so nothing spoils ahead of your
posts. **Episodes I–IV are already published.**

Each time you post the next episode on X:

1. Open `src/data/episodes.ts`, find the episode (e.g. `num: 5`).
2. Set **`published: true`**.
3. Paste your tweet link into **`xUrl`** → adds a "View on X" button (optional).
4. If it has new art, drop `<name>.webp` **and** `<name>.jpg` into `public/art/` and set
   **`img: "/art/<name>"`** (no extension). Episodes without art render a clean
   text-only card, so art is optional.
5. **Commit → merge to `master`.** GitHub Actions auto-deploys within ~1–2 min.

The home page automatically features the latest released episode and lists the rest;
the gallery grows to match. No other files to touch.

> **Note on "automatic" X → site sync:** a static site can't read X automatically without
> the paid X API (and scraping is fragile / against ToS). The `episodes.ts` + auto-deploy
> flow above is the practical equivalent: one tiny edit per post, and the site updates
> itself on merge. If you ever want true auto-sync, that needs a small backend/scheduled
> job + X API — ask and we can add it.

---

## 💹 Tokenomics: static vs. live

- **Static (manual, set once)** — total supply, buy/sell tax, LP burned, fair-launch.
  These never change. Edit `TOKENOMICS` in `src/config.ts`.
- **Live (automatic)** — price, market cap, liquidity, 24h volume/change. The
  `MarketStats` component fetches these from the **DexScreener API** by your contract
  address and refreshes every 30s. It stays **hidden until `CONTRACT_ADDRESS` is set**
  and a pool exists, so it never shows broken numbers. Zero maintenance once live.
  *(Holder count isn't in DexScreener's free API; ask if you want a paid provider for it.)*

So: you only ever hand-edit the static facts; the market numbers update themselves.

---

## Local development

This repo lives on the WSL filesystem; Node runs inside WSL (installed via `nvm`).

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173  (/ and /story.html)
npm run build    # typecheck + production build -> dist/
npm run preview  # serve the production build locally
npm run lint     # typecheck only (tsc --noEmit)
```

> Helper scripts in `.tooling/` source `nvm` automatically and are what the in-editor
> preview panel uses (`.claude/launch.json`). For normal `npm` use you can ignore them.

---

## 🌐 Deploy to GitHub Pages (automatic on merge)

A workflow at **`.github/workflows/deploy.yml`** builds and deploys on every push to
`master` (i.e. every merged PR). **One-time setup:**

1. Push these changes to GitHub.
2. Repo → **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.
3. Merge a PR to `master` (or run the workflow manually from the **Actions** tab).
   The site deploys to `https://<user>.github.io/koba-web/`.

> **Project-page URL note:** at `…github.io/koba-web/` the app needs a sub-path base.
> The workflow has a commented `VITE_BASE: /koba-web/` — uncomment it **only** if you
> are NOT using a custom domain. With a custom domain (below) the default base `/` is
> correct, so leave it commented.

---

## 🏷️ Buy & connect a custom domain (detailed)

### 1. Buy a domain
Use any registrar — good options:
- **Cloudflare Registrar** (at-cost pricing, free DNS) — recommended
- **Namecheap**, **Porkbun**, **GoDaddy**, **Squarespace Domains**

Search your name (e.g. `solkoba.xyz`, `.com`, `.fun`, `.io`), add to cart, pay. `.xyz`/`.fun`
are cheap and on-brand for meme coins. After purchase you get access to the domain's
**DNS settings** at the registrar.

### 2. Tell GitHub about the domain
- Add a file **`public/CNAME`** containing **only** your domain, e.g.:
  ```
  solkoba.xyz
  ```
  (This file ships in the build so the Actions deploy keeps the domain set. Important
  when deploying via Actions — otherwise the custom-domain setting can get cleared.)
- Repo → **Settings → Pages → Custom domain** → enter `solkoba.xyz` → **Save**.

### 3. Point DNS at GitHub Pages
In your registrar's DNS panel:

**Apex domain** (`solkoba.xyz`) — add four **A** records (and optionally **AAAA** for IPv6):
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
```

**`www` subdomain** — add a **CNAME** record:
```
CNAME   www   <user>.github.io.
```
(Replace `<user>` with the GitHub account, e.g. `natan497.github.io.`)

> Using **Cloudflare** for DNS? Set those records with the proxy **OFF** (grey cloud / "DNS
> only") for the initial GitHub certificate to issue. You can enable proxying afterward.

### 4. Finish
- DNS can take minutes to a few hours to propagate.
- Back in **Settings → Pages**, once the domain check passes, tick **Enforce HTTPS**
  (GitHub issues a free certificate automatically).
- Update `og:url` in `index.html` and `story.html` to your real domain so X/Telegram
  link previews show the right URL.

Done — `https://solkoba.xyz` now serves the site, redeploying automatically on every merge.

---

## Structure

```
src/
  config.ts              # ← links, launch time, tokenomics, contract address
  data/episodes.ts       # ← the 25-episode saga (publish flags + X links)
  pages/Home.tsx  pages/StoryPage.tsx
  main.tsx  story.tsx    # entry points for / and /story.html
  hooks/useCountdown.ts
  components/
    Nav Hero Countdown ContractBar CopyContract MarketStats
    Story StoryFull Tokenomics HowToBuy Gallery Community Footer
    Art Reveal icons
public/
  art/                   # illustrations (webp + jpg)
  logo.svg favicon.svg og.jpg  (+ CNAME once you add a domain)
index.html  story.html
.github/workflows/deploy.yml
```

---

*$SOLKOBA is a community meme token for entertainment only — no intrinsic value, not
financial advice. DYOR.*
