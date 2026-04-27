const crypto = require("crypto");

/**
 * Generate a numeric OTP of given length
 * @param {number} length - OTP length (default 6)
 * @returns {string} OTP string
 */
const generateOtp = (length = 6) => {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return crypto.randomInt(min, max + 1).toString();
};

/**
 * Get OTP expiry date
 * @returns {Date}
 */
const getOtpExpiry = () => {
  const minutes = Number(process.env.OTP_EXPIRY_MINUTES) || 10;
  return new Date(Date.now() + minutes * 60 * 1000);
};

module.exports = { generateOtp, getOtpExpiry };
