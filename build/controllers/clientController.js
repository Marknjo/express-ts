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
Object.defineProperty(exports, "__esModule", { value: true });
var html_template_1 = require("../library/views/html-template");
var decorators_1 = require("../library/decorators");
var clientRoutes_1 = require("../routes/clientRoutes");
var ClientController = (function () {
    function ClientController() {
    }
    ClientController.prototype.getLoginPage = function (req, res) {
        if (req.session && req.session.isLoginIn) {
            res.redirect("/");
            return;
        }
        var loginTemplate = "\n     <form \n       action=\"/api/v1/users/login\"\n       method=\"POST\"\n       style=\"display: flex; align-items: center; flex-flow: column nowrap; margin: 20px 40px;\"\n     >\n\n        <div style=\"margin-bottom: 15px; display: flex; align-items: start; flex-flow: column nowrap;\">\n          <label for=\"email\">Email Address</Label>\n          <input type=\"email\" name=\"email\" id=\"email\" required>\n        </div>\n\n\n        <div style=\"margin-bottom: 15px; display: flex; align-items: start; flex-flow: column nowrap;\">\n          <label for=\"password\">Password</Label>\n          <input type=\"password\" name=\"password\" id=\"password\" required>\n        </div>\n\n\n        <div style=\"margin-bottom: 15px; display: block\">\n          <button type=\"submit\"> Login </button>\n        </div>\n     </form>\n  ";
        res.send((0, html_template_1.baseHtmlTemplate)(loginTemplate, "Login Page"));
    };
    ClientController.prototype.getHomePage = function (req, res) {
        var loginErrorHtmlTmp = "\n    <p>You are not logged in.</p>\n    <a href=\"/login\" style=\"display: block\">Login Now</a>\n    ";
        var successLoggedInuserHtmlTmp = "\n    <p>You are currently logged in.</p>\n    <a href=\"/sys-admin\" style=\"display: block; margin-bottom: 20px\">Dashboard</a>\n    <a href=\"/api/v1/users/logout\" style=\"display: block\">Logout</a>\n    ";
        if (req.session && !req.session.isLoggedIn) {
            res.send((0, html_template_1.baseHtmlTemplate)(loginErrorHtmlTmp, "Home page"));
            return;
        }
        var sessionExpires = new Date(req.sessionOptions.expires).getTime();
        var timeDiff = sessionExpires > Date.now();
        if (!timeDiff) {
            res.send((0, html_template_1.baseHtmlTemplate)(loginErrorHtmlTmp, "Home page"));
            return;
        }
        res.send((0, html_template_1.baseHtmlTemplate)(successLoggedInuserHtmlTmp, "Home page"));
    };
    __decorate([
        (0, decorators_1.Get)("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ClientController.prototype, "getLoginPage", null);
    __decorate([
        (0, decorators_1.Get)("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ClientController.prototype, "getHomePage", null);
    ClientController = __decorate([
        (0, decorators_1.Controller)(clientRoutes_1.clientRouter),
        __metadata("design:paramtypes", [])
    ], ClientController);
    return ClientController;
}());
