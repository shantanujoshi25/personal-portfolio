import { motion, AnimatePresence } from 'framer-motion';

interface SectionTransitionProps {
  isTransitioning: boolean;
  currentSection: string;
  targetSection: string;
}

const sectionColors: Record<string, string> = {
  about: '#f4d03f',        // pale yellow primary
  projects: '#f7dc6f',     // pale yellow secondary  
  education: '#f8c471',    // pale yellow tertiary
  certifications: '#fdeaa7', // pale yellow quaternary
  experience: '#f39c12',   // golden orange
  skills: '#f1c40f',       // golden yellow
  contact: '#f4d03f',      // pale yellow primary
};

const SectionTransition = ({ isTransitioning, currentSection, targetSection }: SectionTransitionProps) => {
  const currentColor = sectionColors[currentSection] || '#f4d03f';
  const targetColor = sectionColors[targetSection] || '#f4d03f';
  
  // No typewriter effect - show text immediately
  const sectionDisplayName = targetSection.charAt(0).toUpperCase() + targetSection.slice(1);
  const sectionNameTyped = sectionDisplayName;
  const isTyping = false;
  
  // Show subtitle immediately too
  const subtitleText = `→ Navigating to ${sectionDisplayName}`;
  const subtitleTyped = subtitleText;
  
  // Convert hex to rgba for better CSS support
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  return (
    <AnimatePresence>
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Solid Background to Hide Content */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.1,
              exit: { duration: 0.1 }
            }}
          />
          
          {/* Morphing Color Overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ 
              background: `radial-gradient(circle at 50% 50%, ${hexToRgba(currentColor, 0)} 0%, ${hexToRgba(currentColor, 0)} 100%)` 
            }}
            animate={{ 
              background: [
                `radial-gradient(circle at 50% 50%, ${hexToRgba(currentColor, 0.1)} 0%, ${hexToRgba(currentColor, 0)} 100%)`,
                `radial-gradient(circle at 50% 50%, ${hexToRgba(targetColor, 0.3)} 30%, ${hexToRgba(targetColor, 0.1)} 70%, ${hexToRgba(targetColor, 0)} 100%)`,
                `radial-gradient(circle at 50% 50%, ${hexToRgba(targetColor, 0.1)} 0%, ${hexToRgba(targetColor, 0)} 100%)`,
                `radial-gradient(circle at 50% 50%, ${hexToRgba(targetColor, 0)} 0%, ${hexToRgba(targetColor, 0)} 100%)`
              ]
            }}
            exit={{ 
              background: `radial-gradient(circle at 50% 50%, ${hexToRgba(targetColor, 0)} 0%, ${hexToRgba(targetColor, 0)} 100%)` 
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          />

          {/* Floating Transition Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: i < 6 ? currentColor : targetColor,
                  left: `${10 + (i * 10)}%`,
                  top: `${20 + (i * 8)}%`,
                }}
                initial={{ 
                  scale: 0, 
                  opacity: 0,
                  x: 0,
                  y: 0 
                }}
                animate={{ 
                  scale: [0, 1.5, 0.8, 0],
                  opacity: [0, 0.8, 0.6, 0],
                  x: [0, (i % 2 === 0 ? 100 : -100), (i % 2 === 0 ? -50 : 50), 0],
                  y: [0, -50, -100, -150],
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05,
                  ease: "easeOut" 
                }}
              />
            ))}
          </div>

          {/* Section Label Animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [50, 0, 0, -50],
                scale: [0.8, 1, 1, 1.2]
              }}
              transition={{ 
                duration: 0.8,
                times: [0, 0.3, 0.7, 1],
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div
                className="font-bold text-4xl md:text-6xl mb-2 font-mono"
                style={{ color: targetColor }}
                animate={{
                  textShadow: [
                    `0 0 0px ${targetColor}00`,
                    `0 0 20px ${targetColor}60`,
                    `0 0 30px ${targetColor}80`,
                    `0 0 20px ${targetColor}60`,
                    `0 0 0px ${targetColor}00`
                  ]
                }}
                transition={{ duration: 0.8 }}
              >
                <span>{sectionNameTyped}</span>
                {isTyping && (
                  <motion.span
                    className="typing-cursor"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
              </motion.div>
              
              <motion.div
                className="text-lg font-mono opacity-70"
                style={{ color: targetColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.7, 0.7, 0] }}
                transition={{ duration: 0.8, times: [0, 0.3, 0.7, 1] }}
              >
                {subtitleTyped}
              </motion.div>
            </motion.div>
          </div>

          {/* Geometric Transition Elements */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0.3, 0] }}
            transition={{ duration: 0.8, times: [0, 0.2, 0.8, 1] }}
          >
            {/* Top morphing line */}
            <motion.div
              className="absolute top-0 left-0 h-1"
              style={{ backgroundColor: targetColor }}
              initial={{ width: '0%' }}
              animate={{ width: ['0%', '100%', '100%', '0%'] }}
              transition={{ duration: 0.8, times: [0, 0.4, 0.6, 1] }}
            />
            
            {/* Bottom morphing line */}
            <motion.div
              className="absolute bottom-0 right-0 h-1"
              style={{ backgroundColor: targetColor }}
              initial={{ width: '0%' }}
              animate={{ width: ['0%', '100%', '100%', '0%'] }}
              transition={{ duration: 0.8, times: [0, 0.4, 0.6, 1], delay: 0.1 }}
            />
            
            {/* Side accent elements */}
            <motion.div
              className="absolute left-8 top-1/2 w-1 rounded-full"
              style={{ backgroundColor: currentColor }}
              initial={{ height: '0%', y: '-50%' }}
              animate={{ 
                height: ['0%', '60%', '20%', '0%'],
                backgroundColor: [currentColor, targetColor, targetColor, currentColor]
              }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.div
              className="absolute right-8 top-1/2 w-1 rounded-full"
              style={{ backgroundColor: currentColor }}
              initial={{ height: '0%', y: '-50%' }}
              animate={{ 
                height: ['0%', '60%', '20%', '0%'],
                backgroundColor: [currentColor, targetColor, targetColor, currentColor]
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SectionTransition;