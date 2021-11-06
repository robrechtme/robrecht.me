import nodemailer from 'nodemailer';

const { SMTP_USERNAME, SMTP_PASSWORD, SMTP_RECIPIENT } = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

const mailer = ({ senderMail, name, text }) => {
  const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from,
    to: SMTP_RECIPIENT,
    subject: `New message from ${name || senderMail}`,
    text: `
from: ${from}

${text}
`,
    replyTo: from,
  };
  console.log('📬 Sending mail...');
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
  });
};

export default mailer;
