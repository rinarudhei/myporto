import { Star } from 'lucide-react';
import { Card } from '../ui/card';
import { Testimony } from '@/constant/testimonials-data';
import { Avatar, AvatarImage } from '../ui/avatar';
import clsx from 'clsx';

type TestimonialsCardsProps = {
  items: Testimony[];
};

const cardStyles = [
  'z-1 -bottom-14 bg-primary-300/20 scale-87 absolute',
  'z-2 -bottom-5.5 bg-[#D4A0B3] scale-96 absolute',
  'z-3 bg-primary-300 ',
];

export const TestimonialsCards = ({ items }: TestimonialsCardsProps) => {
  return (
    <div className='flex-center relative w-full'>
      {items.map((item, i) => (
        <Card
          key={item.id}
          className={clsx(
            'flex-center w-full flex-col gap-8 rounded-2xl p-6 md:w-full md:rounded-3xl md:px-10 md:py-8 lg:rounded-4xl',
            cardStyles[i]
          )}
        >
          <div className='flex-center w-full max-w-76.25 flex-col gap-4 sm:max-w-full'>
            <div className='flex-center gap-1'>
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className='fill-secondary-100 stroke-secondary-100'
                />
              ))}
            </div>

            <q className='text-neutral-25 lg:text-display-xs text-center text-lg font-semibold -tracking-[0.03rem] sm:w-full md:max-w-280 lg:-tracking-[0.04rem]'>
              {item.description}
            </q>
          </div>

          <div className='flex-center flex-col gap-2'>
            <Avatar size='xl'>
              <AvatarImage src={item.image} />
            </Avatar>
            <div className='flex flex-col'>
              <h5 className='text-neutral-25 text-center text-lg font-semibold -tracking-[0.03rem]'>
                {item.name}
              </h5>
              <p className='text-neutral-25 text-md text-center font-medium -tracking-[0.03rem]'>
                {item.title}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
