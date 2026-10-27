import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, FileText } from 'lucide-react';
import resumePdf from '../assets/Ayush_Resume1.pdf';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    setMenuOpen(false);
    setResumeOpen(true);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="font-heading font-bold text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="gradient-text">AR</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className={`relative px-4 py-2 text-sm font-medium font-heading transition-colors duration-200 group ${
                  activeSection === href.slice(1)
                    ? 'text-accent'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-accent rounded-full transition-all duration-300 ${
                    activeSection === href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            type="button"
            onClick={openResume}
            className="gradient-btn flex items-center gap-2 text-sm py-2 px-5"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <FileText size={15} />
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-primary hover:bg-surface transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white/98 backdrop-blur-md border-t border-border overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map(({ label, href }, i) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(href)}
                    className="text-left py-3 px-2 text-base font-medium font-heading text-secondary hover:text-accent border-b border-border/50 last:border-0 transition-colors"
                  >
                    {label}
                  </motion.button>
                ))}
                <button
                  type="button"
                  onClick={openResume}
                  className="gradient-btn flex items-center justify-center gap-2 text-sm mt-3"
                >
                  <FileText size={15} />
                  View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 p-3 sm:p-6 flex items-center justify-center"
            onClick={() => setResumeOpen(false)}
          >
            <motion.section
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-dialog-title"
              className="w-full max-w-5xl h-full max-h-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-border">
                <h2 id="resume-dialog-title" className="font-heading font-semibold text-primary">
                  Ayush Raj — Resume
                </h2>
                <div className="flex items-center gap-2">
                  <a
                    href={resumePdf}
                    download="Ayush_Resume1.pdf"
                    className="gradient-btn flex items-center gap-2 text-sm py-2 px-3 sm:px-4"
                  >
                    <Download size={15} />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setResumeOpen(false)}
                    aria-label="Close resume"
                    className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <iframe
                src={resumePdf}
                title="Ayush Raj resume PDF"
                className="w-full flex-1 min-h-0"
              />
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
