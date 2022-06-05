import Card from 'components/molecules/Card';
import { ProjectPageQuery } from 'lib/types';

type Props = Pick<ProjectPageQuery['project'], 'relatedProjects'>;

const RelatedProjects = ({ relatedProjects }: Props) => {
  if (!relatedProjects.length) {
    return null;
  }
  return (
    <>
      <hr className='my-8' />
      <section className='mb-16'>
        <h2 className='mb-1 text-2xl font-extrabold'>Meer projecten.</h2>
        {relatedProjects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </section>
    </>
  );
};

export default RelatedProjects;
