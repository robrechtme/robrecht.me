import { useRouter } from 'next/router';

import NavLink from '../atoms/NavLink';
import Card from '../molecules/Card';

import Text from 'components/atoms/Text';
import { ProjectRecord } from 'lib/types';
import { getFirst } from 'util/string';

const FILTERS = ['alle', 'web', 'logo'] as const;
type Filter = typeof FILTERS[number];

interface Props {
  projects: ProjectRecord[];
}

const Portfolio = ({ projects }: Props) => {
  const { query, replace } = useRouter();
  const activeFilter = FILTERS.includes(getFirst(query.cat) as Filter)
    ? (getFirst(query.cat) as Filter)
    : 'alle';

  const setActiveFilter = (filter: Filter) =>
    replace(
      filter === 'alle' ? '' : `?cat=${filter.toLowerCase()}`,
      undefined,
      {
        shallow: true,
      }
    );

  return (
    <main className='relative mb-20 rounded-sm bg-gray-50 py-12 px-4 text-gray-900 shadow-2xl sm:px-8 md:mx-8 md:px-12 lg:mx-24'>
      <Text as='h2' variant='heading2' className='mb-4 text-3xl'>
        Portfolio
      </Text>
      <div className='mb-8 flex flex-col items-start'>
        {FILTERS.map(name => (
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
              activeFilter === 'alle' ||
              (keywords as string[])
                .map(k => k.toLowerCase())
                .includes(activeFilter)
          )
          .map(project => (
            <Card key={project.id} project={project} />
          ))}
      </div>
    </main>
  );
};

export default Portfolio;
