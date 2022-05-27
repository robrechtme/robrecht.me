import type { DocumentNode } from 'graphql';
import { getOperationAST } from 'graphql';

interface Options {
  variables?: unknown;
  preview?: boolean;
}

export async function query<T>(
  query: DocumentNode,
  { variables, preview = false }: Options = {}
) {
  console.log(
    `[fetchDato] ${getOperationAST(query)?.name?.value} ${
      variables ? JSON.stringify(variables) : ''
    }`
  );
  const res = await fetch(
    `${process.env.DATOCMS_ENDPOINT}${preview ? '/preview' : ''}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: query.loc!.source.body,
        variables,
      }),
    }
  );

  if (!res.ok) {
    console.error(`[fetchDato] error: ${res.statusText}`);
    throw new Error(`Failed to fetch API: ${res.statusText}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error('[fetchDato] error:', json.errors);
    throw new Error(`Failed to fetch API: ${JSON.stringify(json.errors)}`);
  }
  return json.data as T;
}
