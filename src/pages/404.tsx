import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

import Back from '../assets/right-arrow.svg';
import query from '../lib/datocms';
import { ERROR_PAGE, ErrorPage as TErrorPage } from '../lib/queries/404';

const ErrorPage: React.FC = () => (
  <motion.div className="my-32" exit={{ transition: { duration: 0 } }}>
    <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">404.</h1>
    <h2 className="text-lg sm:text-xl md:text-2xl">Yikes.</h2>
    <Link href="/">
      <a className="group flex items-center mt-8 text-sm">
        <Back className="h-6 w-6 m-1 transform rotate-180 opacity-25 group-hover:opacity-50 transition" />
        <span className="opacity-75 group-hover:opacity-100 transition">
          Terug naar de homepagina
        </span>
      </a>
    </Link>
  </motion.div>
);

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data = await query<TErrorPage>({
    query: ERROR_PAGE,
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
