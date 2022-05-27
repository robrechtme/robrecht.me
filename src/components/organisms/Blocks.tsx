import parse from 'html-react-parser';

import Img from '../atoms/Image';

import { ProjectPageQuery } from 'lib/types';

interface Props {
  content: ProjectPageQuery['project']['content'];
}

const Content = ({ content }: Props) => (
  <>
    {content.map(block => {
      switch (block.__typename) {
        case 'ImageRecord':
          return (
            <Img
              key={block.id}
              data={block.image.responsiveImage}
              className='w-full shadow-xl'
            />
          );
        case 'ImageColRecord':
          return (
            <div key={block.id} className='flex flex-row my-4 space-x-4'>
              {block.images.map(image => (
                <div key={image.id} className='flex-1'>
                  <Img data={image.responsiveImage} className=' shadow-xl' />
                </div>
              ))}
            </div>
          );
        case 'TextRecord':
          return (
            <div key={block.id} className='my-4 prose max-w-prose'>
              {parse(block.text)}
            </div>
          );
        default:
          return null;
      }
    })}
  </>
);

export default Content;
