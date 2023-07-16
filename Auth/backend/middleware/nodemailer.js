const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
  auth: {
    user: 'tushargupta2k3@gmail.com',
    pass: 'ovbxigocgvzhijsy'
  }
});

async function mail(email,otp) {
  await transporter.sendMail({
    from: 'tushargupta2k3@gmail.com', // sender address
    to: email, // list of receivers
    subject: `OTP is ${otp}`, // Subject line
    text:`OTP is ${otp}`, // plain text body
  });
}

module.exports = mail;