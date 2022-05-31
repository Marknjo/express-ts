/// IMPORTS

import { RequestHandler } from "express";

/// HELPERS
// interface RequestWithBody extends Request {
//     body: { [key: string]: string | undefined };
//   }

/// MIDDLEWARES

/// SPECIALIZED METHODS
// @TODO: add loginHandler, authRequired middleware handlers

/**
 * Handles Login form of the app
 *
 * Stamp user as a valid logged in user
 *
 * @param req Express request object
 * @param res Express Response object
 * @returns Sends user to a protected route
 */
export const loginUseHandler: RequestHandler = (req, res) => {
  /// Get user Credentials
  const { email, password } = req.body as { email: string; password: string };

  /// Validate user credentials @TODO: Add a middleware to handle validations instead
  if (!email && !password) {
    res.status(422).json({
      status: "failed",
      data: {
        message:
          "Email and passoword empty. Please populate these fields with valid details.",
      },
    });

    return;
  }

  /// Simulate validations for valid email and password (email must incude @ and password must be above 6 characters)
  if ((email && !email.includes("@")) || (password && password.length < 6)) {
    res.status(403).json({
      status: "failed",
      data: {
        message:
          "Email or passoword not in proper format. Please populate these fields with valid details.",
      },
    });

    return;
  }

  /// Simulate Database validation -> Fake @could add async with promisify, but Not need for these demo
  if (
    (email && email !== "mark@example.io") ||
    (password && password !== "test1234")
  ) {
    res.status(403).json({
      status: "failed",
      data: {
        message:
          "Email or passoword invalid. Please populate these fields with valid details.",
      },
    });

    return;
  }

  /// Valid user goes to the protected route -> By stamping session.isLoggedIn
  if (req.session) {
    req.session.isLoggedIn = true;
    res.redirect("/sys-admin/protected");
    return;
  }

  /// Something is wrong with the session object
  res.redirect("/login");
};

/**
 * Handles user logout action
 *
 * Stamp user as a valid logged in user
 *
 * @param req Express request object
 * @param res Express Response object
 * @returns Sends user to the login page
 */
export const logoutUserHandler: RequestHandler = (req, res) => {
  ///
  if (req.session && req.session.isLoggedIn) {
    req.session.isLoggedIn = undefined;
    res.redirect("/login");
    return;
  }

  /// Something is wrong with the session object
  res.redirect(req.originalUrl);
};

/// CRUD HNDLERS
