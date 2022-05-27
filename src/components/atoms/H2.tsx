import c from 'classnames';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  as?: 'h1' | 'h2';
  children: ReactNode;
}

const Header = ({ as: As = 'h1', children, className }: Props) => (
  <As
    className={c(
      'relative inline-block max-w-full font-semibold leading-loose',
      className
    )}
  >
    <span className='H2'>{children}</span>
  </As>
);

export default Header;
