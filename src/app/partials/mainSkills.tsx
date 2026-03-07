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
    <div className='flex-center w-screen flex-col gap-6 bg-linear-to-b from-[#9e385e]/0 to-[#9e385e] to-800% px-5 py-10 sm:gap-8 sm:px-10 sm:py-16 md:gap-10 lg:gap-12 lg:px-30 lg:py-20'>
      <div className='flex-center max-w-88.25 flex-col gap-2 sm:max-w-screen'>
        <h2 className='text-display-sm lg:text-display-xl text-center font-bold -tracking-[0.02rem] text-wrap text-neutral-950 sm:tracking-[0.03rem]'>
          Code, Design, and Everything in Between
        </h2>
        <p className='md:text-md text-center text-sm font-medium tracking-[0] text-neutral-950'>
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>
      </div>
      <Carousel
        opts={{
          slidesToScroll: 2,
        }}
        className='w-full max-w-90.25 gap-6 sm:max-w-90 md:max-w-180 lg:max-w-230'
      >
        <CarouselContent>
          {skillsData.map((s, i) => (
            <CarouselItem
              key={s.icon}
              className='basis-1/2 pl-4 md:basis-1/4 lg:pl-5'
            >
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
                    width={s.icon === '/icon/css.svg' ? 30 : 35}
                    height={35}
                    className={(clsx('object-contain'), 'h-auto w-auto')}
                  />
                </div>
                <div>
                  <h4 className='text-md text-center font-semibold tracking-normal text-neutral-950'>
                    {s.title}
                  </h4>
                  <p className='md:text-md text-center text-sm font-normal tracking-normal text-neutral-950'>
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
