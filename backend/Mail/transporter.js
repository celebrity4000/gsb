const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword',
    },
});


module.exports = { transporter };