// IMPORTS

import { RequestHandler } from "express";
import { baseHtmlTemplate } from "../library/views/html-template";

// HANDLERS

// 1). MIDDLEWARES

// 2). NORMAL HANDLERS

export const getDashboard: RequestHandler = (req, res) => {
  const dashboardTemplate = `
     <p>Welcome to app dashboard</p> 
     <a href="/api/v1/users/logout" style="display: block">Logout</a>
    `;

  res.send(baseHtmlTemplate(dashboardTemplate, "Dashboard"));
};

// 3). CRUD HANDLERS
