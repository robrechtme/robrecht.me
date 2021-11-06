import { Global } from '../types';
import { GLOBAL_PART } from './fragments';

export type ErrorPage = Global;

export const ERROR_PAGE = `
query ErrorPage {
  ${GLOBAL_PART}
}`;
