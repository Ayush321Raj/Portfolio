import { motion } from 'framer-motion';
import {
  SiOpenjdk, SiJavascript, SiPython, SiC, SiCplusplus,
  SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiVscodium,
} from 'react-icons/si';
import { Globe, Database, Code, Cpu, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    Icon: Code,
    color: 'from-blue-500 to-indigo-500',
    skills: [
    { name: 'Java', Icon: SiOpenjdk, color: '#f89820' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'Python', Icon: SiPython, color: '#3776ab' },
      { name: 'C', Icon: SiC, color: '#a8b9cc' },
      { name: 'C++', Icon: SiCplusplus, color: '#00599c' },
    ],
  },
  {
    title: 'Web Development',
    Icon: Globe,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', Icon: SiCss, color: '#264de4' },
      { name: 'React.js', Icon: SiReact, color: '#61dafb' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', Icon: SiExpress, color: '#000000' },
    ],
  },
  {
    title: 'Databases',
    Icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
    ],
  },
  {
    title: 'Tools & Technologies',
    Icon: Cpu,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#f05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#181717' },
      { name: 'REST APIs', Icon: Globe, color: '#6366f1' },
      { name: 'VS Code', Icon: SiVscodium, color: '#0078d4' },
    ],
  },
  {
    title: 'Core Subjects',
    Icon: BookOpen,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'DSA' },
      { name: 'DBMS' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function SkillPill({ name, Icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="flex items-center gap-2 px-3 py-2 bg-white border border-border rounded-xl shadow-sm hover:shadow-accent hover:border-accent/20 transition-all duration-200 group"
    >
      {Icon ? (
        <Icon
          size={17}
          style={{ color }}
          className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
        />
      ) : (
        <div className="w-4 h-4 rounded-full bg-gradient-accent opacity-70" />
      )}
      <span className="text-sm font-medium font-heading text-primary whitespace-nowrap">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">02 — Skills</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-secondary mt-4 max-w-lg mx-auto">
            Technologies I've worked with and continue to grow in.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map(({ title, Icon, color, skills }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="bg-surface border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-base text-primary">{title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillPill key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
