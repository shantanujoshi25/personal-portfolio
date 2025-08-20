import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Create reduced motion variants
export const createReducedMotionVariants = (normalVariants: any) => {
  if (!normalVariants) return normalVariants;

  const reducedVariants: any = {};
  
  Object.keys(normalVariants).forEach(key => {
    const variant = normalVariants[key];
    if (typeof variant === 'object' && variant.transition) {
      reducedVariants[key] = {
        ...variant,
        transition: {
          ...variant.transition,
          duration: 0.01, // Almost instant
          type: 'tween'
        }
      };
    } else {
      reducedVariants[key] = variant;
    }
  });

  return reducedVariants;
};