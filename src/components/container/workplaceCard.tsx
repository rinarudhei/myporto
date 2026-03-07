import Image from 'next/image';
import { Card } from '../ui/card';
import { Separator } from 'radix-ui';

type WorkplaceCardProps = {
  title: string;
  description: string;
  workplaceImage: string;
  year: string;
};

export const WorkplaceCard = ({
  title,
  description,
  workplaceImage,
  year,
}: WorkplaceCardProps) => {
  return (
    <Card className='max-w-300 justify-between gap-4 text-neutral-950 md:w-full md:flex-row md:justify-between'>
      <div className='flex flex-col gap-1 md:max-w-44.5'>
        <p className='text-sm font-medium tracking-normal text-neutral-400'>
          {year}
        </p>
        <h4 className='text-neutral-25 text-md font-bold -tracking-[0.02rem] md:text-xl md:tracking-normal'>
          {title}
        </h4>
      </div>

      <div className='w-[121.71px] gap-[5.07px] rounded-2xl border-[0.63px] border-neutral-800 p-[5.07px] md:h-fit md:w-48 md:gap-2 md:p-2'>
        <div className='text-neutral-25 w-full gap-[5.07px] rounded-[10.14px] border-[0.63px] border-neutral-800 p-[15.21px] md:gap-2 md:border md:p-6'>
          <Image
            src={workplaceImage}
            width={128}
            height={48}
            alt='Workplace image png'
            className='h-[30.43] w-[81.43px] object-center md:h-12 md:w-32'
          />
        </div>
      </div>

      <p className='md:text-md text-sm font-normal tracking-normal text-neutral-400 md:max-w-80 md:-tracking-[0.03rem] lg:max-w-100 xl:max-w-128.25'>
        {description}
      </p>
    </Card>
  );
};
