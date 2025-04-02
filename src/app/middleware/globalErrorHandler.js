"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const globalErrorHandler = (err, req, res, next) => {
    console.log(err);
    const statusCode = err.status || 500;
    const message = err.message || 'internal error!!';
    const errorSource = {
        path: err.path || 'no path found!',
        message: err.message || 'no message found!'
    };
    res.status(statusCode).json({
        success: false,
        message: message,
        errorSource,
        main: err,
        stack: config_1.default.app_mode === 'development' ? err.stack : null,
    });
};
exports.default = globalErrorHandler;
