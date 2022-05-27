import { useReducedMotion } from 'framer-motion';
import { useCallback } from 'react';

export const useFadeIn = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = useCallback(
    ({
      offset = 30,
      delay = 0,
    }: {
      shouldReduceMotion?: boolean;
      offset?: number;
      delay: number;
    }) => ({
      initial: 'from',
      animate: 'to',
      variants: {
        from: { opacity: 0, y: shouldReduceMotion ? 0 : offset },
        to: { opacity: 1, y: 0 },
      },
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
      },
    }),
    [shouldReduceMotion]
  );

  return fadeIn;
};
