import React from "react";
import { ArrowUpRight, Network } from "lucide-react";
import { builds } from "../mock";
import Reveal from "./Reveal";

export default function WhatWeBuild() {
  return (
    <section id="build" className="relative bg-[#FAFAFB] py-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-24 w-[460px] h-[460px] rounded-full bg-[#F62E8E]/[0.08] blur-[110px] anim-blob" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-[#4A7BF7]/[0.08] blur-[110px] anim-blob-slow" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 border border-[#111113] rounded-full px-4 py-2 text-[10.5px] font-semibold tracking-[0.14em] bg-white -rotate-1">
                <Network size={12} className="text-[#F62E8E]" />
                WHAT WE BUILD
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-bold text-[32px] md:text-[44px] leading-[1.18] tracking-tight mt-7 max-w-[680px]">
                <span className="text-[#111113]">Some we build. </span>
                <span className="text-[#111113]/30">Some we bring to new markets. </span>
                <span className="text-[#111113]">Some we build with others. </span>
                <span className="bg-gradient-to-r from-[#7C5CFC] to-[#F62E8E] bg-clip-text text-transparent">
                  Some we make happen.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={200} className="shrink-0">
            <div className="relative inline-block">
              <span className="absolute -top-2.5 left-6 w-14 h-4 bg-[#F62E8E] rounded-t-md rotate-2" />
              <span className="relative inline-block bg-white border-2 border-[#111113] rounded-2xl px-7 py-4 text-[14px] font-semibold shadow-[5px_5px_0_#111113]">
                Different ways to create what's next.
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {builds.map((b, i) => (
            <Reveal key={b.num} delay={i * 110}>
              <div className="group relative bg-white rounded-[24px] border border-black/[0.06] p-7 h-[260px] flex flex-col overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-[box-shadow,transform] duration-300">
                <div className="flex items-center gap-3">
                  <span className="font-display font-extrabold text-[15px]" style={{ color: b.color }}>
                    {b.num}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#111113]/40">
                    {b.label}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[20px] tracking-tight mt-5 text-[#111113]">
                  {b.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#111113]/55">{b.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="block h-px flex-1 bg-black/[0.08] mr-5 group-hover:bg-black/20 transition-colors duration-300" />
                  <ArrowUpRight
                    size={17}
                    className="text-[#111113]/40 group-hover:text-[#111113] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-300"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
