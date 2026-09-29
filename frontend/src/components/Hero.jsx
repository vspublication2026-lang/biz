import React, { useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { heroTags, heroCards, EMAIL } from "../mock";
import Reveal from "./Reveal";

export default function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleMouseMove = (e) => {
    setParallax({
      x: (e.clientX / window.innerWidth - 0.5) * 18,
      y: (e.clientY / window.innerHeight - 0.5) * 14,
    });
  };

  return (
    <section id="top" onMouseMove={handleMouseMove} className="relative overflow-hidden bg-[#FAFAFB] pt-[120px] pb-16">
      {/* pastel washes */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#F62E8E]/10 blur-[120px] anim-blob" />
      <div className="pointer-events-none absolute top-40 left-1/3 w-[460px] h-[460px] rounded-full bg-[#7C5CFC]/10 blur-[120px] anim-blob-slow" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#4A7BF7]/10 blur-[120px] anim-blob" style={{ animationDuration: "18s" }} />

      <div className="relative max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 border border-[#111113] rounded-full px-4 py-2 text-[10.5px] font-semibold tracking-[0.14em] -rotate-1 bg-white">
              <span className="w-2 h-2 rounded-full bg-[#F62E8E]" />
              WHERE ACCESS TURNS INTO OUTCOMES
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display font-extrabold text-[72px] md:text-[96px] leading-none tracking-tight mt-6 bg-gradient-to-r from-[#F62E8E] via-[#C04DF0] to-[#7C5CFC] bg-clip-text text-transparent anim-gradient-text">
              BIZORA
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-6 space-y-1.5 font-display text-[22px] md:text-[26px] font-semibold text-[#111113]">
              <p>
                <span className="text-[#7C5CFC]">ATTENTION</span> opens doors.
              </p>
              <p>
                <span className="text-[#F62E8E]">ACCESS</span> moves you through them.
              </p>
              <p>
                <span className="text-[#4A7BF7]">OPPORTUNITY</span> opens what's next.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-6 max-w-[480px] text-[15px] leading-relaxed text-[#111113]/60">
              Bizora brings together media platforms, intelligence, networks and
              experiences that help businesses get seen, get connected and get
              closer to the people, markets and opportunities that matter.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2.5 bg-[#111113] text-white text-[14.5px] font-semibold px-8 py-4 rounded-full shadow-[7px_7px_0_#7C5CFC] hover:shadow-[3px_3px_0_#7C5CFC] hover:translate-x-[2px] hover:translate-y-[2px] transition-[box-shadow,transform] duration-200"
              >
                Start a conversation
                <ArrowRight size={17} />
              </a>
              <button
                onClick={() => scrollTo("signals")}
                className="inline-flex items-center gap-2.5 bg-white text-[#111113] text-[14.5px] font-semibold px-8 py-4 rounded-full border border-black/10 shadow-[7px_7px_0_#111113] hover:shadow-[3px_3px_0_#111113] hover:translate-x-[2px] hover:translate-y-[2px] transition-[box-shadow,transform] duration-200"
              >
                See what we build
                <ArrowDown size={17} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 border border-[#111113] rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] bg-white"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tag.color }} />
                  {tag.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right cards */}
        <Reveal delay={200} className="hidden md:block">
          <div
            className="grid grid-cols-2 gap-5 transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
          >
            <div className="row-span-2 bg-[#111113] rounded-[28px] p-6 min-h-[430px] anim-float">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white"
                style={{ backgroundColor: heroCards[0].color }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                {heroCards[0].label}
              </span>
            </div>
            {heroCards.slice(1).map((card) => (
              <div
                key={card.label}
                className="bg-[#111113] rounded-[28px] p-6 min-h-[205px] anim-float-delay"
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white"
                  style={{ backgroundColor: card.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="hidden lg:flex absolute right-6 bottom-6 flex-col items-center gap-3">
        <span className="text-[9px] tracking-[0.35em] text-[#111113]/40 [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <span className="w-px h-14 bg-[#111113]/20 overflow-hidden relative">
          <span className="absolute inset-x-0 top-0 h-5 bg-[#F62E8E] animate-[scrollLine_1.8s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}
