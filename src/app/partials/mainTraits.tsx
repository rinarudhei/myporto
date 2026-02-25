import { Separator } from '@/components/ui/separator';
import { traitsData } from '@/constant/traits-data';
export const MainTraits = () => {
  const iconMap: Record<string, React.ReactElement> = {
    gear: (
      <span className='xs:text-[1.5rem] xs:leading-7 text-[1rem] leading-6 lg:text-[2rem] lg:leading-9'>
        ⚙️
      </span>
    ),
    pallete: (
      <span className='xs:text-[1.5rem] xs:leading-7 text-[1rem] leading-6 lg:text-[2rem] lg:leading-9'>
        &#127912;
      </span>
    ),
    phone: (
      <span className='xs:text-[1.5rem] xs:leading-7 text-[1rem] leading-6 lg:text-[2rem] lg:leading-9'>
        &#128241;
      </span>
    ),
  };

  return (
    <div className='flex-center flex-col gap-4 px-4 py-10 sm:flex-row lg:gap-10 lg:px-30 lg:py-20'>
      {traitsData.map((t, i, arr) => (
        <div
          key={t.icon}
          className='flex w-full max-w-360 flex-col items-start justify-center gap-3 sm:flex-row sm:items-center'
        >
          <div className='xs:h-39 flex h-44 flex-col items-start justify-center gap-3 sm:h-48 sm:justify-between lg:h-54.75'>
            <div className='flex-center xs:h-12 xs:w-12 xs:gap-2 flex h-8 w-8 gap-1 rounded-full border border-neutral-300 px-1.25 py-0.5 lg:h-15.75 lg:w-15.75 lg:gap-[10.5px] lg:px-[2.63px] lg:py-[6.56px]'>
              {iconMap[t.icon]}
            </div>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h3 className='sm:text-md lg:text-display-xs text-lg font-bold text-neutral-950'>
                {t.title}
              </h3>
              <p className='font-regular lg:text-md text-sm tracking-normal text-neutral-950 sm:text-xs'>
                {t.description}
              </p>
            </div>
          </div>

          {/* add separator except last element */}
          {i < arr.length - 1 && (
            <>
              <Separator
                orientation='horizontal'
                className='text-neutral-300 sm:hidden'
              />
              <div className='hidden h-44 sm:inline-block'>
                <Separator
                  orientation='vertical'
                  className='text-neutral-300'
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
