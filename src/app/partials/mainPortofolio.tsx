import { PortofolioCard } from '@/components/container/portofolioCard';
import { Button } from '@/components/ui/button';
import { portofolios } from '@/constant/portofolio-data';
import { ArrowRight } from 'lucide-react';

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
          <PortofolioCard
            key={i}
            title={p.title}
            description={p.description}
            imageUrl={p.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
