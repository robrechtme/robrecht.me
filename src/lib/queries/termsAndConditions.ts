import { gql } from 'graphql-tag';

import { GLOBAL_FIELDS } from './fragments';

export const TERMS_AND_CONDITIONS_QUERY = gql`
  ${GLOBAL_FIELDS}
  query TermsAndConditions {
    ...globalFields
    page: termsConditionsPage {
      content {
        value
      }
      _updatedAt
    }
  }
`;
