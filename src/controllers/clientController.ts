/// IMPORTS

import { Request, RequestHandler, Response } from "express";
import { Get } from "../library/decorators/routes";
import { baseHtmlTemplate } from "../library/views/html-template";

/// MIDDLEWARE

/// CRUD METHODS
// @TODO: Home page, login page, dashboard

/// Public handlers

/**
 * Handles Home Page of the app
 * @param req Express request object
 * @param res Express Response object
 * @returns sends response to user based on the condition
 */
export const getHomePage: RequestHandler = (req, res) => {
  const loginErrorHtmlTmp = `
    <p>You are not logged in.</p>
    <a href="/login" style="display: block">Login Now</a>
    `;

  const successLoggedInuserHtmlTmp = `
    <p>You are currently logged in.</p>
    <a href="/api/v1/users/logout" style="display: block">Logout</a>
    `;

  /// USER IS NOT LOGGED IN

  /// Show UI based on login status
  if (req.session && !req.session.isLoggedIn) {
    res.send(baseHtmlTemplate(loginErrorHtmlTmp, "Home page"));

    return;
  }

  /// There is session therefore there session options
  const sessionExpires = new Date(req.sessionOptions.expires!).getTime();

  const timeDiff = sessionExpires > Date.now();

  if (!timeDiff) {
    res.send(baseHtmlTemplate(loginErrorHtmlTmp, "Home page"));

    return;
  }

  /// USER IS LOGGED IN
  res.send(baseHtmlTemplate(successLoggedInuserHtmlTmp, "Home page"));
};

/**
 * Handles Login Page of the app
 * @param req Express request object
 * @param res Express Response object
 * @returns Renders login html form
 */
export const getLoginPage: RequestHandler = (req, res) => {
  // Check if user is logged in -> Send user to home page with message already logged in
  if (req.session && req.session.isLoginIn) {
    res.redirect("/");
    return;
  }

  // User not logged in -> Send the html template
  const loginTemplate = `
     <form 
       action="/api/v1/users/login"
       method="POST"
       style="display: flex; align-items: center; flex-flow: column nowrap; margin: 20px 40px;"
     >

        <div style="margin-bottom: 15px; display: flex; align-items: start; flex-flow: column nowrap;">
          <label for="email">Email Address</Label>
          <input type="email" name="email" id="email" required>
        </div>


        <div style="margin-bottom: 15px; display: flex; align-items: start; flex-flow: column nowrap;">
          <label for="password">Password</Label>
          <input type="password" name="password" id="password" required>
        </div>


        <div style="margin-bottom: 15px; display: block">
          <button type="submit"> Login </button>
        </div>
     </form>
  `;

  res.send(baseHtmlTemplate(loginTemplate, "Login Page"));
};

/// Admin handlers

//// CONVERT THIS CLASS TO BE A DECORATOR CLASS

class LoginController {
  /**
   * Handles Login Page of the app
   * @param req Express request object
   * @param res Express Response object
   * @returns Renders login html form
   */
  @Get("/login")
  getLoginPage(req: Request, res: Response) {
    // Check if user is logged in -> Send user to home page with message already logged in
    if (req.session && req.session.isLoginIn) {
      res.redirect("/");
      return;
    }

    // User not logged in -> Send the html template
    const loginTemplate = `
     <form 
       action="/api/v1/users/login"
       method="POST"
       style="display: flex; align-items: center; flex-flow: column nowrap; margin: 20px 40px;"
     >

        <div style="margin-bottom: 15px; display: flex; align-items: start; flex-flow: column nowrap;">
          <label for="email">Email Address</Label>
          <input type="email" name="email" id="email" required>
        </div>


        <div style="margin-bottom: 15px; display: flex; align-items: start; flex-flow: column nowrap;">
          <label for="password">Password</Label>
          <input type="password" name="password" id="password" required>
        </div>


        <div style="margin-bottom: 15px; display: block">
          <button type="submit"> Login </button>
        </div>
     </form>
  `;

    res.send(baseHtmlTemplate(loginTemplate, "Login Page"));
  }
}

export default LoginController;
