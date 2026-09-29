import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Sticker from "@/components/Sticker";
import { EASE, Reveal } from "@/components/Reveal";
import { useSwap } from "@/components/Palette";
import useParallax from "@/hooks/useParallax";
import asset from "@/lib/asset";
const OUTCOMES = [
  { text: "Ideas get challenged.", color: "#D81B74" },
  { text: "Connections get made.", color: "#6D28D9" },
  { text: "Opportunities take shape.", color: "#8B5CF6" },
];
export default function DefyGravity() {
  const c = useSwap();
  const ref = useRef(null);
  // vertical rail that draws itself as the list scrolls into view
  const listRef = useRef(null);
  const { scrollYProgress: listProgress } = useScroll({ target: listRef, offset: ["start 85%", "end 55%"] });
  const rail = useSpring(listProgress, { stiffness: 80, damping: 24 });
  // the outcomes drift against the pinned headline — parallax on the right column only
  const rowsRef = useRef(null);
  useParallax(ref, rowsRef, 70);
  return (
    <section ref={ref} data-testid="defy-gravity-section" className="relative overflow-clip bg-biz-ink text-biz-paper">
      {/* video backdrop */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={asset("/assets/defy-gravity.mp4")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        data-testid="defy-gravity-video"
      />
      <div aria-hidden className="absolute inset-0 bg-biz-ink/45" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-biz-ink/75 via-biz-ink/20 to-biz-ink/50" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-32 grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* headline — sticks while the outcomes scroll past on desktop */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="mb-2">
                <Sticker tone="paper" rotate="-rotate-2">
                  <Sparkles size={14} strokeWidth={2.5} /> Bespoke experiences
                </Sticker>
              </div>
              <h2 className="mt-4 font-display font-black uppercase tracking-tight leading-[1.06] text-[clamp(2.4rem,5.4vw,5rem)]">
                <span className="block">We create </span>
                <motion.span
                  className="text-sweep block w-fit"
                  animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Rooms
                </motion.span>
                <span className="block">Where </span>
                <span className="block">Things </span>
                <span className="block text-biz-pink">Happen</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/contact-us"
                data-testid="defy-gravity-cta"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-biz-paper px-6 py-3.5 font-display font-semibold text-base text-biz-ink transition-all duration-300 hover:bg-biz-pink hover:text-biz-paper"
              >
                Get in the room
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          {/* outcomes — a rail that draws in, rows that rise up */}
          <div ref={listRef} className="lg:col-span-6 relative pl-10 sm:pl-14">
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-biz-paper/15" aria-hidden />
            <motion.div
              aria-hidden
              style={{ scaleY: rail, transformOrigin: "top" }}
              className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-biz-magenta via-biz-purple to-biz-pink"
            />
            <div ref={rowsRef} data-testid="defy-gravity-rows" className="will-change-transform">
            <ul className="space-y-6">
              {OUTCOMES.map((o, i) => (
                <motion.li
                  key={o.text}
                  data-testid={`outcome-${i + 1}`}
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
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-500 group-hover:h-full group-hover:w-full" style={{ background: c(o.color) }} />
                  </span>
                  <div className="flex items-baseline gap-5 transition-transform duration-500 ease-out group-hover:translate-x-3">
                    <span className="font-display text-xs font-bold tabular-nums text-biz-paper/40">0{i + 1}</span>
                    <p className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
                      {o.text}
                    </p>
                  </div>
                </motion.li>
              ))}
              <motion.li
                data-testid="outcome-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
                className="group relative pt-12 sm:pt-16"
              >
                <span
                  aria-hidden
                  className="absolute -left-7 sm:-left-10 top-[3.8rem] sm:top-[4.6rem] flex h-6 w-6 sm:h-8 sm:w-8 -translate-x-1/2 items-center justify-center rounded-full bg-biz-pink shadow-[0_0_30px_6px_rgba(216,27,116,0.5)]"
                >
                  <span className="h-2 w-2 rounded-full bg-biz-paper" />
                </span>
                <p className="font-display font-bold tracking-tight leading-snug text-2xl sm:text-3xl text-biz-paper/90">
                  We like putting interesting people in <span className="bg-gradient-to-r from-biz-pink via-biz-magenta to-biz-purple bg-clip-text text-transparent">interesting rooms</span>. Because that&rsquo;s where things happen.
                </p>
              </motion.li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
