"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
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
            <h1>Home Page</h1>
            ${content}
          </div>
        </body>
      </html>
    `;
};
const homePage = (req, res) => {
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
exports.homePage = homePage;
