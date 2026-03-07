type MainProps = {
  children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <main className='flex-center z-50 mx-auto max-w-360 flex-col overflow-x-hidden bg-white'>
      {children}
    </main>
  );
};
