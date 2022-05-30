"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/login").get((req, res) => {
    res.send("login page");
});
router.route("/").get((req, res) => {
    res.send("user login Page");
});
exports.default = router;
