const User = require("../models/user.model");

/**
 * Get user profile
 */
const getProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw { status: 404, message: "User not found." };
  }
  return user;
};

/**
 * Update user profile
 * Allowed fields: name, mobile, gender, location, bio, website, skills
 */
const updateProfile = async (userId, updateData) => {
  const allowedFields = [
    "name",
    "mobile",
    "gender",
    "location",
    "bio",
    "website",
    "skills",
  ];

  // Filter only allowed fields
  const filtered = {};
  for (const key of allowedFields) {
    if (updateData[key] !== undefined) {
      filtered[key] = updateData[key];
    }
  }

  if (Object.keys(filtered).length === 0) {
    throw { status: 400, message: "No valid fields to update." };
  }

  const user = await User.findByIdAndUpdate(userId, filtered, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw { status: 404, message: "User not found." };
  }

  return user;
};

/**
 * Change password (authenticated user)
 */
const changePassword = async (userId, { currentPassword, newPassword }) => {
  const user = await User.findById(userId).select("+password");
  if (!user) {
    throw { status: 404, message: "User not found." };
  }

  const isMatch = await user.comparePassword(currentPassword);
  if (!isMatch) {
    throw { status: 400, message: "Current password is incorrect." };
  }

  user.password = newPassword;
  await user.save();

  return { message: "Password changed successfully." };
};

module.exports = { getProfile, updateProfile, changePassword };
