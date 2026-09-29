import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Parallax from "@/components/Parallax";
import { PaletteProvider } from "@/components/Palette";
import HeroStage from "@/components/sections/HeroStage";
import ThreeSignals from "@/components/sections/ThreeSignals";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import DefyGravity from "@/components/sections/DefyGravity";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import EngageAlt from "@/components/sections/EngageAlt";
import Ripple from "@/components/sections/Ripple";
import NorthStar from "@/components/sections/NorthStar";
import HowWeWork from "@/components/sections/HowWeWork";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/Footer";

/**
 * Version 1 — the same home page on the client's four-colour scheme.
 * The grounds are saturated, so every card runs light type on colour.
 */
const V1 = {
  id: "v1",
  cards: ["#9273fc", "#fc3ea0", "#5286fc", "#012362"],
  audience: ["#9273fc", "#fc3ea0", "#5286fc", "#012362"],
  ink: ["#FAFAFA", "#FAFAFA", "#FAFAFA", "#FAFAFA"],
  accents: ["#012362", "#9273fc", "#012362", "#5286fc"],
  signals: ["#fc3ea0", "#9273fc", "#5286fc"],
  beliefs: ["#9273fc", "#fc3ea0", "#5286fc", "#012362"],
  // every other accent the sections paint inline
  swap: {
    "#6D28D9": "#9273fc",
    "#8B5CF6": "#9273fc",
    "#D81B74": "#fc3ea0",
    "#FF3E8E": "#fc3ea0",
    "#5C86B6": "#5286fc",
    "#6B7280": "#012362",
    "#EDE9FE": "#9273fc",
    "#FFE1EF": "#fc3ea0",
    "#FFDCEB": "#fc3ea0",
    "#DCEAF5": "#5286fc",
    "#EAE4FF": "#9273fc",
    "#C7DDEE": "#5286fc",
    "#ECECEA": "#012362",
    "#F1F1F3": "#012362",
    "#C4B5FD": "#cdbcff",
    "#FFC2DC": "#ffc2de",
  },
};

export default function Version1() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const t = setTimeout(() => {
      const el = document.querySelector(location.hash);
      if (!el) return;
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
      else el.scrollIntoView({ behavior: "smooth" });
    }, 450);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <PaletteProvider value={V1}>
      <main data-testid="version1-page" className="theme-v1">
        {/* pinned hero — must not sit inside a transformed Parallax stage */}
        <HeroStage />
        <Parallax speed={70} colors={["#fc3ea0", "#9273fc"]}>
          <ThreeSignals />
        </Parallax>
        <Parallax speed={90} colors={["#5286fc", "#9273fc"]}>
          <WhatWeBuild />
        </Parallax>
        {/* pinned headline — must not sit inside a transformed Parallax stage */}
        <DefyGravity />
        <Parallax speed={100} colors={["#9273fc", "#fc3ea0"]}>
          <WhoWeWorkWith />
        </Parallax>
        <EngageAlt />
        {/* pinned section — must not sit inside a transformed Parallax stage */}
        <Ripple />
        <Parallax speed={80} colors={["#fc3ea0", "#5286fc"]}>
          <NorthStar />
        </Parallax>
        {/* pinned section — must not sit inside a transformed Parallax stage */}
        <HowWeWork />
        <Parallax speed={60} colors={["#9273fc", "#fc3ea0"]}>
          <ClosingCTA />
        </Parallax>
        <Footer />
      </main>
    </PaletteProvider>
  );
}
