import NextImage from 'next/image';
import React from 'react';
import { ResponsiveImageType } from 'react-datocms';

interface Props {
  data: ResponsiveImageType;
  className?: string;
}

const loader = ({ src, width, quality = 75 }: { src: string; width: number; quality?: number }) => {
  if (src.includes('?')) {
    return `${src}&w=${width}&q=${quality}`;
  }
  return `${src}?w=${width}&q=${quality}`;
};

const Img = ({ data, className }: Props) => (
  <NextImage
    src={data.src}
    alt={data.alt}
    width={data.width}
    height={data.height}
    blurDataURL={data.base64}
    placeholder="blur"
    loader={loader}
    title={data.title}
    className={className}
  />
);

export default Img;
