import {
  StructuredText as StructuredTextBase,
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';

import Img from 'components/atoms/Image';
import { ImageColRecord, ImageRecord } from 'lib/types';

const isImageRecord = (record: { __typename: string }): record is ImageRecord =>
  record.__typename === 'ImageRecord';
const isImageColRecord = (record: {
  __typename: string;
}): record is ImageColRecord => record.__typename === 'ImageColRecord';

const StructuredText = <
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  props: StructuredTextPropTypes<R1, R2>
) => (
  <StructuredTextBase
    renderBlock={({ record }) => {
      if (isImageRecord(record)) {
        return (
          <div className='not-prose'>
            <Img
              key={record.id}
              data={record.image.responsiveImage}
              className='w-full shadow-xl'
            />
          </div>
        );
      }
      if (isImageColRecord(record)) {
        return (
          <div
            key={record.id}
            className='not-prose my-4 flex flex-row space-x-4'
          >
            {record.images.map(image => (
              <div key={image.id} className='flex-1'>
                <Img data={image.responsiveImage} className='shadow-xl' />
              </div>
            ))}
          </div>
        );
      }
      return null;
    }}
    {...props}
  />
);

export default StructuredText;
