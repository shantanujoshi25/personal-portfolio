import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { PERSONAL_INFO } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';

const AboutCard = () => {
  const { displayText, isTyping } = useTypewriter(PERSONAL_INFO.professionalSummary, 25, 1000);

  return (
    <motion.div 
      id="about"
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
        className="text-4xl md:text-5xl font-bold mb-4 text-center pb-3 text-gradient"
        variants={modernVariants.textReveal}
        style={{
          fontWeight: theme.typography.fontWeight.bold,
          letterSpacing: '-0.02em'
        }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
        {/* Profile Photo */}
        <motion.div 
          className="flex justify-center lg:justify-start"
          variants={modernVariants.scaleIn}
        >
          <div className="relative">
            <motion.img
              src="/shantanu-photo.jpg"
              alt="Shantanu Joshi"
              className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-lg"
              style={{
                border: `2px solid ${theme.colors.border.primary}`
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 0 20px ${theme.colors.accent.primary}30`,
                transition: { duration: 0.3 }
              }}
            />
            <motion.div 
              className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              style={{
                backgroundColor: theme.colors.accent.primary,
                color: theme.colors.text.inverse,
                border: `2px solid ${theme.colors.background.primary}`
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              📍 San Jose, CA
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Summary Text */}
        <div className="flex flex-col justify-center lg:col-span-2">
          <motion.div 
            className="text-lg md:text-xl leading-relaxed min-h-[80px]"
            variants={modernVariants.fadeIn}
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.primary.join(', '),
              lineHeight: '1.6'
            }}
          >
            {displayText}
            {isTyping && (
              <motion.span 
                className="typing-cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.75, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Contact Info */}
      <motion.div 
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-center"
        variants={modernVariants.staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {[
          { label: 'Location', value: PERSONAL_INFO.location },
          { label: 'Phone', value: PERSONAL_INFO.phone },
          { label: 'Email', value: PERSONAL_INFO.email }
        ].map((item) => (
          <motion.div 
            key={item.label}
            className="glass-overlay p-4 rounded-lg border backdrop-blur-sm"
            variants={modernVariants.staggerItem}
            style={{
              background: theme.colors.background.glass.secondary,
              borderColor: theme.colors.background.glass.border,
              boxShadow: theme.boxShadow.glass.inner
            }}
          >
            <div className="text-base" style={{ color: theme.colors.text.secondary }}>
              {item.label}
            </div>
            <div className="font-semibold text-xl" style={{ color: theme.colors.text.primary }}>
              {item.value}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-6 p-4 rounded-lg border-l-4 glass-overlay backdrop-blur-sm"
        variants={modernVariants.scaleIn}
        style={{
          background: theme.colors.background.glass.accent,
          border: `1px solid ${theme.colors.background.glass.border}`,
          borderLeftWidth: '4px',
          borderLeftColor: theme.colors.accent.primary,
          boxShadow: theme.boxShadow.glass.inner
        }}
      >
        <div className="text-center italic text-lg relative">
          <span className="text-xl" style={{ color: theme.colors.accent.primary }}>"</span>
          <span style={{ color: theme.colors.text.primary }}>{PERSONAL_INFO.quote}</span>
          <span className="text-xl" style={{ color: theme.colors.accent.primary }}>"</span>
        </div>
      </motion.div>

      {/* Resume Download Button */}
      <motion.div 
        className="mt-8 text-center"
        variants={modernVariants.fadeInUp}
      >
        <motion.button
          className="modern-button px-12 py-6 rounded-xl font-bold text-lg"
          variants={modernVariants.buttonPress}
          initial="rest"
          whileHover={{
            ...modernVariants.buttonPress.hover,
            boxShadow: `0 0 40px ${theme.colors.accent.primary}80`
          }}
          whileTap="tap"
          animate={{
            boxShadow: [
              `0 0 20px ${theme.colors.accent.primary}40`,
              `0 0 30px ${theme.colors.accent.primary}60`,
              `0 0 20px ${theme.colors.accent.primary}40`
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          onClick={() => {
            const link = document.createElement('a');
            link.href = PERSONAL_INFO.resumePath;
            link.download = 'Shantanu_Joshi_Resume.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          📄 Download Resume
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;