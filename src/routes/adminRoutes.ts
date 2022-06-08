/**
 * Defines admin client side routes
 */
// IMPORTS

import { Router } from "express";
import { appendFile } from "fs";
import { baseHtmlTemplate } from "../views/html-template";

// INIT ROUTER
const router = Router();

// MIDDLEWARES

// ROUTES
router.get("/", (req, res) => {
  const dashboardTemplate = `<p>Welcome to app dashboard</p>`;

  res.send(baseHtmlTemplate(dashboardTemplate, "Dashboard"));
});

// EXPORT
export default router;
