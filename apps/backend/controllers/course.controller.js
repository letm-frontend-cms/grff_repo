const Course = require("../models/course.model");
const UserCourseProgress = require("../models/userCourseProgress.model");
const { sendResponse } = require("../utils/response.util");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).lean();

    if (!req.user) {
      const result = courses.map((c) => ({ ...c, userStatus: null }));
      return sendResponse(res, 200, true, "Courses fetched successfully.", result);
    }

    const progress = await UserCourseProgress.find({ userId: req.user._id }).lean();
    const progressMap = {};
    for (const p of progress) {
      progressMap[p.courseId.toString()] = p.status;
    }

    const result = courses.map((c) => ({
      ...c,
      userStatus: progressMap[c._id.toString()] || null,
    }));

    return sendResponse(res, 200, true, "Courses fetched successfully.", result);
  } catch (error) {
    return sendResponse(res, 500, false, error.message || "Failed to fetch courses.");
  }
};

const startCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    const courseId = req.params.id;

    const course = await Course.findById(courseId);
    if (!course) {
      return sendResponse(res, 404, false, "Course not found.");
    }

    const existing = await UserCourseProgress.findOne({ userId, courseId });

    if (existing?.status === "completed") {
      return sendResponse(res, 400, false, "Course already completed.");
    }

    if (existing?.status === "in-progress") {
      return sendResponse(res, 400, false, "Course already in progress.");
    }

    await UserCourseProgress.create({
      userId,
      courseId,
      status: "in-progress",
      startedAt: new Date(),
    });

    return sendResponse(res, 200, true, "Course started.", {
      courseId,
      status: "in-progress",
    });
  } catch (error) {
    return sendResponse(res, 500, false, error.message || "Failed to start course.");
  }
};

const completeCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    const courseId = req.params.id;

    const course = await Course.findById(courseId);
    if (!course) {
      return sendResponse(res, 404, false, "Course not found.");
    }

    const progress = await UserCourseProgress.findOne({ userId, courseId });

    if (!progress) {
      return sendResponse(res, 400, false, "Course not started yet.");
    }

    if (progress.status === "completed") {
      return sendResponse(res, 400, false, "Course already completed.");
    }

    progress.status = "completed";
    progress.completedAt = new Date();
    await progress.save();

    return sendResponse(res, 200, true, "Course completed.", {
      courseId,
      status: "completed",
    });
  } catch (error) {
    return sendResponse(res, 500, false, error.message || "Failed to complete course.");
  }
};

const getUserCourses = async (req, res) => {
  try {
    const userId = req.user._id;

    const progress = await UserCourseProgress.find({ userId })
      .populate("courseId")
      .lean();

    const inProgress = [];
    const completed = [];

    for (const p of progress) {
      if (!p.courseId) continue;
      if (p.status === "in-progress") inProgress.push(p.courseId);
      else if (p.status === "completed") completed.push(p.courseId);
    }

    return sendResponse(res, 200, true, "User courses fetched.", {
      inProgress,
      completed,
    });
  } catch (error) {
    return sendResponse(res, 500, false, error.message || "Failed to fetch user courses.");
  }
};

module.exports = { getCourses, startCourse, completeCourse, getUserCourses };
