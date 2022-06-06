import { gql } from 'graphql-tag';

import { GLOBAL_FIELDS, RESPONSIVE_IMAGE_FIELDS } from './fragments';

export const HOME_PAGE_QUERY = gql`
  ${GLOBAL_FIELDS}
  ${RESPONSIVE_IMAGE_FIELDS}
  query HomePage {
    ...globalFields
    homePage {
      about {
        value
      }
      hero {
        responsiveImage(imgixParams: { ar: "1:1", fit: crop }) {
          ...responsiveImageFields
        }
      }
    }
    projects: allProjects {
      id
      keywords
      slug
      title
      thumbnail {
        responsiveImage(imgixParams: { fit: crop, ar: "80:56", w: 600 }) {
          ...responsiveImageFields
        }
      }
      description {
        value
      }
    }
  }
`;
