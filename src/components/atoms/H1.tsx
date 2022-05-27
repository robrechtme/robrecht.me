type Props = React.ComponentPropsWithoutRef<'h1'>;

const H1 = ({ children }: Props) => (
  <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl mb-1'>
    {children}
  </h1>
);

export default H1;
