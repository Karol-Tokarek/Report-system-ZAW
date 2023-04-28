const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karolexigierus@gmail.com',
    pass: 'hlsbcraqwkkysjym',
  },
  secure: true,
});

const sendEmail = (emailNadawcy, emailOdbiorcy, tresc) => {
  const mailOptions = {
    from: emailNadawcy,
    to: emailOdbiorcy,
    subject: 'Message from React ApPPPP',
    text: tresc,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = sendEmail;