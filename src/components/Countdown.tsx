import { useCountdown } from "../hooks/useCountdown";
import { LAUNCH_ISO } from "../config";

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass flex h-16 w-16 items-center justify-center rounded-xl text-3xl font-display text-white tabular-nums sm:h-20 sm:w-20 sm:text-4xl shadow-glow">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-water-light/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const t = useCountdown(LAUNCH_ISO);

  if (t.done) {
    return (
      <div className="inline-flex items-center gap-3 rounded-full border border-gold/50 bg-gold/10 px-6 py-3 font-display uppercase tracking-widest text-gold-light shadow-glow-gold">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
        </span>
        Now Live on pump.fun
      </div>
    );
  }

  return (
    <div className="flex items-end gap-3 sm:gap-4">
      <Unit value={t.days} label="Days" />
      <span className="pb-7 text-3xl font-display text-water/40">:</span>
      <Unit value={t.hours} label="Hrs" />
      <span className="pb-7 text-3xl font-display text-water/40">:</span>
      <Unit value={t.minutes} label="Min" />
      <span className="pb-7 text-3xl font-display text-water/40">:</span>
      <Unit value={t.seconds} label="Sec" />
    </div>
  );
}
