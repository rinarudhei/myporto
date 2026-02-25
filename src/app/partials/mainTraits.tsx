import { Separator } from '@/components/ui/separator';
import { traitsData } from '@/constant/traits-data';
export const MainTraits = () => {
  const iconMap: Record<string, React.ReactElement> = {
    gear: <span className='text-[1.5rem] leading-7'>⚙️</span>,
    pallete: <span className='text-[1.5rem] leading-7'>&#127912;</span>,
    phone: <span className='text-[1.5rem] leading-7'>&#128241;</span>,
  };

  return (
    <div className='flex-center flex-col gap-4 px-4 py-10 sm:flex-row'>
      {traitsData.map((t, i, arr) => (
        <div
          key={t.icon}
          className='flex flex-col items-start justify-center gap-3'
        >
          <div className='flex-center flex h-12 w-12 gap-2 rounded-full border border-neutral-300 px-1.25 py-0.5'>
            {iconMap[t.icon]}
          </div>
          <div className='flex flex-col items-start justify-center gap-2'>
            <h3 className='text-lg font-bold text-neutral-950'>{t.title}</h3>
            <p className='font-regular text-sm tracking-normal text-neutral-950'>
              {t.description}
            </p>
          </div>

          {/* add separator except last element */}
          {i < arr.length - 1 && (
            <Separator orientation='horizontal' className='text-neutral-300' />
          )}
        </div>
      ))}
    </div>
  );
};
