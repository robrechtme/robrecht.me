import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import Link from 'next/link';
import React from 'react';

import { Project } from '../../lib/types';
import Header from '../atoms/H2';
import Img from '../atoms/Image';
import NavLink from '../atoms/NavLink';

interface Props {
  project: Partial<Project>;
}

const Card: React.FC<Props> = ({
  project: { id, slug, thumbnail, title, keywords, description },
}) => (
  <motion.article
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.2 } }}
    key={id}
    className="max-w-full group py-8 px-2 flex flex-col md:flex-row items-center md:space-x-8"
  >
    <div className="max-h-64 md:w-80 flex-shrink-0 overflow-hidden">
      <Link href={slug} scroll={false}>
        <a tabIndex={-1}>
          <Img
            data={thumbnail.responsiveImage}
            className="transform motion-reduce:transform-none group-hover:scale-105 duration-300 ease-in-out"
          />
        </a>
      </Link>
    </div>
    <div className="min-w-0 self-stretch flex flex-col justify-between">
      <div>
        <Header className="mb-2 text-2xl truncate">{title}</Header>
        <div className="flex-1 flex flex-col">
          {keywords && (
            <p className="uppercase tracking-wide text-sm opacity-50">{keywords.join(', ')}</p>
          )}
          {description && (
            <div className="my-4 md:max-h-24 md:line-clamp-3 overflow-hidden flex-1 prose">
              {parse(description)}
            </div>
          )}
        </div>
      </div>
      <div>
        <Link href={slug} scroll={false}>
          <a className="text-sm inline-block focus:outline-none focus-visible:ring-2 ring-blue-500 rounded">
            <NavLink>Lees meer</NavLink>
          </a>
        </Link>
      </div>
    </div>
  </motion.article>
);

export default Card;
