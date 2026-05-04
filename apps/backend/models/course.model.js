const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, default: "" },
  },
  { _id: false }
);

const courseSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    level: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: String, required: true },
    lessons: { type: Number, required: true, default: 0 },
    rating: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    image: { type: String, default: "" },
    instructor: { type: instructorSchema, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
