import { Global } from '../types';
import { GLOBAL_PART } from './fragments';

export type TermsAndConditions = Global & {
  page: {
    content: string;
    _updatedAt: string;
  };
};

export const TERMS_AND_CONDITIONS = `
    query TermsAndConditions {
      ${GLOBAL_PART}
      page: termsConditionsPage {
        content(markdown: true)
        _updatedAt
      }
    }`;
