import { motion } from 'framer-motion';
import { Award, Cloud, Code2, Cpu, Trophy } from 'lucide-react';

const certifications = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    description: 'Comprehensive course covering cloud architectures, deployment models, and cloud-native services.',
    Icon: Cloud,
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'Certified',
  },
  {
    title: 'Joy of Computing Using Python',
    issuer: 'NPTEL',
    description: 'Introduction to computational thinking and Python programming for problem solving.',
    Icon: Code2,
    gradient: 'from-yellow-500 to-orange-500',
    badge: 'Certified',
  },
  {
    title: 'Internet of Things (IoT)',
    issuer: 'NPTEL',
    description: 'Fundamentals of IoT architecture, protocols, sensors, and smart system integration.',
    Icon: Cpu,
    gradient: 'from-violet-500 to-purple-500',
    badge: 'Certified',
  },
  {
    title: 'Hackathons & Technical Events',
    issuer: 'Various Organizers',
    description: 'Active participant in competitive hackathons and technical coding challenges.',
    Icon: Trophy,
    gradient: 'from-emerald-500 to-teal-500',
    badge: 'Participant',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">04 — Certifications</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary">
            Credentials &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-secondary mt-4 max-w-lg mx-auto">
            Formal certifications and competitive programming achievements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map(({ title, issuer, description, Icon, gradient, badge }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              data-cursor-expand
              className="relative bg-surface border border-border rounded-2xl p-6 shadow-card hover:shadow-accent transition-all duration-300 group overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.04), rgba(139,92,246,0.04))' }}
              />

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm mb-4`}>
                  <Icon size={22} className="text-white" />
                </div>

                {/* Badge */}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium font-heading bg-accent/8 text-accent border border-accent/15 mb-3"
                  style={{ backgroundColor: 'rgba(99,102,241,0.06)' }}>
                  <Award size={10} />
                  {badge}
                </span>

                <h3 className="font-heading font-bold text-base text-primary mb-1 leading-snug">{title}</h3>
                <p className="text-accent text-sm font-medium font-heading mb-3">{issuer}</p>
                <p className="text-secondary text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
