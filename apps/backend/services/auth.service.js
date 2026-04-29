const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { generateOtp, getOtpExpiry } = require("../utils/otp.util");
const { sendOtpEmail } = require("./email.service");

/**
 * Generate JWT token
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

/**
 * Signup – create user and send verification OTP
 */
const signup = async ({ name, email, password, username, location, bio, website, skills }) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw { status: 409, message: "User already exists with this email." };
  }

  const otp = generateOtp();
  const otpExpiry = getOtpExpiry();

  const user = await User.create({
    name,
    email,
    username,
    password,
    location,
    bio,
    website,
    skills,
    otp,
    otpExpiry,
    isVerified: false,
  });

  // Send verification OTP
  await sendOtpEmail(email, otp, "verification");

  return {
    userId: user._id,
    message: "Signup successful. OTP sent to your email for verification.",
  };
};

/**
 * Verify email OTP
 */
const verifyEmail = async ({ email, otp }) => {
  const user = await User.findOne({ email }).select("+otp +otpExpiry");
  if (!user) {
    throw { status: 404, message: "User not found." };
  }

  if (user.isVerified) {
    throw { status: 400, message: "Email is already verified." };
  }

  if (!user.otp || user.otp !== otp) {
    throw { status: 400, message: "Invalid OTP." };
  }

  if (user.otpExpiry < new Date()) {
    throw { status: 400, message: "OTP has expired. Please request a new one." };
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  const token = generateToken(user._id);

  return { token, message: "Email verified successfully." };
};

/**
 * Resend verification OTP
 */
const resendOtp = async ({ email }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw { status: 404, message: "User not found." };
  }

  if (user.isVerified) {
    throw { status: 400, message: "Email is already verified." };
  }

  const otp = generateOtp();
  const otpExpiry = getOtpExpiry();

  user.otp = otp;
  user.otpExpiry = otpExpiry;
  await user.save();

  await sendOtpEmail(email, otp, "verification");

  return { message: "OTP resent successfully." };
};

/**
 * Login
 */
const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw { status: 401, message: "Invalid email or password." };
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw { status: 401, message: "Invalid email or password." };
  }

  if (!user.isVerified) {
    // Send a fresh OTP so user can verify
    const otp = generateOtp();
    const otpExpiry = getOtpExpiry();
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();
    await sendOtpEmail(email, otp, "verification");

    throw {
      status: 403,
      message: "Email not verified. A new OTP has been sent to your email.",
    };
  }

  const token = generateToken(user._id);

  // Remove password from response
  const userObj = user.toObject();
  delete userObj.password;

  return { token, user: userObj };
};

/**
 * Forgot Password – send reset OTP
 */
const forgotPassword = async ({ email }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw { status: 404, message: "No account found with this email." };
  }

  const otp = generateOtp();
  const otpExpiry = getOtpExpiry();

  user.resetPasswordOtp = otp;
  user.resetPasswordOtpExpiry = otpExpiry;
  await user.save();

  await sendOtpEmail(email, otp, "reset-password");

  return { message: "Password reset OTP sent to your email." };
};

/**
 * Reset Password – verify OTP and set new password
 */
const resetPassword = async ({ email, otp, newPassword }) => {
  const user = await User.findOne({ email }).select(
    "+resetPasswordOtp +resetPasswordOtpExpiry"
  );
  if (!user) {
    throw { status: 404, message: "User not found." };
  }

  if (!user.resetPasswordOtp || user.resetPasswordOtp !== otp) {
    throw { status: 400, message: "Invalid OTP." };
  }

  if (user.resetPasswordOtpExpiry < new Date()) {
    throw { status: 400, message: "OTP has expired. Please request a new one." };
  }

  user.password = newPassword;
  user.resetPasswordOtp = undefined;
  user.resetPasswordOtpExpiry = undefined;
  await user.save();

  return { message: "Password reset successfully. You can now login." };
};

module.exports = {
  signup,
  verifyEmail,
  resendOtp,
  login,
  forgotPassword,
  resetPassword,
};
