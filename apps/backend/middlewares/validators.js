const { body } = require("express-validator");

const signupValidation = [
  body("name").trim().notEmpty().withMessage("Name is required."),
  body("username").trim().notEmpty().withMessage("Username is required."),
  body("email").isEmail().withMessage("Valid email is required.").normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters."),
];

const verifyEmailValidation = [
  body("email").isEmail().withMessage("Valid email is required.").normalizeEmail(),
  body("otp")
    .trim()
    .notEmpty()
    .withMessage("OTP is required.")
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be 6 digits."),
];

const loginValidation = [
  body("email").isEmail().withMessage("Valid email is required.").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required."),
];

const forgotPasswordValidation = [
  body("email").isEmail().withMessage("Valid email is required.").normalizeEmail(),
];

const resetPasswordValidation = [
  body("email").isEmail().withMessage("Valid email is required.").normalizeEmail(),
  body("otp")
    .trim()
    .notEmpty()
    .withMessage("OTP is required.")
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be 6 digits."),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("New password must be at least 6 characters."),
];

const resendOtpValidation = [
  body("email").isEmail().withMessage("Valid email is required.").normalizeEmail(),
];

const updateProfileValidation = [
  body("name").optional().trim().notEmpty().withMessage("Name cannot be empty."),
  body("mobile").optional().trim(),
  body("gender")
    .optional()
    .isIn(["male", "female", "other", ""])
    .withMessage("Invalid gender value."),
  body("address").optional().trim(),
  body("city").optional().trim(),
  body("state").optional().trim(),
  body("pincode").optional().trim(),
  body("country").optional().trim(),
];

const changePasswordValidation = [
  body("currentPassword").notEmpty().withMessage("Current password is required."),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("New password must be at least 6 characters."),
];

module.exports = {
  signupValidation,
  verifyEmailValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  resendOtpValidation,
  updateProfileValidation,
  changePasswordValidation,
};
