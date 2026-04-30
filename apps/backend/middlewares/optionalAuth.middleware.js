const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const optionalAuth = async (req, _res, next) => {
  req.user = null;

  try {
    // Prefer cookie (matches auth.middleware), fall back to Authorization header.
    let token = req.cookies?.token;
    if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (user) req.user = user;
    }
  } catch (_err) {
    // Invalid token — treat as unauthenticated
  }

  next();
};

module.exports = optionalAuth;
