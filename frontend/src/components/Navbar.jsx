import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navMenus } from "../mock";

export const Logo = ({ dark = false }) => (
  <a href="#top" className="flex flex-col leading-none select-none">
    <span
      className={`font-logo text-[28px] font-bold tracking-tight ${
        dark ? "text-white" : "text-[#111113]"
      }`}
    >
      bizora
    </span>
    <span className="text-[6.5px] font-semibold tracking-[0.18em] bg-gradient-to-r from-[#F62E8E] via-[#A855F7] to-[#7C5CFC] bg-clip-text text-transparent">
      WHERE ACCESS TURNS INTO OUTCOMES
    </span>
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navMenus.map((menu) => (
            <div key={menu.label} className="relative group">
              <button
                onClick={() => scrollTo(menu.target)}
                className="flex items-center gap-1 text-[13.5px] font-medium text-[#111113]/80 hover:text-[#111113] transition-colors duration-200"
              >
                {menu.label}
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-[opacity,transform,visibility] duration-200 z-50">
                <div className="bg-white rounded-2xl border border-black/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] py-2 w-56">
                  {menu.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollTo(menu.target)}
                      className="block w-full text-left px-5 py-2.5 text-[13px] text-[#111113]/70 hover:text-[#111113] hover:bg-black/[0.03] transition-colors duration-150"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <span className="text-[13.5px] font-medium text-[#111113]/50 cursor-default">
            Version 1
          </span>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#111113] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full hover:bg-[#F62E8E] transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#111113]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-6 py-4 flex flex-col gap-1">
          {navMenus.map((menu) => (
            <button
              key={menu.label}
              onClick={() => scrollTo(menu.target)}
              className="text-left py-3 text-[15px] font-medium text-[#111113]/80 border-b border-black/5"
            >
              {menu.label}
            </button>
          ))}
          <span className="py-3 text-[15px] font-medium text-[#111113]/50 border-b border-black/5">
            Version 1
          </span>
          <button
            onClick={() => scrollTo("contact")}
            className="mt-3 bg-[#111113] text-white text-[14px] font-semibold px-6 py-3 rounded-full w-fit"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
