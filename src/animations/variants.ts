export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

export const skillTagVariants = {
  hidden: { 
    opacity: 0, 
    transform: "translate3d(0, 10px, 0)"
  },
  visible: { 
    opacity: 1, 
    transform: "translate3d(0, 0, 0)",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    transform: "translate3d(0, -2px, 0) scale3d(1.05, 1.05, 1)",
    transition: { 
      duration: 0.15,
      ease: "easeOut"
    }
  },
  tap: {
    transform: "translate3d(0, 0, 0) scale3d(0.98, 0.98, 1)",
    transition: {
      duration: 0.1
    }
  }
};

export const experienceVariants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5 
    }
  }
};

export const projectVariants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5 
    }
  },
  hover: {
    x: 15,
    scale: 1.02,
    transition: { 
      duration: 0.3 
    }
  }
};

export const buttonVariants = {
  hover: {
    scale: 1.05,
    y: -2,
    transition: { 
      duration: 0.2 
    }
  },
  tap: {
    scale: 0.98,
    y: 0
  }
};

export const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Simplified scroll-triggered card reveal variants - transforms only
export const scrollRevealVariants = {
  fromLeft: {
    hidden: { 
      opacity: 0, 
      transform: "translate3d(-50px, 0, 0)"
    },
    visible: { 
      opacity: 1, 
      transform: "translate3d(0, 0, 0)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  },
  fromRight: {
    hidden: { 
      opacity: 0, 
      transform: "translate3d(50px, 0, 0)"
    },
    visible: { 
      opacity: 1, 
      transform: "translate3d(0, 0, 0)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  },
  fromTop: {
    hidden: { 
      opacity: 0, 
      transform: "translate3d(0, -30px, 0)"
    },
    visible: { 
      opacity: 1, 
      transform: "translate3d(0, 0, 0)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  },
  fromBottom: {
    hidden: { 
      opacity: 0, 
      transform: "translate3d(0, 30px, 0)"
    },
    visible: { 
      opacity: 1, 
      transform: "translate3d(0, 0, 0)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  },
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
  }
};