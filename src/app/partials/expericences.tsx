import { WorkplaceCard } from '@/components/container/workplaceCard';
import { Separator } from '@/components/ui/separator';
import { experiences } from '@/constant/experiences-data';
import React from 'react';

export const Experiences = () => {
  return (
    <div className='flex-center w-screen flex-col gap-6 bg-neutral-950 px-5 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 lg:px-30 lg:py-20'>
      <div className='flex w-full max-w-300 flex-col gap-2 sm:flex-row sm:justify-between'>
        <h2 className='text-display-sm text-neutral-25 sm:text-display-md md:text-display-lg lg:text-display-xl max-w-88.25 font-bold -tracking-[0.02rem] sm:max-w-91.25 sm:-tracking-[0.03rem]'>
          Experiences That <span className='text-secondary-100'>Shaped Me</span>
          !
        </h2>
        <p className='text-neutral-25 sm:text-md text-sm font-semibold tracking-normal sm:max-w-64 lg:max-w-91.5 lg:text-lg'>
          From startups to side projects, every step has been a chance to learn,
          build, and level up.
        </p>
      </div>

      <Separator className='bg-neutral-800' />

      <div className='flex w-full flex-col gap-4 sm:gap-6 lg:gap-8'>
        {experiences.map((exp, i, arr) => (
          <React.Fragment key={i}>
            <WorkplaceCard
              title={exp.title}
              description={exp.description}
              workplaceImage={exp.workplaceImage}
              year={exp.year}
            />
            {i < arr.length - 1 && <Separator className='bg-neutral-800' />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
