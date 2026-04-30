const express = require("express");
const router = express.Router();


const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const sessionRoutes = require("./session.routes");
const courseRoutes = require("./course.routes");
const blogRoutes = require("./blog.routes");


router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/session", sessionRoutes);
router.use("/courses", courseRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
