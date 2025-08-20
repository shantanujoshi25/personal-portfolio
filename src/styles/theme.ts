export const theme = {
  colors: {
    // Glassmorphism dark theme
    background: {
      primary: '#0a0a0a',      // Deeper dark for glass contrast
      secondary: '#1a1a1a',     // Secondary dark
      tertiary: '#2a2a2a',     // Elevated surfaces
      accent: '#242424',        // Code blocks
      // Glassmorphism specific
      glass: {
        primary: 'rgba(26, 26, 26, 0.2)',     // Main glass background (more transparent)
        secondary: 'rgba(42, 42, 42, 0.15)',   // Secondary glass (more transparent)
        tertiary: 'rgba(51, 51, 51, 0.1)',    // Light glass overlay (more transparent)
        accent: 'rgba(244, 208, 63, 0.05)',    // Yellow glass tint (more transparent)
        border: 'rgba(255, 255, 255, 0.15)',   // Enhanced glass borders (more transparent)
        borderStrong: 'rgba(255, 255, 255, 0.2)', // Strong glass borders (more transparent)
        borderAccent: 'rgba(244, 208, 63, 0.3)', // Accent glass borders (more transparent)
        highlight: 'rgba(255, 255, 255, 0.1)' // Enhanced highlights (more transparent)
      }
    },
    
    // Text colors
    text: {
      primary: '#ffffff',       // Main text
      secondary: '#a0a0a0',     // Subtitle text
      muted: '#666666',         // Muted text
      inverse: '#000000'        // Text on light backgrounds
    },
    
    // Accent colors (pale yellow professional scheme)
    accent: {
      primary: '#f4d03f',       // Pale yellow primary
      secondary: '#f7dc6f',     // Light yellow
      tertiary: '#f8c471',      // Warm yellow
      quaternary: '#fdeaa7',    // Very pale yellow
      purple: '#f39c12',        // Golden orange
      green: '#f1c40f'          // Golden yellow
    },
    
    // Interactive states
    interactive: {
      hover: '#1a1a1a',
      active: '#2a2a2a',
      focus: '#f4d03f20',
      disabled: '#333333'
    },
    
    // Borders and dividers
    border: {
      primary: '#444444',
      secondary: '#555555',
      accent: '#f4d03f40'
    },
    
    // Status colors
    status: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    }
  },
  
  // Typography scale
  typography: {
    fontFamily: {
      primary: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Azeret Mono', 'Fira Code', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem'     // 72px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    }
  },
  
  // Spacing scale
  spacing: {
    px: '1px',
    0.5: '0.125rem',    // 2px
    1: '0.25rem',       // 4px
    2: '0.5rem',        // 8px
    3: '0.75rem',       // 12px
    4: '1rem',          // 16px
    5: '1.25rem',       // 20px
    6: '1.5rem',        // 24px
    8: '2rem',          // 32px
    10: '2.5rem',       // 40px
    12: '3rem',         // 48px
    16: '4rem',         // 64px
    20: '5rem',         // 80px
    24: '6rem',         // 96px
    32: '8rem',         // 128px
    40: '10rem',        // 160px
    48: '12rem',        // 192px
    56: '14rem',        // 224px
    64: '16rem'         // 256px
  },
  
  // Border radius (sharper for glass aesthetic)
  borderRadius: {
    none: '0',
    sm: '0.125rem',     // 2px
    default: '0.25rem', // 4px
    md: '0.375rem',     // 6px (sharper default)
    lg: '0.5rem',       // 8px (sharper)
    xl: '0.625rem',     // 10px (sharper)
    '2xl': '0.75rem',   // 12px (much sharper)
    '3xl': '1rem',      // 16px (sharper)
    full: '9999px'
  },
  
  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(244, 208, 63, 0.5)',
    glowHover: '0 0 30px rgba(244, 208, 63, 0.7)',
    // Glassmorphism shadows
    glass: {
      subtle: '0 8px 32px rgba(0, 0, 0, 0.12)',
      medium: '0 12px 40px rgba(0, 0, 0, 0.15)',
      strong: '0 16px 50px rgba(0, 0, 0, 0.2)',
      inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      glow: '0 0 25px rgba(244, 208, 63, 0.15), 0 8px 32px rgba(0, 0, 0, 0.12)'
    }
  },
  
  // Glassmorphism specific effects
  glass: {
    blur: {
      sm: 'blur(8px)',
      md: 'blur(12px)',
      lg: 'blur(16px)',
      xl: 'blur(24px)'
    },
    gradient: {
      primary: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      secondary: 'linear-gradient(135deg, rgba(244, 208, 63, 0.1) 0%, rgba(244, 208, 63, 0.05) 100%)',
      accent: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(244, 208, 63, 0.1) 100%)'
    }
  },
  
  // Animation durations
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
      slower: '500ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
} as const;

export type Theme = typeof theme;