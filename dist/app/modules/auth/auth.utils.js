"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config/config"));
const createToken = (payload, jwt_secret, jwt_expiresIn) => {
    const option = {
        expiresIn: jwt_expiresIn
    };
    return jsonwebtoken_1.default.sign(payload, config_1.default.jwt_access_secret, option);
};
exports.createToken = createToken;
const verifyToken = (jwt_token, jwt_secret) => {
    return jsonwebtoken_1.default.verify(jwt_token, jwt_secret);
};
exports.verifyToken = verifyToken;
