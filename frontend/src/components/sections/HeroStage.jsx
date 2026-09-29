import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { EASE } from "@/components/Reveal";
import { isDark, usePalette, useSwap } from "@/components/Palette";
import asset from "@/lib/asset";
const LETTERS = "BIZORA".split("");
const PILLARS = [
  { label: "Media", color: "#6D28D9" },
  { label: "Intelligence", color: "#D81B74" },
  { label: "Communities", color: "#8B5CF6" },
  { label: "Experiences", color: "#FF3E8E" },
];
// Video mosaic beside the wordmark: one tall card, two stacked.
const SCENES = [
  { src: asset("/assets/hero-conference.mp4"), tag: "We inform", color: "#DCEAF5", depth: 34, cls: "row-span-2 h-[520px]" },
  { src: asset("/assets/hero-presenter.mp4"), tag: "We connect", color: "#FFDCEB", depth: -26, cls: "h-[250px]" },
  { src: asset("/assets/defy-gravity.mp4"), tag: "We enable", color: "#EAE4FF", depth: 20, cls: "h-[250px]" },
];
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth" });
};
const Masked = ({ children, delay, className }) => (
  <div className="overflow-hidden">
    <motion.div initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: EASE, delay }} className={className}>
      {children}
    </motion.div>
  </div>
);
/* ---------- intro stage pieces ---------- */
const Card = ({ c, i, sx, sy, chipBg }) => {
  const onDark = isDark(chipBg);
  const x = useTransform(sx, (v) => v * c.depth * 0.6);
  const y = useTransform(sy, (v) => v * c.depth * 0.45);
  return (
    <motion.div style={{ x, y }} className={c.cls}>
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1.25, 0.36, 1], delay: 1.0 + i * 0.18 }}
        whileHover={{ scale: 1.03, zIndex: 30 }}
        className="relative h-full overflow-hidden rounded-[22px] border-2 border-biz-ink bg-biz-ink shadow-[8px_8px_0_0_#111111]"
      >
        <video className="absolute inset-0 h-full w-full object-cover" src={c.src} autoPlay muted loop playsInline preload="metadata" aria-hidden />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-biz-ink/60 via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border-2 border-biz-ink px-3 py-1 font-display text-[10px] font-black uppercase tracking-[0.18em] shadow-[3px_3px_0_0_#111111] ${
            onDark ? "text-biz-paper" : "text-biz-ink"
          }`}
          style={{ background: chipBg }}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${onDark ? "bg-biz-paper" : "bg-biz-ink"}`} />
          {c.tag}
        </span>
      </motion.div>
    </motion.div>
  );
};
const Letter = ({ l, i }) => (
  <span className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em] pt-[0.08em] -mt-[0.08em]">
    {/* entrance */}
    <motion.span
      className="inline-block"
      initial={{ y: "120%", rotate: i % 2 ? 8 : -8 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{
        y: { type: "spring", stiffness: 260, damping: 20, delay: 0.55 + i * 0.09 },
        rotate: { type: "spring", stiffness: 260, damping: 20, delay: 0.55 + i * 0.09 },
      }}
    >
      {/* continuous: gentle wave, with the palette gradient sweeping through the letters */}
      <motion.span
        className="text-sweep inline-block cursor-default"
        style={{ animationDelay: `${-i * 0.5}s` }}
        animate={{ y: [0, -10, 0, 4, 0] }}
        transition={{
          duration: 4.8,
          times: [0, 0.3, 0.45, 0.6, 1],
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.6 + i * 0.16,
        }}
        whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
      >
        {l}
      </motion.span>
    </motion.span>
  </span>
);
/** Key word in a tagline: the colour paints across it once, left to right. */
const PaintWord = ({ children, color, delay }) => (
  <span className="relative inline-block uppercase align-baseline">
    <span className="text-biz-ink/25">{children}</span>
    <motion.span
      aria-hidden
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className="absolute left-0 top-0 select-none overflow-hidden whitespace-nowrap"
      style={{ color }}
    >
      {children}
    </motion.span>
  </span>
);
export default function HeroStage() {
  const c = useSwap();
  const palette = usePalette();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  return (
    <section id="hero" ref={ref} data-testid="hero-section" className="relative bg-biz-paper">
      <div className="relative min-h-screen overflow-hidden" onMouseMove={onMove} onMouseLeave={onLeave}>
        {/* load curtain */}
        <motion.div
          aria-hidden
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 z-[60] bg-biz-ink pointer-events-none"
        />
        <motion.div
          aria-hidden
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.22 }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 z-[59] bg-biz-purple pointer-events-none"
        />
        {/* load pulse ring */}
        <motion.div
          aria-hidden
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 3.2, opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.7 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40vmin] w-[40vmin] rounded-full border-[3px] border-biz-purple pointer-events-none z-[5]"
        />
        {/* ---------- intro stage ---------- */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${c("#8B5CF6")}2e 0%, ${c("#5286FC")}1a 35%, rgba(250,250,250,0) 70%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(17,17,17,0.12) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 25%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 25%, transparent 75%)",
          }}
        />
        <div className="relative pt-[80px] pb-10 min-h-screen flex items-start lg:items-center">
          <div className="relative z-10 grid w-full items-center gap-10 px-5 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 text-left">
            <motion.div
              data-testid="hero-eyebrow"
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-biz-ink bg-biz-paper px-4 py-1.5 font-display text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] text-biz-ink shadow-[3px_3px_0_0_#111111]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-biz-pink opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-biz-pink" />
              </span>
              Where access turns into outcomes
            </motion.div>
            <h1
              className="mt-5 font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(3rem,8vw,8.5rem)] text-biz-ink flex items-end justify-start"
              aria-label="Bizora"
            >
              {LETTERS.map((l, i) => (
                <Letter key={i} l={l} i={i} />
              ))}
            </h1>
            <div className="mt-5 font-display font-bold tracking-tight text-[1.43rem]/[1.45] sm:text-[1.78rem]/[1.45] lg:text-[2.23rem]/[1.45] text-biz-ink">
              <Masked delay={1.3}>
                <p data-testid="hero-tagline-1">
                  <PaintWord color={c("#6D28D9")} delay={1.75}>Attention</PaintWord> opens doors.
                </p>
              </Masked>
              <Masked delay={1.45}>
                <p data-testid="hero-tagline-2">
                  <PaintWord color={c("#D81B74")} delay={1.95}>Access</PaintWord> moves you through them.
                </p>
              </Masked>
              <Masked delay={1.6}>
                <p data-testid="hero-tagline-3">
                  <PaintWord color={c("#5286FC")} delay={2.15}>Opportunity</PaintWord> opens what&rsquo;s next.
                </p>
              </Masked>
            </div>
            <motion.p
              data-testid="hero-supporting-line"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.7 }}
              className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-biz-ink/70"
            >
              Bizora brings together media platforms, intelligence, networks and experiences that help businesses get seen, get
              connected and get closer to the people, markets and opportunities that matter.
            </motion.p>
            <motion.div
              data-testid="hero-cta-group"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.9 }}
              className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <Link
                to="/contact-us"
                data-testid="hero-cta-primary"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border-2 border-biz-ink bg-biz-ink px-7 py-3.5 font-display font-bold text-base text-biz-paper shadow-[6px_6px_0_0_#8B5CF6] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_#8B5CF6]"
              >
                Start a conversation
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                data-testid="hero-cta-secondary"
                onClick={() => scrollToSection("what-we-build")}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border-2 border-biz-ink bg-biz-paper px-6 py-3.5 font-display font-bold text-base text-biz-ink shadow-[6px_6px_0_0_#111111] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_#111111]"
              >
                See what we build
                <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </motion.div>
            <ul data-testid="hero-pillars" className="mt-6 flex flex-wrap items-center gap-2.5" aria-label="What we build">
              {PILLARS.map(({ label, color }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18, delay: 2.1 + i * 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-biz-ink bg-biz-paper px-3 py-1 font-display text-[11px] font-black uppercase tracking-[0.14em] text-biz-ink"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: c(color) }} />
                  {label}
                </motion.li>
              ))}
            </ul>
          </div>
          {/* video mosaic */}
          <div className="lg:col-span-6 hidden lg:block" data-testid="hero-cards">
            <div className="grid grid-cols-2 gap-5">
              {SCENES.map((c, i) => (
                <Card key={c.src} c={c} i={i} sx={sx} sy={sy} chipBg={palette.cards[i] ?? c.color} />
              ))}
            </div>
          </div>
          </div>
        </div>
        {/* scroll cue */}
        <motion.button
          type="button"
          aria-label="Scroll to next section"
          data-testid="hero-scroll-cue"
          onClick={() => scrollToSection("what-we-build")}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 2.4 }}
          className="absolute bottom-6 right-6 sm:right-10 z-40 hidden lg:flex flex-col items-center gap-3 font-display text-[11px] font-black uppercase tracking-[0.22em] text-biz-ink/50 hover:text-biz-ink transition-colors duration-300"
        >
          <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
          <span className="relative h-14 w-px overflow-hidden bg-biz-ink/15">
            <motion.span
              className="absolute left-0 top-0 h-1/2 w-full bg-biz-ink"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
