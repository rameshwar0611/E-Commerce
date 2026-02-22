const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendVerificationEmail(to, subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    console.log("Nodemailer start: Email bhej rahe hain ->", to);
    const info = await transporter.sendMail(mailOptions);
    console.log("Success! Email chala gaya. Message ID:", info.messageId);
  } catch (error) {
    console.error("🚨 Nodemailer Error Aa Gaya:", error);
    throw error;
  }
}

module.exports = { sendVerificationEmail };
