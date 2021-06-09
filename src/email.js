const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'allanprakoso7@gmail.com',
    pass: 'Z1O2F3c4'
  }
}));

const mailOptions = {
  from: 'EVENT OLINE',
  to: 'allan.prakoso@students.amikom.ac.id',
  subject: 'Sending Email using Node.js[nodemailer]',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});  