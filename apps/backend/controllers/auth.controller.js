const authService = require("../services/auth.service");
const { sendResponse } = require("../utils/response.util");

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true, // Always true for cross-origin and production
  sameSite: "none", // Required for cross-origin cookies
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

/**
 * POST /api/auth/signup
 */
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Signup request received:", { name, email });
    const result = await authService.signup({ name, email, password });
    return sendResponse(res, 201, true, result.message, {
      userId: result.userId,
    });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Signup failed.");
  }
};

/**
 * POST /api/auth/verify-email
 */
const verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const result = await authService.verifyEmail({ email, otp });
    res.cookie("token", result.token, COOKIE_OPTIONS);
    return sendResponse(res, 200, true, result.message, {
      token: result.token,
    });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Verification failed.");
  }
};

/**
 * POST /api/auth/resend-otp
 */
const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await authService.resendOtp({ email });
    return sendResponse(res, 200, true, result.message);
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Failed to resend OTP.");
  }
};

/**
 * POST /api/auth/login
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });
    res.cookie("token", result.token, COOKIE_OPTIONS);
    return sendResponse(res, 200, true, "Login successful.", {
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Login failed.");
  }
};

/**
 * POST /api/auth/forgot-password
 */
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await authService.forgotPassword({ email });
    return sendResponse(res, 200, true, result.message);
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(
      res,
      status,
      false,
      error.message || "Failed to process forgot password."
    );
  }
};

/**
 * POST /api/auth/reset-password
 */
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const result = await authService.resetPassword({ email, otp, newPassword });
    return sendResponse(res, 200, true, result.message);
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(
      res,
      status,
      false,
      error.message || "Failed to reset password."
    );
  }
};

/**
 * POST /api/auth/logout
 */
const logout = async (_req, res) => {
  res.clearCookie("token", { path: "/" });
  return sendResponse(res, 200, true, "Logged out successfully.");
};

module.exports = {
  signup,
  verifyEmail,
  resendOtp,
  login,
  forgotPassword,
  resetPassword,
  logout,
};
