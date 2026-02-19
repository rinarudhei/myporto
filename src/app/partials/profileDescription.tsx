import { FaMicrophone } from 'react-icons/fa';

export default function ProfileDescription() {
  return (
    <div className='z-50 mt-6 flex w-full max-w-[calc(100%-2rem)] flex-col items-start justify-between gap-2'>
      <div className='border-primary-300 flex-center h-12 w-12 gap-2 rounded-full border px-1.25 py-0.5'>
        <FaMicrophone className='h-5 w-3.5 text-white' />
      </div>
      <h3 className='text-md font-bold -tracking-[0.02em] text-white'>
        Hi, I&apos;m Edwin Anderson
      </h3>
      <p className='text-sm font-medium tracking-[0] text-white'>
        a frontend developer passionate about creating seamless digital
        experiences that are fast, responsive, and user-friendly.
      </p>
    </div>
  );
}
