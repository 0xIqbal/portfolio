import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PortfolioLayout from './layouts/PortfolioLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import CertificatesPage from './pages/CertificatesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Iqbal Bin Hafiz | Software Engineering Student</title>
        <meta
          name="description"
          content="Iqbal Bin Hafiz's personal portfolio showcasing projects, education, skills, experience, certificates, and contact details."
        />
        <meta name="author" content="Iqbal Bin Hafiz" />
        <meta property="og:title" content="Iqbal Bin Hafiz | Software Engineering Student" />
        <meta
          property="og:description"
          content="Modern portfolio website for a software engineering student with a premium dark neon design."
        />
      </Helmet>

      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <Routes location={location}>
            <Route element={<PortfolioLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="education" element={<EducationPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="certificates" element={<CertificatesPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
