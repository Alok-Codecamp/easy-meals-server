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
exports.userController = void 0;
const asyncWraper_1 = __importDefault(require("../../utils/asyncWraper"));
const user_service_1 = require("./user.service");
const http_status_1 = __importDefault(require("http-status"));
const createUser = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userServices.createUserIntoDb(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: 'user created successfully',
        data: result
    });
}));
const getAllUser = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userServices.getAllUserFromDb();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: 'users retrive successfully',
        data: result
    });
}));
const getUserById = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userServices.getUserById(req.params.userId);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: 'user retrive successfully',
        data: result
    });
}));
const updateUser = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('from update user -controler', req.body);
    const result = yield user_service_1.userServices.updateUserFromDb(req.body, req.params.userId);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: 'user updated successfully',
        data: result
    });
}));
exports.userController = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
};
