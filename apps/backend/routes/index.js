const express = require("express");
const router = express.Router();


const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const sessionRoutes = require("./session.routes");
const courseRoutes = require("./course.routes");


router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/session", sessionRoutes);
router.use("/courses", courseRoutes);

module.exports = router;
