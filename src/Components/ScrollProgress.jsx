import { motion, useScroll } from "framer-motion";
import "../CSS/ScrollProgress.css";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
      />
    </>
  );
};

export default ScrollProgress;
