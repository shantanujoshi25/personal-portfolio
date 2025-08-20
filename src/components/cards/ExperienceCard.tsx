import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';

const ExperienceCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      id="experience"
      className="glass-card"
      variants={modernVariants.cardHover}
      initial="rest"
      whileHover="hover"
      style={{
        background: theme.colors.background.glass.primary,
        backdropFilter: theme.glass.blur.md,
        WebkitBackdropFilter: theme.glass.blur.md,
        border: `2px solid ${theme.colors.background.glass.borderStrong}`,
        boxShadow: theme.boxShadow.glass.subtle
      }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-12 text-center pb-6 text-gradient"
        variants={modernVariants.textReveal}
        style={{
          fontWeight: theme.typography.fontWeight.bold,
          letterSpacing: '-0.02em'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      
      <motion.div 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Timeline Line */}
        <motion.div 
          className="absolute left-4 top-0 bottom-0 w-1 rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${theme.colors.accent.primary}, ${theme.colors.accent.secondary}, ${theme.colors.accent.tertiary})`
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {EXPERIENCE.map((job, index) => (
          <motion.div 
            key={job.id}
            className="relative mb-8 last:mb-0"
            variants={modernVariants.staggerItem}
          >
            {/* Timeline Dot */}
            <motion.div 
              className="absolute left-2 w-5 h-5 rounded-full z-10"
              style={{
                backgroundColor: theme.colors.accent.primary,
                border: `4px solid ${theme.colors.background.secondary}`
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.2) }}
              whileHover={{ 
                scale: 1.3,
                transition: { duration: 0.2 }
              }}
            />
            
            {/* Content */}
            <motion.div 
              className="ml-12 p-4 rounded-lg transition-colors duration-300"
              style={{
                backgroundColor: `${theme.colors.accent.primary}10`,
                border: `1px solid ${theme.colors.accent.primary}30`
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                className="font-bold text-xl md:text-2xl mb-2"
                style={{ color: theme.colors.accent.primary }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.2) }}
              >
                {job.title}
              </motion.h3>
              
              <motion.div 
                className="font-semibold text-lg md:text-xl mb-2"
                style={{ color: theme.colors.text.primary }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + (index * 0.2) }}
              >
                {job.company}
              </motion.div>
              
              <motion.div 
                className="font-mono text-base mb-4 px-3 py-2 rounded inline-block"
                style={{
                  color: theme.colors.accent.primary,
                  backgroundColor: `${theme.colors.accent.primary}15`
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + (index * 0.2) }}
              >
                {job.dateRange}
              </motion.div>
              
              <motion.p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.2) }}
              >
                {job.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievement Badge */}
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{
          backgroundColor: theme.colors.accent.tertiary,
          color: theme.colors.background.primary
        }}>
          <span>🎯</span>
          <span>3+ Years Experience</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;