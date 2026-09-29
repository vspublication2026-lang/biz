import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Send, Users, Compass, ListChecks } from "lucide-react";
import Sticker from "@/components/Sticker";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import { useSwap } from "@/components/Palette";

const STEPS = [
  { num: "01", title: "Know first.", desc: "We start with intelligence — original research, real data and a clear understanding of the landscape.", Icon: Search, color: "#012362" },
  { num: "02", title: "Make it matter.", desc: "We create experiences people don't just attend, but want to be part of.", Icon: Sparkles, color: "#D81B74" },
  { num: "03", title: "Make it travel.", desc: "We turn ideas into content that moves across audiences, platforms and conversations.", Icon: Send, color: "#8B5CF6" },
  { num: "04", title: "Bring the right people in.", desc: "We curate the people, perspectives and platforms that make a conversation worth having.", Icon: Users, color: "#5C86B6" },
  { num: "05", title: "Take it somewhere.", desc: "Every conversation should lead somewhere — a decision, a direction, a partnership or an opportunity.", Icon: Compass, color: "#111111" },
];

/**
 * "How we work" — the left column (heading, big outlined counter, progress dots)
 * stays pinned while each scroll stacks the five step-cards on the right,
 * every card easing over the previous one.
 */
export default function HowWeWork() {
  const c = useSwap();
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      let current = 0;
      cardRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how-we-work" data-testid="how-we-work-section" className="relative py-16 sm:py-24 overflow-clip">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* left column — pinned while the cards scroll */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="mb-2">
                  <Sticker tone="paper" rotate="-rotate-2">
                    <ListChecks size={14} strokeWidth={2.5} /> Five steps
                  </Sticker>
                </div>
                <h2 className="mt-3 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink">
                  <MaskedLine delay={0.05}>
                    <span>
                      How we{" "}
                      <span className="inline-block" style={{ color: c("#6D28D9") }}>
                        work
                      </span>
                    </span>
                  </MaskedLine>
                </h2>
                <p className="mt-4 max-w-md text-base sm:text-lg text-biz-ink/60 font-medium">
                  Intelligence first. Then experiences, content and people — all pointed at an outcome.
                </p>
              </Reveal>

              {/* big outlined counter */}
              <div className="hidden lg:flex items-center gap-6 mt-20">
                <span
                  data-testid="how-we-work-counter"
                  className="font-display font-black leading-[0.85] text-[9.5rem] select-none tabular-nums transition-colors duration-300"
                  style={{ color: c(STEPS[active].color), WebkitTextStroke: "3px #111111" }}
                >
                  {STEPS[active].num}
                </span>
                <span className="font-display font-bold text-xl text-biz-ink">{STEPS[active].title}</span>
              </div>
              <div className="hidden lg:flex items-center gap-2.5 mt-9">
                {STEPS.map((s, i) => (
                  <span
                    key={s.num}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? "h-3 w-11 border-2 border-biz-ink" : "h-3 w-3 border-2 border-biz-ink bg-transparent"
                    }`}
                    style={i === active ? { background: c(s.color) } : undefined}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* right column — stacking step cards */}
          <div className="lg:col-span-7">
            {STEPS.map((s, i) => {
              const bg = c(s.color);
              return (
                <div
                  key={s.num}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="sticky mb-6"
                  style={{
                    top: `${104 + i * 14}px`,
                    transform: active > i ? `scale(${1 - (active - i) * 0.03})` : "scale(1)",
                    transformOrigin: "top center",
                    transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <motion.article
                    data-testid={`step-${s.num}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="relative h-[440px] sm:h-[540px] overflow-hidden rounded-[30px] border-2 border-biz-ink p-8 sm:p-11 text-biz-paper shadow-[8px_8px_0_0_#111111]"
                    style={{ background: bg }}
                  >
                    {/* decorative corner rings */}
                    <span aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full border-[30px] border-white/[0.13]" />
                    <span aria-hidden className="absolute -top-10 -right-40 h-72 w-72 rounded-full border-[3px] border-white/[0.1]" />

                    <div className="flex items-start justify-between">
                      <span className="inline-block rounded-full border-2 border-biz-ink bg-biz-paper px-4 py-1.5 font-display text-[10px] font-black uppercase tracking-[0.18em] text-biz-ink shadow-[3px_3px_0_0_#111111]">
                        Step {s.num} / 05
                      </span>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-biz-ink bg-biz-paper text-biz-ink shadow-[4px_4px_0_0_#111111]">
                        <s.Icon size={20} strokeWidth={2.25} />
                      </span>
                    </div>
                    <div className="absolute bottom-9 left-8 right-8 sm:left-11 sm:right-11">
                      <h3 className="font-display font-black tracking-tight text-2xl sm:text-[2rem]">{s.title}</h3>
                      <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-white/85">{s.desc}</p>
                    </div>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-16 right-4 font-display font-black leading-none text-[13rem] text-white/[0.14] select-none"
                    >
                      {s.num}
                    </span>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
