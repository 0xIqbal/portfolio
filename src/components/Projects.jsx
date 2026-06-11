import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaProjectDiagram } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        label="Featured Projects"
        title="Selected work across web, systems, and problem solving"
        subtitle="Each project card includes a placeholder image space, technology badges, and clear action buttons for source code and live demo access."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group overflow-hidden glass-card rounded-3xl"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_55%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(8,15,32,0.96))]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}

              <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition duration-300 group-hover:bg-black/15">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-4xl text-purple-300 shadow-neon transition duration-300 group-hover:scale-110">
                  <FaProjectDiagram />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-purple-100 backdrop-blur-xl">
                {project.image ? 'Project Image' : 'Image Placeholder'}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="button-primary">
                  GitHub <FaGithub />
                </a>
                <Link to={project.live} className="button-secondary">
                  Live Demo <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
