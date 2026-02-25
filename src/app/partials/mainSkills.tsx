import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { skillsData } from '@/constant/skills-data';
import clsx from 'clsx';
import Image from 'next/image';

export const MainSkills = () => {
  return (
    <div className='flex-center flex-col gap-6 bg-linear-to-b from-[#9e385e]/0 to-[#9e385e] to-300% px-5 py-10'>
      <div className='flex-center max-w-88.25 flex-col gap-2'>
        <h2 className='text-display-sm text-center font-bold -tracking-[0.02rem] text-wrap text-neutral-950'>
          Code, Design, and Everything in Between
        </h2>
        <p className='text-center text-sm font-medium tracking-[0] text-neutral-950'>
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>
      </div>
      <Carousel className='w-full max-w-90.25 gap-6'>
        <CarouselContent>
          {skillsData.map((s, i) => (
            <CarouselItem key={s.icon} className='basis-1/2 pl-4 md:basis-1/3'>
              <div
                className={clsx(
                  i % 2 === 0
                    ? 'bg-secondary-100'
                    : 'bg-neutral-25 border border-neutral-300',
                  'flex-center flex-col gap-3 rounded-[100px] px-4 py-10'
                )}
              >
                <div className='flex-center h-15 w-15 rounded-full bg-neutral-100'>
                  <Image
                    src={s.icon}
                    alt={s.alt}
                    width={s.icon === '/css.svg' ? 30 : 35}
                    height={35}
                    className='object-contain'
                  />
                </div>
                <div>
                  <h4 className='text-md text-center font-semibold tracking-normal text-neutral-950'>
                    {s.title}
                  </h4>
                  <p className='text-center text-sm font-normal tracking-normal text-neutral-950'>
                    {s.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex-center mt-8 gap-3'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};
