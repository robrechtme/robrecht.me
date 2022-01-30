import { motion } from "framer-motion";
import parse from "html-react-parser";
import { GetStaticPaths, GetStaticProps } from "next";
import { ArticleJsonLd, NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Logo from "../assets/logo.svg";
import Back from "../assets/right-arrow.svg";
import Header from "../components/atoms/H2";
import Content from "../components/organisms/Blocks";
import query from "../lib/datocms";
import { PROJECT, ProjectPage } from "../lib/queries/project";
import { PROJECT_SLUGS, ProjectSlugs } from "../lib/queries/projectSlugs";
import { escapeDoubleQuotes } from "../util/string";

const Project: React.FC<ProjectPage> = ({ project }) => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Link href="/">
        <a>
          <Logo className="h-6 mb-2 mt-8" />
        </a>
      </Link>
      {!router.isFallback && (
        <article className="flex flex-col sm:flex-row items-start 2xl:-ml-12 sm:space-x-8 sm:space-y-0 space-y-8">
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
                authorName={["Robrecht Meersman"]}
                publisherName="Robrecht Meersman"
                publisherLogo="https://www.datocms-assets.com/37631/1610276111-logowhitetrans.png" // FIXME
                description={escapeDoubleQuotes(project.seo.description)}
              />
            </>
          )}
          <div className="sm:w-1/3 sm:sticky top-0 sm:py-8 flex items-start 2xl:space-x-4">
            <Link href="/">
              <a
                aria-label="Vorige"
                className="hidden 2xl:block opacity-25 hover:opacity-50 transition hover:bg-gray-200 rounded-full mt-1"
              >
                <Back className=" h-6 w-6 m-1 transform rotate-180 -left-full" />
              </a>
            </Link>
            <header>
              <Header className="text-xl mb-2">
                <span className=" text-gray-900">{project.title}.</span>
              </Header>
              <div>
                {project.keywords && (
                  <p className="uppercase tracking-wide text-sm  text-gray-900">
                    {project.keywords.join(", ")}
                  </p>
                )}
              </div>
              <div className="mt-4 ">
                <p className="prose text-gray-900">
                  {parse(project.description)}
                </p>
              </div>
            </header>
          </div>
          <motion.main
            className="flex-1 sm:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
          >
            <Content content={project.content} />
          </motion.main>
        </article>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  preview,
  params: { slug },
}) => {
  const data = await query<ProjectPage>({
    query: PROJECT,
    preview,
    variables: { slug },
  });
  return {
    props: {
      ...data,
      preview: Boolean(preview),
    },
    revalidate: 1,
    notFound: Boolean(!data.project),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await query<ProjectSlugs>({ query: PROJECT_SLUGS });
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

export default Project;
