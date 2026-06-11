import { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { heroStats, roleLines } from '../data/portfolioData';
import profilePlaceholder from '/profile-placeholder.svg';

const profilePhoto = '/profile.jpg';
const coverPhoto = '/cover.png';
const resumeFile = '/resume.pdf';

export default function Hero() {
  const [showCover, setShowCover] = useState(true);

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      {showCover && (
        <>
          <img
            src={coverPhoto}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setShowCover(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/85 to-[#050816]/70" />
        </>
      )}
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Welcome To My Portfolio</span>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Iqbal Bin Hafiz
          </h1>
          <div className="mt-5 text-xl font-semibold sm:text-2xl lg:text-3xl">
            <span className="text-slate-300">I am a </span>
            <span className="gradient-text inline-block min-h-[1.6em] align-middle">
              <Typewriter
                options={{
                  strings: roleLines,
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Passionate about AI and Cybersecurity
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I am a Software Engineering student with a strong interest in Cyber Security, Artificial Intelligence, and Software Development. Alongside my studies, I enjoy teaching and helping students learn through private tutoring. I also create programming-related videos to share knowledge and make technology more accessible. I am passionate about continuous learning, problem-solving, and skill development. My goal is to use technology and education to make a positive impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" className="button-primary">
              View Projects <FaArrowRight />
            </Link>
            <a href={resumeFile} download="Iqbal-Bin-Hafiz-Resume.pdf" className="button-secondary">
              Download Resume <FaDownload />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://github.com/0xIqbal" target="_blank" rel="noreferrer" className="glass-card inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm text-slate-200 transition hover:border-purple-400/30 hover:text-white">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/iqbal-bin-hafiz/" target="_blank" rel="noreferrer" className="glass-card inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm text-slate-200 transition hover:border-purple-400/30 hover:text-white">
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-3xl p-5">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35),transparent_65%)] blur-3xl" />
          <div className="relative rounded-full border border-purple-400/40 bg-white/5 p-4 shadow-neon animate-glow">
            <img
              src={profilePhoto}
              alt="Iqbal Bin Hafiz"
              className="h-[320px] w-[320px] rounded-full object-cover sm:h-[380px] sm:w-[380px]"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = profilePlaceholder;
              }}
            />
          </div>
          <div className="absolute -left-4 bottom-12 glass-card animate-float rounded-2xl px-4 py-3 text-sm text-slate-200 sm:-left-10">
            Software Engineering Student
          </div>
          <div className="absolute -right-2 top-12 glass-card animate-float rounded-2xl px-4 py-3 text-sm text-slate-200 sm:-right-8" style={{ animationDelay: '1.5s' }}>
            AI & Cyber Security
          </div>
        </motion.div>
      </div>
    </section>
  );
}
