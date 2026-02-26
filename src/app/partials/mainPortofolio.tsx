import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { portofolios } from '@/constant/portofolio-data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const MainPortofolio = () => {
  return (
    <div className='flex-center w-screen flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-16 md:gap-10 lg:gap-12 lg:px-30 lg:py-20'>
      <div className='flex w-full flex-col items-center justify-between gap-6 sm:max-w-screen lg:max-w-300 lg:flex-row'>
        <div className='flex-start max-w-90.25 flex-col items-start gap-2 sm:max-w-screen sm:items-center lg:max-w-166.5 lg:items-start'>
          <h2 className='text-display-sm lg:text-display-xl text-start font-bold -tracking-[0.02rem] text-wrap text-neutral-950 sm:text-center sm:tracking-[0.03rem] sm:text-nowrap lg:text-start lg:text-wrap'>
            Design to <span className='text-primary-300'>Code Accuracy</span>
          </h2>
          <p className='md:text-md text-start text-sm font-medium tracking-[0] text-neutral-950 sm:text-center lg:text-start'>
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all devices
          </p>
        </div>

        <Button
          variant='outline'
          size='xl'
          className='group text-md scrollbar-hide w-full max-w-90.25 cursor-pointer overflow-x-hidden pl-4 tracking-normal lg:max-w-39'
        >
          <p className='font-semibold text-nowrap group-hover:text-white'>
            See All
          </p>
          <div className='flex-center h-fit w-fit gap-2 rounded-full bg-neutral-950 p-2 group-hover:bg-neutral-950/50 md:w-fit'>
            <ArrowRight size={20} className='text-neutral-25' />
          </div>
        </Button>
      </div>

      {/* PORTOFOLIO LIST */}
      <div className='flex-center flex-col gap-5 xl:flex-row'>
        {portofolios.map((p, i) => (
          <div key={i}>
            <Card>
              <div className='flex-center relative flex-col gap-2 rounded-4xl bg-neutral-100 p-4'>
                <div className='xs:w-82.25 xs:h-82.25 h-full w-full xl:h-88.75 xl:w-88.75'>
                  <Image
                    src={p.imageUrl}
                    alt='Portofolio 1 image png'
                    width={355}
                    height={355}
                    className='object-cover'
                  />
                </div>
                <Image
                  src='/BestPortofolio.svg'
                  alt='Best Portofolio yello tag'
                  width={97}
                  height={29}
                  className='absolute right-1/2 bottom-1/2 -translate-x-[92.75px] -translate-y-31 xl:-translate-x-[104.75px] xl:-translate-y-34'
                />
              </div>
              <CardFooter>
                <div className='flex-center justify-between'>
                  <div className='xs:w-73.25 flex w-full flex-col gap-3 xl:w-79.75'>
                    <h4 className='text-md font-bold tracking-[0.02rem]'>
                      {p.title}
                    </h4>
                    <Separator className='bg-neutral-300' />
                    <p className='text-xs font-medium tracking-normal text-neutral-600'>
                      {p.description}
                    </p>
                  </div>
                  <div className='flex-center bg-primary-300 h-fit w-fit gap-2 rounded-full p-2 group-hover:bg-neutral-950/50 md:w-fit'>
                    <ArrowRight size={20} className='text-white' />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
