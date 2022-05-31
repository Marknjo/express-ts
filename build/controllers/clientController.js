"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoginPage = exports.getHomePage = void 0;
const htmlTemplate = (content, title) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>App ${title ? "| " + title : ""}</title>
      </head>
        <body>
          <div style="display: flex; align-items: center; flex-flow: column nowrap; ">
            ${title ? "<h1>" + title + "</h1>" : ""}
            ${content}
          </div>
        </body>
      </html>
    `;
};
const getHomePage = (req, res) => {
    const loginErrorHtmlTmp = `
    <p>You are not logged in.</p>
    <a href="/login" style="display: block">Login Now</a>
    `;
    const successLoggedInuserHtmlTmp = `
    <p>You are currently logged in.</p>
    <a href="/logout" style="display: block">Logout</a>
    `;
    if (req.session && !req.session.isLoggedIn) {
        res.send(htmlTemplate(loginErrorHtmlTmp, "Home page"));
        return;
    }
    const sessionExpires = new Date(req.sessionOptions.expires).getTime();
    const timeDiff = sessionExpires > Date.now();
    if (!timeDiff) {
        res.send(htmlTemplate(loginErrorHtmlTmp, "Home page"));
        return;
    }
    res.send(htmlTemplate(successLoggedInuserHtmlTmp, "Home page"));
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
    res.send(htmlTemplate(loginTemplate, "Login Page"));
};
exports.getLoginPage = getLoginPage;
