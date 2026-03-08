'use client';
import { TestimonialsCards } from '@/components/container/testimonialsCards';
import { Button } from '@/components/ui/button';
import { Testimony, testimonials } from '@/constant/testimonials-data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

export const Testimonials = () => {
  const [items, setItems] = React.useState<Testimony[]>(testimonials);

  const rotateLeft = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      if (firstItem) {
        newItems.push(firstItem);
      }

      return newItems;
    });
  };

  const rotateRight = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      if (lastItem) {
        newItems.unshift(lastItem);
      }

      return newItems;
    });
  };
  return (
    <div className='xs:max-w-full xs:px-4 xs:py-10 flex w-full max-w-screen flex-col flex-wrap items-center gap-6 p-0 lg:w-screen lg:max-w-screen lg:px-30 lg:py-20'>
      <div className='flex-center w-full max-w-88.25 flex-col gap-2 sm:max-w-screen'>
        <h2 className='text-display-sm lg:text-display-xl text-center font-bold -tracking-[0.02rem] text-wrap text-neutral-950 sm:tracking-[0.03rem]'>
          What They Say About Working With Me
        </h2>
        <p className='md:text-md text-center text-sm font-medium -tracking-[0.02rem] text-neutral-950'>
          Real worlds from clients, teammates, and mentors I've collaborated
          with on various projects.
        </p>
      </div>
      <div className='flex-center w-full flex-col gap-12 sm:gap-16 lg:gap-20.75'>
        <TestimonialsCards items={items} />

        <div className='flex-center gap-3'>
          <Button
            disabled={items[0].id === 1}
            variant='outline'
            className='flex-center h-11.25 w-11.25 cursor-pointer gap-2.75 p-2.75'
            onClick={rotateLeft}
          >
            <ArrowLeft size={24} className='text-neutral-950' />
          </Button>
          <Button
            disabled={items[0].id === 2}
            variant='outline'
            className='flex-center h-11.25 w-11.25 cursor-pointer gap-2.75 p-2.75'
            onClick={rotateRight}
          >
            <ArrowRight size={24} className='text-neutral-950' />
          </Button>
        </div>
      </div>
    </div>
  );
};
