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
exports.authServices = void 0;
const sendMail_1 = require("../../utils/sendMail");
const config_1 = __importDefault(require("../../config/config"));
const user_model_1 = require("../user/user.model");
const auth_utils_1 = require("./auth.utils");
const login = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { contact, password } = loginData;
    // console.log(loginData);
    const isUserExists = yield user_model_1.UserModel.findOne({ $or: [{ email: contact }, { phone: contact }] });
    // console.log(isUserExists);
    if (!isUserExists) {
        throw new Error('Invalid Email or Phone');
    }
    const isPasswordMatched = yield user_model_1.UserModel.isPasswordMatched(password, isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.password);
    if (!isPasswordMatched) {
        throw new Error('Invalid password!!');
    }
    const jwtPayload = {
        id: isUserExists._id,
        contact,
        role: isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.role
    };
    const accessToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expiresIn);
    const refreshToken = accessToken;
    return {
        accessToken,
        refreshToken,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = (0, auth_utils_1.verifyToken)(token, config_1.default.jwt_access_secret);
    const { contact, role } = decoded;
    const isUserExists = yield user_model_1.UserModel.findOne({ $or: [{ email: contact }, { phone: contact }] });
    if (!isUserExists) {
        throw new Error('Invalid Email or Phone');
    }
    const jwtPayload = {
        id: isUserExists._id,
        contact,
        role,
    };
    const newToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expiresIn);
    return newToken;
});
const forgetPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExists = yield user_model_1.UserModel.isUserExistsByEmail(email);
    if (!isUserExists) {
        throw new Error('No user found!!');
    }
    const jwtPayload = {
        contact: isUserExists.email,
        role: isUserExists.role,
    };
    const resetToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expiresIn);
    const resetUrl = `http://localhost:5173/reset-password?email=${isUserExists.email}&token=${resetToken}`;
    const responseEmail = yield (0, sendMail_1.sendMail)(isUserExists.email, resetUrl);
    return responseEmail;
});
exports.authServices = {
    login,
    refreshToken,
    forgetPassword,
};
