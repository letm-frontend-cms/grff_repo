const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**
 * Send an email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} html - HTML body
 */
const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: `"LETM-GRFF" <${process.env.SMTP_EMAIL}>`,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

/**
 * Send OTP verification email
 */
const sendOtpEmail = async (email, otp, purpose = "verification") => {
  const subjectMap = {
    verification: "Email Verification OTP",
    "reset-password": "Password Reset OTP",
  };

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #333;">LETM-GRFF</h2>
      <p>Your OTP for <strong>${purpose === "reset-password" ? "password reset" : "email verification"}</strong> is:</p>
      <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; text-align: center; padding: 16px; background: #f5f5f5; border-radius: 4px; margin: 16px 0;">
        ${otp}
      </div>
      <p style="color: #777; font-size: 13px;">This OTP is valid for <strong>${process.env.OTP_EXPIRY_MINUTES || 10} minutes</strong>. Do not share it with anyone.</p>
    </div>
  `;

  await sendEmail(email, subjectMap[purpose] || "OTP", html);
};

module.exports = { sendEmail, sendOtpEmail };
