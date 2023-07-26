const nodeMailer = require('nodemailer')
const mailConfig = require('../../config/mail-config')


module.exports.sendMail = (to, subject, htmlContent) => {
    const transport = nodeMailer.createTransport({
        host: mailConfig.HOST,
        port: mailConfig.HOST,
        secure: false,
        auth:{
            user: mailConfig.USERNAME,
            pass: mailConfig.PASSWORD
        }
    })

    const option = {
        from: mailConfig.FROM_ADDRESS,
        to:to,
        subject:subject,
        html: "Mã code xác nhận là" + htmlContent

    }
   
    return transport.sendMail(option);
}