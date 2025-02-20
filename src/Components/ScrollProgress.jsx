import { motion, useScroll } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "var(--l-4)",
          zIndex: 9999,
          transformStyle: "preserve-3d",
          boxShadow: "1px 1px 50px var(--cl)",
          transition: { type: "spring", damping: 20, stiffness: 300 },
        }}
      />
    </>
  );
};

export default ScrollProgress;
