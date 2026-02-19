import Image from 'next/image';
import BackgroundWave from '../../../public/background-wave.png';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='relative flex h-257 w-full flex-col items-center overflow-x-clip bg-[#a53f65]'>
      <div className='absolute top-0 z-0 h-208 w-screen overflow-x-clip bg-[#a53f65]'>
        <Image
          src={BackgroundWave}
          alt='Ocean Wave PNG Image'
          className='absolute top-0 z-0 h-[793px] w-[1074px] object-cover opacity-8 mix-blend-luminosity'
        />
      </div>
      {children}
    </header>
  );
};
