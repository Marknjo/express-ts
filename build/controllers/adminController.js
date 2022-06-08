"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
var html_template_1 = require("../library/views/html-template");
var getDashboard = function (req, res) {
    var dashboardTemplate = "\n     <p>Welcome to app dashboard</p> \n     <a href=\"/api/v1/users/logout\" style=\"display: block\">Logout</a>\n    ";
    res.send((0, html_template_1.baseHtmlTemplate)(dashboardTemplate, "Dashboard"));
};
exports.getDashboard = getDashboard;
