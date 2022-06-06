import Link from 'next/link';

import Img from '../atoms/Image';
import NavLink from '../atoms/NavLink';
import StructuredText from '../organisms/StructuredText';

import Text from 'components/atoms/Text';
import { HomePageQuery } from 'lib/types';

interface Props {
  project: HomePageQuery['projects'][number];
}

const Card = ({
  project: { slug, thumbnail, title, keywords, description },
}: Props) => (
  <article className='group flex max-w-full flex-col items-center py-8 px-2 md:flex-row md:space-x-8'>
    <div className='flex-shrink-0 overflow-hidden md:w-80'>
      <Link href={`/${slug}`}>
        <a aria-hidden='true'>
          <Img
            data={thumbnail.responsiveImage}
            className='max-h-64 transform object-cover duration-300 ease-in-out group-hover:scale-105 motion-reduce:transform-none'
          />
        </a>
      </Link>
    </div>
    <div className='flex min-w-0 flex-col justify-between self-stretch'>
      <div>
        <Text as='h1' variant='heading2' className='mb-2 truncate text-2xl'>
          {title}
        </Text>
        <div className='flex flex-1 flex-col'>
          {keywords && (
            <p className='text-sm uppercase tracking-wide opacity-50'>
              {keywords.join(', ')}
            </p>
          )}
          {description && (
            <div className='prose my-4 flex-1 overflow-hidden md:max-h-24 md:line-clamp-3'>
              <StructuredText data={description} />
            </div>
          )}
        </div>
      </div>
      <div>
        <Link href={`/${slug}`}>
          <a className='inline-block rounded text-sm ring-blue-500 focus:outline-none focus-visible:ring-2'>
            <NavLink>Lees meer</NavLink>
          </a>
        </Link>
      </div>
    </div>
  </article>
);

export default Card;
