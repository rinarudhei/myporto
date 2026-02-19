import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

export const Achievements = () => {
  return (
    <div className='z-50 mt-6.25 flex w-full max-w-[calc(100%-2rem)] flex-col items-center gap-5'>
      <div className='flex-between w-full'>
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
      </div>

      <div className='flex-between w-full'>
        <div className='flex flex-col gap-0.75'>
          <h3 className='text-display-md h-10.5 font-bold text-white'>3</h3>
          <p className='text-xs font-semibold text-white'>Project Delivered</p>
        </div>
        <Separator orientation='vertical' className='bg-primary-300' />
        <div className='flex flex-col gap-0.75'>
          <h3 className='text-display-md h-10.5 font-bold text-white'>50</h3>
          <p className='text-xs font-semibold text-white'>Clients Worldwide</p>
        </div>
      </div>

      <Button variant='secondary' size='lg' className='w-full pl-4'>
        <p>Contact Me</p>
        <div className='flex-center h-fit w-fit gap-2 rounded-full bg-neutral-950 p-2'>
          <ArrowRight size={20} className='text-neutral-25' />
        </div>
      </Button>
    </div>
  );
};
