import { useSwap } from "@/components/Palette";

// Highlighted side note used next to section headlines: a small sticker card with a colour accent bar.
// The accent runs through the palette, so a page with its own scheme restyles it.
export default function Note({ children, color = "#8B5CF6", rotate = "rotate-1", className = "" }) {
  const c = useSwap();
  const accent = c(color);

  return (
    <div
      className={`relative rounded-2xl border-2 border-biz-ink bg-biz-paper pl-6 pr-5 py-4 shadow-[6px_6px_0_0_#111111] ${rotate} ${className}`}
    >
      <span aria-hidden className="absolute left-0 top-0 bottom-0 w-2 rounded-l-[14px]" style={{ background: accent }} />
      <span
        aria-hidden
        className="absolute -top-3 right-5 h-5 w-14 -rotate-3 rounded-sm border-2 border-biz-ink opacity-90"
        style={{ background: accent }}
      />
      <p className="font-display font-bold text-base sm:text-lg leading-snug text-biz-ink">{children}</p>
    </div>
  );
}
