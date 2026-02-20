'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

export const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className='z-50 mt-6.25 flex w-full max-w-[calc(100%-2rem)] flex-col items-center gap-5'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div variants={itemVariants} className='flex-between w-full'>
        <div className='flex flex-col gap-0.75'>
          <h3 className='text-display-md h-10.5 font-bold text-white'>2+</h3>
          <p className='text-xs font-semibold text-white'>Years Experience</p>
        </div>
        <Separator orientation='vertical' className='bg-primary-300' />
        <div className='flex flex-col gap-0.75'>
          <h3 className='text-display-md h-10.5 font-bold text-white'>99%</h3>
          <p className='text-xs font-semibold text-white'>
            Client Satisfaction
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className='flex-between w-full'>
        <div className='flex flex-col gap-0.75'>
          <h3 className='text-display-md h-10.5 font-bold text-white'>3</h3>
          <p className='text-xs font-semibold text-white'>Project Delivered</p>
        </div>
        <Separator orientation='vertical' className='bg-primary-300' />
        <div className='flex flex-col gap-0.75'>
          <h3 className='text-display-md h-10.5 font-bold text-white'>50</h3>
          <p className='text-xs font-semibold text-white'>Clients Worldwide</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className='w-full'>
        <Button
          variant='secondary'
          size='lg'
          className='group w-full cursor-pointer pl-4'
        >
          <p className='group-hover:text-white'>Contact Me</p>
          <div className='flex-center h-fit w-fit gap-2 rounded-full bg-neutral-950 p-2 group-hover:bg-neutral-950/50'>
            <ArrowRight size={20} className='text-neutral-25' />
          </div>
        </Button>
      </motion.div>
    </motion.div>
  );
};
