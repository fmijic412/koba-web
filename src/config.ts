/**
 * $SOLKOBA — single source of truth.
 *
 * Everything that changes between "pre-launch" and "live" lives here.
 * PRE-LAUNCH CHECKLIST (see README):
 *   1. Set CONTRACT_ADDRESS once the token mints (empty string => "revealed at launch").
 *   2. Point LINKS.pumpfun at the real token page.
 *   3. Confirm TOKENOMICS numbers.
 *   4. Confirm LAUNCH_ISO (UTC).
 */

export const TOKEN = {
  name: "SOLKOBA",
  ticker: "$SOLKOBA",
  tagline: "Still Water Cuts Deepest",
  pitch:
    "The Frenzy burned his home and made the world scream. Koba chose stillness instead — and stillness is the one weapon rage can never answer.",
} as const;

/** Launch — Wednesday 24 June, 15:00 UTC. */
export const LAUNCH_ISO = "2026-06-24T15:00:00Z";

/**
 * Contract address. Leave empty until mint — the UI shows
 * "Revealed at launch" and disables copy when this is empty.
 */
export const CONTRACT_ADDRESS = "";

export const LINKS = {
  twitter: "https://x.com/sol_koba",
  telegram: "https://t.me/koba_group",
  /** Update to the exact token page at launch. */
  pumpfun: "https://pump.fun",
  /** Optional — fill in after a pool exists. */
  dexscreener: "",
} as const;

export const TOKENOMICS = [
  { label: "Total Supply", value: "1,000,000,000", sub: "1B $SOLKOBA" },
  { label: "Buy / Sell Tax", value: "0 / 0", sub: "No tax, ever" },
  { label: "Liquidity", value: "Burned", sub: "LP to the void" },
  { label: "Launch", value: "Fair", sub: "100% on pump.fun" },
] as const;

/** The Koba saga — condensed for the scroll narrative. Images live in /public/art. */
export const STORY = [
  {
    id: "peace",
    kicker: "I — The Quiet Bend",
    title: "Before the blade, there was peace.",
    body: "A gentle bend in the great river, where a family of capybaras lived without fear. This is where it all began.",
    img: "/art/01-village",
    tone: "water",
  },
  {
    id: "frenzy",
    kicker: "II — The Night It Came",
    title: "Then the Frenzy came.",
    body: "A sickness swept the valley like wildfire, turning calm creatures into screaming monsters fed by their own rage. Everything changed in a single night.",
    img: "/art/02-frenzy",
    tone: "rage",
  },
  {
    id: "sacrifice",
    kicker: "III — Their Last Gift",
    title: "His parents held back the fire.",
    body: "In their final act they set their infant son adrift on the river, trusting the current to carry him where the flames couldn't follow.",
    img: "/art/03-sacrifice",
    tone: "water",
  },
  {
    id: "river",
    kicker: "IV — Carried by the River",
    title: "The river had him now.",
    body: "Alone and too small to understand what he'd lost, the pup floated downstream into the dark. It wasn't finished with him yet.",
    img: "/art/04-river",
    tone: "water",
  },
  {
    id: "rescue",
    kicker: "V — The Hand at the Water",
    title: "Master Tama found him.",
    body: "An old hermit knelt at the shallows and lifted the half-drowned pup from the water. He saw a stillness the Frenzy had failed to break — and gave the child a name: Koba.",
    img: "/art/05-rescue",
    tone: "gold",
  },
  {
    id: "grief",
    kicker: "VI — Grief Grows Loud",
    title: "Loss grows loud in a young heart.",
    body: "For years Koba was restless and angry, haunted by a fire he could barely remember. Rage was exactly what the sickness ate.",
    img: "/art/07-grief",
    tone: "rage",
  },
  {
    id: "stillness",
    kicker: "VII — Still Water Cuts Deepest",
    title: "Stillness makes you deadly.",
    body: "Standing in a waterfall at dawn, Koba stopped fighting the water. “Rage makes you loud,” Tama told him. “Still water cuts deepest.” His calm was the one weapon the Frenzy could never eat.",
    img: "/art/06-home",
    tone: "gold",
  },
] as const;

/** The crew Koba pulled back from the rage, one by one. */
export const STILLWATER = [
  { name: "Koba", role: "The Ronin", emoji: "🗡️", desc: "Calm at the center of every storm." },
  { name: "The Heron", role: "Sharp Eyes", emoji: "🪶", desc: "First saved, never left his side." },
  { name: "The Tortoise", role: "Unmoved", emoji: "🐢", desc: "Stubborn as still water." },
  { name: "The Fox", role: "Quick Hand", emoji: "🦊", desc: "Faster than rage can think." },
  { name: "The Boar", role: "Heavy Hand", emoji: "🐗", desc: "Breaks what won't bend." },
] as const;

export const HOW_TO_BUY = [
  {
    step: "01",
    title: "Get a Solana wallet",
    body: "Install Phantom or Solflare on your phone or browser. Takes a minute, it's free.",
    href: "https://phantom.app/",
    cta: "Get Phantom",
  },
  {
    step: "02",
    title: "Fund it with SOL",
    body: "Buy SOL on any exchange and send it to your wallet, or buy directly inside Phantom.",
    href: "https://www.coinbase.com/how-to-buy/solana",
    cta: "Buy SOL",
  },
  {
    step: "03",
    title: "Swap for $SOLKOBA",
    body: "Open the pump.fun page, paste the contract address, and swap your SOL for $SOLKOBA.",
    href: LINKS.pumpfun,
    cta: "Open pump.fun",
  },
  {
    step: "04",
    title: "Join The Stillwater",
    body: "Hold, stay calm, and join the community on X and Telegram. Loud dies. Calm rides.",
    href: LINKS.telegram,
    cta: "Join Telegram",
  },
] as const;
