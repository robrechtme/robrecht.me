import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { createHTML } from './template';

const FOOTER = 'Robrecht Meersman, Vosselarestraat 61, 9850 Landegem<br>BTW BE 0761 397 342';

const conf: SMTPTransport.Options = {
  host: process.env.SMTP_SERVER,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
};

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport(conf);

const mailer = ({ senderMail, name, text }) => {
  const from = `Robrecht Meersman <${process.env.SMTP_RECIPIENT}>`;
  const content = `Hi ${name}<br><br>Bedankt voor uw bericht! Ik probeer u zo spoedig mogelijk te antwoorden.<br><br>Bericht:<br><span style="font-style: italic">${text.replace(
    /\\n/g,
    '<br/>',
  )}</span><br><br>Tot binnenkort<br><br>Robrecht Meersman`;
  const message = {
    from,
    to: senderMail,
    bcc: process.env.SMTP_RECIPIENT,
    subject: `Bevestiging van uw bericht op robrecht.me`,
    text: content,
    html: createHTML(content, FOOTER),
    replyTo: from,
  } as Mail.Options;
  console.log(conf);
  console.log('📫 Sending mail...');
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log('📫 An error occurred!');
        console.error(error);
        reject(error);
      } else {
        console.log('📫 Sent!');
        resolve(info);
      }
    });
  });
};

export default mailer;
