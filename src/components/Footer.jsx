import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { SiLeetcode, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { CustomIcon: SiGithub, href: 'https://github.com/Ayush321Raj', label: 'GitHub', isCustom: true },
  { CustomIcon: FaLinkedin, href: 'https://www.linkedin.com/in/ayush-raj-a90619258/', label: 'LinkedIn', isCustom: true },
  { CustomIcon: SiLeetcode, href: 'https://leetcode.com/u/ayushraj6204/', label: 'LeetCode', isCustom: true },
  { Icon: Mail, href: 'mailto:ayushr841417@gmail.com', label: 'Email', isCustom: false },
];

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-heading font-bold text-xl gradient-text">AR</span>
            <p className="text-secondary text-sm mt-1 font-body">Full Stack Developer</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="text-secondary text-sm hover:text-accent transition-colors duration-200 font-medium font-heading"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, CustomIcon, href, label, isCustom }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary/60 hover:text-accent hover:bg-accent/5 transition-all duration-200"
              >
                {isCustom ? <CustomIcon size={15} /> : <Icon size={15} />}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-secondary text-sm font-body">
          <p>© {new Date().getFullYear()} Ayush Raj. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-400 fill-red-400" /> using React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
