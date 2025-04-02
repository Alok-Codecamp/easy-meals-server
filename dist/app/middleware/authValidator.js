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
const config_1 = __importDefault(require("../config/config"));
const auth_utils_1 = require("../modules/auth/auth.utils");
const user_model_1 = require("../modules/user/user.model");
const asyncWraper_1 = __importDefault(require("../utils/asyncWraper"));
const authValidator = (...requiredRoles) => {
    return (0, asyncWraper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        // Check if the token is missing
        if (!token) {
            throw new Error('Unauthorized user!');
        }
        const decoded = (0, auth_utils_1.verifyToken)(token, config_1.default.jwt_access_secret);
        const { contact, role, iat } = decoded;
        const isUserExists = yield user_model_1.UserModel.findOne({ $or: [{ email: contact }, { phone: contact }] });
        //check if the user is missing
        if (!isUserExists) {
            throw new Error('User not found!');
        }
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new Error(`you are unauthorized!`);
        }
        console.log('auth pass');
        req.user = decoded;
        console.log(req.user);
        next();
    }));
};
exports.authValidator = authValidator;
