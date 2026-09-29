// Small rotated sticker label used as a section eyebrow — an icon plus a word
// or two in a bordered pill with a hard offset shadow.
export default function Sticker({ children, tone = "paper", rotate = "rotate-0", className = "" }) {
  const tones = {
    paper: "bg-biz-paper text-biz-ink border-biz-ink shadow-[3px_3px_0_0_#111111]",
    ink: "bg-biz-ink text-biz-paper border-biz-ink shadow-[3px_3px_0_0_rgba(250,250,250,0.25)]",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 font-display text-[11px] font-black uppercase tracking-[0.18em] ${
        tones[tone] ?? tones.paper
      } ${rotate} ${className}`}
    >
      {children}
    </span>
  );
}
