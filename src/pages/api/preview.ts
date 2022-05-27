import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line consistent-return
export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData(
    {},
    {
      maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
    }
  );

  // Redirect to the path from the fetched post
  res.writeHead(307, { Location: path.join('/', req.query.slug as string) });
  res.end();
}
