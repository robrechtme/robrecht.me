import { NextApiRequest, NextApiResponse } from 'next';

import mailer from '../../lib/mailer';

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  try {
    const { email, name, message } = req.body;
    if (!email || !name || !message) {
      return res.status(400).end();
    }
    await mailer({ senderMail: email, name, text: message });
    return res.status(201).end();
  } catch {
    return res.status(500).end();
  }
};

export default contact;
