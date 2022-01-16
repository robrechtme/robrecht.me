import { Global, Project } from "../types";

import { GLOBAL_PART, IMAGE_PART } from "./fragments";

export type ProjectPage = Global & {
  project: Project;
};

export const PROJECT = `
query Project($slug: String) {
  ${GLOBAL_PART}
  project(filter: {slug: {eq: $slug}}) {
    updatedAt: _updatedAt
    publishedAt: _publishedAt
    id
    slug
    content {
      ... on ImageRecord {
        _modelApiKey
        id
        image {
          responsiveImage {
            ${IMAGE_PART}
          }
        }
      }
      ... on ImageColRecord {
        _modelApiKey
        id
        images {
          id
          responsiveImage {
            ${IMAGE_PART}
          }
        }
      }
      ... on TextRecord {
        _modelApiKey
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
