"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.status(data.status).json({
        status: data.status,
        success: data.success,
        message: data.message,
        data: data.data
    });
};
exports.default = sendResponse;
