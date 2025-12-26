import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";

const app = express();
const port = 4000;

// Middleware
// Add your middlewares here
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extends: true }));

// Database connection
// Set up your database connection here

// Routes
app.get("/", (req, res) => {
  res.send("API Working"); // Corrected res.sent to res.send
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
