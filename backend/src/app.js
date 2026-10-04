import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cardRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Élan Heels API is running",
  });
});

app.use("/api/auth",authRoutes);
app.use("/api/cart", cartRoutes);

export default app;