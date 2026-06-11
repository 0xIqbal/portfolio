import { motion } from 'framer-motion';
import { FaBook, FaBuilding, FaGlobe, FaLayerGroup, FaLanguage, FaLightbulb, FaGamepad, FaFilm, FaNewspaper, FaUsers, FaCode } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { aboutFacts, hobbies, languages, researchInterests } from '../data/portfolioData';

const iconMap = {
  briefcase: FaBook,
  building: FaBuilding,
  code: FaCode,
  calendar: FaLayerGroup,
};

const accentIcons = [FaLanguage, FaLightbulb, FaGlobe, FaUsers, FaGamepad, FaFilm, FaNewspaper, FaCode];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        label="About Me"
        title="A focused student with a builder's mindset"
        subtitle="Software engineering, research curiosity, and teaching experience come together in a profile that is practical, disciplined, and consistently learning-oriented."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          className="glass-card rounded-3xl p-6"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutFacts.map((fact) => {
              const Icon = iconMap[fact.icon] ?? FaBook;
              return (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Icon className="text-2xl text-purple-300" />
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-purple-200/70">{fact.label}</p>
                  <p className="mt-2 text-sm font-medium text-white">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {languages.map((item, index) => {
                const Icon = accentIcons[index % accentIcons.length];
                return (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-slate-100">
                    <Icon className="text-purple-300" /> {item}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">Research Interests</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {researchInterests.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">Interests & Hobbies</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {hobbies.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
