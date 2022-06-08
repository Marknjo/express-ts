"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoginPage = exports.getHomePage = void 0;
const html_template_1 = require("../library/views/html-template");
const getHomePage = (req, res) => {
    const loginErrorHtmlTmp = `
    <p>You are not logged in.</p>
    <a href="/login" style="display: block">Login Now</a>
    `;
    const successLoggedInuserHtmlTmp = `
    <p>You are currently logged in.</p>
    <a href="/api/v1/users/logout" style="display: block">Logout</a>
    `;
    if (req.session && !req.session.isLoggedIn) {
        res.send((0, html_template_1.baseHtmlTemplate)(loginErrorHtmlTmp, "Home page"));
        return;
    }
    const sessionExpires = new Date(req.sessionOptions.expires).getTime();
    const timeDiff = sessionExpires > Date.now();
    if (!timeDiff) {
        res.send((0, html_template_1.baseHtmlTemplate)(loginErrorHtmlTmp, "Home page"));
        return;
    }
    res.send((0, html_template_1.baseHtmlTemplate)(successLoggedInuserHtmlTmp, "Home page"));
};
exports.getHomePage = getHomePage;
const getLoginPage = (req, res) => {
    if (req.session && req.session.isLoginIn) {
        res.redirect("/");
        return;
    }
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
    res.send((0, html_template_1.baseHtmlTemplate)(loginTemplate, "Login Page"));
};
exports.getLoginPage = getLoginPage;
