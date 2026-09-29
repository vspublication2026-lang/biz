import React from "react";
import { ArrowUpRight } from "lucide-react";
import { signals } from "../mock";
import Reveal from "./Reveal";

export default function Signals() {
  return (
    <section id="signals" className="relative bg-[#FAFAFB] py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-[#F62E8E]/[0.07] blur-[110px] anim-blob" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="inline-block border border-[#111113]/15 rounded-full px-4 py-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-[#111113]/70 bg-white">
            THREE SIGNALS
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display font-bold text-[34px] md:text-[46px] leading-[1.15] tracking-tight mt-6 max-w-[820px]">
            <span className="text-[#111113]">Ideas are everywhere. </span>
            <span className="text-[#111113]/30">Access is not. </span>
            <span className="bg-gradient-to-r from-[#F62E8E] to-[#7C5CFC] bg-clip-text text-transparent">
              Bizora brings them closer.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {signals.map((s, i) => (
            <Reveal key={s.num} delay={i * 120}>
              <div className="group relative bg-white rounded-[26px] border border-black/[0.06] p-8 h-[280px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-[box-shadow,transform] duration-300">
                <span className="text-[10.5px] font-semibold tracking-[0.14em] text-[#111113]/40 uppercase">
                  {s.label}
                </span>
                <h3
                  className="font-display font-extrabold text-[24px] leading-tight mt-4 tracking-tight"
                  style={{ color: s.color }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] font-medium text-[#111113]/60">{s.sub}</p>

                <div className="absolute bottom-7 left-8 right-8 flex items-end justify-between">
                  <span className="block h-px flex-1 bg-black/[0.08] mr-6 group-hover:bg-black/20 transition-colors duration-300" />
                  <ArrowUpRight
                    size={18}
                    className="text-[#111113]/40 group-hover:text-[#111113] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-300"
                  />
                </div>
                <span className="pointer-events-none absolute -bottom-6 right-5 font-display font-extrabold text-[110px] leading-none text-black/[0.045] select-none">
                  {s.num}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
