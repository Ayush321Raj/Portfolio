import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, Code2 } from 'lucide-react';
import { SiLeetcode, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

// Replace with your actual photo path when available
// const PROFILE_PHOTO = null; // e.g. import photo from '../assets/profile.jpg';
import photo from '../assets/profile.png';
const PROFILE_PHOTO = photo;

const roles = [
  'Full Stack Developer',
  'MERN Stack Enthusiast',
  'AI Integration Builder',
];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}

const socialLinks = [
  {
    CustomIcon: SiGithub,
    href: 'https://github.com/Ayush321Raj',
    label: 'GitHub',
    isCustom: true,
  },
  {
    CustomIcon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ayush-raj-a90619258/',
    label: 'LinkedIn',
    isCustom: true,
  },
  {
    CustomIcon: SiLeetcode,
    href: 'https://leetcode.com/u/ayushraj6204/',
    label: 'LeetCode',
    isCustom: true,
  },
  {
    Icon: Mail,
    href: 'mailto:ayushr841417@gmail.com',
    label: 'Email',
    isCustom: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-white"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #22D3A5 0%, transparent 70%)' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(#6366F1 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium font-heading">
            <Code2 size={14} />
            Available for opportunities
          </span>
        </motion.div>

        {/* Profile photo */}
        <motion.div variants={itemVariants} className="relative">
          <div className="relative inline-block">
            {/* Glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1 rounded-full opacity-75"
              style={{
                background: 'conic-gradient(from 0deg, #6366F1, #8B5CF6, #22D3A5, #6366F1)',
                filter: 'blur(4px)',
              }}
            />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-accent">
              {PROFILE_PHOTO ? (
                <img
                  src={PROFILE_PHOTO}
                  alt="Ayush Raj"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-3xl md:text-4xl">AR</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-primary leading-tight tracking-tight">
            Ayush{' '}
            <span className="gradient-text">Raj</span>
          </h1>
        </motion.div>

        {/* Typewriter Role */}
        <motion.div variants={itemVariants}>
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold text-secondary min-h-[2em]">
            <TypewriterRole />
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base md:text-lg text-secondary leading-relaxed font-body"
        >
          A results-driven MCA student building{' '}
          <span className="text-primary font-medium">scalable, AI-powered</span> full-stack
          applications that make a real impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="gradient-btn text-base px-8 py-3.5 font-heading shadow-accent"
            whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(99,102,241,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl border-2 border-accent text-accent font-heading font-semibold text-base transition-all duration-300 hover:bg-accent/5 hover:shadow-accent"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mt-2"
        >
          {socialLinks.map(({ Icon, CustomIcon, href, label, isCustom }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:shadow-accent transition-all duration-300"
            >
              {isCustom ? <CustomIcon size={18} /> : <Icon size={18} />}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-2 text-secondary/50"
        >
          <span className="text-xs font-medium tracking-widest uppercase font-heading">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
