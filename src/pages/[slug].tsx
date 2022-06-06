import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { escapeDoubleQuotes } from '../util/string';

import Text from 'components/atoms/Text';
import Logo from 'components/atoms/icons/logo';
import Back from 'components/atoms/icons/right-arrow';
import RelatedProjects from 'components/organisms/RelatedProjects';
import StructuredText from 'components/organisms/StructuredText';
import { query } from 'lib/datocms';
import { PROJECT_PAGE_QUERY, PROJECT_SLUGS_QUERY } from 'lib/queries';
import { ProjectPageQuery, ProjectSlugsQuery } from 'lib/types';

const Project = ({ project }: ProjectPageQuery) => {
  const { back } = useRouter();
  return (
    <>
      <header>
        <Link href='/'>
          <Logo className='mb-2 mt-8 h-6' />
        </Link>
      </header>
      <article className='flex flex-col items-start space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0 2xl:-ml-12'>
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
        <div className='top-0 flex items-start sm:sticky sm:w-1/3 sm:py-8 2xl:space-x-4'>
          <button
            role='link'
            onClick={back}
            aria-label='Vorige'
            className='mt-1 hidden rounded-full opacity-25 transition hover:bg-gray-200 hover:opacity-50 2xl:block'
          >
            <Back className=' -left-full m-1 h-6 w-6 rotate-180 transform' />
          </button>
          <section className='animate-fade animation-delay-300'>
            <Text variant='heading2' className='mb-2 text-xl'>
              <span className=' text-gray-900'>{project.title}</span>
            </Text>
            <div>
              {project.keywords && (
                <p className='text-sm uppercase tracking-wide  text-gray-900'>
                  {project.keywords.join(', ')}
                </p>
              )}
            </div>
            <div className='prose mt-4 text-gray-900'>
              <StructuredText data={project.description} />
            </div>
          </section>
        </div>
        <main className='prose flex-1 animate-fade-up animation-delay-800 motion-reduce:animate-fade sm:py-8'>
          <StructuredText data={project.content} />
        </main>
      </article>
      <RelatedProjects relatedProjects={project.relatedProjects} />
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
