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
var decorators_1 = require("../library/decorators");
var html_template_1 = require("../library/views/html-template");
var authController_1 = require("./authController");
var AdminController = (function () {
    function AdminController() {
    }
    AdminController.prototype.getDashboard = function (_1, res) {
        var dashboardTemplate = "\n       <p>Welcome to app dashboard</p> \n       <a href=\"/api/v1/users/logout\" style=\"display: block\">Logout</a>\n      ";
        res.send((0, html_template_1.baseHtmlTemplate)(dashboardTemplate, "Dashboard"));
    };
    __decorate([
        (0, decorators_1.Get)("/"),
        (0, decorators_1.Middlewares)(authController_1.requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AdminController.prototype, "getDashboard", null);
    AdminController = __decorate([
        (0, decorators_1.Controller)("/sys-admin")
    ], AdminController);
    return AdminController;
}());
