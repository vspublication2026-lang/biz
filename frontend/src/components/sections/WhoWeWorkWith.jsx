import { motion } from "framer-motion";
import { Building2, Crown, Users, Globe } from "lucide-react";
import Sticker from "@/components/Sticker";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import { isDark, usePalette } from "@/components/Palette";

const AUDIENCES = [
  { id: "businesses", kicker: "Growth & visibility", name: "Businesses", line: "The companies looking for growth, visibility, connections and opportunity.", Icon: Building2 },
  { id: "industry-leaders", kicker: "Decision-makers", name: "Industry Leaders", line: "CXOs, founders and decision-makers who shape what’s next.", Icon: Crown },
  { id: "industry-associations", kicker: "Industry bodies", name: "Industry Associations", line: "Organisations bringing industries and communities together.", Icon: Users },
  { id: "global-brands", kicker: "Relevance in India", name: "Global Brands & Media", line: "International brands and media platforms looking to build relevance in India.", Icon: Globe },
];

const AudienceCard = ({ a, ground, ink, index }) => {
  const dark = isDark(ground);
  const text = dark ? "#FAFAFA" : ink;
  const sub = dark ? "text-white/80" : "text-biz-ink/65";
  return (
    <motion.article
      data-testid={`audience-${a.id}`}
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
            {a.kicker}
          </span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-biz-ink transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:scale-110">
            <a.Icon size={19} strokeWidth={2.25} />
          </span>
        </div>
        <div className="mt-auto">
          <h3 className="font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-[1.7rem] sm:text-[1.85rem]">
            {a.name}
          </h3>
          <p className={`mt-2.5 max-w-md text-sm sm:text-[15px] font-medium leading-relaxed ${sub}`}>{a.line}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default function WhoWeWorkWith() {
  const palette = usePalette();
  return (
    <section id="who-we-work-with" data-testid="who-we-work-with-section" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
        <div className="grid sm:grid-cols-2 gap-6">
          {AUDIENCES.map((a, i) => (
            <AudienceCard
              key={a.id}
              a={a}
              index={i}
              ground={palette.audience[i] ?? "#F1F1F3"}
              ink={palette.ink[i] ?? "#111111"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
