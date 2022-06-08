/**
 * Defines admin client side routes
 */
// IMPORTS

import { Router } from "express";
import * as admCtr from "../controllers/adminController";
import * as authCtr from "../controllers/authController";

// INIT ROUTER
const router = Router();

// MIDDLEWARES

// ROUTES
router.get("/", authCtr.requireAuth, admCtr.getDashboard);

// EXPORT
export default router;
