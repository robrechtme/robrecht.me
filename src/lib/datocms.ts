type Params = {
  variables?: unknown;
  preview?: boolean;
  query: string;
};

const apolloQuery = async <T>({ query, variables, preview }: Params) => {
  const uri = preview ? 'https://graphql.datocms.com/preview' : 'https://graphql.datocms.com';
  const res = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const result = await res.json();
  return result.data as T;
};

export default apolloQuery;
