/**
 * Defines All User API Routes
 */
/// IMPORTS

import { Request, Response, Router } from "express";
import * as authCtr from "../controllers/authController";

// Define body interface
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

/// INIT ROUTER
const router = Router();

///  DECLARE MIDDLEWARES

/// DEFINE ROUTES

/**
 * Handle user login route
 */
router.route("/login").post(authCtr.loginUseHandler);

/**
 * Logout user
 */
router.route("/logout").get(authCtr.logoutUserHandler);

/// EXPORT USER API ROUTER
export default router;
