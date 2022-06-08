"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
const html_template_1 = require("../library/views/html-template");
const getDashboard = (req, res) => {
    const dashboardTemplate = `
     <p>Welcome to app dashboard</p> 
     <a href="/api/v1/users/logout" style="display: block">Logout</a>
    `;
    res.send((0, html_template_1.baseHtmlTemplate)(dashboardTemplate, "Dashboard"));
};
exports.getDashboard = getDashboard;
