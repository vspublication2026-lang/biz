import { useRef } from "react";
import { Target, Eye } from "lucide-react";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import { isDark, useSwap } from "@/components/Palette";
export default function NorthStar() {
  const c = useSwap();
  const missionBg = c("#EAE4FF");
  const visionBg = c("#FFE1EF");
  const mDark = isDark(missionBg);
  const vDark = isDark(visionBg);
  const mRef = useRef(null);
  const vRef = useRef(null);
  return (
    <section id="north-star" data-testid="north-star-section" className="py-16 sm:py-24 overflow-hidden">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink">
            Why we{" "}
            <span className="text-sweep inline-block">exist</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-2 border-biz-ink bg-biz-paper shadow-[10px_10px_0_0_#111111]">
            <div className="grid lg:grid-cols-12">
              {/* Mission */}
              <div
                data-testid="mission-block"
                ref={mRef}
                className={`relative lg:col-span-5 flex flex-col p-8 sm:p-12 lg:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-biz-ink ${mDark ? "text-biz-paper" : "text-biz-ink"}`}
                style={{ background: missionBg }}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-biz-ink bg-biz-purple text-biz-paper">
                    <Target size={18} strokeWidth={2.5} />
                  </span>
                  <span className={`font-display text-xs font-black uppercase tracking-[0.22em] ${mDark ? "text-white/70" : "text-biz-ink/60"}`}>Mission</span>
                </div>
                <MaskedLine delay={0.3} className="mt-10">
                  <p className="font-display font-black tracking-tight leading-[1.25] text-[1.65rem] sm:text-[2.09rem] pb-3 max-w-xl">
                    Make business access <span className="relative inline-block isolate whitespace-nowrap px-[0.18em]" style={{ color: mDark ? "#111111" : undefined }}>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-[0.06em] -z-10 h-[0.88em] -rotate-1 rounded-[0.12em]"
                        style={{ background: mDark ? "#FAFAFA" : missionBg }}
                      />
                      more meaningful.
                    </span>
                  </p>
                </MaskedLine>
                <p className={`mt-8 max-w-md text-base sm:text-lg leading-relaxed ${mDark ? "text-white/80" : "text-biz-ink/75"}`}>
                  We bring together the intelligence, people, platforms and opportunities that help businesses move forward.
                </p>
              </div>
              {/* Vision */}
              <div
                data-testid="vision-block"
                ref={vRef}
                className={`relative lg:col-span-7 flex flex-col p-8 sm:p-12 lg:p-14 ${vDark ? "text-biz-paper" : "text-biz-ink"}`}
                style={{ background: visionBg }}
              >
                <span
                  aria-hidden
                  className="absolute -top-20 -right-20 h-64 w-64 rounded-full border-[16px] border-biz-orange/30"
                />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-biz-ink bg-biz-orange text-biz-paper">
                    <Eye size={18} strokeWidth={2.5} />
                  </span>
                  <span className={`font-display text-xs font-black uppercase tracking-[0.22em] ${vDark ? "text-white/70" : "text-biz-ink/60"}`}>Vision</span>
                </div>
                <MaskedLine delay={0.3} className="mt-10">
                  <p className="font-display font-black tracking-tight leading-[1.25] text-[1.65rem] sm:text-[2.09rem] pb-3 max-w-2xl">
                    The future of business is decided in <span className="relative inline-block isolate whitespace-nowrap px-[0.18em]" style={{ color: vDark ? "#111111" : undefined }}>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-[0.06em] -z-10 h-[0.88em] -rotate-1 rounded-[0.12em]"
                        style={{ background: vDark ? "#FAFAFA" : visionBg }}
                      />
                      conversation.
                    </span>
                  </p>
                </MaskedLine>
                <p className={`mt-8 max-w-xl text-base sm:text-lg leading-relaxed ${vDark ? "text-white/80" : "text-biz-ink/70"}`}>
                  We want to build the platforms, communities and conversations where those decisions happen.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
