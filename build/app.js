"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = __importStar(require("process"));
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./configs/env.config");
var AppRouter_1 = __importDefault(require("./routes/AppRouter"));
require("./controllers/clientController");
require("./controllers/adminController");
require("./controllers/authController");
var app = (0, express_1.default)();
var expires = parseInt(process_1.env.SESSION_EXPIRES || "21600", 10);
var sessionKeys = process_1.env.SESSION_KEYS || "my_encrypted_keys";
app.use((0, cookie_session_1.default)({
    keys: [sessionKeys],
    sameSite: "strict",
    expires: new Date(Date.now() + 1000 * expires),
}));
app.use(express_1.default.json({ limit: "10kb" }));
app.use(express_1.default.urlencoded({
    type: "application/x-www-form-urlencoded",
    limit: "10kb",
    extended: false,
}));
var apiV = process_1.env.APP_VERSION || "1";
app.use(AppRouter_1.default.init);
var port = parseInt(process_1.env.PORT || "3000");
var host = process_1.env.HOST || "127.0.0.1";
var server = app.listen(port, host, function () {
    console.log("Server running at http://".concat(host, ":").concat(port));
});
process_1.default.on("unhandledException", function (err) {
    if (err) {
        console.log("💥💥💥 UNHANDLED EXCEPTION!");
        console.log(err);
        console.log("Shutting down server...");
        server.close(function () {
            process_1.default.exit(1);
        });
    }
});
process_1.default.on("unhandledRejection", function (err) {
    if (err) {
        console.log("💥💥💥 UNHANDLED REJECTION!");
        console.log(err);
        console.log("Shutting down server...");
        server.close(function () {
            process_1.default.exit(1);
        });
    }
});
