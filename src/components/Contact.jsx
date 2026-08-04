import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { SiLeetcode, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

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
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up form backend (e.g. Formspree)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">06 — Contact</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary leading-tight">
            Let's Build Something{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-secondary mt-4 max-w-lg mx-auto text-base md:text-lg">
            Whether you have a project in mind, a job opportunity, or just want to chat about tech — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: CTA + socials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
            className="flex flex-col gap-8"
          >
            {/* Big email button */}
            <motion.a
              href="mailto:ayushr841417@gmail.com"
              whileHover={{ scale: 1.03, boxShadow: '0 16px 48px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 gradient-btn text-base px-6 py-5 w-full justify-center shadow-accent"
            >
              <Mail size={20} className="transition-transform group-hover:rotate-12 duration-300" />
              <div className="text-left">
                <p className="font-heading font-semibold text-white">Send me an email</p>
                <p className="text-white/70 text-sm font-body">ayushr841417@gmail.com</p>
              </div>
            </motion.a>

            {/* Social links */}
            <div>
              <p className="font-heading font-medium text-secondary text-sm mb-4 uppercase tracking-wider">
                Find me on
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, CustomIcon, href, label, isCustom }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:shadow-accent transition-all duration-300 text-sm font-medium font-heading"
                  >
                    {isCustom ? <CustomIcon size={16} /> : <Icon size={16} />}
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Location', value: 'India' },
                { label: 'Status', value: 'Open to work' },
                { label: 'Response time', value: '< 24 hours' },
                { label: 'Availability', value: 'Full-time / Intern' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-surface border border-border rounded-xl p-3 shadow-sm">
                  <p className="text-secondary text-xs font-medium">{label}</p>
                  <p className="text-primary font-heading font-semibold text-sm mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface border border-mint/30 rounded-2xl p-8 text-center shadow-card"
              >
                <CheckCircle size={48} className="text-mint mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-primary mb-2">Message Sent!</h3>
                <p className="text-secondary">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface border border-border rounded-2xl p-6 lg:p-8 shadow-card flex flex-col gap-5"
              >
                <div>
                  <label className="block text-sm font-medium font-heading text-primary mb-1.5">
                    Name
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/60 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full pl-9 pr-4 py-3 border border-border rounded-xl bg-white text-primary placeholder:text-secondary/50 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium font-heading text-primary mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/60 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full pl-9 pr-4 py-3 border border-border rounded-xl bg-white text-primary placeholder:text-secondary/50 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium font-heading text-primary mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={15} className="absolute left-3 top-4 text-secondary/60 pointer-events-none" />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full pl-9 pr-4 py-3 border border-border rounded-xl bg-white text-primary placeholder:text-secondary/50 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(99,102,241,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="gradient-btn flex items-center justify-center gap-2 w-full text-base py-3.5"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>

                <p className="text-secondary text-xs text-center font-body">
                  This form is a placeholder — connect a backend like{' '}
                  <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Formspree
                  </a>{' '}
                  to enable real submissions.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
