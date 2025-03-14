"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
console.log(path_1.default);
dotenv_1.default.config();
exports.default = {
    app_mode: process.env.APP_MODE,
    port: process.env.PORT,
};
