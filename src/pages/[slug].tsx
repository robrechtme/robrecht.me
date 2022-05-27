import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Header from '../components/atoms/H2';
import { escapeDoubleQuotes } from '../util/string';

import Logo from 'components/atoms/icons/logo';
import Back from 'components/atoms/icons/right-arrow';
import StructuredText from 'components/organisms/StructuredText';
import { query } from 'lib/datocms';
import { PROJECT_PAGE_QUERY, PROJECT_SLUGS_QUERY } from 'lib/queries';
import { ProjectPageQuery, ProjectSlugsQuery } from 'lib/types';

const Project = ({ project }: ProjectPageQuery) => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Link href='/'>
        <a>
          <Logo className='h-6 mb-2 mt-8' />
        </a>
      </Link>
      {!router.isFallback && (
        <article className='flex flex-col sm:flex-row items-start 2xl:-ml-12 sm:space-x-8 sm:space-y-0 space-y-8'>
          {project.seo && (
            <>
              <NextSeo
                title={escapeDoubleQuotes(project.seo?.title)}
                description={escapeDoubleQuotes(project.seo.description)}
              />
              <ArticleJsonLd
                url={`${process.env.NEXT_PUBLIC_URL}/${project.slug}`}
                title={escapeDoubleQuotes(project.seo?.title)}
                images={[project.seo.image.url]}
                datePublished={project.publishedAt}
                dateModified={project.updatedAt}
                authorName={['Robrecht Meersman']}
                publisherName='Robrecht Meersman'
                publisherLogo='https://www.datocms-assets.com/37631/1610276111-logowhitetrans.png' // FIXME
                description={escapeDoubleQuotes(project.seo.description)}
              />
            </>
          )}
          <div className='sm:w-1/3 sm:sticky top-0 sm:py-8 flex items-start 2xl:space-x-4'>
            <Link href='/'>
              <a
                aria-label='Vorige'
                className='hidden 2xl:block opacity-25 hover:opacity-50 transition hover:bg-gray-200 rounded-full mt-1'
              >
                <Back className=' h-6 w-6 m-1 transform rotate-180 -left-full' />
              </a>
            </Link>
            <header>
              <Header className='text-xl mb-2'>
                <span className=' text-gray-900'>{project.title}.</span>
              </Header>
              <div>
                {project.keywords && (
                  <p className='uppercase tracking-wide text-sm  text-gray-900'>
                    {project.keywords.join(', ')}
                  </p>
                )}
              </div>
              <div className='mt-4 prose text-gray-900'>
                <StructuredText data={project.description} />
              </div>
            </header>
          </div>
          <motion.main
            className='flex-1 sm:py-8 prose'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <StructuredText data={project.content} />
          </motion.main>
        </article>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview, params }) => {
  const data = await query<ProjectPageQuery>(PROJECT_PAGE_QUERY, {
    preview,
    variables: { slug: params?.slug },
  });
  return {
    props: {
      ...data,
      preview: Boolean(preview),
    },
    revalidate: 60 * 60, // 1 hour
    notFound: Boolean(!data.project),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await query<ProjectSlugsQuery>(PROJECT_SLUGS_QUERY);
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export default Project;
