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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config/config"));
const sendMail = (to, html) => __awaiter(void 0, void 0, void 0, function* () {
    // created transporter here 
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        secure: config_1.default.app_mode === 'production' ? true : false,
        auth: {
            user: 'alok61.bd@gmail.com',
            pass: `${config_1.default.google_app_pass}`, // Use the app password generated in Step 1          
        },
    });
    // send mail 
    const responseEmail = yield transporter.sendMail({
        from: 'Easy meals authentication service',
        to,
        subject: 'Easy meals reset password link ✅✅',
        text: 'This link expires in 10 minute!',
        html,
    });
    return responseEmail;
});
exports.sendMail = sendMail;
