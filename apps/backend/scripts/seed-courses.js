require("dotenv").config();
const mongoose = require("mongoose");
const Course = require("../models/course.model");
const coursesData = require("../data/courses.seed");

async function seed() {
  console.log("\n--- Seeding Courses ---\n");

  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI not set in .env");
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  let created = 0;
  let skipped = 0;

  for (const data of coursesData) {
    const existing = await Course.findOne({ slug: data.slug });
    if (existing) {
      console.log(`  Skipping "${data.title}" (already exists)`);
      skipped++;
      continue;
    }
    await Course.create(data);
    console.log(`  Created "${data.title}"`);
    created++;
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}\n`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
