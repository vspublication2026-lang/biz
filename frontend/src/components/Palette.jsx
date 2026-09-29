import { createContext, useContext } from "react";

/**
 * Section colours for a page. Sections read this instead of hard-coding their
 * grounds, so an alternative page (Version 1) can restyle the whole home page
 * without duplicating every section component.
 */
export const DEFAULT_PALETTE = {
  id: "default",
  // What We Build card grounds
  cards: ["#DCEAF5", "#FFDCEB", "#EAE4FF", "#C7DDEE"],
  // Who We Work With / How businesses engage card grounds
  audience: ["#EDE9FE", "#FFE1EF", "#DCEAF5", "#ECECEA"],
  // text colour on those grounds, per card
  ink: ["#111111", "#111111", "#111111", "#111111"],
  // icon tiles, rules and other accents, per card
  accents: ["#6D28D9", "#D81B74", "#5C86B6", "#111111"],
  // the three signals
  signals: ["#D81B74", "#6D28D9", "#FF3E8E"],
  // the four belief lines
  beliefs: ["#6D28D9", "#D81B74", "#8B5CF6", "#FF3E8E"],
  // every other accent a section paints inline, keyed by its default colour
  swap: {},
};

const PaletteContext = createContext(DEFAULT_PALETTE);

export const usePalette = () => useContext(PaletteContext);

/**
 * Translates a section's own accent colour into the current palette.
 * Sections call `c("#6D28D9")` instead of hard-coding, and a palette with no
 * entry for that colour simply hands it straight back.
 */
export const useSwap = () => {
  const { swap } = useContext(PaletteContext);
  return (hex) => (swap && swap[hex]) || hex;
};

export const PaletteProvider = ({ value, children }) => (
  <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>
);

/**
 * True when a ground needs light type on it. Sections use this instead of
 * assuming their default tint, so any palette gets readable cards.
 */
export const isDark = (hex) => {
  if (typeof hex !== "string" || hex[0] !== "#" || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // perceived luminance, 0–255
  return 0.299 * r + 0.587 * g + 0.114 * b < 165;
};
