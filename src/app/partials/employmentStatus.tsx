'use client';
import { motion } from 'framer-motion';

export const EmploymentStatus = () => {
  return (
    <motion.div
      className='flex-center bg-primary-400 border-primary-300 z-50 mt-9.5 box-border w-fit gap-1.5 rounded-full border px-4 py-1'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className='relative h-2 w-2 overflow-visible rounded-full bg-[#e26190]'
        animate={{
          scale: [1.3, 1.4, 1.3],
          opacity: [1, 0.2, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <p className='w-full text-xs font-semibold text-nowrap text-white'>
        Available for Hire
      </p>
    </motion.div>
  );
};
