import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export const EASE = [0.4, 0, 0.2, 1];
export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-70px" }}
    transition={{ duration: 0.7, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);
export const MaskedLine = ({ children, delay = 0, className = "", innerClassName = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 90 }}
        animate={inView ? { y: 0 } : { y: 90 }}
        transition={{ duration: 0.8, ease: EASE, delay }}
        className={innerClassName}
      >
        {children}
      </motion.div>
    </div>
  );
};
