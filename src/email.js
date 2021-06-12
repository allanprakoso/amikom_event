const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');


const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'amivents@gmail.com',
    pass: 'Amikom123'
  }
}));

var readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
    if (err) {
      throw err;
      callback(err);
    }
    else {
      callback(null, html);
    }
  });
};



async function sendEmail(nama, email, urlImage, judul, tanggal, urlEvent, googleCal) {

  readHTMLFile(__dirname + '/public/apidoc.html', function (err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      nama: nama.split(" ")[0],
      urlImage: urlImage,
      judul: judul,
      tanggal: tanggal,
      urlEvent: urlEvent,
      cal: googleCal
    };

    var htmlToSend = template(replacements);
    const mailOptions = {
      from: 'Amivents',
      to: email,
      subject: 'Ticket Amivents',
      html: htmlToSend
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
}

module.exports = sendEmail;