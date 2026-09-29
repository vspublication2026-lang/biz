import { motion } from "framer-motion";
import { ArrowUpRight, Blocks, Globe2, Handshake, PartyPopper } from "lucide-react";
import Sticker from "@/components/Sticker";
import Note from "@/components/Note";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import { isDark, usePalette } from "@/components/Palette";

const BUILDS = [
  { id: "signature-properties", kicker: "We build", name: "Signature Properties", line: "Our own brands. Our own platforms.", Icon: Blocks },
  { id: "licensed-brands", kicker: "We bring to new markets", name: "Licensed Brands", line: "Global ideas. Local markets.", Icon: Globe2 },
  { id: "growth-partnerships", kicker: "We build with others", name: "Growth Partnerships", line: "Built around your business.", Icon: Handshake },
  { id: "experiential-platforms", kicker: "We make it happen", name: "Experiential Platforms", line: "Designed for the moment that matters.", Icon: PartyPopper },
];

const BuildCard = ({ b, ground, ink, accent, index }) => {
  const dark = isDark(ground);
  const text = dark ? "#FAFAFA" : ink;
  return (
    <motion.article
      data-testid={`build-${b.id}`}
      initial={{ opacity: 0, y: 60, rotate: index % 2 ? 2 : -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.12 }}
      whileHover={{ y: -10, rotate: index % 2 ? -1 : 1 }}
      className="group relative h-full overflow-hidden rounded-[26px] border-2 border-biz-ink p-7 sm:p-8 shadow-[6px_6px_0_0_#111111] cursor-default"
      style={{ background: ground, color: text }}
    >
      {/* ghost number */}
      <span
        aria-hidden
        className={`absolute -bottom-6 -right-1 font-display font-black leading-none text-[6.5rem] select-none transition-transform duration-700 ease-out group-hover:-translate-y-3 ${
          dark ? "text-white/[0.08]" : "text-biz-ink/[0.06]"
        }`}
      >
        0{index + 1}
      </span>
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-biz-ink text-biz-paper transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:scale-110"
            style={{ background: accent }}
          >
            <b.Icon size={19} strokeWidth={2.25} />
          </span>
          <span className={`font-display text-[10px] font-black uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-biz-ink/50"}`}>
            {b.kicker}
          </span>
        </div>
        <h3 className="mt-8 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-[1.55rem] sm:text-[1.7rem]">
          {b.name}
        </h3>
        <p className={`mt-3 text-sm sm:text-[15px] font-medium leading-relaxed ${dark ? "text-white/75" : "text-biz-ink/65"}`}>
          {b.line}
        </p>
        <div className={`mt-auto pt-8 flex items-center gap-3 text-sm font-semibold ${dark ? "text-white/60" : "text-biz-ink/50"}`}>
          <span className={`relative h-px flex-1 overflow-hidden ${dark ? "bg-white/20" : "bg-biz-ink/10"}`}>
            <span
              className="absolute inset-y-0 left-0 w-0 transition-all duration-700 ease-out group-hover:w-full"
              style={{ background: accent }}
            />
          </span>
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.article>
  );
};

export default function WhatWeBuild() {
  const palette = usePalette();
  return (
    <section id="what-we-build" data-testid="what-we-build-section" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="mb-2">
              <Sticker tone="paper" rotate="-rotate-2">
                <Blocks size={14} strokeWidth={2.5} /> What we build
              </Sticker>
            </div>
            <h2 className="mt-3 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink">
              <MaskedLine delay={0.05}>Some we build.</MaskedLine>
              <MaskedLine delay={0.15}>
                <span className="text-biz-ink/35">Some we bring to new markets.</span>
              </MaskedLine>
              <MaskedLine delay={0.25}>Some we build with others.</MaskedLine>
              <MaskedLine delay={0.35}>
                <span className="text-sweep inline-block">Some we make happen.</span>
              </MaskedLine>
            </h2>
          </div>
          <Note color="#FF3E8E" rotate="rotate-1" className="max-w-xs">
            Different ways to create what&rsquo;s next.
          </Note>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {BUILDS.map((b, i) => (
            <BuildCard
              key={b.id}
              b={b}
              index={i}
              ground={palette.cards[i] ?? "#F1F1F3"}
              ink={palette.ink[i] ?? "#111111"}
              accent={palette.accents[i] ?? "#111111"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
