import React from "react";
import { ArrowUpRight, Workflow } from "lucide-react";
import { engageWays, EMAIL } from "../mock";
import Reveal from "./Reveal";

export default function Engage() {
  return (
    <section id="engage" className="relative bg-[#111113] py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[#7C5CFC]/10 blur-[130px]" />

      <div className="relative max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-16">
        {/* Left */}
        <div className="lg:sticky lg:top-28 self-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-[10.5px] font-semibold tracking-[0.14em] text-[#111113] -rotate-1">
              <Workflow size={12} className="text-[#F62E8E]" />
              WAYS TO WORK WITH BIZORA
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display font-extrabold text-[40px] md:text-[54px] leading-[1.08] tracking-tight mt-8 uppercase">
              <span className="text-white block">How</span>
              <span className="text-white block">Businesses</span>
              <span className="text-[#F62E8E] block">Engage</span>
              <span className="text-white block">With us</span>
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-10 inline-flex items-center gap-2.5 bg-white text-[#111113] text-[14px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#7C5CFC] hover:text-white transition-colors duration-200"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* Right list */}
        <div className="relative pl-10">
          <span className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#F62E8E] via-[#7C5CFC] to-[#4A7BF7]" />

          <div className="space-y-12">
            {engageWays.map((w, i) => (
              <Reveal key={w.num} delay={i * 110}>
                <div className="relative">
                  <span
                    className="absolute -left-10 top-1.5 w-[19px] h-[19px] rounded-full border-2 bg-[#111113] flex items-center justify-center"
                    style={{ borderColor: w.color }}
                  >
                    <span className="w-[7px] h-[7px] rounded-full" style={{ backgroundColor: w.color }} />
                  </span>
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] font-semibold text-white/30">{w.num}</span>
                    <h3 className="font-display text-[22px] md:text-[24px] font-semibold text-white">
                      {w.title}
                    </h3>
                  </div>
                  <p className="mt-2 ml-9 text-[14.5px] text-white/50">{w.desc}</p>
                  <div className="mt-4 ml-9 flex flex-wrap gap-2">
                    {w.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/20 px-3.5 py-1.5 text-[9.5px] font-semibold tracking-[0.1em] uppercase text-white/60 hover:border-white/50 hover:text-white transition-colors duration-200 cursor-default"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  {i < engageWays.length - 1 && <div className="mt-12 h-px bg-white/[0.07]" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
