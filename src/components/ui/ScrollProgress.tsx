import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left backdrop-blur-sm"
      style={{ 
        scaleX,
        background: 'linear-gradient(90deg, rgba(244, 208, 63, 0.8), rgba(247, 220, 111, 0.8), rgba(248, 196, 113, 0.8))',
        boxShadow: '0 0 10px rgba(244, 208, 63, 0.3)'
      }}
    />
  );
};

export default ScrollProgress;