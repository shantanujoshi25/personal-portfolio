import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';
import { useSectionTransitionContext } from '../../contexts/SectionTransitionContext';

interface NavItem {
  id: string;
  label: string;
  color: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About', color: theme.colors.accent.primary },
  { id: 'projects', label: 'Projects', color: theme.colors.accent.primary },
  { id: 'experience', label: 'Experience', color: theme.colors.accent.primary },
  { id: 'education', label: 'Education', color: theme.colors.accent.primary },
  { id: 'skills', label: 'Skills', color: theme.colors.accent.primary },
  { id: 'certifications', label: 'Achievements', color: theme.colors.accent.primary },
  { id: 'contact', label: 'Contact', color: theme.colors.accent.primary },
];

const LeftNavigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { startTransition, isTransitioning } = useSectionTransitionContext();
  
  const scrollToSection = (sectionId: string) => {
    // Don't allow navigation during transitions
    if (isTransitioning) return;
    
    // Start transition animation
    startTransition(activeSection, sectionId);
    
    // Delay the actual scroll to allow transition to start
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Small delay to let transition animation start
  };

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // If we're near the top of the page, set About as active
    if (scrollTop < 50) {
      setActiveSection('about');
      return;
    }

    // Find the section that's most visible in the viewport
    let currentSection = 'about';
    let maxVisibleArea = 0;
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section) {
        const rect = section.getBoundingClientRect();
        
        // Calculate visible area of the section
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleArea = visibleHeight * rect.width;
        
        // If this section has more visible area, make it active
        if (visibleArea > maxVisibleArea && visibleHeight > 50) {
          maxVisibleArea = visibleArea;
          currentSection = navItems[i].id;
        }
      }
    }
    
    setActiveSection(currentSection);
  }, []);

  const throttledHandleScroll = useCallback(
    () => {
      let ticking = false;
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    [handleScroll]
  );

  useEffect(() => {
    // Call initially to set correct active section
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll, throttledHandleScroll]);


  return (
    <motion.nav
      className="fixed left-8 top-16 bottom-16 z-40 hidden lg:block w-96"
      variants={modernVariants.slideInFromLeft}
      initial="hidden"
      animate="visible"
    >
      <div 
        className="glass-nav p-8 h-full flex flex-col backdrop-blur-xl"
        style={{
          background: theme.colors.background.glass.primary,
          backdropFilter: theme.glass.blur.lg,
          WebkitBackdropFilter: theme.glass.blur.lg,
          border: `2px solid ${theme.colors.background.glass.borderStrong}`,
          boxShadow: theme.boxShadow.glass.medium
        }}
      >
        <div className="space-y-4 flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <motion.div
                key={item.id}
                className="relative"
                variants={modernVariants.staggerItem}
              >
                <motion.button
                  className="w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 text-lg border"
                  onClick={() => scrollToSection(item.id)}
                  variants={modernVariants.navItem}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: isActive ? `${item.color}15` : 'transparent',
                    borderColor: isActive ? `${item.color}40` : theme.colors.border.primary,
                    color: isActive ? item.color : theme.colors.text.secondary
                  }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: isActive ? item.color : theme.colors.text.muted
                      }}
                      animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>{item.label}</span>
                  </div>
                </motion.button>

                {/* Active section indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -left-2 top-0 w-1 h-full rounded-r-sm"
                    style={{ backgroundColor: item.color }}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <motion.div 
          className="mt-6 pt-6"
          variants={modernVariants.fadeIn}
          style={{
            borderTop: `1px solid ${theme.colors.border.primary}`
          }}
        >
          <div 
            className="text-sm text-center mb-4 font-medium"
            style={{ color: theme.colors.text.muted }}
          >
            Progress
          </div>
          <div 
            className="w-full h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: theme.colors.background.tertiary }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${theme.colors.accent.primary}, ${theme.colors.accent.tertiary})`,
                width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%` 
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default LeftNavigation;