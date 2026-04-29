const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
const auth = require("../middlewares/auth.middleware");
const { authorizeRoles } = require("../middlewares/role.middleware");

router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.post("/", auth, authorizeRoles("admin"), blogController.createBlog);
router.put("/:id", auth, authorizeRoles("admin"), blogController.updateBlog);
router.delete("/:id", auth, authorizeRoles("admin"), blogController.deleteBlog);

module.exports = router;