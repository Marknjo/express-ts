/**
 * Defines Public client Routes
 */

/// imports
import express from "express";

import * as clientCtr from "../controllers/clientController";

/// INIT ROUTER
const router = express.Router();

/// DEFINE ROUTES
// @TODO: Add Home page route, login page route, protected route, logout feature

/**
 * Login Page Route
 */
router.route("/login").get((req, res) => {
  res.send("login page");
});

/**
 * Home Page Route
 */
router.route("/").get(clientCtr.homePage);

/// EXPORT ROUTES
export default router;
