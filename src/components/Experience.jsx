import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { experienceRecords } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        label="Experience"
        title="Teaching and content creation"
        subtitle="Experience is presented as a second timeline to keep the layout cohesive and easy to scan on all screen sizes."
      />

      <div className="relative mt-12">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-purple-400 via-cyan-300 to-transparent sm:left-1/2 sm:-translate-x-px" />
        <div className="space-y-8 sm:space-y-10">
          {experienceRecords.map((entry, index) => (
            <motion.div
              key={entry.title}
              className={`relative flex items-start gap-5 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <div className="absolute left-5 top-7 h-4 w-4 rounded-full border-2 border-purple-400 bg-[#050816] shadow-neon sm:left-1/2 sm:-translate-x-1/2" />
              <div className={`ml-12 w-full sm:ml-0 sm:w-[48%] ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                <div className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-neon">
                  <div className="flex items-center gap-3 text-purple-300">
                    <FaBriefcase className="text-2xl" />
                    <span className="text-xs uppercase tracking-[0.3em]">Experience</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{entry.title}</h3>
                  <p className="mt-2 text-purple-200/90">{entry.period}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{entry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
