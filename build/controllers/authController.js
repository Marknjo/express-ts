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
exports.requireAuth = void 0;
var process_1 = require("process");
var decorators_1 = require("../library/decorators");
var requireAuth = function (req, res, next) {
    if (req.session && !req.session.isLoggedIn) {
        res
            .status(403)
            .send("You are not unauthorized to access this route. Please login.");
        return;
    }
    next();
};
exports.requireAuth = requireAuth;
var apiV = process_1.env.APP_VERSION || "1";
var AuthController = (function () {
    function AuthController() {
    }
    AuthController.prototype.loginUseHandler = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (!email && !password) {
            res.status(422).json({
                status: "failed",
                data: {
                    message: "Email and passoword empty. Please populate these fields with valid details.",
                },
            });
            return;
        }
        if ((email && !email.includes("@")) || (password && password.length < 6)) {
            res.status(403).json({
                status: "failed",
                data: {
                    message: "Email or passoword not in proper format. Please populate these fields with valid details.",
                },
            });
            return;
        }
        if ((email && email !== "mark@example.io") ||
            (password && password !== "test1234")) {
            res.status(403).json({
                status: "failed",
                data: {
                    message: "Email or passoword invalid. Please populate these fields with valid details.",
                },
            });
            return;
        }
        if (req.session) {
            req.session.isLoggedIn = true;
            res.redirect("/sys-admin");
            return;
        }
        res.redirect("/login");
    };
    AuthController.prototype.logoutUserHandler = function (req, res) {
        if (req.session && req.session.isLoggedIn) {
            req.session.isLoggedIn = undefined;
            res.redirect("/login");
            return;
        }
        res.redirect(req.originalUrl);
    };
    __decorate([
        (0, decorators_1.Post)("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "loginUseHandler", null);
    __decorate([
        (0, decorators_1.Get)("/logout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "logoutUserHandler", null);
    AuthController = __decorate([
        (0, decorators_1.Controller)("/api/v".concat(apiV, "/users"))
    ], AuthController);
    return AuthController;
}());
