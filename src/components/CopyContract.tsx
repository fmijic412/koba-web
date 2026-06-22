import { useState } from "react";
import { Copy, Check, Lock } from "lucide-react";
import clsx from "clsx";
import { CONTRACT_ADDRESS } from "../config";

/**
 * Contract-address display + copy button.
 * - Before launch (CONTRACT_ADDRESS empty): shows a locked "revealed at launch"
 *   note, copy disabled.
 * - After you paste the address into config.ts: shows the address with a
 *   working copy button automatically.
 */
export default function CopyContract({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const hasCA = CONTRACT_ADDRESS.trim().length > 0;

  const copy = async () => {
    if (!hasCA) return;
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const icon = hasCA ? (
    copied ? <Check size={compact ? 15 : 18} className="text-gold" /> : <Copy size={compact ? 15 : 18} />
  ) : (
    <Lock size={compact ? 15 : 18} />
  );

  const label = hasCA ? CONTRACT_ADDRESS : "Revealed at launch — beware of fakes";

  return (
    <button
      onClick={copy}
      disabled={!hasCA}
      aria-label={hasCA ? "Copy contract address" : "Contract address revealed at launch"}
      className={clsx(
        "group flex items-center gap-3 rounded-xl border border-water/20 bg-ink-950/70 text-left transition-colors hover:border-water/50 disabled:cursor-default disabled:hover:border-water/20",
        compact ? "px-3 py-2" : "w-full max-w-2xl justify-between px-4 py-3 sm:w-auto",
      )}
    >
      <code className={clsx("truncate font-mono text-water-light", compact ? "text-xs" : "text-sm sm:text-base")}>
        {label}
      </code>
      <span className="shrink-0 text-water/70 group-hover:text-water">{icon}</span>
    </button>
  );
}
