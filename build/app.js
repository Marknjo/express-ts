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
const process_1 = __importStar(require("process"));
const express_1 = __importDefault(require("express"));
const publicRoutes_1 = __importDefault(require("./routes/publicRoutes"));
const app = (0, express_1.default)();
app.use("/", publicRoutes_1.default);
app.use("/sys-admin", publicRoutes_1.default);
const port = parseInt(process_1.env.PORT ? process_1.env.PORT : "") || 3000;
const host = process_1.env.HOST || "127.0.0.1";
const server = app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
process_1.default.on("unhandledException", (err) => {
    if (err) {
        console.log("💥💥💥 UNHANDLED EXCEPTION!");
        console.log(err);
        console.log("Shutting down server...");
        server.close(() => {
            process_1.default.exit(1);
        });
    }
});
process_1.default.on("unhandledRejection", (err) => {
    if (err) {
        console.log("💥💥💥 UNHANDLED REJECTION!");
        console.log(err);
        console.log("Shutting down server...");
        server.close(() => {
            process_1.default.exit(1);
        });
    }
});
