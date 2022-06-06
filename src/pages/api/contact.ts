import { NextApiRequest, NextApiResponse } from 'next';

import mailer from '../../lib/mailer';

const verifyRecaptcha = async (token: string) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${token}`;
  const response = await fetch(url, {
    method: 'POST',
  });
  const data = await response.json();
  return Boolean(data.success);
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  try {
    const { email, name, message, recaptcha } = req.body;

    if (!email || !name || !message || !recaptcha) {
      return res.status(400).end();
    }

    if (await verifyRecaptcha(recaptcha)) {
      await mailer({ senderMail: email, name, text: message });
      return res.status(201).end();
    } else {
      return res.status(403).end();
    }
  } catch {
    return res.status(500).end();
  }
};

export default contact;
