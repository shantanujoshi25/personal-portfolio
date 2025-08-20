import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Linkedin } from 'lucide-react';
import { CONTACT } from '../utils/constants';
import { theme } from '../styles/theme';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const dialogVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog */}
          <motion.div
            className="relative rounded-2xl p-10 max-w-lg w-full mx-4 shadow-2xl"
            style={{
              backgroundColor: theme.colors.background.secondary,
              color: theme.colors.text.primary,
              border: `2px solid ${theme.colors.accent.primary}`
            }}
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 transition-colors duration-200"
              style={{
                color: theme.colors.text.secondary
              }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-2" style={{ color: theme.colors.accent.primary }}>
                Let's Connect!
              </h2>
              <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                Choose your preferred way to reach out
              </p>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Email Option */}
              <motion.a
                href={`mailto:${CONTACT.email}?subject=Let's Connect!`}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                style={{
                  backgroundColor: `${theme.colors.accent.primary}15`,
                  border: `1px solid ${theme.colors.accent.primary}30`,
                  color: theme.colors.text.primary
                }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="p-3 rounded-full transition-colors duration-300" style={{ backgroundColor: `${theme.colors.accent.primary}25` }}>
                  <Mail size={24} style={{ color: theme.colors.accent.primary }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Send Email</h3>
                  <p className="text-sm opacity-90">Direct email communication</p>
                </div>
              </motion.a>

              {/* LinkedIn Option */}
              <motion.a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                style={{
                  backgroundColor: `${theme.colors.accent.primary}15`,
                  border: `1px solid ${theme.colors.accent.primary}30`,
                  color: theme.colors.text.primary
                }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="p-3 rounded-full transition-colors duration-300" style={{ backgroundColor: `${theme.colors.accent.primary}25` }}>
                  <Linkedin size={24} style={{ color: theme.colors.accent.primary }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">LinkedIn Message</h3>
                  <p className="text-sm opacity-90">Connect on LinkedIn</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="mt-6 text-center text-sm"
              style={{ color: theme.colors.text.muted }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Looking forward to hearing from you! 🚀
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactDialog;