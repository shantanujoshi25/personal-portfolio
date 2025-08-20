import { createContext, useContext, ReactNode } from 'react';

interface SectionTransitionContextType {
  startTransition: (fromSection: string, toSection: string) => void;
  isTransitioning: boolean;
}

const SectionTransitionContext = createContext<SectionTransitionContextType | undefined>(undefined);

export const useSectionTransitionContext = () => {
  const context = useContext(SectionTransitionContext);
  if (!context) {
    throw new Error('useSectionTransitionContext must be used within a SectionTransitionProvider');
  }
  return context;
};

interface SectionTransitionProviderProps {
  children: ReactNode;
  value: SectionTransitionContextType;
}

export const SectionTransitionProvider = ({ children, value }: SectionTransitionProviderProps) => {
  return (
    <SectionTransitionContext.Provider value={value}>
      {children}
    </SectionTransitionContext.Provider>
  );
};