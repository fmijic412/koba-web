import { useEffect, useState } from "react";
import { CONTRACT_ADDRESS } from "../config";

type Stats = {
  priceUsd: string;
  marketCap?: number;
  fdv?: number;
  liquidityUsd?: number;
  volume24?: number;
  change24?: number;
  url?: string;
};

const fmtUsd = (n?: number) => {
  if (n == null) return "—";
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
};

const fmtPrice = (s: string) => {
  const n = Number(s);
  if (!isFinite(n) || n === 0) return "—";
  return n < 0.01 ? `$${n.toPrecision(2)}` : `$${n.toFixed(4)}`;
};

/**
 * Live market data from DexScreener — auto-shows once CONTRACT_ADDRESS is set
 * and a pool exists. Hidden (renders nothing) before launch or if the fetch
 * fails, so it never shows broken numbers.
 */
export default function MarketStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const ca = CONTRACT_ADDRESS.trim();
    if (!ca) return;

    let alive = true;
    const load = async () => {
      try {
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${ca}`);
        if (!res.ok) return;
        const data = await res.json();
        const pairs: any[] = data?.pairs ?? [];
        if (!pairs.length) return;
        // most-liquid pair
        const p = pairs.sort(
          (a, b) => (b?.liquidity?.usd ?? 0) - (a?.liquidity?.usd ?? 0),
        )[0];
        if (!alive) return;
        setStats({
          priceUsd: p.priceUsd ?? "0",
          marketCap: p.marketCap,
          fdv: p.fdv,
          liquidityUsd: p.liquidity?.usd,
          volume24: p.volume?.h24,
          change24: p.priceChange?.h24,
          url: p.url,
        });
      } catch {
        /* offline / rate-limited — stay hidden */
      }
    };

    load();
    const id = setInterval(load, 30_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  if (!stats) return null;

  const items = [
    { label: "Price", value: fmtPrice(stats.priceUsd) },
    { label: "Market Cap", value: fmtUsd(stats.marketCap ?? stats.fdv) },
    { label: "Liquidity", value: fmtUsd(stats.liquidityUsd) },
    { label: "24h Volume", value: fmtUsd(stats.volume24) },
  ];
  const up = (stats.change24 ?? 0) >= 0;

  return (
    <div className="container-koba my-8">
      <div className="glass mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-5">
        {items.map((it) => (
          <div key={it.label} className="text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-water-light/70">
              {it.label}
            </p>
            <p className="mt-1 font-display text-2xl text-white">{it.value}</p>
          </div>
        ))}
        {stats.change24 != null && (
          <div className="text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-water-light/70">24h</p>
            <p className={clsxChange(up)}>
              {up ? "▲" : "▼"} {Math.abs(stats.change24).toFixed(1)}%
            </p>
          </div>
        )}
        {stats.url && (
          <a
            href={stats.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-water-light underline-offset-4 hover:underline"
          >
            DexScreener →
          </a>
        )}
      </div>
    </div>
  );
}

const clsxChange = (up: boolean) =>
  `mt-1 font-display text-2xl ${up ? "text-water-light" : "text-rage-light"}`;
