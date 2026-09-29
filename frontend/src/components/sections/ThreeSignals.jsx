import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Radar, DoorOpen, ArrowUpRight, Activity } from "lucide-react";
import Sticker from "@/components/Sticker";
import Note from "@/components/Note";
import { usePalette } from "@/components/Palette";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
// Tilt only from `sm` up — a rotated full-width card clips its corners on phones.
const useCanTilt = () => {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const sync = () => setOk(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return ok;
};
const SIGNALS = [
  {
    id: "people",
    word: "THE RIGHT PEOPLE",
    line: "Who matters.",
    color: "#D81B74",
    Icon: Users,
    offset: "sm:mt-0",
    tilt: -2.5,
  },
  {
    id: "intelligence",
    word: "THE RIGHT INTELLIGENCE",
    line: "What matters.",
    color: "#6D28D9",
    Icon: Radar,
    offset: "sm:mt-16",
    tilt: 1.5,
  },
  {
    id: "opportunities",
    word: "THE RIGHT OPPORTUNITIES",
    line: "What comes next.",
    color: "#FF3E8E",
    Icon: DoorOpen,
    offset: "sm:mt-6",
    tilt: -1.5,
  },
];
const PATH = "M0 130 C 200 20, 400 240, 600 130 C 800 20, 1000 240, 1200 130";
const SignalCard = ({ s, index }) => {
  const { Icon } = s;
  const canTilt = useCanTilt();
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5 + index * 0.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.7 }}
      className="h-full"
    >
    <motion.article
      data-testid={`signal-${s.id}`}
      initial={false}
      animate={{ rotate: canTilt ? s.tilt : 0 }}
      whileHover={{ rotate: 0, y: -10 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="group relative h-full overflow-hidden rounded-[28px] bg-white p-7 sm:p-8 lg:p-9 shadow-[0_24px_60px_-30px_rgba(17,17,17,0.35)] ring-1 ring-biz-ink/[0.06] cursor-default"
    >
      {/* colour wash that swells on hover */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-2xl opacity-[0.35] transition-all duration-700 ease-out group-hover:scale-[2.2] group-hover:opacity-50"
        style={{ background: s.color }}
      />
      {/* ghost number */}
      <span
        aria-hidden
        className="absolute -bottom-5 -right-1 font-display font-black leading-none text-[6.5rem] select-none text-biz-ink/[0.05] transition-transform duration-700 ease-out group-hover:-translate-y-3"
      >
        0{index + 1}
      </span>
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="relative inline-flex">
            {[0, 1].map((k) => (
              <motion.span
                key={k}
                aria-hidden
                className="absolute inset-0 rounded-2xl border-2"
                style={{ borderColor: s.color }}
                animate={{ scale: [1, 1.9], opacity: [0.55, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: index * 0.5 + k * 1.3 }}
              />
            ))}
            <span
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:scale-110"
              style={{ background: s.color, boxShadow: `0 14px 30px -12px ${s.color}` }}
            >
              <motion.span
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                className="inline-flex"
              >
                <Icon size={22} strokeWidth={2.25} />
              </motion.span>
            </span>
          </span>
          <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-biz-ink/40">
            Signal 0{index + 1}
          </span>
        </div>
        <h3
          className="mt-10 sm:mt-12 font-display font-extrabold uppercase tracking-[-0.03em] leading-[0.95] text-[1.75rem] sm:text-[clamp(1.15rem,2.1vw,2rem)] flex flex-wrap gap-x-[0.25em]"
          style={{ color: s.color }}
          aria-label={s.word}
        >
          {s.word.split(" ").map((w, wi, words) => {
            // running letter index so the hover lift still ripples across the whole title
            const before = words.slice(0, wi).reduce((t, x) => t + x.length, 0);
            return (
              <span key={wi} className="inline-flex">
                {w.split("").map((ch, ci) => (
                  <span
                    key={ci}
                    aria-hidden
                    className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                    style={{ transitionDelay: `${(before + ci) * 28}ms` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            );
          })}
        </h3>
        <p className="mt-4 text-lg sm:text-xl font-medium text-biz-ink/75">{s.line}</p>
        <div className="mt-auto pt-8 flex items-center gap-3 text-sm font-semibold text-biz-ink/50 transition-colors duration-300 group-hover:text-biz-ink">
          <span className="relative h-px flex-1 overflow-hidden bg-biz-ink/10">
            <span
              className="absolute inset-y-0 left-0 w-0 transition-all duration-700 ease-out group-hover:w-full"
              style={{ background: s.color }}
            />
          </span>
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.article>
    </motion.div>
  );
};
/** "everywhere" — a palette gradient that keeps sweeping across the word (see .text-sweep). */
const Everywhere = () => (
  <span data-testid="everywhere-word" className="text-sweep inline-block">
    everywhere.
  </span>
);
export default function ThreeSignals() {
  const palette = usePalette();
  const signals = SIGNALS.map((sig, i) => ({ ...sig, color: palette.signals[i] ?? sig.color }));
  return (
    <section id="signals" data-testid="three-signals-section" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="mb-2">
              <Sticker tone="paper" rotate="-rotate-2">
                <Activity size={14} strokeWidth={2.5} /> Three signals
              </Sticker>
            </div>
            <h2 className="mt-3 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink">
              <MaskedLine delay={0.05}>
                Ideas are <Everywhere />
              </MaskedLine>
              <MaskedLine delay={0.2}>Access is not.</MaskedLine>
            </h2>
          </div>
          <Note color="#D81B74" rotate="rotate-1" className="max-w-xs">
            Bizora brings them closer.
          </Note>
        </Reveal>
        <div className="relative">
          <div className="hidden sm:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 1200 260" preserveAspectRatio="none" fill="none">
              <defs>
                <linearGradient id="sig-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D81B74" />
                  <stop offset="50%" stopColor="#6D28D9" />
                  <stop offset="100%" stopColor="#FF3E8E" />
                </linearGradient>
              </defs>
              <path d={PATH} stroke="#111111" strokeOpacity="0.06" strokeWidth="3" />
              <motion.path
                d={PATH}
                stroke="url(#sig-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 1.8, ease: EASE }}
              />
              {/* signal pulses travelling along the path */}
              {[0, 1].map((k) => (
                <circle key={k} r="7" fill="#111111" opacity="0">
                  <animateMotion dur="6s" repeatCount="indefinite" begin={`${2 + k * 3}s`} path={PATH} calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="6s" repeatCount="indefinite" begin={`${2 + k * 3}s`} />
                </circle>
              ))}
            </svg>
          </div>
          <div className="relative grid sm:grid-cols-3 gap-6 lg:gap-8">
            {signals.map((s, i) => (
              <motion.div
                key={s.word}
                initial={{ opacity: 0, x: -220, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.55 }}
                className={s.offset}
              >
                <SignalCard s={s} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
