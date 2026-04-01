const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate");
const {
  signupValidation,
  verifyEmailValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  resendOtpValidation,
} = require("../middlewares/validators");

// POST /api/auth/signup
router.post("/signup", signupValidation, validate, authController.signup);

// POST /api/auth/verify-email
router.post("/verify-email", verifyEmailValidation, validate, authController.verifyEmail);

// POST /api/auth/resend-otp
router.post("/resend-otp", resendOtpValidation, validate, authController.resendOtp);

// POST /api/auth/login
router.post("/login", loginValidation, validate, authController.login);

// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPasswordValidation, validate, authController.forgotPassword);

// POST /api/auth/reset-password
router.post("/reset-password", resetPasswordValidation, validate, authController.resetPassword);

module.exports = router;
