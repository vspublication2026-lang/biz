import React, { useEffect, useRef, useState } from "react";
import { Search, Sparkles, Send, Users, Compass, Layers } from "lucide-react";
import { steps } from "../mock";
import Reveal from "./Reveal";

const iconMap = {
  search: Search,
  sparkles: Sparkles,
  send: Send,
  users: Users,
  compass: Compass,
};

export default function HowWeWork() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      let current = 0;
      cardRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = i;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how" className="relative bg-[#FAFAFB] py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-20 -right-24 w-[420px] h-[420px] rounded-full bg-[#F62E8E]/[0.07] blur-[110px]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 border border-[#111113] rounded-full px-4 py-2 text-[10.5px] font-semibold tracking-[0.14em] bg-white -rotate-1">
            <Layers size={12} className="text-[#F62E8E]" />
            FIVE STEPS
          </span>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left sticky panel */}
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal delay={80}>
              <h2 className="font-display font-bold text-[32px] md:text-[42px] tracking-tight text-[#111113]">
                How we <span className="text-[#F62E8E]">work</span>
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#111113]/55 max-w-[380px]">
                Intelligence first. Then experiences, content and people — all
                pointed at an outcome.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-14 flex items-end gap-6">
                <span className="font-display font-extrabold text-[92px] leading-[0.85] text-black/[0.12] select-none">
                  {steps[active].num}
                </span>
                <span className="font-display font-semibold text-[17px] text-[#111113] pb-1">
                  {steps[active].title}
                </span>
              </div>
              <div className="mt-6 flex items-center gap-2">
                {steps.map((s, i) => (
                  <span
                    key={s.num}
                    className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                      i === active ? "w-8 bg-[#111113]" : "w-2 bg-black/15"
                    }`}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right stacked cards */}
          <div>
            {steps.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.num}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="sticky mb-6"
                  style={{ top: `${96 + i * 14}px` }}
                >
                  <div
                    className="relative rounded-[28px] p-9 md:p-11 h-[380px] overflow-hidden text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]"
                    style={{ backgroundColor: s.bg }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-block bg-white text-[#111113] rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.14em]">
                        STEP {s.num} / 05
                      </span>
                      <span className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                        <Icon size={19} className="text-[#111113]" />
                      </span>
                    </div>

                    <div className="absolute bottom-10 left-9 md:left-11 right-9">
                      <h3 className="font-display font-bold text-[26px] md:text-[30px] tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white/80 max-w-[440px]">
                        {s.desc}
                      </p>
                    </div>

                    <span className="pointer-events-none absolute -bottom-14 right-4 font-display font-extrabold text-[190px] leading-none text-white/[0.08] select-none">
                      {s.num}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
