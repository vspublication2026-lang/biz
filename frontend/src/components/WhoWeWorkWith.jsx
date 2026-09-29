import React from "react";
import { Users } from "lucide-react";
import { audiences } from "../mock";
import Reveal from "./Reveal";

export default function WhoWeWorkWith() {
  return (
    <section id="who" className="relative bg-[#FAFAFB] py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#7C5CFC]/[0.08] blur-[110px]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 border border-[#111113] rounded-full px-4 py-2 text-[10.5px] font-semibold tracking-[0.14em] bg-white -rotate-1">
            <Users size={12} className="text-[#7C5CFC]" />
            WHO WE WORK WITH
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] leading-[1.18] tracking-tight mt-7 max-w-[760px]">
            <span className="text-[#111113]/30">The people </span>
            <span className="text-[#111113]">shaping business, industry </span>
            <span className="text-[#111113]/30">and </span>
            <span className="text-[#F62E8E]">what's next.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <Reveal key={a.num} delay={i * 110}>
              <div className="group bg-white rounded-[24px] border border-black/[0.06] p-7 h-[250px] flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-[box-shadow,transform] duration-300">
                <div className="flex items-center gap-3">
                  <span className="font-display font-extrabold text-[15px]" style={{ color: a.color }}>
                    {a.num}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#111113]/40">
                    {a.label}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[20px] tracking-tight mt-5 text-[#111113]">
                  {a.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#111113]/55">{a.desc}</p>
                <span
                  className="mt-auto block h-[3px] w-10 rounded-full transition-[width] duration-300 group-hover:w-20"
                  style={{ backgroundColor: a.color }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
