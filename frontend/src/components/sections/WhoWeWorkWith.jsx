import { motion } from "framer-motion";
import { Building2, Crown, Network, Globe, Users } from "lucide-react";
import Sticker from "@/components/Sticker";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import { isDark, usePalette } from "@/components/Palette";

const AUDIENCES = [
  { id: "businesses", kicker: "Growth & visibility", name: "Businesses", line: "The companies looking for growth, visibility, connections and opportunity.", Icon: Building2 },
  { id: "industry-leaders", kicker: "Decision-makers", name: "Industry Leaders", line: "CXOs, founders and decision-makers who shape what’s next.", Icon: Crown },
  { id: "industry-associations", kicker: "Industry bodies", name: "Industry Associations", line: "Organisations bringing industries and communities together.", Icon: Network },
  { id: "global-brands", kicker: "Relevance in India", name: "Global Brands & Media", line: "International brands and media platforms looking to build relevance in India.", Icon: Globe },
];

const AudienceCard = ({ a, ground, ink, accent, index }) => {
  const dark = isDark(ground);
  const text = dark ? "#FAFAFA" : ink;
  return (
    <motion.article
      data-testid={`audience-${a.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.12 }}
      whileHover={{ y: -10, rotate: index % 2 ? 1 : -1 }}
      className="group relative h-full overflow-hidden rounded-[26px] border-2 border-biz-ink p-7 sm:p-8 shadow-[6px_6px_0_0_#111111] cursor-default"
      style={{ background: ground, color: text }}
    >
      {/* colour wash that swells on hover */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-52 w-52 rounded-full blur-2xl opacity-25 transition-all duration-700 ease-out group-hover:scale-[2.1] group-hover:opacity-40"
        style={{ background: accent }}
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-biz-ink text-biz-paper transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:scale-110"
            style={{ background: accent }}
          >
            <a.Icon size={19} strokeWidth={2.25} />
          </span>
          <span className="font-display font-black text-sm" style={{ color: dark ? "#FAFAFA" : accent }}>
            0{index + 1}
          </span>
        </div>
        <span className={`mt-6 font-display text-[10px] font-black uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-biz-ink/50"}`}>
          {a.kicker}
        </span>
        <h3 className="mt-2 font-display font-extrabold tracking-[-0.02em] leading-[1.05] text-[1.45rem] sm:text-[1.6rem]">
          {a.name}
        </h3>
        <p className={`mt-3 text-sm sm:text-[15px] font-medium leading-relaxed ${dark ? "text-white/75" : "text-biz-ink/65"}`}>
          {a.line}
        </p>
        <span
          aria-hidden
          className="mt-auto pt-7 block h-[3px] w-10 rounded-full transition-all duration-500 ease-out group-hover:w-24"
          style={{ background: dark ? "#FAFAFA" : accent, marginTop: "auto" }}
        />
      </div>
    </motion.article>
  );
};

export default function WhoWeWorkWith() {
  const palette = usePalette();
  return (
    <section id="who-we-work-with" data-testid="who-we-work-with-section" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-16">
          <div className="mb-2">
            <Sticker tone="paper" rotate="-rotate-2">
              <Users size={14} strokeWidth={2.5} /> Who we work with
            </Sticker>
          </div>
          <h2 className="mt-3 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink max-w-3xl">
            <MaskedLine delay={0.05}>
              <span>
                <span className="text-biz-ink/35">The people </span>shaping business,
              </span>
            </MaskedLine>
            <MaskedLine delay={0.2}>
              <span>
                industry <span className="text-biz-ink/35">and </span>
                <span className="text-sweep inline-block">what&rsquo;s next.</span>
              </span>
            </MaskedLine>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {AUDIENCES.map((a, i) => (
            <AudienceCard
              key={a.id}
              a={a}
              index={i}
              ground={palette.audience[i] ?? "#F1F1F3"}
              ink={palette.ink[i] ?? "#111111"}
              accent={palette.accents[i] ?? "#111111"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
