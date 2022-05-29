import { ResponsiveImageFieldsFragment } from 'lib/types';

interface Props {
  data: ResponsiveImageFieldsFragment;
  className?: string;
}

const Img = ({ data, className }: Props) => (
  <picture>
    <source srcSet={data.webpSrcSet} sizes={data.sizes} type='image/webp' />
    <source srcSet={data.srcSet} sizes={data.sizes} />
    <img
      width={data.width}
      height={data.height}
      className={className}
      src={data.src}
      alt={data.alt}
      title={data.title}
    />
  </picture>
);

export default Img;
