import { Global, Project } from '../types';

import { GLOBAL_PART, IMAGE_PART } from './fragments';

export type HomePage = Global & {
  projects: Array<
    Pick<Project, 'id' | 'keywords' | 'slug' | 'title' | 'thumbnail' | 'description'>
  >;
};

export const HOME_PAGE = `
query HomePage {
  ${GLOBAL_PART}
  projects: allProjects(orderBy: _createdAt_ASC) {
    id
    keywords
    slug
    title
    thumbnail {
      responsiveImage(
        imgixParams: { fit: crop, ar: "80:56" }
      ) {
        ${IMAGE_PART}
      }
    }
    description(markdown: true)
  }
}`;
