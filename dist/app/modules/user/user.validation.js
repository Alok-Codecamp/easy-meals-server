"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const registerUserValidationSchema = zod_1.default.object({
    name: zod_1.default.string({ message: 'User name is required!' }),
    email: zod_1.default.string({ message: 'User email is required!' }).email({ message: "Email isn't valied" }),
    phone: zod_1.default.string().optional(),
    password: zod_1.default.string({ message: 'User password is required!' }),
    shippingAddress: zod_1.default.string().optional()
});
const updateUserValidationSchema = zod_1.default.object({
    name: zod_1.default.string().optional(),
    email: zod_1.default.string().optional(),
    phone: zod_1.default.string().optional(),
    password: zod_1.default.string().optional(),
    shippingAddress: zod_1.default.string().optional()
});
exports.userValidation = {
    registerUserValidationSchema,
    updateUserValidationSchema,
};
