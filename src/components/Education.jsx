import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { educationRecords } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        label="Education"
        title="A strong academic foundation"
        subtitle="A timeline view of the academic path that supports the technical, analytical, and teaching side of the portfolio."
      />

      <div className="relative mt-12">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-purple-400 via-cyan-300 to-transparent sm:left-1/2 sm:-translate-x-px" />
        <div className="space-y-8 sm:space-y-10">
          {educationRecords.map((record, index) => (
            <motion.div
              key={record.title}
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
                    <FaGraduationCap className="text-2xl" />
                    <span className="text-xs uppercase tracking-[0.3em]">Education</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{record.title}</h3>
                  <p className="mt-2 text-slate-300">{record.institution}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">{record.detail}</span>
                    <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-100">{record.meta}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
