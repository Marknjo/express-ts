"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const html_template_1 = require("../views/html-template");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    const dashboardTemplate = `<p>Welcome to app dashboard</p>`;
    res.send((0, html_template_1.baseHtmlTemplate)(dashboardTemplate, "Dashboard"));
});
exports.default = router;
