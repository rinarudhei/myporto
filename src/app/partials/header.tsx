import Image from 'next/image';
import BackgroundWave from '../../../public/background-wave.png';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='relative z-45 flex h-257 w-full flex-col items-center overflow-x-clip bg-[#a53f65] sm:h-240 md:h-248 lg:h-255.75'>
      <div className='absolute top-0 z-0 h-208 w-screen overflow-x-clip bg-[#a53f65] lg:h-[1023px]'>
        <Image
          src={BackgroundWave}
          alt='Ocean Wave PNG Image'
          className='absolute top-0 z-0 h-[793px] w-[1074px] object-cover opacity-8 mix-blend-luminosity sm:h-full sm:w-full'
        />
      </div>
      {children}
    </header>
  );
};
