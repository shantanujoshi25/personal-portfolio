import { useState, useCallback } from 'react';

interface SectionTransitionState {
  isTransitioning: boolean;
  currentSection: string;
  targetSection: string;
}

export const useSectionTransition = () => {
  const [transitionState, setTransitionState] = useState<SectionTransitionState>({
    isTransitioning: false,
    currentSection: 'about',
    targetSection: 'about',
  });

  const startTransition = useCallback((fromSection: string, toSection: string) => {
    setTransitionState({
      isTransitioning: true,
      currentSection: fromSection,
      targetSection: toSection,
    });

    // End transition after animation completes
    setTimeout(() => {
      setTransitionState(prev => ({
        ...prev,
        isTransitioning: false,
        currentSection: toSection,
      }));
    }, 800); // Match visual transition duration
  }, []);

  return {
    ...transitionState,
    startTransition,
  };
};