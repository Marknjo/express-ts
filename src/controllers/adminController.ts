// IMPORTS

import { Request, Response } from "express";
import { Controller, Get, Middlewares } from "../library/decorators";
import { baseHtmlTemplate } from "../library/views/html-template";
import { adminRouter } from "../routes/adminRoutes";
import { requireAuth } from "./authController";

// HANDLERS

// 1). MIDDLEWARES

// 2). NORMAL HANDLERS

// 3). CRUD HANDLERS

@Controller(adminRouter)
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
       <a href="/" style="display: block; margin-bottom: 20px">Home Page</a>
       <a href="/api/v1/users/logout" style="display: block">Logout</a>
      `;

    res.send(baseHtmlTemplate(dashboardTemplate, "Dashboard"));
  }

  /**
   * Tests merge params
   *
   * Test route /not-found/sys-admin/errors
   *
   * @param req Express request object
   * @param res Express Response object
   * @returns Renders login html form
   */
  @Get("/errors")
  getErrorPage(req: Request, res: Response) {
    const errorHtmlTmp = `
    <p>This is error page.</p>
    <p>${req.params.errorId}</p>
    <a href="/" style="display: block; margin-bottom: 20px">Home Page</a>
    <a href="/sys-admin" style="display: block">Dashboard</a>
    `;

    /// USER IS LOGGED IN
    res.send(baseHtmlTemplate(errorHtmlTmp, "Error page"));
  }
}
