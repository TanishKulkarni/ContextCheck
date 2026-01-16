import "./bootstrap.js"; // 🔥 MUST be first import

import express from "express";
import cors from "cors";
import analyzeRoute from "./routes/analyze.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

// Routes
app.use("/api", analyzeRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
