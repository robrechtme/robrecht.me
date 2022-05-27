import { gql } from 'graphql-tag';

import { GLOBAL_FIELDS } from './fragments';

export const PROJECT_PAGE_QUERY = gql`
  ${GLOBAL_FIELDS}
  query ProjectPage($slug: String) {
    ...globalFields
    project(filter: { slug: { eq: $slug } }) {
      updatedAt: _updatedAt
      publishedAt: _publishedAt
      id
      slug
      content {
        ... on ImageRecord {
          __typename
          id
          image {
            responsiveImage {
              ...responsiveImageFields
            }
          }
        }
        ... on ImageColRecord {
          __typename
          id
          images {
            id
            responsiveImage {
              ...responsiveImageFields
            }
          }
        }
        ... on TextRecord {
          __typename
          id
          text(markdown: true)
        }
      }
      description(markdown: true)
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
