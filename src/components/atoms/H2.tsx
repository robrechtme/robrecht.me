import c from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  as?: 'h1' | 'h2';
};

const Header: React.FC<Props> = ({ as: As = 'h1', children, className }) => (
  <As className={c('max-w-full font-semibold relative leading-loose inline-block', className)}>
    <span className="H2">{children}</span>
  </As>
);

export default Header;
