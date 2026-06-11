import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaBrain, FaPenNib, FaTools } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { programmingSkills, professionalSkills, tools } from '../data/portfolioData';

const skillGroups = [
  { title: 'Programming Languages', icon: FaCode, items: programmingSkills },
  { title: 'Professional Skills', icon: FaBrain, items: professionalSkills },
  { title: 'Tools', icon: FaTools, items: tools },
];

const accentLabels = [FaCode, FaDesktop, FaPenNib, FaBrain, FaTools];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        label="Skills & Expertise"
        title="Technical, creative, and professional capability"
        subtitle="The portfolio presents skills in a visually distinct way so the balance between code, communication, and productivity tools is easy to read."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              className="glass-card rounded-3xl p-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300 shadow-neon">
                  <Icon />
                </span>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item, itemIndex) => {
                  const ItemIcon = accentLabels[itemIndex % accentLabels.length];
                  return (
                    <motion.div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-purple-400/30 hover:bg-purple-500/10"
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    >
                      <ItemIcon className="text-purple-300" />
                      {item}
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
