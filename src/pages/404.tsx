import { GetStaticProps } from 'next';
import Link from 'next/link';

import Back from 'components/atoms/icons/right-arrow';
import { query } from 'lib/datocms';
import { ERROR_PAGE_QUERY } from 'lib/queries';
import { ErrorPageQuery } from 'lib/types';

const ErrorPage = () => (
  <div className='my-32'>
    <h1 className='text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl'>
      404.
    </h1>
    <h2 className='text-lg sm:text-xl md:text-2xl'>Yikes.</h2>
    <Link href='/'>
      <a className='group mt-8 flex items-center text-sm'>
        <Back className='m-1 h-6 w-6 rotate-180 transform opacity-25 transition group-hover:opacity-50' />
        <span className='opacity-75 transition group-hover:opacity-100'>
          Terug naar de homepagina
        </span>
      </a>
    </Link>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data = await query<ErrorPageQuery>(ERROR_PAGE_QUERY, {
    preview,
  });
  return {
    props: {
      ...data,
      preview: Boolean(preview),
    },
    revalidate: 1,
  };
};

export default ErrorPage;
