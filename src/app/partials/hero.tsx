'use client';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import useMedia from 'use-media';

export const Hero = () => {
  const isLargish = useMedia({ minWidth: '640px' });
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
        width={99}
        height={99}
        alt='Ping Shuriken svg image'
        className='absolute right-0 bottom-14.5 h-24.75 w-24.75 sm:right-1/2 sm:bottom-24 sm:h-41.25 sm:w-41.25 sm:-translate-x-[calc(50%-430px)] sm:rotate-59'
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
        className='absolute bottom-52.75 -left-4 h-22.75 w-22.75 sm:bottom-117 sm:left-1/2 sm:h-41.25 sm:w-52 sm:translate-x-[calc(50%-520px)] sm:-rotate-15'
      />
      <MotionImage
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        width={610}
        height={735}
        src='/CandidGentleman.png'
        alt='Candid Gentleman png picture'
        className='absolute bottom-0 z-49 ml-4.5 w-full max-w-[375px] sm:ml-2 sm:max-w-[520px] md:max-w-[540px] lg:max-w-[580px] xl:max-w-[610px]'
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='font-bonheur-royale leading-8xl md:leading-9xl lg:leading-11xl absolute top-156 right-1/2 z-50 h-20.25 w-29 -translate-x-[calc(50%-17px)] -rotate-[12.34deg] text-[64px] font-normal -tracking-[0.02em] text-white sm:top-64 sm:translate-x-[calc(50%-220px)] sm:text-[80px] md:top-58 md:translate-x-[calc(50%-300px)] md:text-[96px] lg:top-55 lg:translate-x-[calc(50%-360px)] lg:text-[113px]'
      >
        Junior
      </motion.span>

      <motion.h2
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='font-anton text-secondary-100 absolute bottom-62.5 z-48 text-center text-[102px] leading-31.25 font-normal -tracking-[0.02em] sm:bottom-[536px] sm:text-[188px] sm:leading-57'
        style={{
          fontSize: isLargish ? 'clamp(6.38rem, 18.29vw, 11.75rem)' : '102px',
          lineHeight: isLargish ? 'clamp(7.81rem, 22.18vw, 14.25rem)' : '125px',
        }}
      >
        FRONTEND
      </motion.h2>

      <motion.h2
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className='font-anton text-secondary-100 absolute bottom-36 z-48 text-center text-[92px] leading-[112.5px] font-normal -tracking-[0.02em] sm:bottom-100 sm:text-[169px] sm:leading-51.25 md:bottom-96 lg:bottom-92 xl:bottom-91.5'
        style={{
          fontSize: isLargish ? 'clamp(5.75rem, 16.44vw, 10.56rem)' : '92px',
          lineHeight: isLargish
            ? 'clamp(5.75rem, 16.44vw, 10.56rem)'
            : '112.5px',
        }}
      >
        DEVELOPER
      </motion.h2>

      <motion.h2
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className='font-anton absolute bottom-36 z-50 bg-clip-text text-center text-[92px] leading-[112.5px] font-normal -tracking-[0.02em] text-transparent [-webkit-text-stroke:1px_#f3b64c] sm:bottom-100 sm:text-[169px] sm:leading-51.25 md:bottom-96 lg:bottom-92 xl:bottom-91.5'
        style={{
          fontSize: isLargish ? 'clamp(5.75rem, 16.44vw, 10.56rem)' : '92px',
          lineHeight: isLargish
            ? 'clamp(5.75rem, 16.44vw, 10.56rem)'
            : '112.5px',
        }}
      >
        DEVELOPER
      </motion.h2>
    </>
  );
};
