import { motion } from 'framer-motion';
import { EDUCATION } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';

const EducationCard = () => {
  return (
    <motion.div 
      id="education"
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
      >
        Education
      </motion.h2>
      
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="relative p-5 rounded-lg transition-colors duration-300"
            style={{
              backgroundColor: `${theme.colors.accent.primary}10`,
              border: `1px solid ${theme.colors.accent.primary}30`
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Degree Icon */}
            <motion.div 
              className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-lg"
              style={{
                backgroundColor: theme.colors.accent.primary,
                color: theme.colors.background.primary
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.2) }}
            >
              🎓
            </motion.div>
            
            <motion.h3 
              className="font-bold text-xl md:text-2xl mb-2"
              style={{ color: theme.colors.accent.primary }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
            >
              {edu.degree}
            </motion.h3>
            
            <motion.div 
              className="font-semibold text-lg md:text-xl mb-2"
              style={{ color: theme.colors.text.primary }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + (index * 0.2) }}
            >
              {edu.school}
            </motion.div>
            
            <motion.div 
              className="font-mono text-base px-3 py-2 rounded-full inline-block mb-2"
              style={{
                color: theme.colors.accent.primary,
                backgroundColor: `${theme.colors.accent.primary}15`
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + (index * 0.2) }}
            >
              {edu.dateRange}
            </motion.div>
            
            {edu.gpa && (
              <motion.div 
                className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: theme.colors.accent.secondary,
                  color: theme.colors.background.primary
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + (index * 0.2) }}
              >
                <span>📊</span>
                <span>GPA: {edu.gpa}</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Academic Achievement */}
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{
          backgroundColor: theme.colors.accent.tertiary,
          color: theme.colors.background.primary
        }}>
          <span>🏆</span>
          <span>Master's in Software Engineering (In Progress)</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EducationCard;