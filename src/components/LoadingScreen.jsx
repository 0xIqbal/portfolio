import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="h-16 w-16 rounded-full border-2 border-purple-400/30 border-t-purple-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <p className="text-sm uppercase tracking-[0.4em] text-purple-200">Loading Portfolio</p>
      </motion.div>
    </div>
  );
}
