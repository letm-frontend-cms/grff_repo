const express = require("express");
const router = express.Router();


const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const sessionRoutes = require("./session.routes");


router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/session", sessionRoutes);

module.exports = router;
