const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'thoufeekthoufeek599@gmail.com',
  subject: 'Heyyy from Nodemailer',
  text: 'test email using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Email sending error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
