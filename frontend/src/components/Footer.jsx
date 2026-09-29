import React from "react";
import { footerCols, EMAIL } from "../mock";
import { Logo } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
        <div>
          <Logo />
          <a
            href={`mailto:${EMAIL}`}
            className="mt-6 inline-block text-[14.5px] font-semibold text-[#111113] hover:text-[#F62E8E] transition-colors duration-200"
          >
            {EMAIL}
          </a>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="text-[12px] font-semibold tracking-[0.08em] text-[#111113]/40">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="text-[14px] text-[#111113]/60 hover:text-[#111113] transition-colors duration-150"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[13px] text-[#111113]/40">© 2026 Bizora</span>
          <span className="text-[13px] text-[#111113]/40">
            Where access turns into outcomes.
          </span>
        </div>
      </div>
    </footer>
  );
}
