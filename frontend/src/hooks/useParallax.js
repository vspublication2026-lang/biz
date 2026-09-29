import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";

/**
 * Drifts `targetRef` vertically against the scroll progress of `sectionRef`.
 * Lets a scrolling column float against a headline pinned beside it.
 */
export default function useParallax(sectionRef, targetRef, speed = 70) {
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });
  useMotionValueEvent(smooth, "change", (v) => {
    const el = targetRef.current;
    if (el) el.style.transform = `translateY(${(0.5 - v) * speed}px)`;
  });
}
