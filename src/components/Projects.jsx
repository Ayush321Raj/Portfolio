import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Zap, Shield, Globe } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    number: '01',
title: 'Personal Portfolio & Resume Website',
description:
  'A modern, responsive personal portfolio and resume website showcasing my technical skills, projects, certifications, coding profiles, and professional achievements through an interactive and visually appealing user interface.',
stack: [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Responsive Web Design',
  'CSS Grid',
  'Flexbox',
  'Font Awesome'
],
highlights: [
  'Designed and developed a professional single-page portfolio website with a modern, responsive, and user-friendly interface',
  'Showcased technical skills, featured projects, certifications, coding profiles, and contact information in a well-structured layout',
  'Implemented smooth scrolling, interactive hover effects, responsive navigation, and optimized layouts using CSS Grid and Flexbox',
  'Optimized for desktop, tablet, and mobile devices while ensuring fast loading performance, accessibility, and cross-browser compatibility'
],
    Icon: Zap,
    gradient: 'from-indigo-500 to-violet-500',
    projectLink: 'https://github.com/Ayush321Raj/Pondi_Fresh',   // TODO: replace with actual GitHub link
    liveDemoLink: 'https://ayush321raj.github.io/Pondi_Fresh/',  // TODO: replace with actual live demo link
    isPlaceholder: true,
  },
  {
    number: '02',
  title: 'PondiFresh – Campus Grocery Store',
  description:
    'A responsive online grocery shopping website built for Pondicherry University students, providing an intuitive shopping experience for hostel essentials, groceries, beverages, stationery, and personal care products through a modern and visually appealing interface.',
  stack: [
    'HTML5',
    'CSS3',
    'Responsive Web Design',
    'Flexbox',
    'CSS Grid',
    'Font Awesome'
  ],
  highlights: [
    'Designed a modern multi-section e-commerce landing page with responsive UI/UX',
    'Implemented 21 product cards featuring pricing, discounts, ratings, stock status, and delivery details',
    'Developed reusable card-based layouts using CSS Grid and Flexbox with interactive hover effects',
    'Optimized for desktop, tablet, and mobile devices with smooth scrolling and professional visual design'
  ],
    Icon: Globe,
    gradient: 'from-violet-500 to-pink-500',
    projectLink: 'https://github.com/Ayush321Raj/Pondi_Fresh',   // TODO: replace with actual GitHub link
    liveDemoLink: 'https://ayush321raj.github.io/Pondi_Fresh/',  // TODO: replace with actual live demo link
    isPlaceholder: true,
  },
  {
    number: '03',
  title: 'Internet & Web Technologies Quiz',
  description:
    'A modern, responsive quiz application built using HTML, CSS, and JavaScript to assess Internet and Web Technologies knowledge. Features randomized question sequencing, dynamic option shuffling, live score updates, and an interactive user interface for an engaging learning experience.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'DOM API'
  ],
  highlights: [
    'Randomized questions and answers using the Fisher-Yates Shuffle algorithm',
    'Interactive UI with progress tracking and instant feedback',
    'Automatic score calculation with percentage-based result analysis',
    'Responsive design optimized for desktop, tablet, and mobile devices'
  ],
    Icon: Shield,
    gradient: 'from-emerald-500 to-teal-500',
    projectLink: 'https://github.com/Ayush321Raj/Simple_Quiz',   // TODO: replace with actual GitHub link
    liveDemoLink: 'https://ayush321raj.github.io/Simple_Quiz/',  // TODO: replace with actual live demo link
    isPlaceholder: true,
  },
];

function TiltCard({ project }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const { number, title, description, stack, highlights, Icon, gradient, projectLink, liveDemoLink, isPlaceholder } = project;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      data-cursor-expand
      className="relative bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-card group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-accent/20"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))' }}
      />

      {/* Number */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-heading font-black text-5xl gradient-text opacity-20 leading-none">{number}</span>
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
          <Icon size={18} className="text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-xl md:text-2xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-secondary text-sm md:text-base leading-relaxed mb-5">{description}</p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium font-heading rounded-lg bg-accent/8 text-accent border border-accent/15"
            style={{ backgroundColor: 'rgba(99,102,241,0.06)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5 mb-6">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <motion.a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 text-sm font-medium font-heading transition-all duration-200 ${isPlaceholder ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <SiGithub size={15} />
          GitHub
          {isPlaceholder && <span className="text-xs opacity-60"></span>}
        </motion.a>
        <motion.a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl gradient-btn text-sm py-2 ${isPlaceholder ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <ExternalLink size={15} />
          Live Demo
          {isPlaceholder && <span className="text-xs opacity-80"></span>}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">03 — Projects</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-secondary mt-4 max-w-lg mx-auto">
            Production-grade applications built with modern stacks and real-world engineering practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '1200px' }}>
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
