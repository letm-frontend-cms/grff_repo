const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const courseController = require("../controllers/course.controller");
const auth = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate");
const {
  updateProfileValidation,
  changePasswordValidation,
} = require("../middlewares/validators");

// All user routes require authentication
router.use(auth);

// GET /api/user/profile
router.get("/profile", userController.getProfile);

// PUT /api/user/profile
router.put("/profile", updateProfileValidation, validate, userController.updateProfile);

// PUT /api/user/change-password
router.put("/change-password", changePasswordValidation, validate, userController.changePassword);

// GET /api/user/courses
router.get("/courses", courseController.getUserCourses);

module.exports = router;
