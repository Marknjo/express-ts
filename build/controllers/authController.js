"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUserHandler = exports.loginUseHandler = void 0;
const loginUseHandler = (req, res) => {
    const { email, password } = req.body;
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
        res.redirect("/sys-admin/protected");
        return;
    }
    res.redirect("/login");
};
exports.loginUseHandler = loginUseHandler;
const logoutUserHandler = (req, res) => {
    if (req.session && req.session.isLoggedIn) {
        req.session.isLoggedIn = undefined;
        res.redirect("/login");
        return;
    }
    res.redirect(req.originalUrl);
};
exports.logoutUserHandler = logoutUserHandler;
