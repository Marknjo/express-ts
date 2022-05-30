/**
 * Defines admin client side routes
 */
// IMPORTS

import { Router } from "express";
import { appendFile } from "fs";

// INIT ROUTER
const router = Router();

// MIDDLEWARES

// ROUTES
router.get("/", (req, res) => {
  res.send("Welcome to dashboard");
});

// EXPORT
export default router;
