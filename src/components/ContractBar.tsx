import CopyContract from "./CopyContract";

export default function ContractBar() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900/70">
      <div className="container-koba flex flex-col items-center gap-3 py-5 sm:flex-row sm:justify-center">
        <span className="section-label shrink-0">Contract Address</span>
        <CopyContract />
      </div>
    </section>
  );
}
