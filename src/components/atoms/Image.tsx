import { Image, ResponsiveImageType } from 'react-datocms';

interface Props {
  data: ResponsiveImageType;
  className?: string;
}

const Img = ({ data, className }: Props) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image data={data} className={className} />
);

export default Img;
