import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </motion.div>
  );
}
