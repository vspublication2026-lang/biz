import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { EASE } from "@/components/Reveal";
import { usePalette, useSwap } from "@/components/Palette";
/**
 * Scroll progress (0 → 1) across a tall pinned section, measured from the live
 * bounding box every frame. Framer's useScroll caches offsets at mount, which go
 * stale when sections above this one change height, so we measure directly.
 */
const useSectionProgress = (ref) => {
  const value = useMotionValue(0);
  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      const travelled = -el.getBoundingClientRect().top;
      const p = range > 0 ? travelled / range : 0;
      value.set(Math.min(1, Math.max(0, p)));
    };
    let raf = requestAnimationFrame(function tick() {
      measure();
      raf = requestAnimationFrame(tick);
    });
    // scroll/resize listeners keep it correct even when rAF is throttled
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [ref, value]);
  return value;
};
const BELIEFS = [
  { noun: "INSIGHT", line: "Can change a strategy.", color: "#6D28D9", indent: "lg:ml-[4%]" },
  { noun: "INTRODUCTION", line: "Can open a door.", color: "#D81B74", indent: "lg:ml-[12%]" },
  { noun: "CONVERSATION", line: "Can change a relationship.", color: "#8B5CF6", indent: "lg:ml-[20%]" },
  { noun: "OPPORTUNITY", line: "Can change what’s possible.", color: "#FF3E8E", indent: "lg:ml-[28%]", final: true },
];
// scroll windows across the pinned section: one per line, then a finale where all four light up
const STEPS = BELIEFS.length;
const START = 0.05;
const SLOT = 0.76 / STEPS;
const FINALE = START + SLOT * STEPS;
/**
 * Each line: hidden → active (full colour) → dimmed once the next arrives
 * (same muted treatment as "Some we bring to new markets.") → full colour again in the finale.
 */
const Belief = ({ b, i, progress }) => {
  const appear = START + SLOT * i;
  const next = appear + SLOT;
  const isLast = i === STEPS - 1;
  const opacity = useTransform(progress, [appear - 0.03, appear + 0.05], [0, 1]);
  const y = useTransform(progress, [appear - 0.03, appear + 0.05], [34, 0]);
  const scale = useTransform(progress, [appear - 0.03, appear + 0.05], [0.97, 1]);
  const dim = useTransform(
    progress,
    [next - 0.02, next + 0.04, FINALE - 0.02, FINALE + 0.05],
    [1, isLast ? 1 : 0.3, isLast ? 1 : 0.3, 1]
  );
  return (
    <motion.div data-testid={`belief-${i + 1}`} style={{ opacity, y, scale }} className={b.indent}>
      <motion.div style={{ opacity: dim }}>
        <h3 className="font-display font-black uppercase tracking-tight leading-[0.95] text-biz-ink text-[clamp(1.5rem,3.6vw,2.9rem)]">
          <span style={{ color: b.color }}>ONE</span>{" "}
          <span style={b.final ? { color: b.color } : undefined}>{b.noun}</span>
        </h3>
        <p className="mt-1.5 font-medium text-biz-ink/65 text-sm sm:text-base">{b.line}</p>
      </motion.div>
    </motion.div>
  );
};
export default function Ripple() {
  const palette = usePalette();
  const c = useSwap();
  const beliefs = BELIEFS.map((b, i) => ({ ...b, color: palette.beliefs[i] ?? b.color }));
  const ref = useRef(null);
  const scrollYProgress = useSectionProgress(ref);
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.5 });
  const barScale = useTransform(progress, [0, FINALE], [0, 1]);
  const blobScale = useTransform(progress, [0, 1], [0.8, 1.25]);
  return (
    <section ref={ref} data-testid="ripple-effect-section" className="relative h-[360vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          aria-hidden
          style={{ scale: blobScale }}
          className="absolute -right-[10%] bottom-[2%] w-[46vw] h-[46vw] max-w-[520px] max-h-[520px] pointer-events-none"
        >
          <div className="blob w-full h-full" style={{ background: c("#FF3E8E"), opacity: 0.12 }} />
        </motion.div>
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16 pt-[96px] pb-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-biz-ink">
              The Bizora belief
            </h2>
            <p className="mt-3 text-base sm:text-lg font-medium uppercase text-biz-ink/60">
              Big things often start small.
            </p>
          </motion.div>
          {/* all four lines share one screen; each lights up in turn */}
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {beliefs.map((b, i) => (
              <Belief key={b.noun} b={b} i={i} progress={progress} />
            ))}
          </div>
          <div aria-hidden className="mt-8 h-1 w-40 rounded-full bg-biz-ink/10 overflow-hidden">
            <motion.div
              style={{ scaleX: barScale, transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-biz-violet via-biz-purple to-biz-pink"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
