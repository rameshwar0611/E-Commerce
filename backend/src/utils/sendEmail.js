// const nodemailer = require("nodemailer");
// require("dotenv").config();
// async function sendVerificationEmail(to, subject, text) {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   };

//   await transporter.sendMail(mailOptions);
// }

// module.exports = { sendVerificationEmail };

// const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendVerificationEmail(to, subject, text) {
  try {
    // 🛑 RENDER FREE TIER BLOCKS SMTP
    // We will bypass it by printing the email directly to the console!
    console.log("==========================================");
    console.log(`📧 MOCK EMAIL SENT TO: ${to}`);
    console.log(`📝 SUBJECT: ${subject}`);
    console.log(`💬 MESSAGE: \n${text}`);
    console.log("==========================================");

    // Return true so the backend knows the "email" was successfully processed
    return true;
  } catch (error) {
    console.error("🚨 Mock Email Error:", error);
    throw error;
  }
}

module.exports = { sendVerificationEmail };
