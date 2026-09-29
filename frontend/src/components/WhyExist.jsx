import React from "react";
import { Target, Eye } from "lucide-react";
import Reveal from "./Reveal";

export default function WhyExist() {
  return (
    <section className="relative bg-[#FAFAFB] py-24 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#F62E8E]/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute top-0 right-0 w-[380px] h-[380px] rounded-full bg-[#4A7BF7]/[0.07] blur-[110px]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-display font-bold text-[32px] md:text-[42px] tracking-tight text-[#111113]">
            Why we <span className="text-[#7C5CFC]">exist</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal delay={100}>
            <div className="bg-[#7C5CFC] rounded-[28px] p-9 md:p-12 h-full hover:-translate-y-1.5 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Target size={18} className="text-white" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-white/70">
                  MISSION
                </span>
              </div>
              <h3 className="font-display font-bold text-[26px] md:text-[30px] leading-snug text-white mt-8">
                Make business access{" "}
                <span className="bg-white text-[#111113] px-1.5 rounded-sm box-decoration-clone">
                  more meaningful.
                </span>
              </h3>
              <p className="mt-5 text-[14.5px] leading-relaxed text-white/80 max-w-[440px]">
                We bring together the intelligence, people, platforms and
                opportunities that help businesses move forward.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[#F62E8E] rounded-[28px] p-9 md:p-12 h-full hover:-translate-y-1.5 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Eye size={18} className="text-white" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-white/70">
                  VISION
                </span>
              </div>
              <h3 className="font-display font-bold text-[26px] md:text-[30px] leading-snug text-white mt-8">
                The future of business is decided in{" "}
                <span className="bg-white text-[#111113] px-1.5 rounded-sm box-decoration-clone">
                  conversation.
                </span>
              </h3>
              <p className="mt-5 text-[14.5px] leading-relaxed text-white/80 max-w-[440px]">
                We want to build the platforms, communities and conversations
                where those decisions happen.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
