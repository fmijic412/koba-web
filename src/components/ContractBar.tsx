import { useState } from "react";
import { Copy, Check, Lock } from "lucide-react";
import { CONTRACT_ADDRESS } from "../config";

export default function ContractBar() {
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

  return (
    <section className="relative border-y border-white/10 bg-ink-900/70">
      <div className="container-koba flex flex-col items-center gap-3 py-5 sm:flex-row sm:justify-center">
        <span className="section-label shrink-0">Contract Address</span>
        <button
          onClick={copy}
          disabled={!hasCA}
          className="group flex w-full max-w-2xl items-center justify-between gap-3 rounded-xl border border-water/20 bg-ink-950/70 px-4 py-3 text-left transition-colors hover:border-water/50 disabled:cursor-default disabled:hover:border-water/20 sm:w-auto"
        >
          <code className="truncate font-mono text-sm text-water-light sm:text-base">
            {hasCA ? CONTRACT_ADDRESS : "Revealed at launch — beware of fakes"}
          </code>
          <span className="shrink-0 text-water/70 group-hover:text-water">
            {hasCA ? (
              copied ? (
                <Check size={18} className="text-gold" />
              ) : (
                <Copy size={18} />
              )
            ) : (
              <Lock size={18} />
            )}
          </span>
        </button>
      </div>
    </section>
  );
}
