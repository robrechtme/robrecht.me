/** @see https://gist.github.com/getify/3667624 */
export function escapeDoubleQuotes(str: string) {
  return str?.replace(/\\([\s\S])|(")/g, '\\$1$2');
}
