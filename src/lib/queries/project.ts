import { gql } from 'graphql-tag';

import { GLOBAL_FIELDS, RESPONSIVE_IMAGE_FIELDS } from './fragments';

export const PROJECT_PAGE_QUERY = gql`
  ${GLOBAL_FIELDS}
  ${RESPONSIVE_IMAGE_FIELDS}
  query ProjectPage($slug: String) {
    ...globalFields
    project(filter: { slug: { eq: $slug } }) {
      updatedAt: _updatedAt
      publishedAt: _publishedAt
      id
      slug
      content {
        value
        blocks {
          ... on ImageColRecord {
            id
            __typename
            images {
              responsiveImage(imgixParams: { w: 700 }) {
                ...responsiveImageFields
              }
            }
          }
          ... on ImageRecord {
            id
            __typename
            image {
              responsiveImage(imgixParams: { w: 700 }) {
                ...responsiveImageFields
              }
            }
          }
        }
      }
      description {
        value
      }
      title
      keywords
      seo {
        description
        title
        twitterCard
        image {
          url
        }
      }
      relatedProjects {
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
  }
`;

export const PROJECT_SLUGS_QUERY = gql`
  query ProjectSlugs {
    projects: allProjects {
      slug
    }
  }
`;
