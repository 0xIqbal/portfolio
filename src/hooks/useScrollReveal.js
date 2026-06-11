import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px', ...options });

  return { ref, isInView };
}
