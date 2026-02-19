import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      <Image
        src='/shuriken.svg'
        width={375}
        height={452}
        alt='Ping Shuriken svg image'
        className='absolute right-0 bottom-14.5 h-24.75 w-24.75'
      />
      <Image
        src='/lightning.svg'
        alt='Ping Lightning svg image'
        width={91}
        height={91}
        className='absolute bottom-52.75 -left-4 h-22.75 w-22.75'
      />
      <Image
        src='/CandidGentleman.png'
        width={375}
        height={452}
        alt='Candid Gentleman png picture'
        className='absolute bottom-0 z-49 ml-4.75'
      />
      <span className='font-bonheur-royale leading-8xl absolute top-156 right-1/2 z-50 h-20.25 w-29 -translate-x-[calc(50%-17px)] -rotate-[12.34deg] text-[64px] font-normal -tracking-[0.02em] text-white'>
        Junior
      </span>
      <h2 className='font-anton text-secondary-100 absolute bottom-62.5 z-48 h-31.5 text-center text-[102px] leading-31.25 font-normal -tracking-[0.02em]'>
        FRONTEND
      </h2>
      <h2 className='font-anton text-secondary-100 absolute bottom-36 z-48 h-31.5 text-center text-[92px] leading-[112.5px] font-normal -tracking-[0.02em]'>
        DEVELOPER
      </h2>
      <h2 className='font-anton absolute bottom-36 z-50 h-31.5 bg-clip-text text-center text-[92px] leading-[112.5px] font-normal -tracking-[0.02em] text-transparent [-webkit-text-stroke:1px_#f3b64c]'>
        DEVELOPER
      </h2>
    </>
  );
};
