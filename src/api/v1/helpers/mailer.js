const nodeMailer = require('nodemailer')
const mailConfig = require('../../config/mail-config')

const sendMail = (transport) => (to, subject, htmlContent) => {
    const option = {
        from: mailConfig.FROM_ADDRESS,
        to: to,
        subject: subject,
        html: htmlContent
    }

    return transport.sendMail(option);
}

const createTransport = () => {
    return nodeMailer.createTransport({
        host: mailConfig.HOST,
        port: mailConfig.PORT,
        secure: false,
        auth: {
            user: mailConfig.USERNAME,
            pass: mailConfig.PASSWORD
        }
    });
}

const sendCodeForRegister = (to, verificationCode) => {
    const content = (code) => {
        const rs = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="https://www.youtube.com/watch?v=FJLAnvSCieA" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Math Solver VN</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing Math Solver VN. Use the following OTP to complete your Sign Up procedures. OTP is valid for 60 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${code}</h2>
          <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Your Brand Inc</p>
            <p>1600 Amphitheatre Parkway</p>
            <p>California</p>
          </div>
        </div>  
      </div>`;
        return rs;
    }
    const transport = createTransport();
    const mailSender = sendMail(transport);
    mailSender(to,` ${verificationCode} là mã xác thực tài khoản của bạn`, content(verificationCode));
}
const sendCodeForResetPassword = (to, verificationCode) => {
    const content = (code) => {
        const rs = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="https://www.youtube.com/watch?v=FJLAnvSCieA" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Math Solver VN</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing Math Solver VN. Use the following OTP to complete your Reset your password procedures. OTP is valid for 60 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${code}</h2>
          <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Your Brand Inc</p>
            <p>1600 Amphitheatre Parkway</p>
            <p>California</p>
          </div>
        </div>  
      </div>`;
        return rs;
    }
    const transport = createTransport();
    const mailSender = sendMail(transport);
    mailSender(to,` ${verificationCode} là mã xác thực tài khoản của bạn`, content(verificationCode));
}
module.exports = {
    sendCodeForRegister,
    sendCodeForResetPassword

}
