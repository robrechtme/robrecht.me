import { NextApiRequest, NextApiResponse } from 'next';

import mailer from '../../lib/mailer';

const { RECAPTCHA_SERVER_KEY } = process.env;

const verifyRecaptcha = async (token: string) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SERVER_KEY}&response=${token}`;
  const response = await fetch(url, {
    method: 'POST',
  });
  const data = await response.json();
  return Boolean(data.success);
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, message, recaptcha } = req.body;

  if (await verifyRecaptcha(recaptcha)) {
    await mailer({ senderMail: email, name, text: message });
    res.statusCode = 201;
  } else {
    res.statusCode = 403;
  }
  res.send('');
};

export default contact;
