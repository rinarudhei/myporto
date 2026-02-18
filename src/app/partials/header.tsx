export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='flex h-257 w-full flex-col items-center bg-[#a53f65]'>
      {children}
    </header>
  );
};
