import React, { useEffect, useRef, useState } from "react";
import { beliefs } from "../mock";

export default function Belief() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        Math.max((vh * 0.65 - rect.top) / rect.height, 0),
        0.999
      );
      setActive(Math.floor(progress * beliefs.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FAFAFB] py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-[#F62E8E]/[0.09] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-[#7C5CFC]/[0.07] blur-[110px]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <h2 className="font-display font-extrabold text-[34px] md:text-[46px] tracking-tight text-[#111113]">
          THE BIZORA BELIEF
        </h2>
        <p className="mt-3 text-[13px] font-medium tracking-[0.2em] text-[#111113]/40">
          BIG THINGS OFTEN START SMALL.
        </p>

        <div className="mt-16 space-y-10">
          {beliefs.map((b, i) => {
            const isActive = i === active;
            return (
              <div
                key={b.word}
                className="transition-[opacity,transform] duration-500"
                style={{
                  marginLeft: `min(${i * 4.5}rem, ${i * 12}vw)`,
                  opacity: isActive ? 1 : 0.18,
                  transform: isActive ? "translateX(0)" : "translateX(8px)",
                }}
              >
                <h3 className="font-display font-extrabold text-[32px] md:text-[52px] tracking-tight text-[#111113]">
                  <span style={{ color: b.color }}>ONE</span> {b.word}
                </h3>
                <p className="mt-1 text-[14px] text-[#111113]/50">{b.sub}</p>
              </div>
            );
          })}
        </div>

        {/* progress bar */}
        <div className="mt-16 h-[3px] w-36 bg-black/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#F62E8E] to-[#7C5CFC] transition-[width] duration-500 ease-out"
            style={{ width: `${((active + 1) / beliefs.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
