/// IMPRTS
// Global
import process, { env } from "process";

// 3rd Party
import express from "express";
import cookSession from "cookie-session";

// local imports
import "./configs/env.config";

import AppRouter from "./routes/AppRouter";

/// Controllers
import "./controllers/clientController";
import "./controllers/adminController";
import "./controllers/authController";

// import adminRouter from "./routes/adminRoutes"; // admin client routes

// INIT APP
const app = express();

/// APP CONFIGS

/// MIDDLEWARES
// Configure cookie session
const expires = parseInt(env.SESSION_EXPIRES || "21600", 10);
const sessionKeys = env.SESSION_KEYS || "my_encrypted_keys";

app.use(
  cookSession({
    keys: [sessionKeys],
    sameSite: "strict",
    expires: new Date(Date.now() + 1000 * expires),
  })
);

// Handle Json body
app.use(express.json({ limit: "10kb" }));

/// Handle income url encoded content
app.use(
  express.urlencoded({
    type: "application/x-www-form-urlencoded",
    limit: "10kb",
    extended: false,
  })
);

/// ROUTES
// API
const apiV = env.APP_VERSION || "1";

//app.use(`/api/v${apiV}/users`, userRouter);

// Client Side
// app.use("/sys-admin", adminRouter);
app.use(AppRouter.init);

/// START SERVER
const port = parseInt(env.PORT || "3000");
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
