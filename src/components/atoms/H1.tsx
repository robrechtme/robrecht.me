import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const H1 = ({ children }: Props) => (
  <h1 className='mb-1 text-4xl font-extrabold sm:text-5xl md:text-6xl'>
    {children}
  </h1>
);

export default H1;
