import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from '../../utils/constants';
import { modernVariants } from '../../animations/modernVariants';
import { theme } from '../../styles/theme';
import ContactDialog from '../ContactDialog';
import { trackExternalLink, trackContactInteraction } from '../../utils/analytics';

const ContactCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSocialLinkClick = (href: string, label: string) => {
    const linkType = label.toLowerCase() === 'email' ? 'social' : 'social';
    trackExternalLink(href, linkType);
    
    if (label.toLowerCase() === 'email') {
      trackContactInteraction('email_click');
    }
  };

  const handleContactDialogOpen = () => {
    setIsDialogOpen(true);
    trackContactInteraction('dialog_open');
  };

  const socialLinks = [
    { 
      icon: Mail, 
      href: `mailto:${CONTACT.email}`, 
      label: 'Email',
      color: 'sage',
      description: 'shan.joshi2504@gmail.com'
    },
    { 
      icon: Linkedin, 
      href: CONTACT.linkedin, 
      label: 'LinkedIn',
      color: 'pale-blue',
      description: 'Professional Network'
    },
    { 
      icon: Github, 
      href: CONTACT.github, 
      label: 'GitHub',
      color: 'deep-green',
      description: 'Code Repository'
    }
  ];

  return (
    <motion.div 
      id="contact"
      className="glass-card group"
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
        className="text-3xl md:text-4xl font-bold mb-4 text-center border-b-2 pb-3 group-hover:text-white transition-colors duration-400"
        style={{ 
          color: theme.colors.text.primary,
          borderBottomColor: theme.colors.border.primary
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>
      
      <motion.p 
        className="text-center mb-8 text-xl md:text-2xl group-hover:text-white transition-colors duration-400"
        style={{ color: theme.colors.text.secondary }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Let's connect and build something amazing together! 🚀
      </motion.p>

      {/* Social Links */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {socialLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.15) }}
            >
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl text-center font-semibold block transition-all duration-300"
                style={{
                  backgroundColor: `${theme.colors.accent.primary}15`,
                  color: theme.colors.text.primary
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: `${theme.colors.accent.primary}25`
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialLinkClick(link.href, link.label)}
              >
                <div className="flex flex-col items-center gap-3">
                  <link.icon size={32} className="group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold">{link.label}</div>
                    <div className="text-base md:text-lg opacity-90">{link.description}</div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center p-6 rounded-xl"
        style={{
          backgroundColor: `${theme.colors.background.tertiary}`,
          border: `1px dashed ${theme.colors.border.primary}`
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="text-xl md:text-2xl font-semibold mb-3" style={{ color: theme.colors.text.primary }}>
          Ready to work together?
        </div>
        <div className="text-base md:text-lg mb-4" style={{ color: theme.colors.text.secondary }}>
          I'm currently seeking <strong>SWE New Grad roles</strong> and open to exciting opportunities in full-stack development, AI/ML, and system design.
        </div>
        <motion.button
          onClick={handleContactDialogOpen}
          className="modern-button inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={22} />
          Get In Touch
        </motion.button>
      </motion.div>

      {/* Fun Footer */}
      <motion.div 
        className="mt-6 text-center text-sm text-deep-green/70 group-hover:text-white transition-colors duration-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.span
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="inline-block"
        >
          ☕
        </motion.span>
        {" "}Powered by coffee and curiosity
      </motion.div>

      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </motion.div>
  );
};

export default ContactCard;