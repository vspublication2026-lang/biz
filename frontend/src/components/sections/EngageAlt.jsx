import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Sticker from "@/components/Sticker";
import { EASE, Reveal } from "@/components/Reveal";
import { useSwap } from "@/components/Palette";
import useParallax from "@/hooks/useParallax";
import asset from "@/lib/asset";
/**
 * Alternative treatment of "Ways to work with Bizora" — built in the language of
 * the Bespoke experiences section: a full-bleed video ground, a headline that
 * sticks while the four ways scroll past on a rail that draws itself in.
 */
const WAYS = [
  {
    id: "be-seen",
    name: "Need to be seen?",
    hook: "Build visibility where the right people are paying attention.",
    subs: ["Media", "Content", "Thought Leadership", "Campaigns", "Executive Profiles"],
    color: "#D81B74",
  },
  {
    id: "right-people",
    name: "Need the right people?",
    hook: "Get closer to the people who can move things forward.",
    subs: ["CXO Forums", "Roundtables", "Communities", "Introductions", "Partnerships"],
    color: "#6D28D9",
  },
  {
    id: "have-an-idea",
    name: "Have an idea?",
    hook: "Turn an idea into something people can engage with.",
    subs: ["Research", "Rankings", "Councils", "Awards", "Platforms", "Experiences"],
    color: "#8B5CF6",
  },
  {
    id: "somewhere-new",
    name: "Looking somewhere new?",
    hook: "Find your way into new markets and ecosystems.",
    subs: ["Market Entry", "India Access", "Local Partnerships", "Market Development"],
    color: "#FF3E8E",
  },
];
export default function EngageAlt() {
  const c = useSwap();
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 85%", "end 55%"] });
  const rail = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  // the rows drift against the pinned headline — parallax on the right column only
  const rowsRef = useRef(null);
  useParallax(sectionRef, rowsRef, 70);
  return (
    <section ref={sectionRef} data-testid="engage-alt-section" className="relative overflow-clip bg-biz-ink text-biz-paper">
      {/* video ground */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={asset("/assets/hero-conference.mp4")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        data-testid="engage-alt-video"
      />
      <div aria-hidden className="absolute inset-0 bg-biz-ink/55" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-biz-ink/80 via-biz-ink/30 to-biz-ink/60" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-32 grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* headline — sticks while the four ways scroll past on desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="mb-2">
                <Sticker tone="paper" rotate="-rotate-2">
                  <Sparkles size={14} strokeWidth={2.5} /> Ways to work with Bizora
                </Sticker>
              </div>
              <h2 className="mt-4 font-display font-black uppercase tracking-tight leading-[1.06] text-[clamp(2.4rem,5.4vw,4.5rem)]">
                <span className="block">How businesses </span>
                <span className="block text-biz-pink">engage </span>
                <span className="block">with us</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/contact-us"
                data-testid="engage-alt-cta"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-biz-paper px-6 py-3.5 font-display font-semibold text-base text-biz-ink transition-all duration-300 hover:bg-biz-pink hover:text-biz-paper"
              >
                Start a conversation
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          {/* the four ways — a rail that draws in, rows that rise up */}
          <div ref={listRef} className="lg:col-span-7 relative pl-10 sm:pl-14">
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-biz-paper/15" aria-hidden />
            <motion.div
              aria-hidden
              style={{ scaleY: rail, transformOrigin: "top" }}
              className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-biz-magenta via-biz-purple to-biz-pink"
            />
            <div ref={rowsRef} data-testid="engage-alt-rows" className="will-change-transform">
            <ul className="space-y-6">
              {WAYS.map((w, i) => (
                <motion.li
                  key={w.id}
                  data-testid={`engage-alt-${w.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                  className="group relative py-10 sm:py-14 border-b border-biz-paper/15 last:border-0"
                >
                  <span
                    aria-hidden
                    className="absolute -left-7 sm:-left-10 top-[3.1rem] sm:top-[4.1rem] flex h-6 w-6 sm:h-8 sm:w-8 -translate-x-1/2 items-center justify-center rounded-full bg-biz-ink ring-1 ring-biz-paper/30 transition-all duration-500 group-hover:scale-125"
                  >
                    <span
                      className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-500 group-hover:h-full group-hover:w-full"
                      style={{ background: c(w.color) }}
                    />
                  </span>
                  <div className="transition-transform duration-500 ease-out group-hover:translate-x-3">
                    <div className="flex items-baseline gap-5">
                      <span className="font-display text-xs font-bold tabular-nums text-biz-paper/40">0{i + 1}</span>
                      <p className="font-display font-bold tracking-tight text-2xl sm:text-3xl leading-tight">{w.name}</p>
                    </div>
                    <p className="mt-3 pl-10 max-w-lg text-base sm:text-lg leading-relaxed text-biz-paper/70">{w.hook}</p>
                    <ul className="mt-4 pl-10 flex flex-wrap gap-2">
                      {w.subs.map((sub) => (
                        <li
                          key={sub}
                          className="inline-flex items-center rounded-full border border-biz-paper/25 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-biz-paper/75 transition-colors duration-300 group-hover:border-biz-paper/50"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
