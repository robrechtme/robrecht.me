import { useState } from 'react';

import Header from '../atoms/H2';
import NavLink from '../atoms/NavLink';
import Card from '../molecules/Card';

import { ProjectRecord } from 'lib/types';

interface Props {
  projects: ProjectRecord[];
}

const Portfolio = ({ projects }: Props) => {
  const [activeFilter, setActiveFilter] = useState('Alle');
  return (
    <main className='relative mb-20 rounded-sm bg-gray-50 py-12 px-4 text-gray-900 shadow-2xl sm:px-8 md:mx-8 md:px-12 lg:mx-24'>
      <Header className='mb-4 text-3xl'>Portfolio</Header>
      <div className='mb-8 flex flex-col items-start'>
        {['Alle', 'Web', 'Logo'].map(name => (
          <button
            type='button'
            role='radio'
            aria-checked={activeFilter === name}
            key={name}
            onClick={() => setActiveFilter(name)}
            className='focus-custom mb-2'
          >
            <NavLink active={activeFilter === name}>{name}</NavLink>
          </button>
        ))}
      </div>
      <div className='flex flex-col divide-y divide-gray-300 border-t border-gray-300'>
        {projects
          .filter(
            ({ keywords }) =>
              activeFilter === 'Alle' || keywords.includes(activeFilter)
          )
          .map(project => (
            <Card key={project.id} project={project} />
          ))}
      </div>
    </main>
  );
};

export default Portfolio;
