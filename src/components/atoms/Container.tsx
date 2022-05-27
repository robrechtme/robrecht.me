import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => (
  <div className='flex min-h-screen w-full justify-center bg-gray-50 text-gray-900 dark:overflow-x-hidden dark:bg-gray-900 dark:text-gray-50'>
    <div className='flex w-full max-w-screen-xl flex-col justify-between px-4 sm:px-8'>
      {children}
    </div>
  </div>
);

export default Container;
