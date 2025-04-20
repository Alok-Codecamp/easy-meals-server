"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// console.log(process.cwd());
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    app_mode: process.env.APP_MODE,
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    salt_rounds: process.env.SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expiresIn: process.env.JWT_ACCESS_EXPIRESIN,
    google_app_pass: process.env.GOOGLE_APP_PASS,
};
