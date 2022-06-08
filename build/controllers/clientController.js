"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoginPage = exports.getHomePage = void 0;
const controller_1 = __importDefault(require("../library/decorators/controller"));
const routes_1 = require("../library/decorators/routes");
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
let LoginController = class LoginController {
    getLoginPage(req, res) {
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
    }
};
__decorate([
    (0, routes_1.Get)("/login"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLoginPage", null);
LoginController = __decorate([
    (0, controller_1.default)("/")
], LoginController);
exports.default = LoginController;
