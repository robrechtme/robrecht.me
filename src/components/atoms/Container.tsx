import c from 'classnames';
import { ReactNode } from 'react';

interface Props {
  dark?: boolean;
  children: ReactNode;
}

const Container = ({ children, dark = false }: Props) => (
  <div
    className={c(
      dark
        ? 'bg-gray-900 text-gray-50 overflow-x-hidden'
        : 'text-gray-900 bg-gray-50',
      'w-full min-h-screen flex justify-center'
    )}
  >
    <div className='max-w-screen-xl w-full px-4 sm:px-8 flex flex-col justify-between'>
      {children}
    </div>
  </div>
);

export default Container;
