/// IMPORTS

import { RequestHandler } from "express";

/// MIDDLEWARE
const htmlTemplate = (content: string) => {
  return `
      <div style="display: flex; align-items: center; flex-flow: column nowrap; ">
        <h1>Home Page</h1>
        ${content}
      </div>
    `;
};

/// CRUD METHODS
// @TODO: Home page, login page, dashboard

/// Public handlers
export const homePage: RequestHandler = (req, res) => {
  const loginErrorHtmlTmp = `
    <p>You are not logged in.</p>
    <a href="/login" style="display: block">Login Now</a>
    `;

  const successLoggedInuserHtmlTmp = `
    <p>You are currently logged in.</p>
    <a href="/logout" style="display: block">Logout</a>
    `;

  /// USER IS NOT LOGGED IN

  /// Show UI based on login status
  if (req.session && !req.session.isLoggedIn) {
    res.send(htmlTemplate(loginErrorHtmlTmp));

    return;
  }

  /// There is session therefore there session options
  const sessionExpires = new Date(req.sessionOptions.expires!).getTime();

  const timeDiff = sessionExpires > Date.now();

  if (!timeDiff) {
    res.send(htmlTemplate(loginErrorHtmlTmp));

    return;
  }

  /// USER IS LOGGED IN
  res.send(htmlTemplate(successLoggedInuserHtmlTmp));
};

/// Admin handlers
