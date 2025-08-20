import { motion } from 'framer-motion';
import { SKILLS } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';

const categoryColors = {
  languages: theme.colors.accent.primary,
  frontend: theme.colors.accent.primary,
  backend: theme.colors.accent.primary,
  cloud: theme.colors.accent.primary,
  database: theme.colors.accent.primary,
  ml: theme.colors.accent.primary,
  testing: theme.colors.accent.primary
};

const SkillsCard = () => {

  return (
    <motion.div 
      id="skills"
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
        Skills & Technologies
      </motion.h2>
      
      {/* Skills grouped by category */}
      <motion.div 
        className="space-y-8 mt-8"
        variants={modernVariants.staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(
          SKILLS.reduce((acc, skill) => {
            if (!acc[skill.category]) acc[skill.category] = [];
            acc[skill.category].push(skill);
            return acc;
          }, {} as Record<string, typeof SKILLS>)
        ).map(([category, skills]) => (
          <motion.div
            key={category}
            variants={modernVariants.staggerItem}
            className="space-y-4"
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold mb-6 capitalize"
              variants={modernVariants.textReveal}
              style={{
                color: categoryColors[category as keyof typeof categoryColors],
                fontWeight: theme.typography.fontWeight.semibold,
                letterSpacing: '-0.01em'
              }}
            >
              {category === 'ml' ? 'Machine Learning' : category}
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-4 w-full"
              variants={modernVariants.staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="px-6 py-3 rounded-lg text-base md:text-lg font-medium cursor-pointer"
                  variants={modernVariants.skillTag}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  style={{
                    backgroundColor: `${categoryColors[skill.category as keyof typeof categoryColors]}15`,
                    color: theme.colors.text.primary
                  }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div 
        className="mt-8 pt-6 border-t text-center"
        variants={modernVariants.fadeInUp}
        style={{
          borderColor: theme.colors.border.primary
        }}
      >
        <div 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border"
          style={{
            backgroundColor: `${theme.colors.accent.primary}15`,
            borderColor: `${theme.colors.accent.primary}30`,
            color: theme.colors.accent.primary
          }}
        >
          <span>🚀</span>
          <span>{SKILLS.length}+ Technologies Mastered</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsCard;