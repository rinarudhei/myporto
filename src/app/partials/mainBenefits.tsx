import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { benefits, otherTalentCons } from '@/constant/benefits-data';
import { Check, X } from 'lucide-react';

export const MainBenefits = () => {
  return (
    <div className='xs:max-w-full xs:px-4 xs:py-10 flex max-w-screen flex-col flex-wrap items-center gap-6 p-0 lg:py-20'>
      <div className='flex-center max-w-88.25 flex-col gap-2 sm:max-w-screen'>
        <h2 className='text-display-sm lg:text-display-xl text-center font-bold -tracking-[0.02rem] text-wrap text-neutral-950 sm:tracking-[0.03rem]'>
          More Than Just Code
        </h2>
        <p className='md:text-md text-center text-sm font-medium tracking-[0] text-neutral-950'>
          We care about design, performance, and user experience all in one.
        </p>
      </div>
      <div className='xs:max-w-full flex max-w-screen flex-wrap justify-center gap-6 rounded-4xl'>
        {/* With Me */}
        <div
          className='bg-secondary-100 xs:max-w-full max-h-155 max-w-screen gap-6 overflow-x-clip rounded-2xl px-4 py-8 lg:max-w-147'
          style={{
            width: 'clamp(22.56rem, 40.83vw, 36.75rem)',
            height: 'clamp(30.88rem, 43.06vw, 38.75rem)',
          }}
        >
          <div className='flex flex-col items-center gap-3'>
            <h4 className='text-center text-lg font-bold'>With Me</h4>
            <Avatar>
              <AvatarImage
                src='/image/CandidGentleman.png'
                className='translate-x-lg translate-y-sm h-[79px] w-[65px]'
              />
            </Avatar>
          </div>
          <ul className='mt-6 flex flex-col gap-3 lg:gap-4 xl:gap-6'>
            {benefits.map((b) => (
              <li
                key={b}
                className='flex-center xs:text-md text-xs font-semibold text-nowrap md:tracking-[0.03rem] xl:text-lg'
              >
                <span className='h-6 w-6'>
                  <Check
                    size={24}
                    className='border-2 border-transparent font-semibold text-neutral-950'
                  />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* With Another */}
        <div
          className='xs:max-w-full h-fit max-h-155 max-w-screen gap-6 overflow-x-clip rounded-2xl border border-neutral-300 bg-white px-4 py-8 lg:max-w-147'
          style={{
            width: 'clamp(22.56rem, 40.83vw, 36.75rem)',
            height: 'clamp(30.88rem, 43.06vw, 38.75rem)',
          }}
        >
          <div className='flex flex-col items-center gap-3'>
            <h4 className='text-center text-lg font-semibold'>
              Another Talent
            </h4>
            <Avatar className='bg-neutral-300'>
              <AvatarImage
                src='/icon/profile-placeholder.svg'
                className='scale-60'
              />
            </Avatar>
          </div>
          <ul className='mt-6 flex flex-col gap-3 lg:gap-4 xl:gap-6'>
            {otherTalentCons.map((b) => (
              <li
                key={b}
                className='flex-center xs:text-md text-xs font-semibold text-nowrap md:tracking-[0.03rem] xl:text-lg'
              >
                <span className='h-6 w-6'>
                  <X
                    size={24}
                    className='border-2 border-transparent font-semibold text-[#e5352d]'
                  />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
