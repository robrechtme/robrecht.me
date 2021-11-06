/* eslint-disable react/jsx-props-no-spreading */
import c from 'classnames';
import React from 'react';

interface Props {
  active?: boolean;
  href?: string;
}

const NavLink: React.FC<Props & Record<string, unknown>> = ({ children, active = false }) => (
  <span
    className={c(
      !active && 'text-gray-500 hover:text-gray-600',
      'navLink uppercase tracking-wide font-semibold',
    )}
  >
    {children}
  </span>
);

export default NavLink;
