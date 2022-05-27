import { GetStaticProps } from 'next';
import Link from 'next/link';

import Logo from 'components/atoms/icons/logo';
import Back from 'components/atoms/icons/right-arrow';
import StructuredText from 'components/organisms/StructuredText';
import { query } from 'lib/datocms';
import { TERMS_AND_CONDITIONS_QUERY } from 'lib/queries';
import { TermsAndConditionsQuery } from 'lib/types';

const TermsAndConditionsPage = ({ page }: TermsAndConditionsQuery) => (
  <>
    <Link href='/'>
      <a>
        <Logo className='mb-2 mt-8 h-6' />
      </a>
    </Link>
    <article className='relative my-4'>
      <Link href='/'>
        <a
          aria-label='Vorige'
          className='absolute top-0 -left-12 mt-1 hidden rounded-full opacity-25 transition hover:bg-gray-200 hover:opacity-50 2xl:block'
        >
          <Back className=' -left-full m-1 h-6 w-6 rotate-180 transform' />
        </a>
      </Link>
      <h1 className='text-3xl font-bold'>Algemene voorwaarden</h1>
      <small>
        Laatst gewijzigd op{' '}
        <time>
          {new Date(page._updatedAt).toLocaleString('nl-BE', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })}
        </time>
      </small>
      <div className='prose mt-8'>
        <StructuredText data={page.content} />
      </div>
    </article>
  </>
);

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data = await query<TermsAndConditionsQuery>(
    TERMS_AND_CONDITIONS_QUERY,
    {
      preview,
    }
  );
  return {
    props: {
      ...data,
      preview: Boolean(preview),
    },
    revalidate: 60 * 60,
  };
};

export default TermsAndConditionsPage;
