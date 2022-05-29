import c from 'classnames';
import { ReactNode } from 'react';

interface Props {
  active?: boolean;
  href?: string;
  children?: ReactNode;
}

const NavLink = ({ children, active = false }: Props) => (
  <span
    className={c(
      !active && 'text-gray-500 hover:text-gray-600',
      'navLink font-semibold uppercase tracking-wide'
    )}
  >
    {children}
  </span>
);

export default NavLink;
