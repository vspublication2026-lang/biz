import React from "react";
import { ArrowRight } from "lucide-react";
import { EMAIL } from "../mock";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#FAFAFB] py-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-0 w-[480px] h-[480px] rounded-full bg-[#7C5CFC]/[0.12] blur-[120px] anim-blob" />
      <div className="pointer-events-none absolute top-10 right-0 w-[480px] h-[480px] rounded-full bg-[#F62E8E]/[0.12] blur-[120px] anim-blob-slow" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 w-[420px] h-[420px] rounded-full bg-[#4A7BF7]/[0.1] blur-[120px] anim-blob" style={{ animationDuration: "17s" }} />

      <div className="relative max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-block border border-[#111113]/15 rounded-full px-4 py-1.5 text-[10.5px] font-semibold tracking-[0.14em] text-[#111113]/70 bg-white">
            READY WHEN YOU ARE
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display font-extrabold text-[42px] md:text-[64px] leading-[1.08] tracking-tight mt-8 text-[#111113]">
            Let's build{" "}
            <span className="bg-gradient-to-r from-[#F62E8E] via-[#C04DF0] to-[#7C5CFC] bg-clip-text text-transparent">
              what's next.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-12 inline-flex items-center gap-3 bg-[#111113] text-white text-[16px] font-semibold px-10 py-5 rounded-full shadow-[8px_8px_0_#F62E8E] hover:shadow-[3px_3px_0_#F62E8E] hover:translate-x-[3px] hover:translate-y-[3px] transition-[box-shadow,transform] duration-200"
          >
            Start a conversation
            <ArrowRight size={19} />
          </a>
        </Reveal>

        <Reveal delay={300}>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 text-[15px] font-semibold text-[#111113] underline underline-offset-4 decoration-[#111113]/30 hover:decoration-[#F62E8E] hover:text-[#F62E8E] transition-colors duration-200"
          >
            {EMAIL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
