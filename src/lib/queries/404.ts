import { gql } from 'graphql-tag';

import { GLOBAL_FIELDS } from './fragments';

export const ERROR_PAGE_QUERY = gql`
  ${GLOBAL_FIELDS}
  query ErrorPage {
    ...globalFields
  }
`;
