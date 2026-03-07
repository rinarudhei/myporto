import Image from 'next/image';

export const HighlightSkills = () => {
  return (
    <div className='border-primary-300 absolute top-27 right-1/2 z-50 hidden -translate-x-[calc(40px+451px-115px)] flex-col gap-5.5 rounded-full border px-5.5 py-8.25 lg:flex xl:-translate-x-[calc(149px+451px-115px)]'>
      <div className='border-primary-300 flex-center h-17.25 w-17.25 gap-3 rounded-full border p-3'>
        <Image
          src='/icon/js.svg'
          width={51}
          height={51}
          className='h-full w-auto object-cover'
          alt='JS icon'
        />
      </div>
      <div className='border-primary-300 flex-center h-17.25 w-17.25 gap-3 rounded-full border p-3'>
        <Image
          src='/icon/css.svg'
          width={35}
          height={41}
          alt='CSS3 icon'
          className='h-full w-auto object-cover'
        />
      </div>
      <div className='border-primary-300 flex-center relative h-17.25 w-17.25 gap-3 rounded-full border p-3'>
        <div className='absolute right-5 z-40 h-7 w-6 bg-white'></div>
        <Image
          src='/icon/html.svg'
          width={40}
          height={40}
          alt='HTML5 icon'
          className='z-50 h-full w-auto object-cover'
        />
      </div>
      <div className='border-primary-300 flex-center h-17.25 w-17.25 gap-3 rounded-full border p-3'>
        <Image
          src='/icon/reactjs.svg'
          width={44}
          height={39}
          alt='ReactJS icon'
          className='h-full w-auto'
        />
      </div>
    </div>
  );
};
