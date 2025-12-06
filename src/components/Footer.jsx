import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/2300030077',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/anushka-battula',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:saianushka1825@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm sm:text-base text-gray-600">
              © {currentYear} Battula Sai Anushka. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="text-pink-500" size={14} fill="currentColor" />{' '}
              using React & TailwindCSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-100 rounded-xl text-gray-700 hover:bg-gradient-primary hover:text-white transition-all"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

