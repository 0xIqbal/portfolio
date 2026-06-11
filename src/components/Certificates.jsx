import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaEye, FaTimes } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { certificates } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section-shell">
      <SectionHeading
        label="Certificates & Achievements"
        title="Credentials that show continuous growth"
        subtitle="Cards are styled to feel premium while still keeping the interaction simple and fast."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            className="glass-card group rounded-3xl p-6 cursor-pointer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.01 }}
            onClick={() => setSelectedCert(certificate)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/15 text-2xl text-purple-300 shadow-neon">
                <FaCertificate />
              </div>
              <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-purple-100">
                {certificate.image ? 'Achievement' : 'PDF Preview'}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{certificate.title}</h3>
            <button type="button" className="button-secondary mt-6 w-full">
              {certificate.image ? 'View Certificate' : 'Open PDF in Site'} <FaEye />
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl border border-white/10 bg-[#050816] p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <FaTimes />
              </button>

              <div className="flex items-center justify-between gap-4 pr-12">
                <h2 className="text-3xl font-bold text-white">{selectedCert.title}</h2>
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    download
                    className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-600"
                  >
                    📥 Download PDF
                  </a>
                )}
              </div>

              <div className="mt-8 w-full">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full rounded-2xl border border-white/10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : selectedCert.pdf ? (
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <iframe
                      src={selectedCert.pdf}
                      title={selectedCert.title}
                      className="h-[70vh] w-full bg-[#050816]"
                    />
                  </div>
                ) : (
                  <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5">
                    <p className="text-center text-slate-400">
                      Add certificate image or PDF for this entry.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
