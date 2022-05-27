import { motion, useReducedMotion } from 'framer-motion';

const PageTransition = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      key='pageTransition'
      className='fixed bg-gray-50 inset-0 z-10'
      initial={{
        clipPath: 'circle(0% at 0 100%)',
      }}
      exit={{
        clipPath: 'circle(200% at 0 100%)',
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
        },
      }}
    />
  );
};

export default PageTransition;
