import { FunctionComponent, HTMLProps, SVGAttributes } from 'react';

interface Props extends HTMLProps<HTMLAnchorElement> {
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
}

const IconLink = ({ Icon, size, ...linkProps }: Props) => (
  <a
    className='mx-1 rounded p-1 ring-blue-500 focus:outline-none focus-visible:ring-2'
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...linkProps}
  >
    <Icon width={`${size}em`} height={`${size}em`} />
  </a>
);

export default IconLink;
