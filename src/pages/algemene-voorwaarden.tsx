import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

import Logo from '../assets/logo.svg';
import Back from '../assets/right-arrow.svg';
import query from '../lib/datocms';
import { TERMS_AND_CONDITIONS, TermsAndConditions } from '../lib/queries/termsAndConditions';

const TermsAndConditionsPage: React.FC<TermsAndConditions> = ({ page }) => (
  <>
    <Link href="/">
      <a>
        <Logo className="h-6 mb-2 mt-8" />
      </a>
    </Link>
    <motion.article className="my-4 relative" exit={{ transition: { duration: 0 } }}>
      <Link href="/">
        <a
          aria-label="Vorige"
          className="hidden 2xl:block opacity-25 hover:opacity-50 transition hover:bg-gray-200 rounded-full mt-1 absolute top-0 -left-12"
        >
          <Back className=" h-6 w-6 m-1 transform rotate-180 -left-full" />
        </a>
      </Link>
      <h1 className="font-bold text-3xl">Algemene voorwaarden</h1>
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
      <div className="prose mt-8 ">{parse(page.content)}</div>
    </motion.article>
  </>
);

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data = await query<TermsAndConditions>({
    query: TERMS_AND_CONDITIONS,
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

export default TermsAndConditionsPage;
