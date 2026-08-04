import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

// const PROFILE_PHOTO = null;
import photo from '../assets/profile.png';
const PROFILE_PHOTO = photo;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">01 — About</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative gradient block */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-10 blur-2xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-border shadow-card">
                {PROFILE_PHOTO ? (
                  <img
                    src={PROFILE_PHOTO}
                    alt="Ayush Raj"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent-violet/10 flex flex-col items-center justify-center gap-3">
                    <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                      <span className="text-white font-heading font-bold text-3xl">AR</span>
                    </div>
                    <p className="text-secondary text-sm font-medium font-heading">Profile Photo</p>
                  </div>
                )}
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-white border border-border rounded-2xl px-4 py-2.5 shadow-card"
              >
                <p className="font-heading font-semibold text-sm text-primary">MCA Student</p>
                <p className="text-xs text-secondary">Pondicherry University</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Bio + Education */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={1}
            >
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                Building the future,{' '}
                <span className="gradient-text">one line at a time</span>
              </h3>
              <p className="text-secondary leading-relaxed text-base md:text-lg font-body">
                Results-driven MCA student with a strong foundation in MERN Stack, Java, DSA, and
                modern web technologies. Skilled in building responsive and scalable applications,
                solving problems efficiently, and continuously learning emerging technologies.
              </p>
              <p className="text-secondary leading-relaxed text-base md:text-lg font-body mt-4">
                Interested in collaborating on impactful software development projects in dynamic
                and growth-oriented environments. Passionate about AI integration and building
                tools that genuinely help people.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={2}
            >
              <h4 className="font-heading font-semibold text-lg text-primary mb-4">Education</h4>
              <div className="relative pl-6">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-accent opacity-30 rounded-full" />

                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[1.35rem] top-1.5 w-3 h-3 rounded-full bg-gradient-accent shadow-accent" />

                  <div className="bg-white border border-border rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <GraduationCap size={18} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-bold text-primary">
                          Master of Computer Applications
                        </p>
                        <p className="text-accent font-medium text-sm mt-0.5">MCA</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-secondary text-sm">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} />
                            Pondicherry University
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} />
                            2025 – 2027
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={3}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: '3+', label: 'Projects Built' },
                { value: '5+', label: 'Certifications' },
                { value: '∞', label: 'Problems Solved' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white border border-border rounded-2xl p-4 text-center shadow-card hover:shadow-accent transition-all duration-300"
                >
                  <p className="font-heading font-bold text-2xl gradient-text">{value}</p>
                  <p className="text-secondary text-xs mt-1 font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
