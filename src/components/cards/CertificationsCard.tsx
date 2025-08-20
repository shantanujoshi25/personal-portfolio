import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';

const CertificationsCard = () => {
  const certificationIcons = ['🔐', '🧠', '🏆', '👨‍🏫'];

  return (
    <motion.div 
      id="certifications"
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
        Certifications & Achievements
      </motion.h2>
      
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            className="relative p-4 rounded-lg transition-colors duration-300 group"
            style={{
              backgroundColor: `${theme.colors.accent.primary}10`,
              border: `1px solid ${theme.colors.accent.primary}30`
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.15) }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Achievement Icon */}
            <motion.div 
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-sm"
              style={{
                backgroundColor: theme.colors.accent.primary,
                color: theme.colors.background.primary
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.15) }}
            >
              {certificationIcons[index]}
            </motion.div>
            
            <motion.div 
              className="ml-2 text-base md:text-lg leading-relaxed transition-colors duration-300"
              style={{ color: theme.colors.text.primary }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.15) }}
            >
              {cert}
            </motion.div>
            
            {/* Highlight special achievements */}
            {(cert.includes('200+') || cert.includes('hackathon') || cert.includes('NSD')) && (
              <motion.div 
                className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: theme.colors.accent.primary,
                  color: theme.colors.background.primary
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.15) }}
              >
                <span>⭐</span>
                <span>Featured</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Achievement Summary */}
      <motion.div 
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="px-3 py-2 rounded-full text-center text-sm font-semibold" style={{
          backgroundColor: theme.colors.accent.primary,
          color: theme.colors.background.primary
        }}>
          <span>💻 200+ DSA Problems</span>
        </div>
        <div className="px-3 py-2 rounded-full text-center text-sm font-semibold" style={{
          backgroundColor: theme.colors.accent.secondary,
          color: theme.colors.background.primary
        }}>
          <span>🥇 Hackathon Winner</span>
        </div>
      </motion.div>

      {/* Leadership Badge */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{
          backgroundColor: theme.colors.accent.tertiary,
          color: theme.colors.background.primary
        }}>
          <span>👨‍💼</span>
          <span>Tech Leadership & Mentoring</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificationsCard;