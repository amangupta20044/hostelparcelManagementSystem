const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS
  }
});

exports.sendMail = async (to, subject, message) => {
  await transporter.sendMail({
    from: `"Parcel Notification" <${process.env.SMTP_EMAIL}>`,
    to,
    subject,
    html: message
  });

  console.log("📧 Email sent to:", to);
};
