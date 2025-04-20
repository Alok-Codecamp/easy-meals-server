"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const loginValidationSchema = zod_1.default.object({
    contact: zod_1.default.string({ message: 'Email or Phone is required!!' }),
    password: zod_1.default.string({ message: 'Password is required!' })
});
exports.authValidations = { loginValidationSchema };
