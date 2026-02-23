import { Microphone } from '@/components/ui/microphone';

export default function ProfileDescription() {
  return (
    <div className='sm:m-none z-50 mt-6 flex w-full max-w-[calc(100%-2rem)] flex-col items-start justify-between gap-2 sm:absolute sm:top-153.5 sm:right-1/2 sm:max-w-112.75 sm:translate-x-[160px] md:translate-x-[100px] lg:-translate-x-[40px] xl:-translate-x-[149px]'>
      <Microphone />
      <h3 className='text-md font-bold -tracking-[0.02em] text-white sm:text-lg sm:tracking-normal lg:text-xl'>
        Hi, I&apos;m Edwin Anderson
      </h3>
      <p className='sm:text-md text-sm font-medium tracking-normal text-white lg:text-lg'>
        a frontend developer passionate about creating seamless digital
        experiences that are fast, responsive, and user-friendly.
      </p>
    </div>
  );
}
