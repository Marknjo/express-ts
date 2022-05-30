/// IMPRTS
// Global
import process, { env } from "process";

// 3rd Party
import express, { Request, Response } from "express";

// local imports
import userRouter from "./routes/userRoutes"; // user api routes

import publicRouter from "./routes/publicRoutes"; // Public client routes
import adminRouter from "./routes/adminRoutes"; // admin client routes

// INIT APP
const app = express();

/// APP CONFIGS

/// MIDDLEWARES

// Handle Json body
app.use(express.json({ limit: "10kb" }));

/// ROUTES
// API
const apiV = env.APP_VERSION || "1";

app.use(`/api/${apiV}/user`, userRouter);

// Client Side
app.use("/", publicRouter);
app.use("/sys-admin", adminRouter);

/// START SERVER
const port = parseInt(env.PORT ? env.PORT : "") || 3000;
const host = env.HOST || "127.0.0.1";

const server = app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

/// ERROR HANDLING

process.on("unhandledException", (err) => {
  if (err) {
    console.log("💥💥💥 UNHANDLED EXCEPTION!");
    console.log(err);
    console.log("Shutting down server...");

    server.close(() => {
      process.exit(1);
    });
  }
});

process.on("unhandledRejection", (err) => {
  if (err) {
    console.log("💥💥💥 UNHANDLED REJECTION!");
    console.log(err);
    console.log("Shutting down server...");

    server.close(() => {
      process.exit(1);
    });
  }
});
