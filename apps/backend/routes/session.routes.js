const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const { sendResponse } = require("../utils/response.util");

// GET /api/session
router.get("/", auth, (req, res) => {
  // Remove sensitive fields if needed
  const user = req.user.toObject ? req.user.toObject() : req.user;
  delete user.password;
  delete user.otp;
  delete user.otpExpiry;
  delete user.resetPasswordOtp;
  delete user.resetPasswordOtpExpiry;
  sendResponse(res, 200, true, "Session valid.", { user });
});

module.exports = router;
