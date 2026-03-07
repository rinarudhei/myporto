import { ArrowRight } from 'lucide-react';
import { Card, CardFooter } from '../ui/card';
import Image from 'next/image';
import { Separator } from '../ui/separator';

type PortofolioCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};
export const PortofolioCard = ({
  imageUrl,
  title,
  description,
}: PortofolioCardProps) => {
  return (
    <Card>
      <div className='flex-center relative flex-col gap-2 rounded-4xl bg-neutral-100 p-4'>
        <div className='relative h-90.25 w-90.25 xl:h-88.75 xl:w-88.75'>
          <Image
            src={imageUrl}
            alt='Portofolio 1 image png'
            width={355}
            height={355}
            className='auto w-full object-cover'
          />
        </div>
        <Image
          src='/icon/BestPortofolio.svg'
          alt='Best Portofolio yello tag'
          width={97}
          height={29}
          className='absolute right-1/2 bottom-1/2 -translate-x-[108px] -translate-y-31 xl:-translate-x-[104.75px] xl:-translate-y-34'
        />
      </div>
      <CardFooter>
        <div className='flex-center justify-between'>
          <div className='flex w-full flex-col gap-3 xl:w-79.75'>
            <h4 className='text-md font-bold tracking-[0.02rem]'>{title}</h4>
            <Separator className='bg-neutral-300' />
            <p className='text-xs font-medium tracking-normal text-neutral-600'>
              {description}
            </p>
          </div>
          <div className='flex-center bg-primary-300 h-fit w-fit gap-2 rounded-full p-2 group-hover:bg-neutral-950/50 md:w-fit'>
            <ArrowRight size={20} className='text-white' />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
