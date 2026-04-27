const userService = require("../services/user.service");
const { sendResponse } = require("../utils/response.util");

/**
 * GET /api/user/profile
 */
const getProfile = async (req, res) => {
  try {
    const user = await userService.getProfile(req.user._id);
    return sendResponse(res, 200, true, "Profile fetched successfully.", { user });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(res, status, false, error.message || "Failed to fetch profile.");
  }
};

/**
 * PUT /api/user/profile
 */
const updateProfile = async (req, res) => {
  try {
    const user = await userService.updateProfile(req.user._id, req.body);
    return sendResponse(res, 200, true, "Profile updated successfully.", { user });
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(
      res,
      status,
      false,
      error.message || "Failed to update profile."
    );
  }
};

/**
 * PUT /api/user/change-password
 */
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const result = await userService.changePassword(req.user._id, {
      currentPassword,
      newPassword,
    });
    return sendResponse(res, 200, true, result.message);
  } catch (error) {
    const status = error.status || 500;
    return sendResponse(
      res,
      status,
      false,
      error.message || "Failed to change password."
    );
  }
};

module.exports = { getProfile, updateProfile, changePassword };
