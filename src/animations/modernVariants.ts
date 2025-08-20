// Modern animation variants for professional portfolio theme
import { theme } from '../styles/theme';

// Professional, subtle animations for the modern theme
export const modernVariants = {
  // Fade animations
  fadeIn: {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },

  fadeInUp: {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },

  // Slide animations (more subtle)
  slideInFromLeft: {
    hidden: { 
      opacity: 0,
      x: -30
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  slideInFromRight: {
    hidden: { 
      opacity: 0,
      x: 30
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Scale animations
  scaleIn: {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },

  // Container animations for staggered children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  staggerItem: {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },

  // Card hover animations
  cardHover: {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 0 20px ${theme.colors.accent.primary}30`,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  },

  // Button animations
  buttonPress: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },

  // Navigation animations
  navItem: {
    rest: { 
      opacity: 0.7,
      scale: 1
    },
    hover: { 
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    active: {
      opacity: 1,
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  },

  // Text animations
  textReveal: {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Glow effect for accent elements
  glowPulse: {
    initial: {
      boxShadow: `0 0 10px ${theme.colors.accent.primary}50`
    },
    animate: {
      boxShadow: [
        `0 0 10px ${theme.colors.accent.primary}50`,
        `0 0 20px ${theme.colors.accent.primary}70`,
        `0 0 10px ${theme.colors.accent.primary}50`
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },

  // Page transition
  pageTransition: {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  },

  // Skill tag animations (more professional)
  skillTag: {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: `0 0 10px ${theme.colors.accent.primary}50`,
      transition: { duration: 0.2 }
    }
  },

  // Loading animations
  loadingDots: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
} as const;

export type ModernVariants = typeof modernVariants;