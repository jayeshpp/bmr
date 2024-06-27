// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";

import connectDB from "./config/db";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();

declare module "express-session" {
  interface SessionData {
    user: { [key: string]: any };
  }
}

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow cookies to be sent
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    },
  })
);

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start the server:", error.message);
  });
