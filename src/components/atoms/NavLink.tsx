import c from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
  active?: boolean;
  href?: string;
  children?: ReactNode;
}

const NavLink = ({ children, active = false }: Props) => (
  <span
    className={c(
      !active && 'text-gray-500 hover:text-gray-600',
      'navLink uppercase tracking-wide font-semibold'
    )}
  >
    {children}
  </span>
);

export default NavLink;
