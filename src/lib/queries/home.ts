import { gql } from 'graphql-tag';

import { GLOBAL_FIELDS as GLOBAL_FIELDS } from './fragments';

export const HOME_PAGE_QUERY = gql`
  ${GLOBAL_FIELDS}
  query HomePage {
    ...globalFields
    projects: allProjects {
      id
      keywords
      slug
      title
      thumbnail {
        responsiveImage(imgixParams: { fit: crop, ar: "80:56" }) {
          ...responsiveImageFields
        }
      }
      description(markdown: true)
    }
  }
`;
