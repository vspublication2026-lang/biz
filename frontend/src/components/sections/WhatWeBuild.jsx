import { motion } from "framer-motion";
import { Flag, Globe2, Handshake, PartyPopper, Blocks } from "lucide-react";
import Sticker from "@/components/Sticker";
import Note from "@/components/Note";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import { isDark, usePalette, useSwap } from "@/components/Palette";

const BUILDS = [
  { id: "signature-properties", kicker: "We build", name: "Signature Properties", line: "Our own brands. Our own platforms.", Icon: Flag },
  { id: "licensed-brands", kicker: "We bring to new markets", name: "Licensed Brands", line: "Global ideas. Local markets.", Icon: Globe2 },
  { id: "growth-partnerships", kicker: "We build with others", name: "Growth Partnerships", line: "Built around your business.", Icon: Handshake },
  { id: "experiential-platforms", kicker: "We make it happen", name: "Experiential Platforms", line: "Designed for the moment that matters.", Icon: PartyPopper },
];

const BuildCard = ({ b, ground, ink, index }) => {
  const dark = isDark(ground);
  const text = dark ? "#FAFAFA" : ink;
  const sub = dark ? "text-white/80" : "text-biz-ink/65";
  return (
    <motion.article
      data-testid={`build-${b.id}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.85, ease: EASE, delay: (index % 2) * 0.14 }}
      whileHover={{ y: -8 }}
      className="group relative h-[380px] sm:h-[430px] overflow-hidden rounded-[30px] p-7 sm:p-9 cursor-default shadow-[0_30px_60px_-28px_rgba(17,17,17,0.4)]"
      style={{ background: ground, color: text }}
    >
      {/* decorative corner rings */}
      <span aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full border-[30px] border-white/[0.12]" />
      <span aria-hidden className="absolute -top-8 -right-44 h-72 w-72 rounded-full border-[3px] border-white/[0.08]" />
      {/* ghost number */}
      <span
        aria-hidden
        className={`absolute -bottom-10 right-6 font-display font-black leading-none text-[10rem] select-none transition-transform duration-700 ease-out group-hover:-translate-y-3 ${
          dark ? "text-white/[0.1]" : "text-biz-ink/[0.06]"
        }`}
      >
        0{index + 1}
      </span>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.18em] text-biz-ink">
            {b.kicker}
          </span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-biz-ink transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:scale-110">
            <b.Icon size={19} strokeWidth={2.25} />
          </span>
        </div>
        <div className="mt-auto">
          <h3 className="font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-[1.7rem] sm:text-[1.85rem]">
            {b.name}
          </h3>
          <p className={`mt-2.5 text-sm sm:text-[15px] font-medium leading-relaxed ${sub}`}>{b.line}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default function WhatWeBuild() {
  const palette = usePalette();
  const c = useSwap();
  return (
    <section id="what-we-build" data-testid="what-we-build-section" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div>
            <div className="mb-2">
              <Sticker tone="paper" rotate="-rotate-2">
                <Blocks size={14} strokeWidth={2.5} /> What we build
              </Sticker>
            </div>
            <h2 className="mt-3 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink max-w-3xl">
              <MaskedLine delay={0.05}>
                <span>
                  Some we build.{" "}
                  <span className="text-biz-ink/35">Some we bring to new markets.</span>{" "}
                  Some we build with others.{" "}
                  <span style={{ color: c("#D81B74") }}>Some we make happen.</span>
                </span>
              </MaskedLine>
            </h2>
          </div>
          <div className="shrink-0 lg:pt-2">
            <Note color="#FF3E8E" rotate="rotate-1" className="max-w-xs">
              Different ways to create what&rsquo;s next.
            </Note>
            <div aria-hidden className="mt-7 hidden lg:flex items-center gap-2 pr-2">
              {[0, 1, 2, 3].map((d) => (
                <span key={d} className="h-1.5 w-1.5 rounded-full bg-biz-ink/15" />
              ))}
              <span className="h-px flex-1 bg-biz-ink/10" />
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {BUILDS.map((b, i) => (
            <BuildCard
              key={b.id}
              b={b}
              index={i}
              ground={palette.cards[i] ?? "#F1F1F3"}
              ink={palette.ink[i] ?? "#111111"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
