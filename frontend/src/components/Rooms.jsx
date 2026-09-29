import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { roomPoints, EMAIL } from "../mock";
import Reveal from "./Reveal";

export default function Rooms() {
  return (
    <section className="relative bg-[#111113] py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 w-[440px] h-[440px] rounded-full bg-[#F62E8E]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-[#7C5CFC]/10 blur-[130px]" />

      <div className="relative max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-[10.5px] font-semibold tracking-[0.14em] text-[#111113] -rotate-1">
              <Sparkles size={12} className="text-[#F62E8E]" />
              BESPOKE EXPERIENCES
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display font-extrabold text-[44px] md:text-[64px] leading-[1.05] tracking-tight mt-8 uppercase">
              <span className="text-white block">We create</span>
              <span className="text-[#7C5CFC] block">Rooms</span>
              <span className="text-white block">Where things</span>
              <span className="text-[#F62E8E] block">Happen</span>
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-10 inline-flex items-center gap-2.5 bg-white text-[#111113] text-[14px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#F62E8E] hover:text-white transition-colors duration-200"
            >
              Get in the room
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* Right timeline */}
        <div className="relative pl-10">
          <span className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#F62E8E] via-[#7C5CFC] to-[#4A7BF7]" />

          <div className="space-y-14">
            {roomPoints.map((p, i) => (
              <Reveal key={p.num} delay={i * 130}>
                <div className="relative flex items-center gap-5">
                  <span
                    className="absolute -left-10 w-[19px] h-[19px] rounded-full border-2 bg-[#111113] flex items-center justify-center"
                    style={{ borderColor: p.color }}
                  >
                    <span className="w-[7px] h-[7px] rounded-full" style={{ backgroundColor: p.color }} />
                  </span>
                  <span className="text-[11px] font-semibold text-white/30 w-5">{p.num}</span>
                  <p className="font-display text-[22px] md:text-[26px] font-semibold text-white">
                    {p.text}
                  </p>
                </div>
                {i < roomPoints.length - 1 && <div className="mt-14 h-px bg-white/[0.07]" />}
              </Reveal>
            ))}

            <Reveal delay={420}>
              <div className="relative flex items-start gap-5 pt-2">
                <span className="absolute -left-10 top-3 w-[19px] h-[19px] rounded-full bg-[#F62E8E] shadow-[0_0_24px_6px_rgba(246,46,142,0.55)] flex items-center justify-center">
                  <span className="w-[7px] h-[7px] rounded-full bg-white" />
                </span>
                <p className="font-display text-[22px] md:text-[28px] font-semibold text-white leading-snug">
                  We like putting interesting people in{" "}
                  <span className="text-[#F62E8E]">interesting rooms</span>. Because
                  that's where things happen.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
