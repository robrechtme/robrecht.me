import { Project } from '../types';

export type ProjectSlugs = {
  projects: Array<Pick<Project, 'slug'>>;
};

export const PROJECT_SLUGS = `
  query ProjectSlugs {
    projects: allProjects {
      slug
    }
  }
`;
