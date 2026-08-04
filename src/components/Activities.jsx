import { motion } from 'framer-motion';
import { Brain, Code2, Layers, Sparkles } from 'lucide-react';

const activities = [
  {
    Icon: Code2,
    title: 'DSA Grind',
    description: 'Actively solving DSA problems daily — improving algorithmic thinking and problem-solving speed.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    tag: 'LeetCode',
  },
  {
    Icon: Brain,
    title: 'AI & LLM Exploration',
    description: 'Exploring AI tools, Large Language Models, and integrating them into real-world full-stack applications.',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    tag: 'Ongoing',
  },
  {
    Icon: Layers,
    title: 'Modern Web Dev',
    description: 'Learning cutting-edge web technologies, architecture patterns, and SaaS product design principles.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    tag: 'Learning',
  },
  {
    Icon: Sparkles,
    title: 'Building in Public',
    description: 'Shipping side projects, contributing to open source, and sharing learnings with the dev community.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    tag: 'Active',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Activities() {
  return (
    <section id="activities" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="section-number mb-3">05 — Currently</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            What I'm{' '}
            <span className="gradient-text">Up To</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {activities.map(({ Icon, title, description, color, bg, tag }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white border border-border rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon size={18} className={color} />
                </div>
                <span className="text-xs font-medium font-heading px-2.5 py-1 rounded-full border border-mint/30 text-mint bg-mint/5">
                  {tag}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-base text-primary mb-2">{title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
