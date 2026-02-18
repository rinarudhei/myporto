import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { navigationData } from '@/constant/navigation-data';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='flex-between mt-4 h-12 w-full max-w-[calc(100%-2rem)] gap-6 rounded-full bg-black/20 px-4 text-white backdrop-blur-2xl sm:mt-8 sm:w-fit sm:max-w-138.25 sm:px-6'>
      <ul className='sm:flex-center hidden gap-6'>
        {navigationData.map((data) => (
          <li key={data.label} className='gap-2 p-2'>
            <Link
              href={data.href}
              className='hover:text-primary-200 text-md font-medium'
            >
              {data.label}
            </Link>
          </li>
        ))}
      </ul>
      <Dialog>
        <DialogTitle className='text-xl font-bold text-white sm:hidden'>
          Edwin
        </DialogTitle>
        <DialogTrigger className='cursor-pointer sm:hidden'>
          <Menu />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className='h-8.5 text-xl font-bold text-white'>
            Edwin
          </DialogHeader>
          <nav className=''>
            <ul className='flex flex-col gap-2 text-white'>
              {navigationData.map((data) => (
                <li key={data.label}>
                  <DialogClose asChild>
                    <Link
                      href={data.href}
                      className='hover:text-primary-200 text-md py-2 font-medium text-white'
                    >
                      {data.label}
                    </Link>
                  </DialogClose>
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
    </nav>
  );
};
