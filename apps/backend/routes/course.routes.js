const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const auth = require("../middlewares/auth.middleware");
const optionalAuth = require("../middlewares/optionalAuth.middleware");

router.get("/", optionalAuth, courseController.getCourses);
router.post("/:id/start", auth, courseController.startCourse);
router.post("/:id/complete", auth, courseController.completeCourse);
router.post("/:id/test", auth, courseController.submitTestResult);

module.exports = router;
