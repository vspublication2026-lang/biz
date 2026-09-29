import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
/**
 * Wraps a section in a scroll-linked parallax stage (used by the Version 2 page).
 * - content drifts vertically at `speed` (px) as the section crosses the viewport
 * - a depth layer of colour orbs drifts the opposite way, faster, for a layered feel
 * - the whole stage eases in (scale + opacity) as it enters
 */
export default function Parallax({ children, speed = 80, depth = true, colors = ["#6D28D9", "#FF3E8E"], className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });
  const y = useTransform(smooth, [0, 1], [speed, -speed]);
  const bgY = useTransform(smooth, [0, 1], [-speed * 2.2, speed * 2.2]);
  const bgY2 = useTransform(smooth, [0, 1], [speed * 1.6, -speed * 1.6]);
  const bgRotate = useTransform(smooth, [0, 1], [-8, 8]);
  const scale = useTransform(smooth, [0, 0.35, 0.65, 1], [0.94, 1, 1, 0.97]);
  const opacity = useTransform(smooth, [0, 0.18, 0.82, 1], [0.35, 1, 1, 0.5]);
  return (
    <div ref={ref} className={`relative ${className}`}>
      {depth && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: bgY, rotate: bgRotate }}
            className="absolute -left-[12%] top-[10%] w-[46vw] h-[46vw] max-w-[640px] max-h-[640px]"
          >
            <div className="blob w-full h-full" style={{ background: colors[0], opacity: 0.16 }} />
          </motion.div>
          <motion.div
            style={{ y: bgY2 }}
            className="absolute -right-[14%] bottom-[5%] w-[40vw] h-[40vw] max-w-[560px] max-h-[560px]"
          >
            <div className="blob w-full h-full" style={{ background: colors[1], opacity: 0.14, animationDelay: "-7s" }} />
          </motion.div>
        </div>
      )}
      <motion.div style={{ y, scale, opacity }} className="relative">
        {children}
      </motion.div>
    </div>
  );
}
