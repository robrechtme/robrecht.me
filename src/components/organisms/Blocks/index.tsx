import parse from 'html-react-parser';
import React from 'react';

import Img from '../../atoms/Image';

type Props = {
  content: any[];
};
const Content: React.FC<Props> = ({ content }) => (
  <>
    {content.map((block) => {
      switch (block._modelApiKey) {
        case 'image':
          return (
            <Img
              key={block.id}
              data={block.image.responsiveImage}
              className="w-full my-4 shadow-xl"
            />
          );
        case 'image_col':
          return (
            <div key={block.id} className="flex flex-row my-4 space-x-4">
              {block.images.map((image) => (
                <div key={image.id} className="flex-1">
                  <Img data={image.responsiveImage} className=" shadow-xl" />
                </div>
              ))}
            </div>
          );
        case 'text':
          return (
            <div key={block.id} className="my-4 prose max-w-prose">
              {parse(block.text)}
            </div>
          );
        default:
          // eslint-disable-next-line no-console
          console.warn(`Unknown block type: ${block._modelApiKey}`);
          return null;
      }
    })}
  </>
);

export default Content;
