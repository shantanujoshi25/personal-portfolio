import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useClock } from '../../hooks/useClock';
import { PERSONAL_INFO } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';
import { useSectionTransitionContext } from '../../contexts/SectionTransitionContext';

const Header = () => {
  const { timeString, dateString } = useClock();
  const { startTransition, isTransitioning } = useSectionTransitionContext();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the about section (roughly 250px for earlier trigger)
      const scrolled = window.scrollY > 250;
      setIsScrolled(scrolled);
      console.log('Scroll position:', window.scrollY, 'Is scrolled:', scrolled);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    // Don't allow navigation during transitions
    if (isTransitioning) return;
    
    // Start transition animation with current section as 'about'
    startTransition('about', sectionId);
    
    // Delay the actual scroll to allow transition to start
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Small delay to let transition animation start
  };

  return (
    <>
      {/* Original Header - stays in place */}
      <motion.header 
        className="glass-header backdrop-blur-md relative w-full py-6 text-center"
        variants={modernVariants.fadeInUp}
        initial="hidden"
        animate="visible"
        style={{
          background: theme.colors.background.glass.secondary,
          backdropFilter: theme.glass.blur.md,
          WebkitBackdropFilter: theme.glass.blur.md,
          border: `1px solid ${theme.colors.background.glass.border}`,
          borderRadius: theme.borderRadius['2xl'],
          boxShadow: theme.boxShadow.glass.subtle
        }}
      >
        {/* Enhanced glow effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(ellipse at center, ${theme.colors.accent.primary}20, transparent 70%)`
          }}
        />
        
        <div className="relative z-10 text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-2 text-gradient"
            style={{
              fontWeight: theme.typography.fontWeight.bold,
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            {PERSONAL_INFO.name}
          </h1>
          
          <p 
            className="text-lg md:text-xl mb-4 max-w-4xl mx-auto px-4"
            style={{
              color: theme.colors.text.secondary,
              fontWeight: theme.typography.fontWeight.normal,
              lineHeight: '1.4'
            }}
          >
            {PERSONAL_INFO.tagline}
          </p>
          
          <div className="font-mono modern-button inline-block">
            <div className="text-sm md:text-base">
              {dateString} • {timeString}
            </div>
          </div>

          {/* Full navigation */}
          <nav className="flex justify-center gap-4 mt-6 flex-wrap">
            {['about', 'projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 capitalize"
                whileHover={{
                  color: theme.colors.accent.primary,
                  backgroundColor: `${theme.colors.accent.primary}10`,
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                style={{
                  color: theme.colors.text.secondary
                }}
              >
                {item}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mini Header - appears on scroll */}
      <motion.header 
        className="glass-header backdrop-blur-md fixed top-4 left-4 right-4 py-5 z-[9999]"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : -20
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{
          background: 'rgba(42, 42, 42, 0.25)',
          backdropFilter: theme.glass.blur.md,
          WebkitBackdropFilter: theme.glass.blur.md,
          border: `2px solid rgba(244, 208, 63, 0.4)`,
          borderRadius: theme.borderRadius['2xl'],
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(244, 208, 63, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          pointerEvents: isScrolled ? 'auto' : 'none'
        }}
      >
        {/* Enhanced glow effect for mini header */}
        <div 
          className="absolute inset-0 rounded-xl opacity-40"
          style={{
            background: `radial-gradient(ellipse at center, ${theme.colors.accent.primary}40, transparent 60%)`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 
              className="text-xl font-bold text-gradient"
              style={{
                fontWeight: theme.typography.fontWeight.bold,
                letterSpacing: '-0.01em'
              }}
            >
              {PERSONAL_INFO.name}
            </h1>
            <div
              className="hidden md:block text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              Full-Stack Developer | 3+ Years Experience | Java, Python, React Expertise
            </div>
          </div>
          
          {/* Compact navigation */}
          <nav className="hidden lg:flex gap-2">
            {['about', 'projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="text-xs font-medium px-3 py-1 rounded-md transition-all duration-200 capitalize"
                whileHover={{
                  color: theme.colors.accent.primary,
                  backgroundColor: `${theme.colors.accent.primary}10`,
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                style={{
                  color: theme.colors.text.secondary
                }}
              >
                {item}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;