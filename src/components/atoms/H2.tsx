import c from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
  className?: string;
  as?: 'h1' | 'h2';
  children: ReactNode;
}

const Header = ({ as: As = 'h1', children, className }: Props) => (
  <As
    className={c(
      'max-w-full font-semibold relative leading-loose inline-block',
      className
    )}
  >
    <span className='H2'>{children}</span>
  </As>
);

export default Header;
