// IMPORTS

import { Request, Response } from "express";
import { Controller, Get, Middlewares } from "../library/decorators";
import { baseHtmlTemplate } from "../library/views/html-template";
import { requireAuth } from "./authController";

// HANDLERS

// 1). MIDDLEWARES

// 2). NORMAL HANDLERS

// 3). CRUD HANDLERS

@Controller("/sys-admin")
class AdminController {
  /**
   * Handles Admin dashboard page
   * @param _1 Express request object
   * @param res Express Response object
   * @returns Renders login html form
   */
  @Get("/")
  @Middlewares(requireAuth)
  getDashboard(_1: Request, res: Response) {
    const dashboardTemplate = `
       <p>Welcome to app dashboard</p> 
       <a href="/api/v1/users/logout" style="display: block">Logout</a>
      `;

    res.send(baseHtmlTemplate(dashboardTemplate, "Dashboard"));
  }
}
