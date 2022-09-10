import Image, { ImageLoader, ImageProps } from 'next/future/image';

import { ResponsiveImageFieldsFragment } from 'lib/types';

const imgixLoader: ImageLoader = ({ quality, src, width }) => {
  const url = new URL(src);
  if (quality !== undefined) {
    url.searchParams.set('q', String(quality));
  }
  if (width !== undefined) {
    url.searchParams.set('w', String(width));
  }
  return url.toString();
};

interface Props extends Pick<ImageProps, 'priority' | 'className'> {
  data: ResponsiveImageFieldsFragment;
  className?: string;
}

const Img = ({ data, ...imageProps }: Props) => (
  <Image
    loader={imgixLoader}
    src={data.src}
    alt={data.alt}
    width={data.width}
    blurDataURL={data.base64}
    height={data.height}
    placeholder='blur'
    {...imageProps}
  />
);

export default Img;
