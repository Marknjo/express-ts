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
 * Protected route
 */
router.route("/login").post(authCtr.loginUseHandler);

/// EXPORT USER API ROUTER
export default router;
