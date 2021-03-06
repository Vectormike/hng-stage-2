const nodemailer = require('nodemailer');

function sendMail(from, name, subject, message, cb) {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '15103140ashish@gmail.com',
    to: 'victorjonah199@gmail.com',
    subject: 'New Contact',
    text: 'Someone messaged you!',
  };

  const replyOptions = {
    from: `victorjonah199@gmail.com`,
    to: from,
    subject: `Yo!`,
    text: 'Thank you for mailing me!',
  };

  transport.sendMail(mailOptions, (err, response) => {
    console.log('Hi');
    if (err) {
      console.log(err, 'HI');
      cb(err);
      return;
    }
    transport.sendMail(replyOptions, (replyErr, replyRes) => {
      if (replyErr) {
        console.log(err, 'HI');

        cb(replyErr);
        return;
      }
      cb(false, replyRes);
    });
  });
}

module.exports = sendMail;
