import React from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';

interface Props {
  data: ResponsiveImageType;
  className?: string;
}

// eslint-disable-next-line jsx-a11y/alt-text
const Img = ({ data, className }: Props) => <Image data={data} className={className} />;

export default Img;
