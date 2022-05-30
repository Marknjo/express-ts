"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/login").post((req, res) => {
    const { email, password } = req.body;
    if ((!email && !password) || (email && !email.includes("@"))) {
        res.status(422).json({
            status: "failed",
            data: {
                message: "User or password error. Please provide a valid email and password.",
            },
        });
        return;
    }
    if (email !== "marcus@example.io" || password !== "test1234") {
        res.status(400).json({
            status: "failed",
            data: {
                message: "User or password invalid. Please provide a valid email or password",
            },
        });
        return;
    }
    res.status(200).json({
        status: "success",
        data: {
            message: "You have sucessfully logged in",
        },
    });
});
exports.default = router;
