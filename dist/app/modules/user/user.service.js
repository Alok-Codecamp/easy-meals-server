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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const user_model_1 = require("./user.model");
const createUserIntoDb = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield user_model_1.UserModel.isUserExistsByEmail(userData.email);
    if (isUserExist) {
        throw new Error('You are registerd. Please Login!');
    }
    const result = yield user_model_1.UserModel.create(userData);
    if (!result) {
        throw new Error('Ragistration faild!');
    }
    return result;
});
const getAllUserFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find();
    if (!result) {
        throw new Error('No user found!');
    }
    return result;
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findById(id);
    if (!result) {
        throw new Error('No user found!');
    }
    return result;
});
const updateUserFromDb = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield user_model_1.UserModel.findById(id);
    if (!isUserExist) {
        throw new Error('This user does not exists!!');
    }
    const result = yield user_model_1.UserModel.findByIdAndUpdate(id, payload);
    if (!result) {
        throw new Error('Faild to update!');
    }
    return result;
});
exports.userServices = {
    createUserIntoDb,
    getAllUserFromDb,
    getUserById,
    updateUserFromDb,
};
