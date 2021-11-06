import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { HomePage } from '../../lib/queries/homePage';
import Card from '../molecules/Card';
import Header from '../atoms/H2';
import NavLink from '../atoms/NavLink';

interface Props {
  projects: HomePage['projects'];
}

const Portfolio: React.FC<Props> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('Alle');
  return (
    <main className="mb-20 bg-gray-50 text-gray-900 rounded-sm shadow-2xl md:mx-8 lg:mx-24 py-12 px-4 sm:px-8 md:px-12 relative">
      <Header className="mb-4 text-3xl">Portfolio</Header>
      <div className="flex flex-col items-start mb-8">
        {['Alle', 'Web', 'Logo'].map((name) => (
          <button
            type="button"
            role="radio"
            aria-checked={activeFilter === name}
            key={name}
            onClick={() => setActiveFilter(name)}
            className="mb-2 focus-custom"
          >
            <NavLink active={activeFilter === name}>{name}</NavLink>
          </button>
        ))}
      </div>
      <motion.div className="flex flex-col divide-y divide-gray-300 border-t border-gray-300">
        <AnimatePresence>
          {projects
            .filter(({ keywords }) => activeFilter === 'Alle' || keywords.includes(activeFilter))
            .map((project) => (
              <Card key={project.id} project={project} />
            ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
};

export default Portfolio;
