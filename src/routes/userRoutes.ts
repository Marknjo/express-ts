/**
 * Defines All User API Routes
 */
/// IMPORTS

import { Request, Response, Router } from "express";
import { userInfo } from "os";

// Define body interface
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

/// INIT ROUTER
const router = Router();

///  DECLARE MIDDLEWARES

/// DEFINE ROUTES

/**
 * Protected route
 */
router.route("/login").post((req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  /// Validate
  if ((!email && !password) || (email && !email.includes("@"))) {
    res.status(422).json({
      status: "failed",
      data: {
        message:
          "User or password error. Please provide a valid email and password.",
      },
    });

    return;
  }

  /// Check user credentials
  if (email !== "marcus@example.io" || password !== "test1234") {
    res.status(400).json({
      status: "failed",
      data: {
        message:
          "User or password invalid. Please provide a valid email or password",
      },
    });

    return;
  }

  /// create a login session
  // @TODO: Create a login session

  /// Send a message of successful login
  res.status(200).json({
    status: "success",
    data: {
      message: "You have sucessfully logged in",
    },
  });
});

/// EXPORT USER API ROUTER
export default router;
