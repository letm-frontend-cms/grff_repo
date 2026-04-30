const blogService = require("../services/blog.service");
const { sendResponse } = require("../utils/response.util");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    return sendResponse(res, 200, true, "Blogs fetched successfully.", { blogs });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Failed to fetch blogs.");
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    return sendResponse(res, 200, true, "Blog fetched successfully.", { blog });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Failed to fetch blog.");
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, slug, content, tag } = req.body;
    const blog = await blogService.createBlog({
      title,
      slug,
      content,
      tag,
      authorId: req.user._id,
      authorName: req.user.name || req.user.email,
    });
    return sendResponse(res, 201, true, "Blog created successfully.", { blog });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Failed to create blog.");
  }
};

const updateBlog = async (req, res) => {
  try {
    const updates = {
      title: req.body.title,
      slug: req.body.slug,
      content: req.body.content,
      tag: req.body.tag,
    };
    const blog = await blogService.updateBlog(req.params.id, updates);
    return sendResponse(res, 200, true, "Blog updated successfully.", { blog });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Failed to update blog.");
  }
};

const deleteBlog = async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id);
    return sendResponse(res, 200, true, "Blog deleted successfully.");
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Failed to delete blog.");
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};