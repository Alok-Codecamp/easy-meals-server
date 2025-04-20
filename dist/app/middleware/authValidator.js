"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const asyncWraper_1 = __importDefault(require("../utils/asyncWraper"));
const authValidator = (...requiredRoles) => {
    return (0, asyncWraper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        // check if the token is valied
        if (!token) {
            throw new Error('Unauthorized user!');
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
        if (!decoded) {
            throw new Error('Your login session expired! please login!');
        }
        const { contact, role, id } = decoded;
        console.log(decoded);
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new Error(`OH! You are not ${requiredRoles.join(', ')}`);
        }
        // assign user property inside request 
        req.user = { role, id, contact };
        next();
    }));
};
exports.authValidator = authValidator;
