const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: function(data){
        var toAddress = process.env.TO_ADDRESS;
        var fromAddress = process.env.FROM_ADDRESS;
        var smtpHost = process.env.SMTP_HOST;
        var smtpPort = process.env.SMTP_PORT;
        const mailOptions = {
            from: fromAddress,
            to: toAddress,
            subject: 'Alert mail',
            text: data,
        };
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: false,
        });

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        })
    }
};