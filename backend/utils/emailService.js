// backend/utils/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

module.exports = {
  sendConnectionEmail: (toEmail, fromName) => {
    const mailOptions = {
      from: 'rakhi@example.com',
      to: toEmail,
      subject: 'New Rakhi Connection Request!',
      text: `${fromName} wants to be your Rakhi sibling!`
    };

    transporter.sendMail(mailOptions);
  }
};