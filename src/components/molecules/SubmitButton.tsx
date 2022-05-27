import { motion, useMotionValue, useTransform } from 'framer-motion';

import TailSpin from '../atoms/icons/tail-spin';

interface Props {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const SubmitButton = ({ isSubmitting, isSubmitted }: Props) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className='flex h-10 w-full items-center justify-center bg-gray-700 py-2 text-sm font-semibold uppercase tracking-wide ring-gray-500 focus-within:ring-blue-500 focus:outline-none focus:ring'
    >
      <motion.span
        className='absolute'
        initial='from'
        animate={!isSubmitting && !isSubmitted ? 'from' : 'to'}
        variants={{
          from: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.1, delay: 0.4 },
          },
          to: { opacity: 0, scale: 0, transition: { duration: 0.1 } },
        }}
      >
        Verzenden
      </motion.span>
      <motion.div
        className='absolute'
        initial='from'
        animate={isSubmitting ? 'to' : 'from'}
        variants={{
          from: {
            opacity: 0,
            transition: { duration: 0.05, delay: 1 },
          },
          to: { opacity: 1, transition: { duration: 0.01 } },
        }}
      >
        <TailSpin className='h-6 w-6' />
      </motion.div>
      <div className='absolute flex items-center'>
        <motion.span
          className='text-green-500'
          initial='from'
          animate={isSubmitted ? 'to' : 'from'}
          variants={{
            from: {
              opacity: 0,
              x: 10,
              transition: { duration: 0.1, delay: 0.1 },
            },
            to: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.05, delay: 1 },
            },
          }}
        >
          Verzonden
        </motion.span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox=' 0 0 150 150'
          className='h-8 w-8'
        >
          <motion.path
            d='M38 74.707l24.647 24.646L116.5 45.5'
            fill='transparent'
            strokeWidth='20'
            stroke='#10B981'
            strokeLinecap='round'
            initial='from'
            animate={isSubmitted ? 'to' : 'from'}
            variants={{
              from: {
                pathLength: 0,
                transition: { duration: 0.1 },
              },
              to: { pathLength: 0.9, transition: { delay: 1.1 } },
            }}
            style={{ pathLength, opacity }}
          />
        </svg>
      </div>
    </button>
  );
};

export default SubmitButton;
