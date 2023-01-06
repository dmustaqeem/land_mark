const nodemailer = require("nodemailer");

const sendEmail = async (receiverEmail, verify_token) => {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dawar@upcomingmedia.com",
        pass: "dawarumpassword",
      },
    });

    const mail_config = {
      from: "dawar@upcomingmedia.com",
      to: receiverEmail,
      subject: "Email verification",
      text:
        verify_token.length >= 6
          ? "Click the following link to very your email address"
          : `Your verification code is ${verify_token}`,
      html:
        verify_token.length >= 6
          ? `<a>http://localhost:4242/auth/api/verify?email=${receiverEmail}&verify_token=${verify_token}</a>`
          : "",
    };

    transporter.sendMail(mail_config, (error, info) => {
      if (error) {
        console.log("error", error);
        return reject({ message: "error has occured" });
      }
      return resolve({ message: "Email sent!" });
    });
  });
};

module.exports = { sendEmail };
