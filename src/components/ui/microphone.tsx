'use client';
import { FaMicrophone } from 'react-icons/fa';
import useSound from 'use-sound';

export const Microphone = () => {
  const [play] = useSound('/EdwinAndersonAISpeech.mp3');
  return (
    <button
      className='border-primary-300 flex-center hover:bg-primary-300/90 h-12 w-12 cursor-pointer gap-2 rounded-full border px-1.25 py-0.5'
      onClick={() => play()}
    >
      <FaMicrophone className='h-5 w-3.5 text-white' />
    </button>
  );
};
