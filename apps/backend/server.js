require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const routes = require("./routes");

const app = express();

// ---------- Middleware ----------
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3002",
  "http://localhost:3010",
  "http://localhost:3020",
  "http://localhost:4321",
  "https://grff-mm-production.up.railway.app",
  "https://grff-dwzp1keky-ankits-projects-9297b5c9.vercel.app"
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// Health check
app.get("/", (_req, res) => {
  res.json({ success: true, message: "LETM-GRFF API is running." });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
