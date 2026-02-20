'use client';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

export const Hero = () => {
  const HeroImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image {...props} ref={ref} />;
    }
  );

  const ShurikenImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image {...props} ref={ref} />;
    }
  );
  const LightningImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image {...props} ref={ref} />;
    }
  );

  const MotionImage = motion(HeroImage);
  const MotionShuriken = motion(ShurikenImage);
  const MotionLightning = motion(LightningImage);

  return (
    <>
      <MotionShuriken
        animate={{
          rotate: 360,
          x: [-400, -380, -350, -200, -100, 0],
          y: [-300, -200, -100, -70, -30, 0],
        }}
        transition={{
          duration: 1,
          ease: 'linear',
        }}
        src='/shuriken.svg'
        width={375}
        height={452}
        alt='Ping Shuriken svg image'
        className='absolute right-0 bottom-14.5 h-24.75 w-24.75'
      />
      <MotionLightning
        animate={{
          rotate: 360,
          x: [400, 380, 350, 200, 100, 0],
          y: [-300, -200, -100, -70, -30, 0],
        }}
        transition={{
          duration: 1,
          ease: 'linear',
        }}
        src='/lightning.svg'
        alt='Ping Lightning svg image'
        width={91}
        height={91}
        className='absolute bottom-52.75 -left-4 h-22.75 w-22.75'
      />
      <MotionImage
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        src='/CandidGentleman.png'
        objectFit='none'
        width={375}
        height={452}
        alt='Candid Gentleman png picture'
        className='absolute bottom-0 z-49 ml-4.75'
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='font-bonheur-royale leading-8xl absolute top-156 right-1/2 z-50 h-20.25 w-29 -translate-x-[calc(50%-17px)] -rotate-[12.34deg] text-[64px] font-normal -tracking-[0.02em] text-white'
      >
        Junior
      </motion.span>

      <motion.h2
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='font-anton text-secondary-100 absolute bottom-62.5 z-48 h-31.5 text-center text-[102px] leading-31.25 font-normal -tracking-[0.02em]'
      >
        FRONTEND
      </motion.h2>

      <motion.h2
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className='font-anton text-secondary-100 absolute bottom-36 z-48 h-31.5 text-center text-[92px] leading-[112.5px] font-normal -tracking-[0.02em]'
      >
        DEVELOPER
      </motion.h2>

      <motion.h2
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className='font-anton absolute bottom-36 z-50 h-31.5 bg-clip-text text-center text-[92px] leading-[112.5px] font-normal -tracking-[0.02em] text-transparent [-webkit-text-stroke:1px_#f3b64c]'
      >
        DEVELOPER
      </motion.h2>
    </>
  );
};
