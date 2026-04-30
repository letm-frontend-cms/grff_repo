const Blog = require("../models/blog.model");

const getAllBlogs = async () => {
  return Blog.find().sort({ createdAt: -1 });
};

const getBlogById = async (blogId) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw { status: 404, message: "Blog not found." };
  }
  return blog;
};

const createBlog = async ({ title, slug, content, tag, authorId, authorName }) => {
  const existing = await Blog.findOne({ slug });
  if (existing) {
    throw { status: 409, message: "Blog with this slug already exists." };
  }

  return Blog.create({
    title,
    slug,
    content,
    tag,
    authorId,
    authorName,
  });
};

const updateBlog = async (blogId, updates) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw { status: 404, message: "Blog not found." };
  }

  if (updates.slug && updates.slug !== blog.slug) {
    const slugExists = await Blog.findOne({ slug: updates.slug });
    if (slugExists) {
      throw { status: 409, message: "Another blog already uses this slug." };
    }
  }

  Object.assign(blog, updates);
  await blog.save();
  return blog;
};

const deleteBlog = async (blogId) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw { status: 404, message: "Blog not found." };
  }
  await blog.remove();
  return blog;
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};