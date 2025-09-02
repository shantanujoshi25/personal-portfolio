import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import LeftNavigation from './components/layout/LeftNavigation';
import AboutCard from './components/cards/AboutCard';
import SkillsCard from './components/cards/SkillsCard';
import ExperienceCard from './components/cards/ExperienceCard';
import ProjectsCard from './components/cards/ProjectsCard';
import EducationCard from './components/cards/EducationCard';
import CertificationsCard from './components/cards/CertificationsCard';
import ContactCard from './components/cards/ContactCard';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import SectionTransition from './components/ui/SectionTransition';
import PulsatingSpheres from './components/ui/PulsatingSpheres';
import { SectionTransitionProvider } from './contexts/SectionTransitionContext';
import { modernVariants } from './animations/modernVariants';
import { useInView } from './hooks/useInView';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useSectionTransition } from './hooks/useSectionTransition';
import { theme } from './styles/theme';
import { trackPageView, trackPerformance } from './utils/analytics';

const AppContent = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Initialize analytics tracking
  useEffect(() => {
    // Track page view
    trackPageView('Portfolio Home');
    
    // Initialize performance tracking
    trackPerformance();
  }, []);
  
  
  // Section transition state (for manual navigation)
  const sectionTransition = useSectionTransition();
  
  // Scroll transitions disabled
  
  // Create simplified variants for reduced motion
  const getVariants = (normalVariant: any) => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } }
      };
    }
    return normalVariant;
  };
  
  // Individual scroll triggers for each card
  const aboutInView = useInView({ threshold: 0.2 });
  const projectsInView = useInView({ threshold: 0.2 });
  const educationInView = useInView({ threshold: 0.2 });
  const certificationsInView = useInView({ threshold: 0.2 });
  const experienceInView = useInView({ threshold: 0.2 });
  const skillsInView = useInView({ threshold: 0.2 });
  const contactInView = useInView({ threshold: 0.2 });

  return (
    <SectionTransitionProvider 
      value={{
        startTransition: sectionTransition.startTransition,
        isTransitioning: sectionTransition.isTransitioning
      }}
    >
      <div 
        className="min-h-screen relative"
        style={{
          backgroundColor: 'transparent', // Remove background color to show video
          color: theme.colors.text.primary,
          fontFamily: theme.typography.fontFamily.primary.join(', ')
        }}
      >
      {/* Framer Motion Pulsating Spheres Background */}
      <PulsatingSpheres />
      
      <ScrollProgress />
      <LeftNavigation />
      
      {/* Modern single-column layout - maximized width */}
      <div className="w-full pl-6 pr-6 lg:pl-[24rem] lg:pr-12 py-10">
        <Header />
        
        {/* Main content - single column */}
        <motion.main 
          className="mt-20 space-y-20 relative"
          variants={getVariants(modernVariants.pageTransition)}
          initial="initial"
          animate="animate"
          style={{
            opacity: sectionTransition.isTransitioning ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          {/* Hero About section */}
          <motion.section
            ref={aboutInView.ref}
            variants={getVariants(modernVariants.fadeInUp)}
            initial="hidden"
            animate={aboutInView.isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <AboutCard />
          </motion.section>
          
          {/* Projects showcase */}
          <motion.section
            ref={projectsInView.ref}
            variants={getVariants(modernVariants.slideInFromRight)}
            initial="hidden"
            animate={projectsInView.isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <ProjectsCard />
          </motion.section>
          
          {/* Experience section */}
          <motion.section
            ref={experienceInView.ref}
            variants={getVariants(modernVariants.fadeInUp)}
            initial="hidden"
            animate={experienceInView.isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <ExperienceCard />
          </motion.section>
          
          {/* Education section */}
          <motion.section
            ref={educationInView.ref}
            variants={getVariants(modernVariants.fadeInUp)}
            initial="hidden"
            animate={educationInView.isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <EducationCard />
          </motion.section>
          
          {/* Skills section */}
          <motion.section
            ref={skillsInView.ref}
            variants={getVariants(modernVariants.fadeInUp)}
            initial="hidden"
            animate={skillsInView.isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <SkillsCard />
          </motion.section>
          
          {/* Certifications section */}
          <motion.section
            ref={certificationsInView.ref}
            variants={getVariants(modernVariants.fadeInUp)}
            initial="hidden"
            animate={certificationsInView.isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <CertificationsCard />
          </motion.section>
          
          {/* Contact section */}
          <motion.section
            ref={contactInView.ref}
            variants={getVariants(modernVariants.fadeInUp)}
            initial="hidden"
            animate={contactInView.isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <ContactCard />
          </motion.section>
        </motion.main>
      </div>
      
      
      <ScrollToTop />
      
      {/* Section Transition Animation (Full) - Navigation clicks only */}
      <SectionTransition
        isTransitioning={sectionTransition.isTransitioning}
        currentSection={sectionTransition.currentSection}
        targetSection={sectionTransition.targetSection}
      />
      
    </div>
    </SectionTransitionProvider>
  );
};

function App() {
  return <AppContent />;
}

export default App;