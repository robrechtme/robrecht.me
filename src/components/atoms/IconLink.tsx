interface Props extends React.HTMLProps<HTMLAnchorElement> {
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const IconLink = ({ Icon, size, ...linkProps }: Props) => (
  <a
    className='mx-1 p-1 focus:outline-none focus-visible:ring-2 ring-blue-500 rounded'
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...linkProps}
  >
    <Icon width={`${size}em`} height={`${size}em`} />
  </a>
);

export default IconLink;
