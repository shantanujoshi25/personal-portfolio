import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS, CONTACT } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';

const ProjectsCard = () => {
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
      id="projects"
      className="glass-card"
      variants={modernVariants.cardHover}
      initial="rest"
      whileHover="hover"
      style={{
        background: theme.colors.background.glass.primary,
        backdropFilter: theme.glass.blur.md,
        WebkitBackdropFilter: theme.glass.blur.md,
        border: `1px solid ${theme.colors.background.glass.border}`,
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
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="glass-overlay p-6 rounded-lg cursor-pointer transition-all duration-300 group backdrop-blur-sm"
            style={{
              background: theme.colors.background.glass.secondary,
              border: `1px solid ${theme.colors.background.glass.border}`,
              boxShadow: theme.boxShadow.glass.inner
            }}
            variants={modernVariants.staggerItem}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-start mb-3">
              <motion.h3 
                className="font-bold text-xl md:text-2xl transition-colors duration-300"
                style={{ 
                  color: theme.colors.text.primary 
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                {project.title}
              </motion.h3>
              
              <motion.div 
                className="flex gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: `${theme.colors.accent.primary}20`,
                      color: theme.colors.text.primary
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: `${theme.colors.accent.primary}20`,
                      color: theme.colors.text.primary
                    }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={16} />
                  </motion.a>
                )}
              </motion.div>
            </div>
            
            <motion.p 
              className="text-base md:text-lg mb-4 leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              {project.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            >
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="font-mono text-sm px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${theme.colors.accent.primary}15`,
                    color: theme.colors.accent.primary,
                    border: `1px solid ${theme.colors.accent.primary}30`
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.6 + (index * 0.1) + (techIndex * 0.05) 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Project Status Indicator */}
            <motion.div 
              className="mt-3 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme.colors.accent.primary }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <span className="text-sm font-mono">Active Project</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Projects Link */}
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="modern-button px-6 py-3 rounded-lg font-semibold inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects →
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsCard;